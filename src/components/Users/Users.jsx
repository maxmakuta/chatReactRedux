import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/user.jpg'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p} </span>
            })}
        </div>

        {props.users.map(u => <div key={u.id} className={s.users}>

            <div className={s.img}>
                <img src={u.photos.large != null ? u.photos.small : userPhoto} className={s.photoUrl}/>
            </div>


            <div className={s.name}>{u.name}</div>


            <div>{u.status}</div>

            <div className={s.follow}>
                {u.followed
                    ? <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>
                    : <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                }
            </div>
            <div className={s.line}>

            </div>
        </div>)
        }
    </div>


}

export default Users;






