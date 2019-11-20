import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

  return (
    <div className={s.content}>

      <div className={s.descriptionBlok}>
          <img src={props.profile.photos.large} />
          <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>

    </div>
  )
}

export default ProfileInfo;