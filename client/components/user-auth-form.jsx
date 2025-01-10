"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/icons';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import loginService from '@/services/loginService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserAuthForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const validateForm = () => {
        const errors = {};
        if (username === "") {
            errors.username = "Username is required";
        }
        if (password === "") {
            errors.password = "Password is required";
        }

        return errors;
    }   

    const handleSignIn = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            const response = await loginService.login({username, password});
            if (response.error) {
                toast.error("Error Logging In", {
                    position: "top-right",
                    autoClose: 3000
                });
            } else {
                router.push("/landing-page");
            }
        } else {
            setFormErrors(formErrors);
            toast.error("Please fix the errors in the form", {
                position: "top-right",
                autoClose: 3000
            });
        }
    }

    return (
        <>
            <form className='space-y-4'>
                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                {formErrors.username && <span className="text-red-500 text-sm ml-1 mt-1">{formErrors.username}</span>}
                <div className="relative w-full">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full pr-12"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                    >
                        {showPassword ? (
                            <Icons.eyeClosed className="w-5 h-5" /> 
                        ) : (
                            <Icons.eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
                {formErrors.password && <span className="text-red-500 text-sm ml-1 mt-1">{formErrors.password}</span>}
                <Button variant="red" className="w-full" onClick={handleSignIn}> Sign In</Button>
            </form>
            <ToastContainer />
        </>
    )
}