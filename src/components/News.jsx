import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
    apiKey: "c057004bf4e8436bb57b5d93a96d5148",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `NewsTmes - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; //paste your url heare to get here in apiURL
    this.setState({ loading: true });
    let data = await fetch(apiUrl); //fetch that url
    let parseData = await data.json(); //parse the fetch data

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    }); // provide the fetch articles data to the local articles
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; //paste your url heare to get here in apiURL
    let data = await fetch(apiUrl); //fetch that url
    let parseData = await data.json(); //parse the fetch data

    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    }); // provide the fetch articles data to the local articles
  };

  render() {
    return (
      <>
        <h1
          className="text-center "
          style={{ marginTop: "90px", marginBottom: "30px" }}
        >
          NewsTimes - Top {this.capitalizeFirstLetter(this.props.category)}
          HeadLines
        </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults} //
          loader={<Spinner />}
        >
          <div className="container">
            {/* !this.state.loading &&  */}

            <div className="row">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url}>
                    <NewsItem
                      title={e.title ? e.title : ""}
                      description={
                        e.description ? e.description.slice(0, 155) : " "
                      }
                      imageUrl={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://images.hindustantimes.com/img/2022/02/17/1600x900/pjimage_(14)_1645078163307_1645078174372.jpg"
                      }
                      url={e.url}
                      author={e.author ? e.author : "Unknown"}
                      date={e.publishedAt ? e.publishedAt : " "}
                      Source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext}>Next &rarr; </button>
        </div> */}
      </>
    );
  }
}

export default News;
