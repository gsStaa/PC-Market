import { Search } from "./Search";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className={style.headerCon}>
      <div className={style.headerContainer}>
        <img className={style.logo} src="/Header/LOGO1.png" />
        <nav className={style.navHeader}>
          <ul className={style.ulHeader}>
            <li className={style.liHeader}>
              <Link to="/">ГЛАВНАЯ</Link>
            </li>
            <li className={style.liHeader}>
              <Link to="/ProductsPage">КАТАЛОГ ТОВАРОВ</Link>
            </li>
            <li className={style.liHeader}>
              <Link to="/AccountPage">ЛИЧНЫЙ КАБИНЕТ</Link>
            </li>
            <li className={style.liHeader}>
              <img
                className={style.shoping}
                src="/Header/free-icon-font-shopping-bag.png"
              />
            </li>
            <Search />
          </ul>
        </nav>
      </div>
    </header>
  );
};
