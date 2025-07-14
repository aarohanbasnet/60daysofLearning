import profilePic from "./assets/profile.jpg"

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile-pic" className="pfp-img"></img>
            <h2 className="name">Aarohan Basnet</h2>
            <p className="bio">Learing component in React JS</p>
        </div>
    );
}

export default Card;