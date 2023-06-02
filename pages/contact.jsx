import React from 'react'

const contact = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-200px)] bg-black">
      {/* header */}
      <h2 className="text-5xl text-center pb-16 text-[#BE8DE7] mt-48">Contact Us</h2>
      {/* form */}
      <div>
        <form className="flex flex-col max-w-[90vw] w-[800px] p-6 gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-white p-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-2 text-base"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-white p-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white  p-2">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              
              placeholder=""
              className="p-2 text-base h-48"></textarea>
          </div>
          <button type="button" className=" bg-blue-400 text-white  py-2 self-end px-7">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default contact
