import React from "react";

import MessageList from "../components/MessageList/MessageList.jsx";

class Chat extends React.Component {
  state = {
    messages: [],
    text: "",
  };

  componentDidMount() {
    // fake network example
    setTimeout(() => {
      this.setState({
        messages: [
          {
            _id: "a9sd87fa09ds7f9",
            user: "CringyName32",
            text: "poggers",
          },
        ],
      });
    }, 3000);
  }

  handleSubmit = event => {
    event.preventDefault();

    const message = {
      _id: "ad9f8sd0f80sd9",
      user: "another user",
      text: this.state.text,
    };

    this.setState({
      messages: [...this.state.messages, message],
      text: "",
    });
  };

  handleInput = event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className='chat'>
        <MessageList data={this.state.messages} />
        {/* 
          - list of messages (computational )
              -- individual messages 

          - message form
        */}

        {/* form to submit more messages */}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Add message'
            value={this.state.text}
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default Chat;
