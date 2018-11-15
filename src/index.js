import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", text: "", priority: "2", checked: false };
  }

  reset = () => {
    this.setState({
      title: "",
      text: "",
      priority: "2",
      modified: "",
      checked: false
    });
  };

  changeText = event => {
    this.setState({ text: event.target.value });
  };

  changeTitle = event => {
    this.setState({ title: event.target.value });
  };

  submit = () => {
    console.log("Submitted:", JSON.stringify(this.state));
    this.reset();
  };

  closeTask = event => {
    let date = event.target.checked ? new Date().toLocaleString() : "";
    this.setState({ modified: date });
  };

  changePriority = event => {
    this.setState({ priority: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <form>
          <h1>Hello CodeSandbox</h1>
          <div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.changeTitle}
            />
            <textarea value={this.state.text} onChange={this.changeText} />
            <select value={this.state.priority} onChange={this.changePriority}>
              <option value="1">Urgente</option>
              <option value="2">Normal</option>
              <option value="3">Faible</option>
            </select>
            <input type="text" readOnly value={this.state.modified} />
            <input
              type="checkbox"
              value={this.state.checked}
              onChange={this.closeTask}
            />
            <input type="button" value="reset" onClick={this.reset} />
          </div>
          <input type="button" value="Submit" onClick={this.submit} />
        </form>

        {JSON.stringify(this.state)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
