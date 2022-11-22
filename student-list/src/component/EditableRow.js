import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick, handleEditFormSubmit }) => {
    return (
        <tr>
            <td>
                <input name="name" className="form-control" id="studentInputName" aria-describedby="Name" value={editFormData.name} onChange={handleEditFormChange} />
            </td>
            <td>
                <input name="phone" className="form-control" id="studentInputPhone" aria-describedby="Phone" value={editFormData.phone} onChange={handleEditFormChange} />
            </td>
            <td>
                <input name="email" className="form-control" id="studentInputEmail" aria-describedby="Email" value={editFormData.email} onChange={handleEditFormChange} />
            </td>
            <td className="d-sm-flex gap-sm-2">
                <button type="button" className="btn btn-success text-white" onClick={(event) => {handleEditFormSubmit(event)}}>Save</button>
                <button type="button" className="btn btn-dark text-white" onClick={() => {handleCancelClick()}}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow;