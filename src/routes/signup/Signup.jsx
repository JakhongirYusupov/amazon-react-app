import React, { useState } from 'react';
import logo from '../../assets/images/logo-black.png';
import { Link, useHistory } from 'react-router-dom';
import c from './Signup.module.css';
import { useTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

export default function Signup() {
  const history = useHistory();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);

  const sendRequest = (e) => {
    setError(null)
    e.preventDefault();
    createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
      .then((response) => {
        if (response.operationType === "signIn") history.push("/")
      })
      .catch(error => setError(error.message))
  }

  const { t } = useTranslation();
  return (
    <div >
      <div className={c["signUp-wrapper"]}>
        <div className={c["signUp-logo"]}>
          <Link to="/">
            <img className={c["logo__img"]} src={logo} alt="error" />
          </Link>
        </div>
        <div className={c.signupMain}>
          <h2>{t("signup.create__account")}</h2>
          <p className={c.errorMessage}>{error}</p>
          <form action="" className={c.form} onSubmit={sendRequest}>
            <div className={c.inputWrapper}>
              <label htmlFor="">{t("signup.name")}</label>
              <input required type="text" placeholder={t("signup.name__input")} />
            </div>
            <div className={c.inputWrapper}>
              <label htmlFor="">{t("signup.email")}</label>
              <input required onChange={(e) => setInputEmail(e.target.value)} type="email" />
            </div>
            <div className={c.inputWrapper}>
              <label htmlFor="">{t("signup.password")}</label>
              <input required onChange={(e) => setInputPassword(e.target.value)} type="password" placeholder={t("signup.password__input")} />
              <p>{t("signup.password__desc")}</p>
            </div>
            <div className={c.inputWrapper}>
              <label htmlFor="">{t("signup.password__enter")}</label>
              <input required type="password" />
            </div>
            <div>
            </div>
            <div className={c.loginToSignUp}>
              <span>{t("signup.have__account")} <Link to="/login">{t("signup.sign__in")}</Link></span>
            </div>
            <button className={c.submitBtn}>{t("signup.continue")}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
