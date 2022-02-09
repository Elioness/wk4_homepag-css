import './App.css';
import { Navigation, Hero, LatestNews, WorldNews, LocalNews, Footer } from "./components"

function App() {
  return (
    // Add a className to each div
    // Go the App.css and write the styles there
    <div>
      <Navigation/>
      <Hero/>
      <div>
        <LatestNews/>
        <WorldNews/>
        <LocalNews/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
