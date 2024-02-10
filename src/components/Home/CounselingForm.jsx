import { useState } from 'react';

function CounselingForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    city: '',
    school: '',
    currClass: '',
    program: '',
    course: ''  
  });

  const handleChange = (e) => {
    setFormData({
     ...formData,
     [e.target.name]: e.target.value  
    });
  }

  const handleSubmit = () => {
  }

  return (
    <div className="py-8 max-w-[1300px] mx-auto bg-white ">
      <div className='mx-[80px]'>
      <h2 className="text-4xl font-medium">Register For Counseling</h2>
      <div className='my-5 ml-1 h-[4px] w-[35%] flex justify-start  bg-amber-700' />
      <form className="p-4 rounded-md mx-[20px]" onSubmit={handleSubmit}>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} 
            className="border p-2 rounded-lg" 
            placeholder="First Name" 
          />

          <input 
            type="text"            
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded-lg" 
            placeholder="Last Name" 
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}  
            className="border p-2 rounded-lg" 
            placeholder="Mobile Number"  
          />

          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded-lg" 
            placeholder="Email"  
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
         <input 
           type="text"
           name="city"
           value={formData.city}
           onChange={handleChange}
           placeholder="City" 
           className="border p-2 rounded-lg"
         />
        
         <input
           type="text"  
           name="school"
           value={formData.school}  
           onChange={handleChange}
           placeholder="School"
           className="border p-2 rounded-lg" 
         />
       </div>

      <div className="mb-4">
        <select 
          name="currClass"
          value={formData.currClass}
          onChange={handleChange}
          className="border p-2 text-[#00000097] rounded-lg w-full"
        >
          <option>Select Class</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
      </div>

      <div className="mb-4">
        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="border p-2 text-[#00000097] rounded-lg w-full"
        >
         <option>Select Program</option>
         <option value="Crash Course">Crash Course</option> 
         <option value="Crash Course">One Year Programme</option> 
         <option value="Crash Course">Two Year Program</option> 

        </select>
      </div>

      <div className="mb-4 ">
        <select 
          name="currClass"
          value={formData.currClass}
          onChange={handleChange}
          className="border p-2 text-[#00000097] rounded-lg w-full"
        >
          <option className=' bg-black'>Select Cousrse</option>
          <option value="Cousrse1">Cousrse1</option>
          <option value="Cousrse2">Cousrse2</option>
          <option value="Cousrse3">Cousrse3</option>
          <option value="Cousrse4">Cousrse4</option>
        </select>
      </div>
        <button
          type="submit"
          className="bg-orange-500 rounded-[50px] text-white px-4 py-2  hover:bg-orange-600">
            Submit
        </button>

      </form>
      </div>

    </div>
  );

}

export default CounselingForm;