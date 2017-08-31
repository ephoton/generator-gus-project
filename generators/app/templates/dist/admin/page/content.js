"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const history_1 = require("history");
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'test-size'
        };
    }
    handleDateChange(e) {
        console.log('handle bandleChange: ', e);
    }
    handleBtnClick(event) {
        console.log('btn click.');
        this.setState({
            size: 'click'
        });
    }
    render() {
        const { title } = this.props;
        const { size } = this.state;
        const history = process.env.browser === 'app-server' ? history_1.createMemoryHistory() : history_1.createBrowserHistory();
        console.log(`Progress env: ${JSON.stringify(process.env)} _______\n ${JSON.stringify(process.env.browser)}`);
        return (React.createElement(react_router_dom_1.Router, { history: history },
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("h1", null,
                        "title - :",
                        title),
                    React.createElement("p", null,
                        "size: ",
                        size),
                    React.createElement(antd_1.Button, { onClick: this.handleBtnClick.bind(this) }, "\u641C\u7D22"),
                    React.createElement(antd_1.DatePicker, { onChange: this.handleDateChange.bind(this) })),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: '/' }, "Home")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: '/about' }, "About"))),
                React.createElement("hr", null),
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: Home }),
                React.createElement(react_router_dom_1.Route, { path: '/about', component: About }))));
    }
}
exports.Content = Content;
const Home = () => (React.createElement("div", null,
    React.createElement("h2", null, "Home")));
const About = () => (React.createElement("div", null,
    React.createElement("h2", null, "About")));
//# sourceMappingURL=content.js.map