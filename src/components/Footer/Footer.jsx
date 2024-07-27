import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/amirah1921"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          {/* <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Snaychuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li> */}
          {/* <li className={s.socialLink}>
            <a
              href="https://t.me/snaichuk_v"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li> */}
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/puteri-amirah-ahmad-ghazali-a7793b271/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
