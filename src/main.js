// core-js@3 does not polyfill Object.assign in some situation
// so we have to import manually
// https://github.com/zloirock/core-js/issues/639
import 'core-js/features/object/assign'

import React from 'react';
import ReactDom from 'react-dom';

import fonts from 'common/fonts/index.js';
import './main.less';
import App from './app';

const appContainer = document.getElementById('app-container');
ReactDom.render( <App/>,  appContainer)

import webpackSetupCheck from './setup-check/webpack-setup-check.js'


