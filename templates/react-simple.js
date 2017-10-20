// ---------------------------------------
// Simple template for a React Application
// ---------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('root')
);
// -------------
// Import the necessary modules
// -------------
// Hello Message : a simple react component
// -------------
// Need to render with ReactDOM and append to
// 	a div in your index.html named "root"
// -------------