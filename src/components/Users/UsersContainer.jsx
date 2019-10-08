import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow} from "../../redux/UsersReducer";
import * as axios from "axios/index";

class UsersContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onPageChanged = (pageNumbers) => {
        this.props.setCurrentPage(pageNumbers);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumbers}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render () {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
}
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount} )(UsersContainer);
