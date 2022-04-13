import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    rows: [{}],
  };
  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = { [name]: value };
    this.setState({ rows });
  };
  addRow = () => {
    const item = {
      1: "",
      2: "",
    };
    this.setState({ rows: [...this.state.rows, item] });
  };
  removeRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    return (
      <div>
        <header>
          <div className="topContainer">12345</div>
        </header>
        <div>
          <div className="container">
            <div className="rows">
              <div className="col-md-12 column">
                <table
                  className="table table-bordered table-hover"
                  id="tab_logic"
                >
                  <thead>
                    <th className="text-center"> # </th>
                    <th className="text-center"> секция 1 </th>
                    <th className="text-center"> секция 2 </th>
                    <th />
                  </thead>
                  <tbody>
                    {this.state.rows.map((item, idx) => (
                      <tr id="addRw0" key={idx}>
                        <td>{idx}</td>
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={this.state.rows[idx].name}
                            onChange={this.handleChange(idx)}
                            className="formControl"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="mobile"
                            value={this.state.rows[idx].name}
                            onChange={this.handleChange(idx)}
                            className="formControl"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={this.removeRow(idx)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="button">
                  <button id="btn" onClick={this.addRow}>
                    добавить ряд
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
