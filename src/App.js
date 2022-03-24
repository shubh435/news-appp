import "./css/App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

class App extends Component {
  apiKey = c057004bf4e8436bb57b5d93a96d5148; //process.env.REACT_APP_NEWS_API
  pageSize = 6;
  country = "us";
  // state = {
  //   progress: 0,
  // };
  // setProgress = (progress) => {
  //   this.setState({ progress: this.state.progress });
  // };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* const [progress,setProgress] = useState(0);
          <LoadingBar
            color="red"
            progress={10}
            // onLoaderFinished={() => setProgress(0)}
          /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  // setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country={this.country}
                  apiKey={this.apiKey}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
