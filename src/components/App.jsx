import React, { Component } from 'react';
import Searchbar from './SearchBar/SearchBar';
import Gallery from './Gallery';
import MoreButton from 'components/MoreButton';
import fetchImages from 'components/FetchData';
import Modal from './Modal';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    request: '',
    response: [],
    loading: false,
    error: null,
    totalHits: 0,
    currentPage: 1,
    currentImage: '',
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.request !== this.state.request ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }

  handleOpenModal = image => {
    this.setState({ showModal: true, currentImage: image });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, currentImage: '' });
  };

  fetchImages = () => {
    const { currentPage, request } = this.state;
    this.setState({ loading: true });
    fetchImages(request, currentPage)
      .then(response => {
        if (response.hits.length === 0) {
          throw new Error('No photos found');
        }
        this.setState(prevState => ({
          response: [...prevState.response, ...response.hits],
          totalHits: response.totalHits,
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ loading: false }));
  };

  hanleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  handleFormSubmit = request => {
    this.setState({ request, response: [], currentPage: 1 });
  };

  render() {
    const { error, loading, response, showModal, totalHits, currentImage } =
      this.state;
    const totalPage = response.length / totalHits;
    return (
      <>
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
          {loading && <Loader />}
          {response.length !== 0 && (
            <Gallery response={response} onOpenModal={this.handleOpenModal} />
          )}
          {showModal && (
            <Modal
              onClose={this.handleCloseModal}
              currentImage={currentImage}
            />
          )}
          {totalPage < 1 && !loading && (
            <MoreButton onLoadMore={this.hanleLoadMore} />
          )}
          {error && <h1>{error}</h1>}
          <ToastContainer
            position="top-left"
            autoClose={1300}
            theme="colorized"
          />
        </div>
      </>
    );
  }
}

export default App;
