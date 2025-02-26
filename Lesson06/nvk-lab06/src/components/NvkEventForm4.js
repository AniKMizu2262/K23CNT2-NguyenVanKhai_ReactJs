import React, { Component } from "react";

class NvkEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nvkHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        let selected = [...this.state.nvkSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            nvkSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    nvkHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.nvkSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nvkSelectCheckBox.includes("Apple")}
              onChange={this.nvkHandleCheckboxChange}
            />

            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nvkSelectCheckBox.includes("Banana")}
              onChange={this.nvkHandleCheckboxChange}
            />

            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nvkSelectCheckBox.includes("Orange")}
              onChange={this.nvkHandleCheckboxChange}
            />

            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.nvkHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NvkEventForm4;