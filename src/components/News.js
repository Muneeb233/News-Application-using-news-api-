import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "cricket"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- News App`
  }

  async updateNews() {

    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71836241edcb4a0aa90f2c5b7db61ad2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles, totalResults: parsedData.totalResults,
      loading: false,
      totalResults:parsedData.totalResults,
    })

    this.props.setProgress(100);
  }
  async componentDidMount() {

    this.updateNews()

  }

  
  handlePrevClick = async () => {

    this.setState({
      page: this.state.page - 1
    })
    this.updateNews()

  }

  handleNextClick = async () => {

    this.setState({
      page: this.state.page + 1
    })
    this.updateNews()
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }

  fetchMoreData = async() => {
 
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71836241edcb4a0aa90f2c5b7db61ad2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:  this.state.articles.concat( parsedData.articles), totalResults: parsedData.totalResults,
      loading: false,
      totalResults:parsedData.totalResults,
    })

}
  render() {

    return (
      <div className="container my-5 ">
        <h1 className='text-center' style={{ margin: "35px" }} >Top Headline's -{this.capitalizeFirstLetter(this.props.category)}</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.lenght!==this.state.totalResults}
          loader={<Spinner/>}
        >
<div className="container">
          <div className="row">
            {this.state.articles.map((element) => {

              return <div className="col-md-4 " key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
      
      </div>
    )
  }
}
export default News
