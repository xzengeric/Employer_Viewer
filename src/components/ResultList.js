import React, { useState, useContext } from 'react';
import { useGet } from "../utils/API.js"
import { EmployeeContext } from './EmployeeContext.js';
import Btn from "./Btn.js"
import "./ResultList.css"

function Table() {

    const [url] = useState("https://randomuser.me/api/?results=10")
    // custom hook used for getting the employees from the api and storing the sort functions
    const { sortFunc } = useGet(url);
    // contains the employees to display in the table
    const { displayedEmployees} = useContext(EmployeeContext)

    return (

        <table className="table">
            <thead>
                <tr className="table-head">
                    <td onClick={() => sortFunc("firstname")}><Btn>First Name</Btn></td>
                    <td onClick={() => sortFunc("lastname")}><Btn>Last Name</Btn></td>
                    <td >Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc("age")}><Btn>Age</Btn></td>
                </tr>
            </thead>
            <tbody className="table">
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;