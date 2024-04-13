import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMoviePreview } from "../../../../hooks/useMoviePreview";
import Button from "react-bootstrap/Button";
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
      <Button variant="primary" onClick={() => setModalShow(true)}>
        예고편 보기
      </Button>

      <ModalShow
        show={modalShow}
        video={video}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Preview;
