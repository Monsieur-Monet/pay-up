import App from "components/App";
import "index.css";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "reportWebVitals";
import { sendToVercelAnalytics } from "vitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
