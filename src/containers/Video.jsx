import React from "react";

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
      videoData: null,
    };

    console.log("[constructor] video");
    // never update state in the constructor

    // bind methods
    // this.togglePlay = this.togglePlay.bind(this);
  }

  // all lifecycle

  componentDidMount() {
    console.log("[did mount] video");
    // used for updating state based on network
    // this.setState()

    // fake network request
    setTimeout(() => {
      this.setState({
        videoData: {
          title: "Some Cool Stream",
        },
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[did update] video", prevState);
  }

  componentWillUnmount() {
    console.log("[will unmount] video");
    // clean up work
  }

  // your methods

  togglePlay = newPlayingState => {
    this.setState(
      {
        isPlaying: newPlayingState,
      },
      function () {
        console.log("State updated now what?");
      }
    );
  };

  render() {
    console.log("[render] video");

    const { videoData, isPlaying } = this.state;

    return (
      <div className='video'>
        <h1>{videoData ? videoData.title : "Loading..."}</h1>
        <button onClick={() => this.togglePlay(!isPlaying)}>Play/Pause</button>
      </div>
    );
  }
}

export default Video;
