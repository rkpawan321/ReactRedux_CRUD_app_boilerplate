import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div 
        // onClick ={ () => {history.push('/')}}
        onClick = {props.onDismiss}
        className="ui dimmer modals visible active">
            <div onClick={(e)=>{e.stopPropagation()}} className="ui standard modal visible active"> 
            <div className="header"> {props.title} </div>
            {/* This is to make sure that only on clickong at the places other than the modal, i.e, outside, the modal disappears.  */}
            {/* HTML EVENT PROPAGATION:   Default JS , HTML behaviour . If we ever trigger an event  on some child element and that child element  does not handle that event,  event is going to bubble up to some parent element until it eventually  gets caught  with an event handler. */}
               {/* <div className="header">{props.title}</div> */}
               <div className="content"> 
                   {props.content}
               </div>
               <div className="actions"> 
{props.actions}                   
                </div>
            </div>
        </div>,
        document.querySelector('#modal')   
    );
} ;

export default Modal;
