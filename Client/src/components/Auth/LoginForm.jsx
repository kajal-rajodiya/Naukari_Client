import React, { useState } from "react";
import FormInput from "../Ui/FormInput";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseApi } from "../../api/axiosInstance";

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    // const checkUserCredentials = async () => {
    //     const users = await getAllUsers();

    //     // ✅ Fix: Access correct data structure (user.user.email)
    //     const foundUser = users.find(user =>
    //         user?.user?.email?.toLowerCase().trim() === formData.email.toLowerCase().trim() &&
    //         user?.user?.password === formData.password
    //     );

    //     console.log("🔍 Found User:", foundUser);

    //     if (!foundUser) {
    //         console.warn("🚨 No matching user found!");
    //         toast.error("Invalid Credentials", {
    //             position: "top-right",
    //             autoClose: 3000
    //         });
    //     } else {
    //         toast.success("✅ User login successful!", {
    //             position: "top-right",
    //             autoClose: 2000
    //         });

    //         // ✅ Store user data in localStorage
    //         localStorage.setItem("user", JSON.stringify(foundUser));

    //         // ✅ Redirect to homepage after successful login
    //         setTimeout(() => {
    //             navigate("/");
    //         }, 2000);
    //     }
    // };
    const loginUser = async () => {
        try {
            const response = await baseApi.post("/user/login", formData);
            localStorage.setItem("token", response.data.token)
            toast.success("user login in successfully", {
                autoClose: 1000
            });
            navigate("/");

        } catch (error) {
            console.log("Error loging the user", error);
            toast.error("Invaid credential");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginUser();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="border border-gray-100 rounded-md bg-white p-2 shadow-lg">
            <div>
                <p className="font-bold text-[20px]">Login</p>
            </div>
            <div className="my-3">
                <form onSubmit={handleSubmit}>
                    <FormInput
                        labelText={"Email ID / Username"}
                        inputPlaceholder={"Enter Email Id / Username"}
                        inputType={"text"}
                        required={true}
                        name='email'
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                    <FormInput
                        labelText={"Password"}
                        inputPlaceholder={"Enter password"}
                        inputType={"password"}
                        required={true}
                        name='password'
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                    <div className="px-5 py-2 text-[20px]">
                        <Button type="submit" primaryColor={'white'} backgroundColor={'#285df5'}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
