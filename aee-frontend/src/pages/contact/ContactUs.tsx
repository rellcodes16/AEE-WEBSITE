function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="p-8">
          {/* <h2 className="text-sm uppercase tracking-widest text-center mb-2 text-gray-600">AGRICULTURAL AND ENVIRONMENTAL ENGINEERING</h2> */}
          <h1 className="text-4xl font-semibold text-center mb-8 text-gray-700">CONTACT US</h1>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border rounded-md focus:outline-none border-gray-400 focus:ring-2 focus:ring-black"/>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md focus:outline-none border-gray-400 focus:ring-2 focus:ring-black"/>
            <input type="text" placeholder="Subject" className="w-full px-4 py-3 border rounded-md focus:outline-none border-gray-400 focus:ring-2 focus:ring-black"/>
            <textarea placeholder="Message..." rows={5} className="w-full px-4 py-3 border rounded-md focus:outline-none border-gray-400 focus:ring-2 focus:ring-black"></textarea>
            <button type="submit" className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">Submit</button>
          </form>
        </div>
        <div className="hidden md:block">
          <img src="contact-image.png" alt="contact-us" className="w-[70%] h-[70%] mt-24 pl-7 rounded-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
