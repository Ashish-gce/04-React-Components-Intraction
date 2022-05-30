import React, { useState } from "react";
// import { ClientCard } from "./ClientCard";

export const ServerCard = (props) => {
  let [server, setServer] = useState({
    message: "",
  });

  let submitServer = (event) => {
    event.preventDefault();
    props.sendData(server.message); // here we're sending data to App component
  };

  //   serverMessageCall
  let serverMessageCall = (evt) => {
    setServer({
      message: evt.target.value,
    });
    // message: e.target.value
  };

  return (
    <>
      {/* <pre>{JSON.stringify({ server })}</pre> */}

      <div className="card">
        <div className="card-header bg-danger text-white">
          <p className="h4">Server Card</p>
        </div>

        <div className="card-body">
          <form onSubmit={submitServer}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={server.message}
                onChange={serverMessageCall}
              />
            </div>
            <div>
              <input type="submit" className="btn btn-danger" value="send" />
            </div>
          </form>
        </div>

        <div className="card-footer bg-light text-white">
          <p className="lead font-weight-bold font-italic">
            From Client : {props.clientMessage}
          </p>
        </div>
      </div>
    </>
  );
};
