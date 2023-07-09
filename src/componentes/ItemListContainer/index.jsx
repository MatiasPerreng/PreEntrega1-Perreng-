import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ListContainer(props) {
  return (
    <div className="container-fluid rounded">
      <div className="greetings">
        <h1 style={{ color: 'black', fontSize: '24px', textAlign: 'center', marginTop: '25px'  }}>{props.greetings}</h1>
      </div>
      <div className="row">
        {props.children.map((child, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
