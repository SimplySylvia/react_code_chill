import React from "react";

import Video from "../containers/Video.jsx";
import Chat from "../containers/Chat.jsx";

function Channel(props) {
  return (
    <div className='Channel'>
      <h1>Channel</h1>
      <Video />
      <Chat />
      {/* container
            - video
            - chat
      */}
    </div>
  );
}

// do some extra code

export default Channel;
