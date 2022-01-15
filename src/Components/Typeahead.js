import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Router from './Router';
import { Typeahead } from 'react-bootstrap-typeahead';

class TypeaheadTest extends React.Component {
  render() {
    return(
      <div>
        <Typeahead
          id="basic-typeahead-single"
          options={['bangalore', 'chennai' ]}
        />
      </div>
    )
  }
}
// render function to render the only component 
ReactDOM.render(
  <TypeaheadTest />,
  document.getElementById('root')
);
