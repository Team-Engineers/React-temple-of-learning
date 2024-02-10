import { Link } from 'react-router-dom';

function Options() {

  return (
    <section className="py-16 max-w-[1400px] mx-auto bg-white">
    
      <div className="mx-5">

        <h2 className="text-2xl font-bold  text-blue-800">OPTIONS FOR</h2>
        <div className='my-5 h-[4px] w-[130px] bg-amber-700' />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium my-4 text-center text-blue-800">Class 11th</h3>
            
            <div className="flex flex-col gap-4">
              <Link 
                className="bg-yellow-500 text-[130%] font-medium text-center text-black rounded px-4 py-3"
                to="/career-guidance-11">
                  Career Guidance  
              </Link>

              <Link
                className="bg-yellow-500 text-[130%] font-medium text-center text-black rounded px-4 py-3"
                to="/two-year-program">
                  Two Year Course
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium my-4 text-center text-blue-800">Class 12th</h3>
            
            <div className="flex flex-col gap-4">
              <Link
                className="bg-yellow-500 text-[130%] font-medium text-center text-black rounded px-4 py-3"
                to="/one-year-program">
                  One Year Course
              </Link>
              
              <Link
                className="bg-yellow-500 text-[130%] font-medium text-center text-black rounded px-4 py-3"
                to="/bridge-course">
                  Bridge Course 
              </Link>

              <Link
                className="bg-yellow-500 text-[130%] font-medium text-center text-black rounded px-4 py-3"
                to="/crash-course">
                  Crash Course
              </Link>
            </div>
          </div>

        </div>
      
      </div>

    </section>
  );

}

export default Options;