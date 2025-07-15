import Card from "./Card"
import profilePic from "./assets/profile.jpg"

function App() {
  return(
  <>
    <Card
     image ={profilePic}
     name = "Sponge Bob"
     bio = "Lives under the sea"
    />

    <Card
     image ={profilePic}
     name = "Patrick"
     bio = "Cool ah friend"
    />

    <Card
     image ={profilePic}
     name = "Mr Krabs"
     bio = "Restro under the sea"
    />
  </>
  );
}

export default App
