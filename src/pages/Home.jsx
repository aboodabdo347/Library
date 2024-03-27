import Intro from "../components/Intro"
import About from "../components/About"
import Discover from "../components/Discover"

const Home = (props) => {
  return (
    <div>
      <Intro />
      <About />
      <Discover user={props.user} />
    </div>
  )
}

export default Home
