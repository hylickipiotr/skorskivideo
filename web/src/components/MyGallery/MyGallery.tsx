import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery, { PhotoProps } from "react-photo-gallery";

interface IMyGallery {
  photos: PhotoProps[];
}

const MyGallery: React.FC<IMyGallery> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              hideControlsWhenIdle={false}
              styles={{
                view: () => ({
                  maxHeight: "100vh",
                }),
              }}
              currentIndex={currentImage}
              views={photos.map((x) => ({
                key: x.src,
                source: x.src,
                ...x,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default MyGallery;
