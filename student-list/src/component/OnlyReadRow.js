import React from 'react';

const OnlyReadRow = ({ student, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td className="d-sm-flex gap-sm-2">
                <button type="button" className="btn btn-info text-white" onClick={(event) => handleEditClick(event, student)} >Edit</button>
                <button type="button" className="btn btn-danger text-white" onClick={() => handleDeleteClick(student.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default OnlyReadRow;