import React from 'react';

const Footer = () => {
  return (
    <section className="fixed bg-white bottom-0 w-full bg-navy-blue z-50">
      <div className=" py-3">
        <div className=" mx-auto max-w-[1380px]">
          <div className="flex text-amber-600 text-[80%] justify-between">
            <div className="text-center w-full sm:w-1/3 md:w-1/3 font-bold cop-f">
              © Copyright Pandia Learning System Ltd. | All Right Reserved
            </div>
            <div className="w-full sm:w-1/3 md:w-1/3 text-center cop-f hidden sm:block">
              <i className="fas fa-tty mr-2"></i> +91-98100 33495 , 011-45 019 365
            </div>
            <div className="w-full sm:w-1/3 md:w-1/3 text-center cop-f hidden sm:block">
              <i className="fas fa-envelope mr-2"></i> INFO@TEMPLEOFLEARNING.COM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
