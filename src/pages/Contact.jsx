import React, { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


import { IoReload } from "react-icons/io5";
import {  Slide } from "react-awesome-reveal";
const Contact = () => {
  const[show,setShow]=useState(false)
  const[value,setvalue]=useState("")
     const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, msg);

  }
    console.log(show)
     console.log(value);
  return (
    <div className="flex justify-center" id="contact">
      <Slide>
        <div className="my-10 max-w-3xl rounded-xl overflow-hidden shadow-xl">
          <p className="text-center text-3xl my-5  font-serif">Contact Me</p>
          <hr />
          <div className="px-6 py-4">
            <div className="flex justify-center  gap-2 items-center">
              <div className="flex flex-wrap justify-center">
                <img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="h-64 w-54 my-10"
                />

                {!show ? (
                  <>
                    <div className="flex flex-col mx-5">
                      <div className="flex gap-3">
                        <span className="text-xl">Contact With</span>
                        <a
                          className="cursor-pointer"
                          href="https://www.linkedin.com/in/kushagra-tiwari-aa2354283"
                        >
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a
                          className="cursor-pointer "
                          href="https://github.com/Kushagra1122/"
                        >
                          <BsGithub size={30} className="ms-2 " />
                        </a>
                        <a
                          className="cursor-pointer"
                          href="https://www.instagram.com/_kushagra__23/"
                        >
                          <BsInstagram color="red" size={30} className="ms-2" />
                        </a>
                      </div>
                      <br />

                      <form onSubmit={handleSubmit}>
                        <div>
                          <label className="block font-semibold" htmlFor="name">
                            Name
                          </label>
                          <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black  p-2 border-none block  text-black"
                            id="name"
                            type="text"
                            name="name"
                            required="required"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                          />
                        </div>
                        <div>
                          <label
                            className="block font-semibold"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black  p-2 border-none block  text-black"
                            id="email"
                            type="email"
                            name="email"
                            required="required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block font-semibold" htmlFor="name">
                            Message
                          </label>
                          <textarea
                            className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black p-2 border-none block  text-black"
                            id="msg"
                            type="text"
                            name="mesesage"
                            required="required"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <button
                            type="submit"
                            className="flex items-center justify-center  border border-transparent text-base font-medium rounded-xl text-white hover:bg-indigo-700 p-2 bg-red-400"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                ) : (
                  <div className=" flex flex-col gap-2 items-center">
                    <span className="text-2xl p-8 ">{value}</span>

                    <span
                      className="cursor-pointer text-3xl pb-10"
                      onClick={() => window.location.reload()}
                    >
                      <IoReload />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;
