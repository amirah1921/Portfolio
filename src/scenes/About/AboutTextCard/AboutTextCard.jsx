import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Puteri Amirah Ahmad Ghazali, </span>
        <br />a software engineer currently based in{' '}
        <span className={s.purple}>Kajang, Selangor.</span>
        <br />
        <br />
        I have a Bachelor's degree in Bachelor of Computer Science
        and <br></br> Maritime Informatics (Hons) from Universiti Malaysia Terengganu.
        <br />
        Graduate in year 2024 with a 
        CGPA of 3.65/4.00<br></br>
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
