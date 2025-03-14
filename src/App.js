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
  const [country, setCountry] = useState("us");
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar setCountry={setCountry} />
        <LoadingBar
          color="#FF0000"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          className="style-loader"
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
