import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery, { PhotoProps } from "react-photo-gallery";
import { isServer } from "../../utils/isServer";

interface IMyGallery {
  photos: PhotoProps[];
  thumbnails: PhotoProps[];
}

const MyGallery: React.FC<IMyGallery> = ({ photos, thumbnails }) => {
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

  if (isServer()) return null;

  return (
    <div>
      <Gallery photos={thumbnails} onClick={openLightbox} />
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
              views={photos.map((photo) => ({
                key: photo.src,
                source: photo.src,
                ...photo,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default MyGallery;
