#!/usr/bin/env bash

PWD=`pwd`
DIST_DIR=${PWD}/server.dist
SERVER_FILE=server.js
SCRIPTS_DIR=${PWD}/website/scripts
BABEL=${PWD}/node_modules/.bin/babel

if [[ ! -d $DIST_DIR ]]; then
  mkdir -p $DIST_DIR
fi

cp -rf $SERVER_FILE $SCRIPTS_DIR

# 清理
rm -rf $DIST_DIR/*
$BABEL $SCRIPTS_DIR -d $DIST_DIR

OLD_SERVER_FILE=$DIST_DIR/${SERVER_FILE}.old
REPLACED_SERVER_FILE=${OLD_SERVER_FILE}back
mv $DIST_DIR/$SERVER_FILE $OLD_SERVER_FILE
sed -i 's/\/website\/scripts//g' $OLD_SERVER_FILE
mv $OLD_SERVER_FILE $DIST_DIR/$SERVER_FILE