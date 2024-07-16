// import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Carousel } from "./components/section/Carousel"
import { Hero } from "./components/section/Hero"
import { QuoteSection } from "./components/section/QuoteSection"

function App() {

  return (
    <>
    <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <QuoteSection />
        </div>
        {/* <div>
          <Container>3 cols layout</Container>
        </div> */}
       <Carousel />
       <div className="h-[300vh]" />
      </main>
    </>
  )
}

export default App
