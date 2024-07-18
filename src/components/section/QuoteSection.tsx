import { Container } from "../Container"
import { FadeIn } from "../FadeIn"

export const QuoteSection = () => {
return(
  <Container className="relative z-10 text-xl md:text-4xl font-bold text-white space-y-12 max-w-[692px] py-36">
    <FadeIn>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </FadeIn>

    <FadeIn>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    </FadeIn>

    <FadeIn>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
    </FadeIn>
    
    <FadeIn>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    </FadeIn>
  </Container>
)
}