import React, { Component } from 'react';
import Container from './Container/Container';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    request: '',
    showModal: false,
  };

  handleFormSubmit = request => {
    this.setState({ request });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <Gallery request={this.state.request} />
        <button className="btn" type="button" onClick={this.toggleModal}>
          open modal window
        </button>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Container>
    );
  }
}
export default App;
