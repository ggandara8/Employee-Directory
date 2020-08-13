import React from "react";
import NavBar from "./components/NavTabs";
import EmployeeTable from "./components/Table";
import orderBy from "lodash/orderBy";

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

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
  ],
  columnToSort: "",
  sortDirection: "desc"
  }

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
    <div>
      <NavBar />
      <EmployeeTable handleSort={this.handleSort}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                id: 1,
                name: "Name",
                phone: "Phone",
                email: "Email",
                year: "YOB",
                prop: "name"
              },
            ]} />
    </div>
    );
  }
}

export default App;
