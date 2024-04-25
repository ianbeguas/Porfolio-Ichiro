import React from "react";

const Experience = () => {
    return(
        <div className=" bg-customBGgray lg:py-10 sm:py-10">
            <h2 className="mb-8 text-5xl text-white text-center font-bold"><span>Education</span></h2>
            {/* Add the image here */}
            <div className="flex justify-center mb-4">
                <img src="/assets/picgrad.png" alt="Graduation Cap" className="h-40 w-auto" />
            </div>
            {/* End of image */}
            <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
                <p>Urdaneta City University</p>
                <p className="text-gray-300">2019-2024</p>
                <p className="text-gray-400">I pursued my BSIT at Urdaneta City University, where I gained expertise in programming, database management, networking, web development, and software engineering. Engaging with experienced faculty and participating in extracurricular activities honed my skills in teamwork and leadership, providing a solid foundation for addressing real-world IT challenges</p>
            </div>   
        </div>
    )
}

export default Experience;
