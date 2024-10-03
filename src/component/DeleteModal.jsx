import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
function DeleteModal(props) {
  const { params, setShow, handleDelete, show } = props
  const handleClose = () => setShow(false)

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleDelete(params.id)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
