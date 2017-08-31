"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const unescapeHtml = require('unescape-html');
const Home = require('./page');
function init() {
    const container = document.getElementById('content');
    let data = unescapeHtml(window.__data__);
    data = JSON.parse(data);
    ReactDom.render(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Home, { data: data })), container);
}
init();
//# sourceMappingURL=index.js.map