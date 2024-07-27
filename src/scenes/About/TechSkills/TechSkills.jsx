import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from 'react-icons/di';
import {
  SiTypescript,
  SiLaravel,
  SiMysql,
  SiPython,
  SiPhpmyadmin,
} from 'react-icons/si';
import {
  TbBrandReactNative,
} from 'react-icons/tb';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <SiPython />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <SiLaravel />
      </li>
      <li className={s.techIcon}>
        <SiPhpmyadmin />
      </li>
      <li className={s.techIcon}>
        <TbBrandReactNative />
      </li>
    </ul>
  );
};

export default TechSkills;
