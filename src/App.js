import React, { useState } from "react";
import "./App.css";
import { ClientCard } from "./components/advanced/ClientCard";
import { ServerCard } from "./components/advanced/ServerCard";
import { ParentComponent } from "./components/basic/ParentComponent";
import { ParentCard } from "./components/intermidate/ParentCard";

// 🚀 Class Based Component 🚀
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
//           <div className="conatainer">
//             <a href="/" className="navbar-brans text-white">
//               React Hooks
//             </a>
//           </div>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

//  🚀🚀🚀🚀  Functional Component  🚀🚀🚀🚀  //

const App = () => {
  let [app, setApp] = useState({
    serverMessage: "",
    clientMessage: "",
  });

  let receiveServerData = (sdata) => {
    setApp({
      ...app,
      serverMessage: sdata,
    });
  };

  let receiveClientData = (cdata) => {
    setApp({
      ...app,
      clientMessage: cdata,
    });
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brans text-white h3">
            React Hooks With Component Intraction
          </a>
          <ul className="ml-auto font-weight-bold text-white">
            <li>Login</li>
          </ul>
        </div>
      </nav>
      <ParentComponent />

      <ParentCard />

      <h2
        className="display-4 text-success mt-3"
        style={{ marginLeft: "7rem" }}
      >
        Intraction Between Server Card and Client Card (Advance level)
      </h2>
      <div className="container mt-3">
        <div className="row">
          {/*  🥇 🥇 🥇 🥇  "offset-1" occupied margin from both side 🥇 🥇 🥇 🥇  */}
          <div className="col-md-5 offset-1">
            <ClientCard
              // sendServerData={receiveServerData}
              // clientData={app.serverMessage}
              sendData={receiveClientData}
              serverMessage={app.serverMessage}
            />
          </div>
          <div className="col-md-5 offset-1">
            <ServerCard
              // sendClientData={receiveClientData}
              // serverData={app.clientMessage}
              sendData={receiveServerData}
              clientMessage={app.clientMessage}
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 150 }}></div>
    </React.Fragment>
  );
};

export default App;
