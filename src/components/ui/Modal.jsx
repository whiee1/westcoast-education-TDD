import { useState, useContext } from "react";
import AuthContext from "../store/auth_context";

import ReactDOM from "react-dom";

const Overlay = () => {
  return ReactDOM.createPortal(
    <div data-testid="overlay" className="overlay" />,
    document.querySelector("#overlay-root")
  );
};

const Modal = (props) => {
  const context = useContext(AuthContext);

  return ReactDOM.createPortal(
    <>
      <div className="modalContainer">
        <div className="modalTitleWrapper">
          <h1 className="modalTitle">{props.title}</h1>
        </div>
        <div className="modalContent">{props.item}</div>
      </div>
      <Overlay />
    </>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
