import React from 'react'
import Modal from 'react-modal'
import NewsForm from './NewsForm'
import cancelIcon from '../assets/icons/cancel.png'
Modal.setAppElement('#root')

function ModalForm(props) {
  let subtitle
  const { news, getData, setIsOpen, modalIsOpen, isUpdate, getDataCategory } =
    props

  function afterOpenModal() {
    subtitle.style.color = '#000'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="form-container">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="ReactModal__Content"
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
      </Modal>
    </div>
  )
}
export default ModalForm
