import React from 'react';
 
const StudentForm = () => {
   return (
        <form>
            <div className="form-group">
                <label className="float-left fw-semibold" for="studentInputName">Name:</label>
                <input type="name" className="form-control w-25 my-2" id="studentInputName" aria-describedby="Name" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label className="float-left fw-semibold" for="studentInputPhone">Phone:</label>
                <input type="phone" className="form-control w-25 my-2" id="studentInputPhone" aria-describedby="Phone" placeholder="Enter phone" />
            </div>
            <div className="form-group">
                <label className="float-left fw-semibold" for="studentInputEmail">Email:</label>
                <input type="email" className="form-control w-25 my-2" id="studentInputEmail" aria-describedby="Email" placeholder="Enter email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
   );
};
 
export default StudentForm;