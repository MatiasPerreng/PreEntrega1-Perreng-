import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ListContainer(props) {
  return (
    <div className="container-fluid bg-light mt-4 p-4 rounded">
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
