import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import c from './Login.module.css';
import logo from '../../assets/images/logo-black.png';
import { useTranslation } from 'react-i18next';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);

  const sendRequest = (e) => {
    setError(null)
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputEmail, inputPassword)
      .then((response) => {
        if (response.operationType === "signIn") history.push("/")
      })
      .catch(error => setError(error.message))
  }
  return (
    <div >
      <div className={c["signUp-wrapper"]}>
        <div className={c["signUp-logo"]}>
          <Link to="/">
            <img className={c["logo__img"]} src={logo} alt="error" />
          </Link>
        </div>
        <div className={c.signupMain}>
          <h2>{t("signup.sign__in")}</h2>
          <p className={c.errorMessage}>{error}</p>
          <form action="" className={c.form} onSubmit={sendRequest}>
            <div className={c.inputWrapper}>
              <label htmlFor="">{t("signup.email")}</label>
              <input required onChange={(e) => setInputEmail(e.target.value)} type="email" />
            </div>
            <div className={c.inputWrapper}>
              <label htmlFor="">{t("signup.password")}</label>
              <input required onChange={(e) => setInputPassword(e.target.value)} type="password" placeholder={t("signup.password__input")} />
              <p>{t("signup.password__desc")}</p>
            </div>
            <button className={c.submitBtn}>{t("signup.continue")}</button>
          </form>
        </div>
        <Link to="/signup">
          <button className={`${c.submitBtn} ${c.submitBtnLogin}`}>{t("signup.create__account")}</button>
        </Link>
        <div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Login