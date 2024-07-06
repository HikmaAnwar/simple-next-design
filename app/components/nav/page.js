import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-white rounded-md p-5 text-black fixed mx-auto my-3 w-full pr-14 pl-14 shadow-xl">
            <div className="text-green-700 no-underline font-bold">
            <Link href="/">Simple Design</Link>
            </div>
            
            <ul className="flex list-none space-x-4 justify-between ml-8 ">
                <li className=" text-gray-500 hover:text-black">
                    <Link href="/">Home</Link>
                </li>
                <li className=" text-gray-500 hover:text-black">
                    <Link href="/sourcecode">Source Code</Link>
                </li>
                <li className=" text-gray-500 hover:text-black">
                    <Link href="/login">Login</Link>
                </li>
                <li className=" text-gray-500 hover:text-black">
                    <Link href="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
