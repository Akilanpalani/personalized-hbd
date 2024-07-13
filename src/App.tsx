import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Hero } from "./components/section/Hero"
import { QuoteSection } from "./components/section/QuoteSection"

function App() {

  return (
    <>
    <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <QuoteSection />
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
