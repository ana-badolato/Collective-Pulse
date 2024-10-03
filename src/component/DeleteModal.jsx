import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function DeleteModal(props) {
  const { params, setShow, handleDelete, show } = props;
  const handleClose = () => setShow(false);

  if (!show) return null; // Si el modal no debe mostrarse, retorna null

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Delete Confirmation</h2>
          {/* Botón de cerrar con "X" y color naranja */}
          <button className="close" onClick={handleClose}>
            &#x2715; {/* Esta es la "X" en formato HTML */}
          </button>
        </div>
        <div className="modal-body">
          Are you sure you want to delete this item?
        </div>
        <div className="modal-footer">
          <button className="secondary-btn" onClick={handleClose}>
            Close
          </button>
          <button className="primary-btn" onClick={() => handleDelete(params.id)}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
