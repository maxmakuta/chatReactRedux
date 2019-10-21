import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

  return (
    <div className={s.content}>
      <div className={s.img}>

      </div>
      <div className={s.descriptionBlok}>
          <img src={props.profile.photos.large} />
      </div>

    </div>
  )
}

export default ProfileInfo;