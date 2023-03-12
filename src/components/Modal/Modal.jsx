import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    // console.log('modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      // console.log('нажали ESC, нужно закрыть модалку');
      this.props.onClose();
    }
  };

  handleClickBackdrop = event => {
    // console.log('кликнули в бекдроп');
    // console.log('currentTagrget: ', event.currentTarget);
    // console.log('target: ', event.target);

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.ModalBackdrop} onClick={this.handleClickBackdrop}>
        <div className={styles.ModalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

// export default Modal;
