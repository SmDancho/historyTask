import style from "./style.module.scss";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className={style.promoHeader}>
            <div className={style.title__block}>
              <h1 className={style.title}>Исторические <br /> даты</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
