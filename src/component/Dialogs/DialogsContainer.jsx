import React from 'react';
import {addMess} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
    }
}



export default compose(
    connect (mapStateToProps, { addMess}),
    withAuthRedirect
)
(Dialogs)




/*const DialogsContainer = (props) => {
 /*
 let state = props.store.getState().dialogsPage


    let addMess =() => {
        props.store.dispatch(addMessActionCreater())
    }

    let onMessChange=(text) =>{
        let action = updateNewMessActionCreater(text)
        props.store.dispatch(action)
    }

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState().dialogsPage

                let addMess =() => {
                    store.dispatch(addMessActionCreater())
                }

                let onMessChange=(text) =>{
                    let action = updateNewMessActionCreater(text)
                    store.dispatch(action)
                }
               return <Dialogs dialogsPage={store.getState().dialogsPage}
                         addMess={addMess}
                         updateNewMessText={onMessChange}/>}
        }
        </StoreContext.Consumer>
    );
}*/

/*let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessText: (text)=>{
            dispatch(updateNewMessActionCreater(text))
        },
        addMess:() =>{
            dispatch(addMessActionCreater())}
    }
}*/