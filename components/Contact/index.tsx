import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Are You a Freelancer Looking for Work?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Share your skills and experience below to start getting matched with the right projects.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Native Place 
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter with Country Code"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
    Marital Status
  </label>
  <div className="flex items-center space-x-6">
    <label className="flex items-center text-sm font-medium text-body-color dark:text-white">
      <input
        type="radio"
        name="marital status"
        value="married"
        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-2 rounded-sm border bg-[#f8f8f8] text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
      Married
    </label>
    <label className="flex items-center text-sm font-medium text-body-color dark:text-white">
      <input
        type="radio"
        name="marital status"
        value="unmarried"
        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-2 rounded-sm border bg-[#f8f8f8] text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
      Unmarried
    </label>
    <label className="flex items-center text-sm font-medium text-body-color dark:text-white">
      <input
        type="radio"
        name="marital status"
        value="other"
        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-2 rounded-sm border bg-[#f8f8f8] text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
      Other
    </label>
  </div>
</div>

                  </div>

                       <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Current Location
                      </label>
                      <input
                        type="text"
                        placeholder="please specify address"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>

                 <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>
                  
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Years of Experience
                      </label>
                      <input
                        type="text"
                        placeholder="Enter 0 if fresher"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        College Name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>


                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        College Location
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Course Details
                      </label>
                      <input
                        type="text"
                        placeholder="BE/Btech/MCA Etc"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>


                  



                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Year of Passing
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
    Gender
  </label>
  <div className="flex items-center space-x-6">
    <label className="flex items-center text-sm font-medium text-body-color dark:text-white">
      <input
        type="radio"
        name="gender"
        value="male"
        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-2 rounded-sm border bg-[#f8f8f8] text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
      Male
    </label>
    <label className="flex items-center text-sm font-medium text-body-color dark:text-white">
      <input
        type="radio"
        name="gender"
        value="female"
        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-2 rounded-sm border bg-[#f8f8f8] text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
      Female
    </label>
    <label className="flex items-center text-sm font-medium text-body-color dark:text-white">
      <input
        type="radio"
        name="gender"
        value="other"
        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-2 rounded-sm border bg-[#f8f8f8] text-body-color focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
      />
      Other
    </label>
  </div>
</div>

                  </div>

                  
<div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
  <label
    htmlFor="primarySkill"
    className="mb-3 block text-sm font-medium text-dark dark:text-white"
  >
    Primary Skills and Technology
  </label>
  <select
    id="primarySkill"
    name="primarySkill"
    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
  >
    <option value="">-- Select Primary Skill --</option>
    <option value="javascript">JavaScript</option>
    <option value="typescript">TypeScript</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
    <option value="csharp">C#</option>
    <option value="cpp">C++</option>
    <option value="react">React</option>
    <option value="nextjs">Next.js</option>
    <option value="angular">Angular</option>
    <option value="vuejs">Vue.js</option>
    <option value="nodejs">Node.js</option>
    <option value="expressjs">Express.js</option>
    <option value="mongodb">MongoDB</option>
    <option value="sql">SQL</option>
    <option value="postgresql">PostgreSQL</option>
    <option value="firebase">Firebase</option>
    <option value="aws">AWS</option>
    <option value="azure">Azure</option>
    <option value="docker">Docker</option>
    <option value="kubernetes">Kubernetes</option>
    <option value="flutter">Flutter</option>
    <option value="reactnative">React Native</option>
    <option value="tensorflow">TensorFlow</option>
    <option value="pytorch">PyTorch</option>
    <option value="figma">Figma</option>
    <option value="photoshop">Photoshop</option>
    <option value="illustrator">Illustrator</option>
    <option value="blockchain">Blockchain</option>
    <option value="solidity">Solidity</option>
  </select>
</div>


                  </div>




                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Details of Skills and Technology
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="For example : Java ,.Net , PHP , Cloud, IT HR , Big Data , UI Development, UX , Testing , DevOps, Management, Cyber Security, devops, AI, Kubernetes or an other"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
