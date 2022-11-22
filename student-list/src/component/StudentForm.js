import React, { useState } from 'react';
 
const StudentForm = ({ studentListData, setStudents }) => {

    // Set state
    const [ studentInfo, setStudentInfo ] = useState({
        name: "",
        phone: "",
        email: "",
    });

    // Event: Add new data
    const handleAddClick = (studentInfo) => {
      setStudents([...studentListData, studentInfo]);
    };

    // Event: input - onChange
    const handleChange = (event) => {
        setStudentInfo({ ...studentInfo, [event.target.name]: event.target.value });
    };

    // Event: Submit
    const onSubmit = (event) => {
        // display form data on submit
        event.preventDefault();
        console.log(studentInfo);
        handleAddClick(studentInfo);
        setStudentInfo({ name: "", phone: "", email: "" });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label className="float-left fw-semibold" htmlFor="studentInputName">Name:</label>
                <input name="name" className="form-control w-25 my-2" id="studentInputName" aria-describedby="Name" placeholder="Enter name" value={studentInfo.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label className="float-left fw-semibold" htmlFor="studentInputPhone">Phone:</label>
                <input name="phone" className="form-control w-25 my-2" id="studentInputPhone" aria-describedby="Phone" placeholder="Enter phone" value={studentInfo.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label className="float-left fw-semibold" htmlFor="studentInputEmail">Email:</label>
                <input name="email" className="form-control w-25 my-2" id="studentInputEmail" aria-describedby="Email" placeholder="Enter email" value={studentInfo.email} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
   );
};
 
export default StudentForm;