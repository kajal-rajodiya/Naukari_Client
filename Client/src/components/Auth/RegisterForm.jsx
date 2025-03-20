import React, { useState } from "react";
import FormInput from "../Ui/FormInput";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { baseApi } from "../../api/axiosInstance.js";

const suggestedCities = ["Goa", "Mumbai", "Akola", "Indore", "Pune", "Bangalore", "Latur"];

const RegisterForm = () => {
  const navigate = useNavigate();
  const [workStatus, setWorkStatus] = useState("");
  const [resume, setResume] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const [outsideIndia, setOutsideIndia] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    number: ''
  })

const registerUser = async () => {
    try {
      const response = await baseApi.post("user/register", formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        number: ''
      })
      toast.success("User registering successfully",{
        autoClose:1000
      });
      navigate("/login");
    } catch (error) {
      console.log("Error registering user", error);
      toast.error("Error registering user");
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    registerUser();
  };

  // const handleInputChange=(event)=>{
  //   const {name,value} = event.target;
  //   setFormData({...formData,[name]: value})
  // }...........direct function we can pass to onChange insted of write each fields

  const handleCitySelection = (city) => {
    setCurrentCity(city);
    setShowSuggestions(false); // Hide suggestions after selection
  };


  const handleWorkChange = (text) => {
    setWorkStatus(text);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]); // Store the selected file
  };

  return (
    <div className="border border-gray-100 rounded-md bg-white p-5 shadow-lg">
      <div className=''>
        <p className="font-bold text-[20px]">Create your Naukri profile</p>
      </div>
      <div>
        <p className="text-gray-500">
          Search & apply to jobs from India's No.1 Job Site
        </p>
      </div>
      <div className="my-5">
        <form action=' ' onSubmit={handleSubmit}>
          <FormInput labelText={"Full Name"} inputPlaceholder={"What is your name"} inputType={"text"} required={true} value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <FormInput labelText={"Email ID"} inputPlaceholder={"Tell us your email id"} inputType={"email"} required={true} value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <FormInput labelText={"Password"} inputPlaceholder={"(Minimum 6 characters)"} inputType={"password"} required={true} value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <FormInput labelText={"Mobile Number"} inputPlaceholder={"Enter your mobile number"} inputType={"number"} required={true} value={formData.number}
            onChange={(e) => setFormData({ ...formData, number: e.target.value })} />

          {/* Work Status Section */}
          <div>
            <p className="font-bold p-2">
              Work Status <sup className="text-red-500">*</sup>
            </p>
            <div className="flex gap-5">
              {/* Experienced Box */}
              <div
                onClick={() => handleWorkChange("experienced")}
                className={`cursor-pointer rounded-md p-3 w-72 ${workStatus === "experienced" ? "border-2 border-black" : "border border-gray-300"
                  }`}
              >
                <h2 className="font-bold">I'm experienced</h2>
                <div className="flex items-center gap-3 p-2">
                  <p className="text-gray-600">I have work experience (excluding internships)</p>
                  <img src="https://static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg" alt="briefcase" className="w-8 h-8" />
                </div>
              </div>

              {/* Fresher Box */}
              <div
                onClick={() => handleWorkChange("fresher")}
                className={`cursor-pointer rounded-md p-3 w-72 ${workStatus === "fresher" ? "border-2 border-black" : "border border-gray-300"
                  }`}
              >
                <h2 className="font-bold">I'm a fresher</h2>
                <div className="flex p-2 gap-3">
                  <p className="text-gray-600">I am a student/ Haven't worked after graduation</p>
                  <img src="https://static.naukimg.com/s/7/104/assets/images/schoolbag.a54cbf7a.svg" alt="schoolbag" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Resume Upload - Show only if experienced is selected */}
          {workStatus === "experienced" && (
            <div className="mt-4">
              <label className="block font-bold mb-1">
                Upload Resume <sup className="text-red-500">*</sup>
              </label>
              <div className="relative inline-block">
                {/* Hidden Input for File Selection */}
                <input type="file" accept=".pdf,.doc,.docx,.rtf" onChange={handleResumeChange} className="hidden" id="resumeUpload" />
                {/* Orange Upload Resume Button */}
                <label htmlFor="resumeUpload" className="bg-orange-500 text-white px-6 py-3 rounded-full cursor-pointer font-bold flex flex-col items-center">
                  Upload Resume
                  <span className="text-gray-200 text-xs">DOC, DOCX, PDF, RTF | Max: 2 MB</span>
                </label>
              </div>
              {/* Display selected file name */}
              {resume && <p className="text-gray-600 mt-2">Selected File: {resume.name}</p>}
            </div>
          )}

          {/* Fresher Fields - Current City Input */}
          {workStatus === "fresher" && (
            <div className="">
              <div className="flex  gap-4 mt-4 ">
                <div className="">
                  <FormInput labelText={"Current City"} inputPlaceholder={"Enter your current city"} inputType={"text"} required={true} value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} />
                  <p className="text-gray-500">This helps recruiters know your location preferences</p><br />
                  <p className="text-gray-500">Suggestions:</p>
                </div>

                {/* Outside India Checkbox */}
                <div className="flex items-center gap-2 h-10 mt-2">
                  <input type="checkbox" id="outsideIndia" checked={outsideIndia} onChange={() => setOutsideIndia(!outsideIndia)} className="w-5 h-5  cursor-pointer" />
                  <label htmlFor="outsideIndia" className={`font-medium cursor-pointer ${outsideIndia ? "text-black font-bold" : "text-gray-700"}`}>Outside India</label>
                </div>
              </div>

              {/* Current Country Input - Show only if checkbox is checked */}
              {outsideIndia && (
                <FormInput labelText={"Current Country"} inputPlaceholder={"Enter your current country"} inputType={"text"} required={true} value={currentCountry} onChange={(e) => setCurrentCountry(e.target.value)} />
              )}

              {/* Suggested Cities */}
              <div className="mt-3 flex flex-wrap gap-3">
                {suggestedCities.map((city, index) => (
                  <div
                    key={index}
                    className={`border border-black text-gray-600 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 ${currentCity === city ? "bg-gray-200 font-bold" : ""}`}
                    onClick={() => handleCitySelection(city)} // Click event to set city in input field
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Updates & Promotions Checkbox - Move it outside the fresher condition */}

          <div className="mt-4 my-4 flex items-center gap-3">
            <input
              type="checkbox"
              id="updatesPromotions"
              className="w-5 h-5 cursor-pointer"
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label
              htmlFor="updatesPromotions"
              className={`mx-2 my-2 flex items-center gap-2 cursor-pointer font-medium ${checked ? "text-black font-bold" : "text-gray-700"}`}
            >
              Send me important updates & promotions via SMS, email, and WhatsApp
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Icon"
                className="w-5 h-5"
              />
            </label>
          </div>
          <div className="text-gray-500 mx-2 my-2">
            By clicking Register, you agree to the <span className="text-blue-500">Terms and Conditions</span> & <span className="text-blue-500">Privacy Policy</span> of Naukri.com
          </div>
          <div className="px-5 py-2 text-[20px]">
            <Button primaryColor={'white'} backgroundColor={'#285df5'}>Register Now</Button>
          </div>
        </form>
      </div >
    </div >
  );
};

export default RegisterForm;


