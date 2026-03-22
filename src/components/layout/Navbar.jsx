

import logo from '/logo.webp';

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-none shadow-sm px-10 py-2 z-10  border-b border-[#4e5f4375] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden hover:bg-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-green-500 rounded-box z-1 mt-3 w-52 p-2 shadow font-inter text-white">
                            <li><a>Home</a></li>
                            
                            <li><a>About</a></li>
                            <li><a>Services</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl hover:bg-transparent shadow-none border-none"><img src={logo} className='w-30' /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-inter text-white text-[16px] gap-7">
                        <li className='hover:bg-[#bce70c] rounded hover:text-black'><a>Home</a></li>
                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <li className='hover:bg-[#bce70c] rounded hover:text-black'><a>About</a></li>
                        <li className='hover:bg-[#bce70c] rounded hover:text-black'><a>Services</a></li>
                        <li className='hover:bg-[#bce70c] rounded hover:text-black'><a>Projects</a></li>
                        <li className='hover:bg-[#bce70c] rounded hover:text-black'><a>Blogs</a></li>
                        <li className='hover:bg-[#bce70c] rounded hover:text-black'><a>Contact</a></li>


                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#bce70c] text-[16px] border-none shadow-none hover:bg-[#bce70cdb] rounded-xl">Get in Touch</a>
                </div>
            </div>
        </div>
    );
}