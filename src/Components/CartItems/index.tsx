import React, { useState } from "react";
import { RootState } from '../../data/store'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './index.css'



export default function CartItems(){
  const {coursesData}=useSelector((state:RootState)=> state.courses)
  const addedElements= coursesData?.filter((course)=>course.isAdded === true)
  const [AddedElements,setAddedElements]=useState(addedElements)
  function removeCartItem(courseId: number,isAdded:boolean, type:'remove') {
    const newAddedElements= AddedElements.filter((course:any) =>course.id != courseId)
     setAddedElements(newAddedElements)
     return(
      toast.success(`Cart item ${type}ed successfully`,{position:"top-center"})
      
     )
    }
 return (
    
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {AddedElements?.map((course:any) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.duration}</td>
                  <td>{course.price}TND</td>
                  <td className="remove">
                    <div>
                        <FontAwesomeIcon 
                        icon={faTrashCan} 
                        className="text-danger" 
                        style={{color: "#a30000",cursor: 'pointer'}} 
                        onClick={() => removeCartItem(course.id,course.isAdded, 'remove')} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


  );
};

