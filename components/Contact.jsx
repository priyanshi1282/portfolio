import Heading from "./Heading"
import Image from "next/image"

const Contact = () => {
  return (
    <section>
        <Heading title="Contact Me!" />
        <div className="flex">
            <div>
                <Image src="/" width={500} height={500} />
            </div>
            <div>
                <form>
                    {/* row1 */}
                    <div className="flex gap-4 flex-wrap">
                        {/* item */}
                        <div className="flex flex-col gap-2 bg-white rounded-md px-4 py-2 shadow">
                            <label className="text-sm font-semibold">Name<span className="text-red-500">*</span></label>
                            <input type="text" required placeholder="Enter your name" className="outline-none" />
                        </div>
                        {/* item */}
                        <div className="flex flex-col gap-2 bg-white rounded-md px-4 py-2 shadow">
                            <label className="text-sm font-semibold">Email<span className="text-red-500">*</span></label>
                            <input type="email" required placeholder="Enter your email" className="outline-none " />
                        </div>
                    </div>

                    {/* row2 */}
                    <div className="flex flex-col gap-2 bg-white rounded-md px-4 py-2 shadow mt-4">
                            <label className="text-sm font-semibold">Message<span className="text-red-500">*</span></label>
                            <textarea cols="30" rows="3" required placeholder="Enter your message" className="outline-none "></textarea>
                    </div>
                    
                    {/* row3 */}
                    <button className='btn btn-bg hover mt-4'>Send</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact