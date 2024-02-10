import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    // const closeDropdown = () => {
    //     setIsDropdownOpen(false);
    // };
    return (
        <header className="fixed z-50 top-0 w-full shadow-md">
            <section className="bg-white">
                <div className="mx-[20px] ">
                    <nav className="flex justify-between items-center bg-white py-3 ">
                        <div>
                            <Link >
                                <img src={require("../../assets/images/tol.png")} alt='' className="" />
                            </Link>
                        </div>

                        <div >
                            <ul className=" uppercase gap-[15px] flex">
                                <li className=""><Link
                                    className="   font-bold text-uppercase text-red-600">About</Link></li>
                                <li className=" "><Link href="#"
                                    className=" text-uppercase font-bold text-red-600">
                                    <div >COURSES</div></Link>



                                    {/* {isDropdownOpen && (
                                        <div aria-labelledby="absolute" className="dropdown-menu border-0 p-0 m-0 mx-5">
                                            <div className=" ">
                                                <div className="row bg-white rounded-0 m-0 shadow-sm">
                                                    <div className="col-lg-12 col-xl-12">
                                                        <div className="p-2">
                                                            <div className="row">
                                                                <div className="col-lg-4 mb-2 mt-2">
                                                                    <Link to="/" className="text-small pb-0 li-st">
                                                                        <h6 className="font-bold text-uppercase h6-st">CUET</h6>
                                                                    </Link>
                                                                    <Link to="/" className="text-small pb-0 li-st">
                                                                        <h6 className="font-bold text-uppercase h6-st">MANAGEMENT</h6>
                                                                    </Link>
                                                                    <ul className="list-unstyled">
                                                                        <li className="itam-st"><Link to="CUCET.php" className="text-small pb-0 li-st"><span className="dis-non">•</span> CUCET</Link></li>
                                                                        <li className="itam-st"><Link to="university-of-delhi.php" className="text-small pb-0 li-st"><span className="dis-non">•</span> DU JAT</Link></li>
                                                                        <li className="itam-st"><Link to="iim-indore.php" className="text-small pb-0 li-st"><span className="dis-non">•</span> IIM Indore, IPM</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4 mb-2 mt-2">
                                                                    <Link to="/" className="text-small pb-0 li-st">
                                                                        <h6 className="font-bold text-uppercase h6-st">Mass Communication</h6>
                                                                    </Link>
                                                                    <ul className="list-unstyled">
                                                                        <li className="itam-st"><Link to="ipcw-university.php" className="text-small pb-0 li-st"><span className="dis-non">•</span> IPCW University</Link></li>
                                                                        <li className="itam-st"><Link to="delhi-university-ba-hons.php" className="text-small pb-0 li-st"><span className="dis-non">•</span> Delhi University BA(hons)</Link></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-4 mb-2 mt-2">
                                                                    <Link to="/" className="text-small pb-0 li-st">
                                                                        <h6 className="font-bold text-uppercase h6-st">LAW</h6>
                                                                    </Link>
                                                                    <ul className="list-unstyled">
                                                                        <li className="itam-st"><Link to="clat.php" className="text-small pb-0 li-st"><span className="dis-non">•</span> CLAT</Link></li>
                                                                        <li className="itam-st"><Link to="nlud.php" className="text-small pb-0 li-st"><span className="dis-non">•</span> National Law University, Delhi</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )} */}


                                </li>
                                <li className=""><Link
                                    className="   font-bold text-uppercase text-red-600">Contact</Link></li>
                                <li className=""><Link
                                    className="   font-bold text-uppercase text-red-600">Login/Register</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className=" flex align-items-center text-md-left h-[60px] bg-black">
                    <div className="w-[1280vh] ">
                        <div className=" items-center">
                            <div className=" flex">
                                <marquee behavior="scroll" direction="left">
                                    <p className='flex items-center text-white'><span className='ml-[60px]  text-[23px]' >Enroll Now
                                        for CUET Crash Course </span>
                                    </p>
                                </marquee>
                                <div className="flex relative top-3   items-center">
                                    <div className=" ">
                                        <Link className="ml-2 p-3 whitespace-nowrap rounded-lg bg-white"
                                        > Enroll Now</Link>
                                    </div>
                                    <div className="">
                                        <Link className="ml-2 p-3 whitespace-nowrap  rounded-lg bg-white"
                                        >
                                            Connect with us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
