import React, { Component } from 'react';
import classes from './List.module.css';


class List extends Component{
  state = {
    dropdown : 'Select Account'
  }
    render(){
        return(
            <div className={classes.List}>
               <p className={classes.ListHeading}>List of Accounts</p>
               <label>Accounts</label><br/>
               <select className={classes.Dropdown}>
                   <option>{this.state.dropdown}</option>
                   <option value="Admin">Admin</option>
                   <option value="Editor">Editor</option>
                   <option value="Merchant">Merchant</option>
                   <option value="Customer">Customer</option>
               </select>
            </div>
        );
    }    
}
export default List;

/* import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import "./styles.css";

export default function App() {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" }
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  );
}
*/