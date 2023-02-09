import React, { Component } from "react";

class Choice extends Component {
  render() {
    const { name, selected, handleSelect } = this.props;

    return (
      <label>
        <input
          type="checkbox"
          name={name}
          checked={selected}
          onChange={handleSelect}
        />
        {name}
      </label>
    );
  }
}

export default Choice;
