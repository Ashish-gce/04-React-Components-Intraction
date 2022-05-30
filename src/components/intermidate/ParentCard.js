import React, { useState } from "react";
import { ChildCard } from "./ChildCard";

export const ParentCard = () => {
  let [message, setMessage] = useState({
    parentMessage: "",
    childMessage: "",
  });

  let changeParentMessage = (event) => {
    setMessage({
      ...message,
      parentMessage: event.target.value,
    });
  };

  let receiveMessage = (data) => {
    setMessage({
      ...message,
      childMessage: data,
    });
  };
  return (
    <>
      <h2 className="display-4 text-danger mt-4" style={{ marginLeft: "7rem" }}>
        Intraction Between Parent Card and Child Card (Intermidate level)
      </h2>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-light text-warning">
                <p className="display-4 text-center font-weight-bold font-italic">
                  Parent Card
                </p>
              </div>
              <div className="card-body">
                <h2 className="h1 text-info">Hello! Inside Parent Component</h2>

                {/* <pre>{this.state.pMessage}</pre> */}

                <form className="form-inline">
                  <div className="form-group">
                    <input
                      type="text"
                      value={message.parentMessage}
                      onChange={changeParentMessage}
                      className="form-control"
                    />
                  </div>
                </form>

                <p className="lead font-weight-bold text-success font-italic">
                  From Child Data:{" "}
                  <span className="lead font-weight-bold text-danger font-italic">
                    {message.childMessage}
                  </span>
                </p>

                <ChildCard
                  messageToChild={message.parentMessage}
                  sendMessage={receiveMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
