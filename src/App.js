import "./css/App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { createRef } from "react";

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 6;

  state = {
    progress: 0,
    country: "us",
  };
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  setCountry = (country) => {
    this.setState({ country: country });
    console.log(this.state.country);
  };
  // focusTextInput() {
  //   this.ref.current();
  // }
  // componentDidMount() {
  //   // autofocus the input on mount
  //   this.focusTextInput();
  // }

  render() {
    return (
      <div>
        <Router>
          <Navbar setCountry={this.setCountry} />
          <LoadingBar
            color="red"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress((this.state.progress = 0))}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  ref={this.ref}
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
