import React from 'react';
import Header from "./Header";
import {loginOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    render() {
        return ( <Header {...this.props} />

        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    login: state.authPage.login,
})

export default connect (mapStateToProps, { loginOut}) (HeaderContainer)
