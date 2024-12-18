import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis pariatur animi quisquam modi illum ad, quia obcaecati temporibus harum amet ab 
            magnam nisi reiciendis provident hic velit ipsam voluptates. Vitae.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nobis modi assumenda nam quod aliquid molestiae, cupiditate velit,
            ad beatae at tempora placeat cum, sunt vel quisquam atque harum. Cum, fugiat.
          </p>
          <b className="text-gray-800">Our Mission and Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Architecto, nulla earum veritatis tenetur quibusdam, eaque 
            porro enim totam saepe culpa ullam quasi obcaecati quae, 
            maiores illum natus minus accusamus? Eum.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'OUR'} text2={'SERVICES'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Ram Upgrade:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla iste impedit iure reiciendis sapiente quibusdam quae qui 
            perspiciatis! Cumque, deleniti. Optio, quas vel eius totam enim 
            quasi accusamus ratione porro.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Cleaning:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla iste impedit iure reiciendis sapiente quibusdam quae qui 
            perspiciatis! Cumque, deleniti. Optio, quas vel eius totam enim 
            quasi accusamus ratione porro.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>LCD Change:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla iste impedit iure reiciendis sapiente quibusdam quae qui 
            perspiciatis! Cumque, deleniti. Optio, quas vel eius totam enim 
            quasi accusamus ratione porro.
          </p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About