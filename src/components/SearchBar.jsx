import React from "react";

class SearchBar extends React.Component {
  onInputChange() {
    return null;
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input type="text" name="" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
