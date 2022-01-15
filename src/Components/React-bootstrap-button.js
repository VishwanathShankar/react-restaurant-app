import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Router from './Router';
import Button from 'react-bootstrap/Button';

class ButtonComponent extends React.Component {
  render() {
    return(
      <div>
        <>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> 
  <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> 
  <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>
      </div>
    )
  }
}
// render function to render the only component 
ReactDOM.render(
  <ButtonComponent />,
  document.getElementById('root')
);
