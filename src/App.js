import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import {Route, withRouter} from "react-router";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import PeopleContainer from "./component/People/PeopleContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./component/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-my'>
                <HeaderContainer/>
                <Navbar state={this.props.state.sidebar}/>
                <div className='app-my-content'>
                    <Route /*exact*/ path='/dialogs'
                                     render={() => <DialogsContainer
                                     />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                           />}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                    <Route path='/people'
                           render={() => <PeopleContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    initialized: state.appPage.initialized
})

export default compose(
    withRouter,
connect (mapStateToProps, {initializeApp})) (App)
