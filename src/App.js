import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const WhetherApp = lazy(() => import("./wheather/Wheather"));
// !Use a weather API to retrieve the current weather for a user-specified location.
// !Display the weather information in a user-friendly format. Allow users to search for weather
// !information for different locations.
function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <WhetherApp />
      </Suspense>
    </div>
  );
}

export default App;
