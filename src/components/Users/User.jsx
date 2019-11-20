import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../img/user.jpg'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";




let User = ({user, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div>
            <div className={s.img}>
                <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.large != null ? user.photos.small : userPhoto} className={s.photoUrl}/>
                </NavLink>
            </div>


            <div className={s.name}>{user.name} </div>
        <div>{user.status}</div>
                <div className={s.follow}>

                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>
                    }

            </div>





            <div className={s.line}>

            </div>
        </div>
}

export default User;









