import "./styles.css";
import { Component } from "react";
import Header from "./Header";
import List from "./List";

class App extends Component {
  state = {
    choices: [
      { id: "a1", name: "Kosher", selected: false },
      { id: "a2", name: "No Celery (inc celeriac)", selected: false },
      { id: "a3", name: "No Egg", selected: false },
    ],
    selectAll: { name: "Select All", selected: false },
  };

  handleSelectAll = (e) => {
    if (e.target.checked === true) {
      this.setState({ selectAll: { ...this.state.selectAll, selected: true } });

      const newChoices = [...this.state.choices];
      newChoices.forEach((obj) => {
        obj.selected = true;
      });
      this.setState({ newChoices });
    } else {
      this.setState({
        selectAll: { ...this.state.selectAll, selected: false },
      });
      const newChoices = [...this.state.choices];
      newChoices.forEach((obj) => {
        obj.selected = false;
      });
      this.setState({ newChoices });
    }
  };

  handleSelect = (e) => {
    const newChoices = [...this.state.choices];
    newChoices.forEach((obj) => {
      if (obj.name === e.target.name) {
        obj.selected = !obj.selected;
      }
    });
    this.setState(newChoices);

    this.checkAllSelected();
  };

  handleClear = () => {
    this.setState({
      selectAll: { ...this.state.selectAll, selected: false },
    });
    const newChoices = [...this.state.choices];
    newChoices.forEach((obj) => {
      obj.selected = false;
    });
    this.setState({ newChoices });
  };

  checkAllSelected = () => {
    let allChecked = true;
    this.state.choices.forEach((obj) => {
      if (obj.selected === false) {
        allChecked = false;
      }
    });
    if (allChecked) {
      this.setState({
        selectAll: { ...this.state.selectAll, selected: true },
      });
    } else {
      this.setState({
        selectAll: { ...this.state.selectAll, selected: false },
      });
    }
  };

  render() {
    return (
      <>
        <Header state={this.state} />
        <List
          state={this.state}
          handleSelect={this.handleSelect}
          handleSelectAll={this.handleSelectAll}
        />
        <button onClick={this.handleClear}>Clear All</button>
      </>
    );
  }
}

export default App;
