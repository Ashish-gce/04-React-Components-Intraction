import React, { useState } from "react";

export const ClientCard = (props) => {
  let [client, setClient] = useState({
    message: "",
  });

  let submitClient = (event) => {
    event.preventDefault();

    // below parent function available in child through props
    props.sendData(client.message); // here we're sending data to App component
    // props.sendServerData(server.message);
  };

  let clientMessageCall = (event) => {
    setClient({
      message: event.target.value,
    });
  };
  return (
    <>
      {/* <pre>{JSON.stringify({ client })}</pre> */}
      <div className="card">
        <div className="card-header bg-success text-white">
          <p className="h4">Client Card</p>
        </div>

        <div className="card-body">
          <form onSubmit={submitClient}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={client.message}
                //   onChange={this.clientMessageCall}
                // onChange={(e) => setClient({ message: e.target.value })}
                onChange={clientMessageCall}
              />
            </div>
            <div>
              <input type="submit" className="btn btn-success" value="send" />
            </div>
          </form>
        </div>

        <div className="card-footer bg-light text-white">
          <p className="lead font-weight-bold font-italic">
            From Server : {props.serverMessage}
          </p>
        </div>
      </div>
    </>
  );
};
