import 'bootstrap/dist/css/bootstrap.min.css';

const alertStyle = {
    position: 'absolute'
}

function AlertComponent(props) {
    return (
        <div class="alert alert-warning" role="alert" style={alertStyle}>{props.message}</div>
    );
}
 
export default AlertComponent;