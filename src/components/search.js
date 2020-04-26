import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext.js';
import "./search.css"

function Search({children}){
    
    const [search, setSearch] = useState("")
    const {employees, setDisplayedEmployees} = useContext(EmployeeContext)
    
    function updateSearch({target}){
       
        const searchTerm = target.value

        setSearch(searchTerm)

        const filterResult = employees.filter(function(employee){

            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })
        setDisplayedEmployees([...filterResult])
    }
    
    return(
        <div>
        <label>Enter to search:  </label>
        <hr />
        <input type="text" onChange= {updateSearch} value={search}></input>
        </div>
    )
}
export default Search;