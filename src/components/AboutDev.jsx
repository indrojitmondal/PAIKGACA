import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaSkype, FaVideo, FaWhatsapp } from "react-icons/fa6";

const AboutDev = () => {
    return (
        <div className='w-11/12 md:w-10/12 bg-about py-10 mx-auto'>

            <div className='about-conatiner pb-12 w-full h-auto grid gap-6 grid-cols-1 lg:grid-cols-12 lg:grid-rows-12'>
                {/* left */}
                <div className="about-left border rounded-b-md shadow-md lg:col-span-4 lg:row-span-12">
                    <img
                        src="https://indrojitmondal.netlify.app/images/indrojit@ku.jpg"
                        className="w-full rounded-sm"
                        alt="Indrojit Mondal"
                    />

                    <div className="w-full text-center">
                        <h1 className="text-2xl pt-4">
                            <span>Indrojit</span> <span>Mondal</span>
                        </h1>
                        <span className="text-primary">indro.cse.bu</span>
                        @
                        <span className="text-primary">gmail.com</span>
                        <p className="pb-2 text-lg">Programmer | MERN Stack Developer</p>

                        <div className="flex gap-3 justify-center pb-2">
                            <button className="block bg-primary text-white text-lg px-2">
                                <a
                                    href="https://docs.google.com/document/d/1hqWNarSvcF79h_sEN9XZyhvHr8jmTnX9z1vCtVR523A/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </button>
                            <button className="block bg-primary text-white text-lg px-2">
                                <a
                                    href="assests/Indrojit_MondalCV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CV
                                </a>
                            </button>
                        </div>

                        <div className="contactme pb-2">
                            <div className="flex justify-center gap-3">
                                <a
                                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com"
                                    title="Email"
                                    className="block"
                                >
                                    {/* <i className="fa-solid fa-envelope text-3xl hover:text-primary"></i>
                                    */}
                                    <MdOutlineMail className='text-3xl hover:text-primary' />
                                </a>

                                <a
                                    href="https://github.com/indrojitmondal"
                                    title="Github"
                                    className="block"
                                >
                                    {/* <i className="fa-brands fa-github text-3xl hover:text-primary"></i>
                                  */}
                                    <FaGithub className='text-3xl hover:text-primary'/>
                                
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/indrojit-mondal-8a36b315a/"
                                    title="Linkedin"
                                    className="block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <i className="fa-brands fa-linkedin text-3xl hover:text-primary"></i>
                                     */}
                                    <FaLinkedin className='text-3xl hover:text-primary'></FaLinkedin>
                                </a>

                                <a
                                    href="https://join.skype.com/invite/q7lfzaKU09hL"
                                    title="Skype"
                                    className="block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <i className="fa-brands fa-skype text-3xl hover:text-primary"></i>
                                     */}
                                    <FaSkype className='text-3xl hover:text-primary'
                                    ></FaSkype>
                                </a>

                                <a
                                    href="https://meet.google.com/vzp-rcgn-mhe"
                                    title="Google Meet"
                                    className="block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* <i className="fas fa-video text-3xl lg:text-3xl hover:text-primary"></i>
                                    */}
                                   <FaVideo className='text-3xl lg:text-3xl hover:text-primary'></FaVideo>
                               
                                </a>

                                <a
                                    href="https://wa.me/8801966796110"
                                    title="WhatsApp"
                                    className="block"
                                >
                                    {/* <i className="fa-brands fa-whatsapp text-3xl hover:text-primary"></i>
                                  */}
                                    <FaWhatsapp className='text-3xl hover:text-primary'
                                    ></FaWhatsapp>
                                </a>
                            </div>
                        </div>

                        <hr />
                    </div>

                    <div className="progrss p-2">
                        <p className="text-justify text-base">
                            As a programmer, web developer, and problem solver, I specialize in HTML,
                            CSS, JavaScript, and the MERN stack. I build responsive, user-friendly
                            websites and solve complex technical challenges through efficient
                            programming.
                        </p>

                        <div className="Working-Interest">
                            <div className="pt-2 pb-1">
                                <i className="fa-solid fa-computer"></i>
                                <h1 className="inline-block font-medium">Working Interest:</h1>
                            </div>

                            <div className="pl-20">
                                <div className="flex items-center">
                                    <h2>✓ Web Application Development</h2>
                                </div>

                                <div className="flex items-center">
                                    <a
                                        href="https://www.leewayhertz.com/what-is-custom-software-development/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <h2>✓ Custom Software Development</h2>
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <h2>✓ Mobile Application Development</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ Quality Assurance & Testing</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ DevOps Engineering</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ Cybersecurity</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ Computer Networking</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ Machine Learning</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ Robotics</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ Internet of Things(IoT)</h2>
                                </div>
                                <div className="flex items-center">
                                    <h2>✓ Embedded Systems</h2>
                                </div>
                            </div>
                        </div>

                        

                        <div className="LivesIn">
                            <div className="pt-3 pb-1">
                                <i className="fa-solid fa-house"></i>
                                <h1 className="inline-block font-medium">Home: </h1>
                                <a
                                    href="https://maps.app.goo.gl/SoqjTH11UWKLgeRc6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Paikgacha, Khulna, Bangladesh
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="about-right p-4 border rounded-sm border-gray-300 lg:col-span-8 lg:row-span-12">
                    {/* About Me Heading */}
                    <h1 className="text-black relative mt-3 mb-3 font-bold">
                        About Me
                        <span className="absolute left-0 bottom-0 w-[70px] h-[2px] bg-primary"></span>
                    </h1>

                    <p className="text-justify text-base">
                        I am a passionate software engineer building innovative software solutions. I completed my Bachelor's degree in{" "}
                        <span className="text-primary">Computer Science and Engineering (CSE)</span> from the{" "}
                        <a href="https://bu.ac.bd/" className="text-primary hover:underline">
                            University of Barishal
                        </a>
                        . With over 1 year of experience working with ReactJS and NodeJS and 400+ problem-solving tasks involving math,
                        algorithms, and data structures, I am actively seeking a software engineering role where I can apply my technical
                        skills to real-world challenges.
                    </p>

                    {/* Icons Section */}
                    <div className="flex flex-col md:flex-row gap-8 justify-between my-8">
                        <img src="https://indrojitmondal.netlify.app/icon/Layer_1.png" className="h-44 block" title="Professional Coder" alt="" />
                        <img src="https://indrojitmondal.netlify.app/icon/reactjs.png" className="h-44 block" title="ReactJS" alt="" />
                        <img src="https://indrojitmondal.netlify.app/images/1713456677748.jpeg" className="h-44 block" title="Real Life Problem Solution" alt="" />
                    </div>

                    <h2 className="pb-2 text-justify text-base">
                        My areas of expertise include <span className="text-primary">ReactJS, NodeJS, and MongoDB</span>. In my free time,
                        I enjoy solving problems on LeetCode and Codeforces to enhance my skills. My problem-solving profiles are given
                        below.
                    </h2>

                    {/* Problem Solving Links */}
                    <div className="flex gap-2 md:gap-5 pt-3">
                        <a href="https://leetcode.com/u/user6457sK/" target="_blank" rel="noreferrer" className="block text-primary hover:underline">
                            <img src="https://indrojitmondal.netlify.app/images/leetcode.png" className="w-11 h-11" alt="LeetCode" />
                            LeetCode
                        </a>
                        <a href="https://codeforces.com/profile/Zerotoinfinity" target="_blank" rel="noreferrer" className="block text-primary hover:underline">
                            <img src="https://indrojitmondal.netlify.app/images/codeforces.png" className="w-11 h-11" alt="Codeforces" />
                            Codeforces
                        </a>
                        <a href="https://uhunt.onlinejudge.org/id/774977" target="_blank" rel="noreferrer" className="block text-primary hover:underline">
                            <img src="https://indrojitmondal.netlify.app/images/uvaonline.jpeg" className="w-11 h-11" alt="Uva Online Judge" />
                            Uva Online Judge
                        </a>
                    </div>

                    {/* Skills Section */}
                    <div className="skills">
                        <h1 className="text-black relative mt-3 mb-3 font-bold">
                            SKILLS
                            <span className="absolute left-0 bottom-0 w-[50px] h-[2px] bg-primary"></span>
                        </h1>

                        <p className="text-justify text-base">
                            With a focus on continuous learning and innovation, I stay up-to-date with the latest technologies to deliver
                            top-quality solutions across my projects. I continuously strive to improve my expertise across various domains
                            of web development and programming. Below is a visual representation of my current proficiency in key skills:
                        </p>

                        <div className="w-full lg:w-1/2 pl-11 pt-6">
                            {[
                                { name: "HTML/CSS", value: 90 },
                                { name: "JavaScript", value: 80 },
                                { name: "ReactJS", value: 75 },
                                { name: "NodeJS/C++/Java/Python", value: 70 },
                                { name: "Problem Solving", value: 70 },
                                { name: "Responsive Design", value: 85 },
                                { name: "Version Control (Git)", value: 75 },
                            ].map((skill) => (
                                <div key={skill.name} className="mb-4">
                                    <div className="w-full flex justify-between">
                                        <h2>{skill.name}</h2>
                                        <h2>{skill.value}%</h2>
                                    </div>
                                    <progress className={`progress progress-${skill.value > 80 ? "info" : skill.value > 70 ? "primary" : "success"} w-full`} value={skill.value} max="100"></progress>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default AboutDev;