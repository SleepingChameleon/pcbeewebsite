
const SearchButton = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className="text-center">
        <p className="font-2xl font-medium text-gray-800">Find Job Order</p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className='w-full sm:flex-1 outline-none 'type="email" placeholder="Enter your Job Order" required/>
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">Find</button>
        </form>
    </div>
  )
}

export default SearchButton