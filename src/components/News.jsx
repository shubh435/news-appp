import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setPage(1);
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; //paste your url heare to get here in apiURL

    setLoading(true);
    let data = await fetch(apiUrl); //fetch that url
    let parseData = await data.json(); //parse the fetch data
    props.setProgress(30);

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false); // provide the fetch articles data to the local articles
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsTmes - ${capitalizeFirstLetter(
      props.category
    )} -${capitalizeFirstLetter(props.country)}`;
    updateNews();
  }, [props.country]);

  const fetchMoreData = async () => {
    
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${page +
      1}&pageSize=${props.pageSize}`; //paste your url heare to get here in apiURL
    setPage(page + 1);
    let data = await fetch(apiUrl); //fetch that url
    let parseData = await data.json(); //parse the fetch data
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };
  return (
    <>
      <h1
        className="text-center "
        style={{ marginTop: "90px", marginBottom: "30px" }}
      >
        NewsTimes - Top {capitalizeFirstLetter(props.category)}
        HeadLines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults} //
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((e, i) => {
              return (
                <div className="col-md-4" key={e.url + i}>
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
                    author={e.author ? e.author : "Na"}
                    date={e.publishedAt ? e.publishedAt : "NA"}
                    Source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
  apiKey: "c057004bf4e8436bb57b5d93a96d5148",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
