import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import { KEY } from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: ""
  };

  componentDidMount() {
    this.onTermSubmit("vevo");
  }

  onTermSubmit = async term => {
    console.log(term);
    const response = await Youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        key: KEY,
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[2]
    });
    console.log(this.state.videos);
  };

  onVideoSelect = video => {
    console.log("from the app", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
