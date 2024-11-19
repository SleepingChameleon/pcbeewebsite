import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600">
        <div className="">
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Easy Service Policy</p>
            <p className='text-gray-400'>We offer Services for your Gadgets</p>
        </div>
        <div className="">
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>30 days Warranty</p>
            <p className='text-gray-400'>We provide 30 days Warranty for your Gadgets</p>
        </div>
        <div className="">
            <img src={assets.support_image} alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Best Customer Service</p>
            <p className='text-gray-400'>We provide 24/7 Customer Support</p>
        </div>
    </div>
  )
}

export default OurPolicy