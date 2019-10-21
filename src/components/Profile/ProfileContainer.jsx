import React from 'react';
import {connect} from "react-redux";

import {getUserProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10
        }


               this.props.getUserProfile(userId);


    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>

        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);