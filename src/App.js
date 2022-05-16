import "./css/App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API.split('"')[0]; //process.env.REACT_APP_NEWS_API;

  console.log(apiKey);
  const pageSize = 6;
  // const country = "in";
  const [country, setCountry] = useState("in");
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar setCountry={setCountry} />
        <LoadingBar
          color="red"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"business"}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"health"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"science"}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"sports"}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
