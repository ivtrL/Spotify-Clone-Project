import ActuallyListeningBar from "./components/ActuallyListeningBar"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Playlists from "./components/Playlists"
import Profile from "./components/Profile"
import Login from "./components/Login"

function App() {

  return (
    <div>
      <Login/>
      <Navbar/>
      <Playlists/>
      <ActuallyListeningBar/>
      <Profile/>
      <Home/>
    </div>
  )
}

export default App
