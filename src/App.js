import React from "react";
import SearchAppBar from "./components/NavTabs";
import EmployeeTable from "./components/Table";

class App extends React.Component {
  state = {
    data:[
    {
      id: 1,
      name: "John Miller",
      phone: 7654328787,
      email: "miller@email.com",
      year: 1983
    },
    {
      id: 2,
      name: "Lisa Smith",
      phone: 7654328654,
      email: "lisa@email.com",
      year: 1987
    },
    {
      id: 3,
      name: "Anthony Sacre",
      phone: 7654228764,
      email: "sacre@email.com",
      year: 1990
    },
    {
      id: 4,
      name: "Elizabeth Cabrera",
      phone: 2324788654,
      email: "cabrera@email.com",
      year: 1982
    },
    {
      id: 5,
      name: "Ricky Bobby",
      phone: 8886537878,
      email: "rbobby@email.com",
      year: 1977
    }
  ]
  }

  render() {
    return (
    <div>
      <SearchAppBar />
      <EmployeeTable data={this.state.data} />
    </div>
    );
  }
}

export default App;
