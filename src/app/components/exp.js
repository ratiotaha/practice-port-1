// import React from "react";

// function exp() {
//   return (
//     <div className=" flex justify-between  mt-[50px]">
//       <div className="bg-yellow-500 border text-left p-10  rounded-[20px]">
//         <img className="mr-[20px] rounded-[40px] w-[50px]" src="download.png" />{" "}
//         Worked for OpenAI as a <br />
//         web developer from 2010 <br /> till 2012
//       </div>
//       <div className="bg-yellow-500 whitespace-pre-line border p-10 rounded-[20px]">
//         <img src="google.png" />2
//       </div>
//       <div className="bg-yellow-500 whitespace-pre-line border p-10 rounded-[20px]">
//         <img src="twitter.png" />
//       </div>
//     </div>
//   );
// }

// export default exp;
import React from "react";

function exp() {
  return (
    <div className="flex justify-between mt-[50px] m-10">
      <div className="bg-yellow-500 border text-left p-10 rounded-[20px] flex items-center">
        <img
          className="mr-[20px] rounded-[40px] w-[50px] h-auto"
          src="download.png"
          alt="OpenAI Logo"
        />
        <div>
          Worked for OpenAI as a <br />
          web developer from 2010 <br /> till 2012
        </div>
      </div>
      <div className="bg-yellow-500 border text-left p-10 rounded-[20px] flex items-center">
        <img
          className="mr-[20px] rounded-[40px] w-[50px] h-auto hover:bounce"
          src="google.png"
          alt="OpenAI Logo"
        />
        <div>
          internship at Google as a <br />
          web developer from 2009 <br /> till 2010
        </div>
      </div>
      <div className="bg-yellow-500 border text-left p-10 rounded-[20px] flex items-center">
        <img
          className="mr-[20px] rounded-[40px] w-[50px] h-auto"
          src="twitter.png"
          alt="OpenAI Logo"
        />
        <div>
          Works for twitter as a backend <br />
          developer from 2015 <br /> till current
        </div>
      </div>
    </div>
  );
}

export default exp;
