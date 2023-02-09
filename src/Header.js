import { Component } from "react";
class Header extends Component {
  render() {
    const { choices } = this.props.state;

    let str = "";
    choices.forEach((obj) => {
      if (obj.selected) {
        str += obj.name + ",";
      }
    });

    str = str.substring(0, str.length - 1);

    return (
      <div className="header">
        Selected Value: <p>{str}</p>
      </div>
    );
  }
}
export default Header;
