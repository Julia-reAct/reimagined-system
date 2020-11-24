import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state= props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/> )

    let messagesElements1= state.messages.map( m => <Message key={m.id} message={m.message} messageP={m.messageP} />  )

    let addNewMess=(values) =>{
        props.addMess(values.Message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.person}>  {dialogsElements} </div>
            </div>
            <div className={s.messages}>
                <div className={s.allMessage}>{messagesElements1}</div>
                <AddMessageFormRedux onSubmit={addNewMess} />
            </div>

        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} name='Message'// name='Message => values.Message
                       validate={[required, maxLength50 ]}
                       placeholder='Enter your message'
                       className={s.textwriter}/>
            </div>
            <div>
                <button className={s.buton}>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogMess'})(AddMessageForm)

export default Dialogs;

/*<textarea onChange={onMessChange} ref={newMessElement}
                          value={state.newMessText} className={s.textwriter}/>
                    <button onClick={addMess} className={s.buton}>Add post</button>
*/