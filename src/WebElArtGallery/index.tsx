import { Photo } from "../types";
import styles from "./index.module.scss";

interface WebElArtGalleryProps {
  photos: Photo[];
}

const WebElArtGallery: React.FC<WebElArtGalleryProps> = ({ photos }) => {
  if (!photos) {
    return null;
  }

  return (
    <div className={styles.webelartGallery}>
      <div className={styles.webelartGalleryContainer}></div>
    </div>
  );
};

export default WebElArtGallery;
