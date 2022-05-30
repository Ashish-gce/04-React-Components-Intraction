import React, { useState } from "react";
import { ChildComponents } from "./ChildComponents";

export const ParentComponent = () => {
  let [parent, setParent] = useState({
    message: "Hello I'm from Parent funcational component.",
    wishMessage: "", // here we want to store child data in this variable
  });

  // this function receives data from child component
  let receiveData = (data) => {
    setParent({
      ...parent, // keep hold to remaining data (as a backup) for the next state
      wishMessage: data,
    });
  };
  return (
    <>
      <h2
        className="display-4 text-secondary mt-2"
        style={{ marginLeft: "7rem" }}
      >
        Intraction Between Parent Component and Child Component (Basic level)
      </h2>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="h3">Parent Component</p>
                <p className="lead text-primary">
                  Child Data Received Here:
                  <span className="font-weight-bold">{parent.wishMessage}</span>
                </p>
                <ChildComponents msg={parent.message} sendData={receiveData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
