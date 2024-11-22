import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestProduct from "../components/LatestProduct"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"
import SearchButton from "../components/SearchButton"

function Home() {
  return (
    <div>
        <SearchButton />
        <Hero />
        <LatestProduct />
        <BestSellers />
        <OurPolicy />
        <NewsLetterBox />
    </div>
  )
}

export default Home