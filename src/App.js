import React, {useState} from 'react';

import ResultList from "./components/ResultList";
import { EmployeeContext } from "./components/EmployeeContext"
import "./App.css";

function App() {

    const [employees, setEmployees] = useState([]);
    const [displayedEmployees, setDisplayedEmployees] = useState([])

  return (
    <div className="container-table">
         <EmployeeContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
        
        <ResultList />

        </EmployeeContext.Provider>
    </div>
  );
}

export default App;