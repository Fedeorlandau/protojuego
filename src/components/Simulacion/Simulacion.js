import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.css';

export default class SimulacionComponent extends Component {

  componentDidMount() {
    console.log('asd')
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.TOP_RIGHT,
      className: 'foo-bar'
    });
  }

  render() {
    return (
      <div className="levels-container">
        <h3>Niveles</h3>
        <hr/>
        <div className="cards-container">
        </div>
        <ToastContainer autoClose={8000} />

      </div>
    );
  }
}
