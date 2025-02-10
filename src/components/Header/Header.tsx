import { GintonicLogo, TheThingLogo } from "../../assets";
import style from "./style.module.scss";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.header_container}`}>
        <div className={style.header_logo}>
          <GintonicLogo />
          X
          <img src={TheThingLogo} alt="" />
        </div>
      </div>
    </header>
  );
};
