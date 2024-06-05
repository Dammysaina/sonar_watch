import React from "react";
import PhoneDial from "../assets/images/phone.svg";
import Mail from "../assets/images/mail.svg";
import Location from "../assets/images/location.svg";

const Contact = () => {
  return (
    <div className="bg-[#F5F7FA] px-32 py-32">
      <div className="bg-white rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded-bl flex p-3">
        <div className="h-full justify justify-center bg-black rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded-bl mr-32 pt-8 pb-44 pl-8 pr-32 max-w-[1000px] max-h-[700px]">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white max-w-[500px]">
              {" "}
              Contact Us
            </h1>
            <p className="text-white py-4 max-w-[220px]">
              Any question or remarks? Just write us a message!
            </p>
          </div>
          <div className="text-white pt-12">
            <div className="flex ">
              <img src={PhoneDial} alt="Phonedial" className="pr-4" />
              <p>+1012 3456 789 </p>
            </div>
            <div className="flex py-6 ">
              <img src={Mail} alt="Phonedial" className="pr-4 ml-"  />
              <p>demo@gmail.com </p>
            </div>
            <div className="flex items-center">
              <img
                src={Location}
                alt="Phonedial"
                className="pr-4 max-w-[100px]"
              />
              <p className="pt-2 max-w-[300px] ">
                132 Dartmouth Street Boston, Massachusetts 02156 United States{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="ml-36">
          <form className="my-12">
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6 my-4">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
            </div>
            <div >
              <div>
                <p className="font-semibold text-base">Select Subject</p>
              </div>

              <div class="flex my-4">
                <div class="flex items-center me-4">
                  <input
                    id="inline-checkbox"
                    type="radio"
                    name="inlineRadioOptions"
                    value="option2"
                    class="w-5 h-5 bg-gray-100 hover:cursor-pointer"
                  />
                  <label
                    for="inline-checkbox"
                    class="ms-2 text-sm font-medium text-black hover:cursor-pointer"
                  >
                    General Enquiry
                  </label>
                </div>
                <div class="flex items-center me-4">
                  <input
                    id="inline-2-checkbox"
                    type="radio"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-600  rounded  "
                  />
                  <label
                    for="inline-2-checkbox"
                    class="ms-2 text-sm font-medium hover:cursor-pointer "
                  >
                    General Enquiry
                  </label>
                </div>
                <div class="flex items-center me-4">
                  <input
                    id="inline-checkbox"
                    type="radio"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:border-gray-600"
                  />
                  <label
                    for="inline-checkbox"
                    class="ms-2 text-sm font-medium hover:cursor-pointer "
                  >
                    General Enquiry
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="inline-checkbox"
                    type="radio"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:border-gray-600"
                  />
                  <label
                    for="inline-checkbox"
                    class="ms-2 text-sm font-medium hover:cursor-pointer "
                  >
                    General Enquiry
                  </label>
                </div>
              </div>
            </div>

            <div class="relative z-0 w-full mb-5 group my-8">
              <input
                type="text"
                name="floating_text"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" Write your message ..."
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              ></label>
            </div>
            <div className="flex justify-end">
            <button
              type="submit"
              class="text-white bg-black focus:ring-4 focus:outline-none mt-10 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Send Message
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
