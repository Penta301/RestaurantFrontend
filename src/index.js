import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { AuthProvdider } from "./contexts/AuthContext";
import { ApiProvider } from "./contexts/ApiContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvdider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </AuthProvdider>
  </React.StrictMode>,
  document.getElementById("root")
);
