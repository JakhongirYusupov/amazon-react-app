import React from 'react';
import { Link } from 'react-router-dom';
import c from './Mainbottom.module.css';

export const Mainbottom = () => {
    return (
        <div className={c["mainBottom-wrapper"]}>
            <div className={c.mainBottomMain}>
                <p>See personalized recommendations</p>
                <Link to="/login" className={c.mainBottomMainLink}>Sign in</Link>
                <p>New customer? Start here.</p>
            </div>
        </div>
    );
}
