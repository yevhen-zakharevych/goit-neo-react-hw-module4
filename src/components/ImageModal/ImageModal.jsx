import Modal from "react-modal";

import style from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "5vh 15vw",
  },
};

Modal.setAppElement("#root");

function ImageModal({ isModalOpen, closeModal, image }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {image && (
        <img
          className={style.img}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </Modal>
  );
}

export default ImageModal;
