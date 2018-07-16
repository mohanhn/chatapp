const React = require('react')
const ReactDOM = require('react-dom')
const styles = require('./index.styl')
import ChatContainer from './components/ChatContainer'


ReactDOM.render(
  <ChatContainer />,
  document.getElementById('app')
);
