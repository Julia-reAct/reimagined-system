import React from 'react';
import s from './Mesage.module.css';

const Message = (props) => {

    return (
      <div  >
          <ul>
              <li className={s.message}>{props.message}</li>
              <li className={s.message}>{props.messageP}</li>
          </ul>

      </div>
    );
}


export default Message;