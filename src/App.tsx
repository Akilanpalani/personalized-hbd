import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Hero } from "./components/section/Hero"

function App() {

  return (
    <>
    <Header />
      <main>
        <Hero />
        <div>
        <Container> Hero Component</Container> 
        </div>
        <div>
          <Container>3 cols layout</Container>
        </div>
        <div>
          <Container>arousal layout</Container>
        </div>
      </main>
    </>
  )
}

export default App
