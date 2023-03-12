import React, { Component } from 'react';
import GalleryItem from 'components/GalleryItem';
import fetchImages from 'components/FetchData';
// import LoadMore from 'components/LoadMore';
import styles from './Gallery.module.css';
import MoreButton from 'components/MoreButton';

class Gallery extends Component {
  state = {
    response: null,
    loading: false,
    error: null,
    currentPage: 1,
    totalHits: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.request !== this.props.request) {
      this.setState({ response: null, loading: true, currentPage: 1 });
      setTimeout(() => {
        this.fetchImages();
      }, 100);
    }
  }

  fetchImages = () => {
    const { currentPage } = this.state;
    const { request } = this.props;
    const perPage = 12;
    this.setState({ loading: true });
    fetchImages(request, perPage, currentPage)
      .then(response => {
        if (response.hits.length === 0) {
          throw new Error('No photos found');
        }
        this.setState(prevState => ({
          response: prevState.response
            ? [...prevState.response, ...response.hits]
            : response.hits,
          error: null,
          currentPage: prevState.currentPage + 1,
          totalHits: response.totalHits,
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ loading: false }));
  };

  handleLoadMore = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.fetchImages();
    }, 100);
  };

  render() {
    const { loading, response, error, totalHits } = this.state;
    console.log(totalHits);
    return (
      <div>
        {error && <h1>{error}</h1>}
        {loading && <div>loading..</div>}
        {!this.props.request && <div></div>}
        {response && (
          <div>
            <ul className={styles.Gallery}>
              {response.map(item => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </ul>
            {response.length < totalHits && (
              <MoreButton onLoadMore={this.handleLoadMore} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Gallery;
