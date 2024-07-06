'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setComfirmPassword] = useState('');

    const handleSignup = () => {
        console.log("signing up...", {username,email, password, confirmPassword});
        setUsername('');
        setEmail('');
        setPassword('');
        setComfirmPassword('');
    };

    
    return(
        <div className="flex justify-between item-center bg-white ">

          <div className="w-1/2 pt-20 pb-24">
            <Image src="/assets/login.jpg" width={400} height={300} className="mx-auto mt-4" />          
            </div>

            <div className="w-1/2 h-1 pt-24 mx-auto text-center mt-8">
            <p className="text-2xl text-center text-black underline">Signup</p>
            <input
            className="border border-gray-500 rounded-sm py-2 pl-2 w-1/2 mt-10 my-3 mx-auto text-gray-700"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
            />

            <input
            className="border border-gray-500 rounded-sm py-2 pl-2 w-1/2 mx-20 my-3  text-gray-700"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            />

            <input
            className="border border-gray-500 rounded-sm w-1/2 mx-20 my-3 py-2 pl-2 text-gray-700"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            />

            <input
            className="border border-gray-500 rounded-sm py-2 pl-2 w-1/2 mx-20 my-3  text-gray-700"
            type="password"
            placeholder="Confirm Password "
            value={password}
            onChange={(e) => setComfirmPassword(e.target.value)}
            
            />

            <button on className="bg-orange-400 border-none cursor-pointer text-white rounded-sm p-2 w-1/2 my-3 hover:bg-gray-500 mx-20" onClick={handleSignup} >Sign Up</button>

            <p className="text-black my-3" >Already have an account?
             <Link href={"/login"} className="mx-auto text-blue-500 ml-3 hover:text-gray-500">Login</Link>
             </p>

        </div>
        </div>
    );
};
export default SignUp;