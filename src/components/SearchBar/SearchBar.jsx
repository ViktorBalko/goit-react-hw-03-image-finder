import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import styles from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    request: '',
  };

  handleSearchRequest = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSearchSubmit = event => {
    event.preventDefault();

    if (this.state.request.trim() === '') {
      return toast.error('Enter request');
    }

    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className={styles.SearchBar}>
        <form
          onSubmit={this.handleSearchSubmit}
          className={styles.SearchBarForm}
        >
          <button type="submit" className={styles.SearchBarButton}>
            <span>search</span>
          </button>

          <input
            type="text"
            className={styles.SearchBarInput}
            // placeholder="search..."
            autoComplete="off"
            autoFocus
            value={this.state.request}
            onChange={this.handleSearchRequest}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
