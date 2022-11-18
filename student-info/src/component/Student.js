import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Student = ({ data }) => {
    const eleItem = data.map((item) => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
            </tr>
        )
    });
    
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {eleItem}
                </tbody>
            </table>
        </div>
    );
}
 
export default Student;