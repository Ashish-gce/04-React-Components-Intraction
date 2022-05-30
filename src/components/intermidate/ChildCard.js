import React, { useState } from "react";

export const ChildCard = (props) => {
  let [child, setChild] = useState({
    childMessage: "",
  });

  let changeChildMessage = (event) => {
    setChild({
      childMessage: event.target.value,
    });
    props.sendMessage(event.target.value);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-warning text-light">
                <p className="display-4 text-center font-weight-bold font-italic">
                  Child Card
                </p>
              </div>
              <div className="card-body">
                <h2 className="h1 text-info">Hello! Inside Child Component</h2>

                {/* <pre>{this.state.cMessage}</pre> */}

                <form className="form-inline">
                  <div className="form-group">
                    <input
                      type="text"
                      value={child.childMessage}
                      onChange={changeChildMessage}
                      className="form-control"
                    />
                  </div>
                </form>

                <p className="lead font-weight-bold text-success font-italic">
                  From Parent Data:
                  <span className="lead font-weight-bold text-danger font-italic">
                    {props.messageToChild}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
