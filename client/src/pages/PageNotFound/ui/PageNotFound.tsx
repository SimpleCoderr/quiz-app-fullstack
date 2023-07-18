import { useEffect } from "react";
import pageNotFound from "../const/img/PageNotFound.png";
import s from "./PageNotFound.module.scss";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, []);
  return (
    <div className={s.pageNotFound}>
      <div className={s.notFoundBlock}>
        <div className={s.text}>
          Страница <br /> <span className={s.highlight}>не найдена</span>
        </div>
        <div className={s.imgWrapper}>
          <img src={pageNotFound} alt="" />
        </div>
        <div className={s.text}>
          Page <br /> <span className={s.highlight}>Not Found</span>
        </div>
      </div>
      <div className={s.notification}>
        Через 5 секунд вы будете переведены на существующую страницу...
      </div>
    </div>
  );
};
