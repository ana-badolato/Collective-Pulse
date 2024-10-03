import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import NewsForm from "./NewsForm";
import cancelIcon from "../assets/icons/cancel.png";
// const customStyles = {
//   content: {
//     top: "45%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: "40%",
//     height: "60%",
//     zIndex: "9999",
//     position: "fixed",
//     backgroundColor: "#1f1f1f",
//     border: "none",
//     borderRadius: "2px",

//   },
//   overlay: {
//     backgroundColor: "rgba(60, 57, 57, 0.75)",
//     zIndex: "900",
//   },
// };

Modal.setAppElement("#root");

function ModalForm(props) {
  let subtitle;
  const { news, getData, setIsOpen, modalIsOpen, isUpdate, getDataCategory } =
    props;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="form-container">
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="ReactModal__Content" // Usa la clase CSS para el contenido del modal
        overlayClassName="ReactModal__Overlay" 
      >
        <div className="form-top">
          <h2
            className="form-title"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            ADD PULSE
          </h2>
          <button className="form-button-cancel" onClick={closeModal}>
            <img src={cancelIcon} alt="cancel" />
          </button>
        </div>
        <hr className="form-hr" />
        <NewsForm
       
          getData={getData}
          getDataCategory={getDataCategory}
          news={news}
          isUpdate={isUpdate}
          closeModal={closeModal}
        />

        {/* <button>the modal</button> */}
      </Modal>
    </div>
  );
}
export default ModalForm;
