import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img src={assets.logo} className='mb-5 w-20' alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quae ad labore ducimus est id consequuntur omnis ea, rem aliquid nostrum magni a. Sapiente eaque neque culpa quasi, ea sequi?
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+69-9458822192</li>
                    <li>hotdog.example@.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ Software Engineering.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer