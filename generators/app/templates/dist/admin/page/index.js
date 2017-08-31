"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const content_1 = require("./content");
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'test-size'
        };
    }
    test() {
        console.log('test click');
    }
    render() {
        const { data } = this.props;
        console.log('t-data: ', data);
        return (React.createElement("div", null,
            React.createElement("p", null,
                "name: ",
                data.name),
            React.createElement(content_1.Content, { title: data.userId })));
    }
}
exports.Home = Home;
module.exports = Home;
//# sourceMappingURL=index.js.map