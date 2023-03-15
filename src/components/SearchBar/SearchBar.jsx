import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    request: '',
  };

  handleRequestChange = evt => {
    this.setState({ request: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.request.trim() === '') {
      return toast.error('Enter request');
    }

    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchBarForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchBarButton}>
            Search
          </button>
          <input
            className={styles.SearchBarInput}
            type="text"
            name="request"
            value={this.state.request}
            onChange={this.handleRequestChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
