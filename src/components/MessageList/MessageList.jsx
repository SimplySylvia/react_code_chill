import React from "react";
import Message from "../Message/Message.jsx";

// BEM naming conventions for css class names

function MessageList(props) {
  // arrow here is for readability
  const generateMessages = () => {
    return props.data.map(message => (
      <Message data={message} key={"message-" + message._id} />
    ));
  };

  return (
    <div className='chat__list'>
      <section className='list__header'>Chat</section>
      <section className='list__messages'>{generateMessages()}</section>
    </div>
  );
}

export default MessageList;
