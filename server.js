"use strict";

import React from 'react';
import express from 'express';
import {match, RouterContext, useRouterHistory, browserHistory, Router} from 'react-router';
import {renderToString} from 'react-dom/server';
import {routes} from './website/scripts/containers/RouterContainer';
import {Provider} from 'react-redux';
import appStore from './website/scripts/store/appStore';
import { createMemoryHistory, useQueries } from 'history';
import Helmet from 'react-helmet';
import mysql from 'mysql';
import sm from 'sitemap';

// 初始化mysql
let connection = initDb();
function initDb() {
  let connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
  });

  connection.connect();
  return connection;
}

let app = express();
let store = appStore();

function renderFullPage(html, preloadState, params) {
  const {header} = params;
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          ${header.title.toString()}
          ${header.meta.toString()}
          <link rel="stylesheet" href="/public/styles/main.css">
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
          <script type="text/javascript" src="/public/scripts/vendor.js"></script>
          <script type="text/javascript">
            var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1261215099'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1261215099' type='text/javascript'%3E%3C/script%3E"));
          </script>
          <script>
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?87b6b4485c5d75eec5b8d5f1a87934bc";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          </script>
          <script>
          (function(){
              var bp = document.createElement('script');
              var curProtocol = window.location.protocol.split(':')[0];
              if (curProtocol === 'https') {
                  bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
              }
              else {
                  bp.src = 'http://push.zhanzhang.baidu.com/push.js';
              }
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(bp, s);
          })();
          </script>
      </head>
      <body>
          <div id="root">${html}</div>
          <script type="text/javascript">window.__PRELOADED_STATE__ = ${JSON.stringify({})}</script>
          <script type="text/javascript" src="/public/scripts/main.bundle.js"></script>
      </body>
      </html>
  `;
};

app.use((req, res, next) => {
  if (req.url == '/sitemap.xml') {
    let urls = [];
    // 电影详情
    connection.query(`select * from t_meiju `, (err, results) => {
      for(let result of results) {
        urls.push({
          url: '/move/' + result.Fid,
          changefreq: 'monthly',
          priority: 0.7
        });
      }

      // 分类
      connection.query(`select * from t_category`, (err, results) => {
        for (let result of results) {
          urls.push({
            url: '/views/category/' + result.Fid,
            changefreq: 'daily',
            priority: .3
          });
        }

        //年份
        connection.query(`select Ffrom_year from t_meiju group by Ffrom_year`, (err, results) => {
          for (let result of results) {
            urls.push({
              url: 'views/year/' + result.Ffrom_year,
              changefreq: 'daily',
              priority: .3
            });
          }

          // 导航
          urls.push({
            url: '/',
            changefreq: 'daily',
            priority: .9
          });
          urls.push({
            url: '/views/hot',
            changefreq: 'daily',
            priority: .9
          });
          urls.push({
            url: '/views/newest',
            changefreq: 'daily',
            priority: .9
          });

          let sitemap = sm.createSitemap({
            hostname: 'http://51kanmeiju.com',
            cacheTime: 600000, // 600 seconds,
            urls: urls
          });
          sitemap.toXML( (err, xml) => {
            if (err) {
              return res.status(500).end();
            } else {
              res.header('Content-Type': 'application/xml');
              res.send(xml);
            }
          } );
        });
      });
    });
    return ;
  }
  let router = <Router history={browserHistory} routes={routes}/>;
  match({routes, location: req.url}, (err, redirectLocation, renderProps) => {

    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation){
      console.log('redirect');
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      const state = store.getState();
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      );

      let com = renderProps.components[renderProps.components.length -1].WrappedComponent;
      let {params, query} = renderProps;
      
      if (typeof com.initData != 'undefined' ) {
        com.initData({store, query, params}).then(() => {
          const preloadState = store.getState();
          res.status(200).send(renderFullPage(html, preloadState, {header: Helmet.rewind()}));
        });
      } else {
        const preloadState = store.getState();
        res.status(200).send(renderFullPage(html, preloadState, {header: Helmet.rewind()}));
      }
      
    }
    else {
       res.status(404).send('Not found')
    }
  });
});

app.listen(8586, () => {
  console.log("Server listen on :8586");
});
