import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import NewsForm from "./NewsForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ModalForm(props) {
  let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
const {news, getData, setIsOpen, modalIsOpen, isUpdate, getDataCategory}=props
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>

        <NewsForm  getData={getData} getDataCategory={getDataCategory} news={news} isUpdate={isUpdate}/>
        <button>the modal</button>
      </Modal>
    </div>
  );
}
export default ModalForm;
