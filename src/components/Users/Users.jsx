import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/user.jpg'


class Users extends React.Component {
getUsers = () => {
    if (this.props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
        this.props.setUsers(response.data.items);
})
    }
}

render (){
    return <div>
        <button onClick={this.getUsers}>getUsers</button>
        {this.props.users.map(u => <div key={u.id} className={s.users}>

            <div className={s.img}>
                <img src={u.photos.large != null ? u.photos.small : userPhoto} className={s.photoUrl}/>
            </div>



            <div className={s.name}>{u.name}</div>

            <div></div>
            <div>{u.status}</div>

            <div className={s.follow}>
                {u.followed
                    ? <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Follow</button>
                    : <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</button>
                }
            </div>
            <div className={s.line}>

            </div>


        </div>)}
    </div>

}
}
export default Users;






