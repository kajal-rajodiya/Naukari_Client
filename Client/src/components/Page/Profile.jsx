import React, { useEffect, useState } from "react";

const Profile = () => {
    const [resume, setResume] = useState(null);
    const [user, setUser] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [skills, setSkills] = useState(["MongoDB", "React.js", "Node.js","Html","Css"]);
    const [newSkill, setNewSkill] = useState("");

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        let storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);

    const handleImageChange = (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                localStorage.setItem("profileImage", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteProfileImage = () => {
        setProfileImage(null);
        localStorage.removeItem("profileImage");
    };

    const handleResumeChange = (event) => {
        if (event.target.files.length > 0) {
            setResume(event.target.files[0]);
        }
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== "") {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    return (
        <div className="flex flex-col items-center space-y-8">
            {/* Profile Section */}
            <div className="bg-white max-w-[60%] w-full m-auto rounded-lg p-8 shadow-lg">
                <h2 className="text-black font-bold text-lg mb-4 text-center">Profile Information</h2>
                <div className="flex items-center gap-6">
                    {/* Profile Picture with Edit and Delete Option */}
                    <div className="relative">
                        <img
                            src={profileImage || "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"}
                            alt="profile"
                            className="rounded-full w-28 h-28 object-cover"
                        />
                        <div className="absolute bottom-0 right-0 flex space-x-2">
                            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="imageUpload" />
                            <label htmlFor="imageUpload" className="bg-gray-200 p-1 rounded-full cursor-pointer text-sm">🖊️</label>
                            {profileImage && (
                                <button onClick={handleDeleteProfileImage} className="bg-red-500 text-white p-1 rounded-full text-sm">
                                    ❌
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Basic Information */}
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div><strong>Name:</strong> {user?.user?.name || "N/A"}</div>
                        <div><strong>Email:</strong> {user?.user?.email || "N/A"}</div>
                        <div><strong>Phone:</strong> {user?.user?.number || "N/A"}</div>
                        <div><strong>Current CTC:</strong> ₹8,00,000</div>
                    </div>
                </div>
            </div>

            {/* Resume Upload Section */}
            <div className="flex flex-col bg-white w-[60%] m-auto my-10 rounded-[8px] p-4">
                <h2 className="text-black font-bold text-lg mb-4 text-center">Resume</h2>
                <div>
                    {resume && (
                        <div className="rounded-md w-[80%] flex items-center justify-between">
                            <p className="text-lg font-bold text-[#303030]">{resume.name}</p>
                            <button onClick={() => setResume(null)} className="text-red-600 text-lg cursor-pointer">❌</button>
                        </div>
                    )}
                </div>
                <div className="m-auto w-[80%] p-8 border border-dashed border-gray-500 rounded-md flex flex-col items-center my-5">
                    <input type="file" accept=".pdf,.doc,.docx,.rtf" onChange={handleResumeChange} className="hidden" id="resumeUpload" />
                    <label htmlFor="resumeUpload" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full cursor-pointer font-bold flex items-center">
                        Update Resume
                    </label>
                    <p className="text-gray-500 text-xs mt-2">DOC, DOCX, PDF, RTF | Max: 2 MB</p>
                </div>
            </div>

            {/* Key Skills Section */}
            <div className="bg-white max-w-[60%] w-full m-auto rounded-lg p-8 shadow-lg">
                <h2 className="text-black font-bold text-lg mb-4 text-center">Key Skills</h2>
                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center space-x-2">
                            <span>{skill}</span>
                            <button onClick={() => handleRemoveSkill(index)} className="text-red-500 font-bold ml-2">✖</button>
                        </span>
                    ))}
                </div>
                {/* Add Skill Input */}
                <div className="flex mt-4 space-x-2">
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Enter a skill..."
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                    />
                    <button onClick={handleAddSkill} className="bg-green-500 text-white px-4 py-2 rounded-md">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
