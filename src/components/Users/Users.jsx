import React from 'react';
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    return <div>
<div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize} />
</div>
        <div>
            {
                props.users.map(u => <User key={u.id} className={s.users}
                                           user={u} followingInProgress={props.followingInProgress} follow={props.follow}
                                           unfollow={props.unfollow}
                />
                )
            }
        </div>
    </div>

}

export default Users;






