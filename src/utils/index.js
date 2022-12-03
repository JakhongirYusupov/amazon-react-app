import c from './index.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Backtotop = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div onClick={scrollToTop} className={c.backtotop}>
      <p>{t("back__to__top")}</p>
    </div>
  )
}

const Overlay = ({ callback, setcategory, type }) => {
  return (
    <div onClick={() => {
      callback(false)
      setcategory((false))
    }
    } className={c.overlay} style={type === "navbar" ? { top: "60px" } : null}></div>
  )
}

export { Backtotop, Overlay } 