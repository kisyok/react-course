import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={openModal}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
}

export default Todo;
