import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      return (
        <div>
        <Button onClick={this.toggle} style={{"margin-top":"10px"}}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} style={{"color":"black"}}>{this.props.buttonLabel}</ModalHeader>
          <ModalBody style={{"color":"black"}}>
            <iframe src={this.props.modalContent}></iframe>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Cerrar</Button>{' '}
          </ModalFooter>
        </Modal>
        </div>
      );
    }
  }