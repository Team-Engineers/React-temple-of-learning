import WhyJoinCard from "./WhyJoinCard";

  function WhyJoin() {
  
    return (
      <section className="bg-[#00000072] text-white py-14">
        <div className="mx-[50px]">
  
          <h2 className="text-[33px] uppercase font-bold ">
           Why you should join <span className="font-comic-sans text-[38px]">Temple of Learning?</span> 
          </h2>
          <div className='my-5 ml-4 h-[4px] w-[60%] flex justify-start  bg-amber-700' />

  
          <div className="t my-8 text-3xl">
            <p>Team instrumental in maximum selections at BMS / BBA / LAW / HM & other undergraduate entrance exams over the last two decades.
</p>
          </div>
  
          <div className="grid mx-[60px] grid-cols-2 md:grid-cols-5 gap-4 text-center">
          
            <WhyJoinCard 
              num={1}
              img="struggle.png"
              text="24+ years old brand" 
            />
  
            <WhyJoinCard
              num={2}
              img="stopwatch.png" 
              text="Maximum Teaching hours"  
            />
  
            <WhyJoinCard
              num={3}
              img="teacher.png"
              text="Personalized care & mentoring"
            />
  
            <WhyJoinCard
              num={4} 
              img="award.png"
              text="Specialists for DELHI UNIVERSITY / CUET"
            />
            <WhyJoinCard  
          num={5}
          img="ancestors.png" 
          text="Team has trained more than 50000 aspirants"
        />

        <WhyJoinCard
          num={6} 
          img="books.png"
          text="Well-researched study material with past years paper"  
        />

        <WhyJoinCard
          num={7} 
          img="growth.png"
          text={<>Highest success rate in the Industry <span className="text-xs">(89.2% in 2021)</span></>}  
        />

        <WhyJoinCard
          num={8}
          img="form.png" 
          text="Form filling and Assistance / Guidance" 
        />
        
        <WhyJoinCard
          num={9}  
          img="goal.png"
          text="Unique concept of group study to bring success"
        />

        <WhyJoinCard
          num={10}
          img="24-hours-support.png" 
          text="24*7 Help / Support"
        />
          </div>
          
        </div>
      </section>
    );
  
  }
  
  export default WhyJoin;