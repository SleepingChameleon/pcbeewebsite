import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestProduct from "../components/LatestProduct"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"

function Home() {
  return (
    <div>
        <Hero />
        <LatestProduct />
        <BestSellers />
        <OurPolicy />
        <NewsLetterBox />
    </div>
  )
}

export default Home