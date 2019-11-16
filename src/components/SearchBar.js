import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onValueChange = event => {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("submitted");
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onValueChange}
              placeholder="Enter Text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
