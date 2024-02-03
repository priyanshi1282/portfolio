"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Heading from "./Heading"
import Image from "next/image"
import { IoSendSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Contact = ({ serviceId, templateId, publicApiKey }) => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            to_name: "Priyanshi",
            message: formData.message,
        };
        const toastId = toast.loading("Loading...");
        emailjs
            .send(serviceId, templateId, templateParams, publicApiKey)
            .then((response) => {
                toast.dismiss(toastId);
                toast.success("Message Sent!");
                console.log("Sent Successful", response);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                toast.dismiss(toastId);
                toast.error("Error Occurred!");
                console.error("Error : ", error);
            });

    };

    return (
        <section id="contact">
            <Heading title="Contact Me!" />
            <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-10">
                <div className="overflow-hidden rounded-full">
                    <Image src="https://ik.imagekit.io/priyanshi/Portfolio/avatar.jpeg?updatedAt=1706277685939" width={500} height={500} className="rounded-full w-[250px] md:w-[320px] hover" />
                </div>
                <div>
                    <form className="flex flex-col gap-y-4" onSubmit={sendEmail}>
                        {/* row1 */}
                        <div className="flex gap-4 md:flex-row flex-col">
                            {/* item */}
                            <div className="flex flex-col gap-2 bg-white rounded-md px-4 py-2 shadow">
                                <label className="text-sm font-semibold">Name<span className="text-red-500">*</span></label>
                                <input type="text" required placeholder="Enter your name" className="outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            {/* item */}
                            <div className="flex flex-col gap-2 bg-white rounded-md px-4 py-2 shadow">
                                <label className="text-sm font-semibold">Email<span className="text-red-500">*</span></label>
                                <input type="email" required placeholder="Enter your email" className="outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                        </div>

                        {/* row2 */}
                        <div className="flex flex-col gap-2 bg-white rounded-md px-4 py-2 shadow">
                            <label className="text-sm font-semibold">Message<span className="text-red-500">*</span></label>
                            <textarea cols="30" rows="3" required placeholder="Enter your message" className="outline-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                        </div>

                        {/* row3 */}
                        <button type="submit" className='btn btn-bg hover w-fit'>Send <IoSendSharp /></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact