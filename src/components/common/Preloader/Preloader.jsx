import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../img/spinner.svg';


let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader} />
    </div>
}

export default Preloader;