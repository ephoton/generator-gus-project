"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.handleSizeChange = (e) => {
            this.setState({ size: e.target.value });
        };
        this.state = {
            size: 'test-size'
        };
    }
    render() {
        const { title } = this.props;
        return (React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("title", null, title),
                React.createElement("link", { rel: 'stylesheet', href: 'antd/dist/antd.css' }),
                React.createElement("link", { rel: 'stylesheet', href: '/css/desktop.css' })),
            React.createElement("body", null,
                this.props.children,
                React.createElement("script", { src: 'bundle.js' }))));
    }
}
exports.default = Layout;
module.exports = Layout;
//# sourceMappingURL=index.js.map