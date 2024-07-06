'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";

const yes = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [emailError, setEmailError] = useState(false); 

    const handleLogin = () => {
        console.log("You Successfully Logged In!", { email, password });
        setEmail('');
        setPassword('');
    };

    const handleSendEmail = () => {
        if (!forgotEmail) {
            setEmailError(false); 
        } else {
            console.log("Forgot password email sent to:", forgotEmail);
            setEmailError(false); 
            setForgotEmail('');
            setModalIsOpen(false);
        }
    };

    return (
        <div className="md:flex justify-between item-center bg-white" >
            <div className="md:w-1/2 xs:w-full md:pt-20 md:pb-24">
                <Image src="/assets/login.jpg" alt="image" width={500} height={500} className="mx-auto mt-4" /> 
            </div>
            <div className="md:w-1/2 xs:w-full h-1 md:pt-20 xs:pt-10 md:pb-24 mx-auto text-center mt-14">
                <p className="text-2xl text-center text-black underline"> Login </p>
                <input
                    className="border border-gray-500 rounded-sm w-2/3 my-3 mx-auto mt-10 pl-2 py-2 text-gray-700"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border border-gray-500 rounded-sm w-2/3 my-3 mx-auto pl-2 py-2 text-gray-700"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-orange-500 text-white p-2 mx-auto my-3 hover:bg-gray-400 cursor-pointer w-2/3 rounded-sm" onClick={handleLogin}>Login</button>
                <p className="mx-auto my-3 text-center text-black">
                    Don't have an account? <Link href="/signup" className="text-blue-500 ml-2 no-underline hover:text-gray-500">Signup</Link>
                </p>
                <Link href="#" onClick={() => setModalIsOpen(true)} className="mx-auto my-3 no-underline text-blue-500  hover:text-gray-500">Forgot Password?</Link>
            </div>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => {
                                setModalIsOpen(false);
                                setEmailError(false);
                            }
                          }
             contentLabel="Forgot Password Modal"
             className="fixed inset-0 flex items-center justify-center"
             overlayClassName="fixed inset-0 bg-opacity-50"
>
             <div className="bg-white p-5 rounded-lg w-72 transform -translate-y-1/2 -translate-x-1/2 fixed top-1/2 left-1/2">
               <h2 className="text-center my-3 text-black underline">Forgot Password</h2>
             <input
                className="w-full p-1.5 my-3 border border-gray-500 rounded"
                type="email"
                placeholder="Enter your email"
                value={forgotEmail}
                onChange={(e) => {
                            setForgotEmail(e.target.value);
                            setEmailError(false);
      }
    }
    />
    {emailError && <p className="text-red-500 text-center">Please fill out your email!</p>}
    <button
      className="w-full text-black p-2 my-3 bg-orange-400 hover:bg-gray-400 rounded-md"
      onClick={() => {
        if (!forgotEmail) {
          setEmailError(true);
        } else {
          handleSendEmail();
        }
      }
    }>Send</button>
    <button
      className="w-full text-black bg-orange-200 hover:bg-gray-400 p-2 my-3 rounded-md"
      onClick={() => setModalIsOpen(false)}>Close Modal</button>
            </div>
            
            </Modal>

        </div>
    );
};

export default yes;
