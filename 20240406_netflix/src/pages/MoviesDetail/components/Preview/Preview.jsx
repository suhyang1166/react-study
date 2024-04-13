import React, { useState } from "react";
import "./Preview.style.css";
import { useParams } from "react-router-dom";
import { useMoviePreview } from "../../../../hooks/useMoviePreview";
import Alert from "react-bootstrap/Alert";
import ModalShow from "./component/ModalShow";

const Preview = () => {
  const { id } = useParams();
  const { data: video, isLoading, isError, error } = useMoviePreview(id);
  const [modalShow, setModalShow] = useState(false);

  console.log(video);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <>
      <button
        className="preview_btn"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        예고편 보기
      </button>
      <ModalShow
        show={modalShow}
        video={video}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Preview;
