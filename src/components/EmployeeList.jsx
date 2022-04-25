

 import axios from "axios";
 import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './emp.css'

export const EmployeeList = () => {
   
  const [employee,setEmployee]=useState([]);
  useEffect(()=>{
      axios.get('http://localhost:8080/employee').then(({data})=>{
        setEmployee(data)
      });
  },[]);


  return (
    <div className="list_container">
      {employee.map((e)=>{
return(
  <Link to={`/employee/${e.id}`} className="employee_card">
     <img className="employee_image" src= {e.image} />
        <div className="employee_name">`<h3 >Name</h3>{e.employee_name}`</div>
        <div className="employee_title"><h3>Title</h3>{e.title}</div>
      </Link>
)
      })}
      {/* On clicking this card anywhere, user goes to user details */}
      
    </div>
  );
};