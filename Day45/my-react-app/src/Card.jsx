import profilePic from "./assets/profile.jpg"

function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt="profile-pic" className="pfp-img"></img>
            <h2 className="name">{props.name}</h2>
            <p className="bio">{props.bio}</p>
        </div>
    );
}

export default Card;