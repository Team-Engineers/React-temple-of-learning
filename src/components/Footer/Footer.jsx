import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className=" mx-auto bg-amber-900">
      <div className= "max-w-[1380px] mb-[30px] mx-auto text-white ">
        <div className="grid mx-[30px] py-[40px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 mr-[10px] md:col-span-2 lg:col-span-1">
            <div className=" flex justify-start ">
              <img src={require("../../assets/images/tol-logo.png")} alt="" className='w-[150px] mb-[8px]' />
            </div>
            <p className="  ">Temple of learning is an 24+ year old brand who guided and successfully help many aspirants reached their dream careers.</p>  
            <h3 className="my-3">Our Social handles</h3>
            <div className="social-icons flex gap-[10px]">
      <Link href="https://www.facebook.com/tol.leadtheway/">
        <i className="fa-brands fa-facebook-f"></i>
      </Link>
      <Link href="https://twitter.com/tolEdu">
        <i className="fa-brands fa-twitter"></i> 
      </Link>
      <Link href="https://www.linkedin.com/in/tol-education-403299131/">
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
      <Link href="#">
        <i className="fa-brands fa-google-plus-g"></i>
      </Link> 
    </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1   ">
            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h2 className=" heading-main font-bold text-[20px] uppercase text-white">
                Popular Courses
              </h2>
            </div>
            <div className='my-5 h-[4px] w-[60%] bg-amber-700' />

            <div className="grid">
              <ul className="list-none grid gap-[10px]  ">
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px] "></i> <span>CUET</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px] "></i> <span>MANAGEMENT</span></Link></li>

                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]"></i> <span>MASS COMMUNICATION</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]"></i> <span>LAW</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]"></i> <span>HOTEL MANAGEMENT</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]"></i> <span>BCOM</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]"></i> <span>Psychology</span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h2 className=" heading-main font-bold text-[20px] uppercase text-white">
                Our Programs
              </h2>
            </div>
            <div className='my-5 h-[4px] w-[60%] bg-amber-700' />
            <div className="grid">
              <ul className="list-none grid gap-[10px]">
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]   md:inline-block"></i> <span>2 Year Program</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]   md:inline-block"></i> <span>1 Year Program</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]   md:inline-block"></i> <span>Crash Course</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]   md:inline-block"></i> <span> 9th Class</span></Link></li>
                <li><Link ><i className="fa-solid fa-chevron-right mr-[10px] text-[10px]   md:inline-block"></i> <span>10th Class</span></Link></li>
              </ul>
            </div>
          </div>
        
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h2 className=" heading-main font-bold text-[20px] uppercase text-white">
                Connect with Us
              </h2>
            </div>
            <div className='my-5 h-[4px] w-[60%] bg-amber-700' />

            <div className="footer-widget-contact">
              <div className="media flex mb-3 gap-[15px]">
                <div>
                <i class="fa-solid fa-map-location-dot inline-block"></i>
                </div>
              <div className="media-body"><span style={{ fontSize: '18px' }}>Head Office</span><br />L-3, Kanchanjunga Building Barakhamba Road,
              Connaught Place <br /> New Delhi - 110001</div>
              </div>
              <div className=" flex mb-3 gap-[15px]">
                <div>
                <i className="fa-solid fa-tty"></i>
                </div>               
                <div className="media-body">
                  <div>+91- 98100 33495</div>
                  <div>011-45 019 365</div>
                </div>
              </div>
              <div className="media flex mb-3 gap-[15px]">
                <div>
                <i class="fa-solid fa-envelope"></i>                </div> 
                <div className="media-body">
                  <div><Link href="mailto:info@templeoflearning.com">info@templeoflearning.com</Link></div>
                </div>
              </div>
            </div>
          </div>
</div>
      </div>  
    </div>
  );
}

export default Footer;
