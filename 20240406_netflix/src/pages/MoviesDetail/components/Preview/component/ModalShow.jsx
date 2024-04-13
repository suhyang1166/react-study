import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalShow.style.css";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ModalShow = ({ show, onHide, video }) => {
  const opts = {
    height: "420",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="ModalShow">
        <FontAwesomeIcon className="modal_close" icon={faXmark} />
      </Modal.Header>
      <Modal.Body style={{ height: "100%" }}>
        {video && video[0]?.key && (
          <YouTube
            videoId={video[0].key}
            opts={opts}
            onReady={(event) => event.target.mute()}
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalShow;
