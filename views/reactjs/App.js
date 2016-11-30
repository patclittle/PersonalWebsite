var React = require('react');
var ReactDOM = require('react-dom');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var MyAwesomeReactComponent = require('./MyAwesomeReactComponent');

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);