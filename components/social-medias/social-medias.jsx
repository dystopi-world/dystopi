import {
  FaDiscord,
  FaFacebook,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import styles from "./social-medias.module.scss";

function SocialMedias() {
  return (
    <nav className={styles.SocialMedias}>
      <ul>
        <li>
          <a href="#">
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTelegramPlane />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialMedias;
