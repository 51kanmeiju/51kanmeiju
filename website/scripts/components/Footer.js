import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="items">
          <li><Link to="/about/me">关于</Link></li>
          <li><Link to="/about/upgrade">网站升级日志</Link></li>
          <li><Link to="/about/duty">免责声明</Link></li>
        </ul>
        <p className="copyright" dangerouslySetInnerHTML={{__html: 'Copyright &#169;51kaimeiju.com <a href="mailto:jzimushuang@gmail.com">联系我</a>'}} />
      </div>
    );
  }
}

export default Footer;