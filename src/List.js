import { Component } from "react";
import Choice from "./Choice";
class List extends Component {
  render() {
    const { handleSelectAll, handleSelect } = this.props;
    const { choices } = this.props.state;
    const { selected } = this.props.state.selectAll;

    return (
      <>
        <label>
          <input
            type="checkbox"
            name="selectAll"
            checked={selected}
            onChange={handleSelectAll}
          />
          Select All
        </label>

        {choices.map((obj) => {
          return <Choice key={obj.id} {...obj} handleSelect={handleSelect} />;
        })}
      </>
    );
  }
}
export default List;
