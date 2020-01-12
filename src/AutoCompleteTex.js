import React, { Component } from "react";
import "./AutoComleted.css";

class AutoCompleteTex extends Component {
  //   items = ["suribau", "path", "sara", "jase"];
  state = {
    suggestions: [],
    text: "",
    showItems: false
  };
  onTextChange = e => {
    const { items } = this.props;
    const value = e.target.value;
    // console.log(value)
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };
  renderSuggestion() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }
  suggestionSelected = value =>
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <div className="AutoComleted">
        <form onSubmit={this.handleSubmit}>
          <input value={text} onChange={this.onTextChange} text="text" />
          {/* <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}>co</span> */}
        
        </form>
        {this.renderSuggestion()}
        <div className="button">
            <button className="button_one" onClick={this.handleSubmit}>save</button>
            <button  className="button_two">clear</button>
          </div>
      </div>
    );
  }
}

export default AutoCompleteTex;
