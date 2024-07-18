import { Button } from "./Button"
import { Container } from "./Container"

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white relative z-20">
        <Container className="flex min-h-[--header-row-height] items-center justify-center">
          <a 
            href="/" 
            className="-ml-6 flex h-[--header-row-height] items-center px-6 font-semibold">
            Happy Birthday!<span className="sr-only">Back to Personalized</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0 z-20 text-white">
        <Container 
          className="flex min-h-[--header-row-height] justify-between items-center">
            <p className="text-md md:text-xl font-semibold">Personalized Wishes for you</p>
            <Button size="small" className="whitespace-nowrap">Wishes Here</Button>
        </Container>
      </div>
    </>

  )
}
