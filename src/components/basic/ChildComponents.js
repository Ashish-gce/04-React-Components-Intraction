import React, { useState } from "react";

export const ChildComponents = (props) => {
  let [child, setChild] = useState({
    childWish: "Awesome! You do this! Data is received from child component",
  });

  let clicked = () => {
    // here we sending child local data "(this.state.childWish)" by  "props"
    // through "sendData" i.e: defined inside parent component

    // 👍 by the help of "props" we can access 'parent function' "sendData" in child component
    props.sendData(child.childWish);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card bg-info text-white">
              <div className="card-body">
                <p className="h3 text-danger">Child Component</p>
                <span>{props.msg}</span>
                {/* button we created to perform some event that send data to parent component */}
                <button
                  className="btn btn-secondary btn-sm ml-3"
                  onClick={clicked}
                >
                  Send Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
