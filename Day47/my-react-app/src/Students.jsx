import propTypes from "prop-types"

function Students(props){
    return(<div className="student">
        <p>Name : {props.name}</p>
        <p>age : {props.age}</p>
        <p>Student : {props.isStudent ? "Yes" : "No"}</p>
    </div>
    );
}

Students.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool,
}

Students.defaultProps ={
    name : "Guest",
    age : 0,
    isStudent : false,

}

export default Students
