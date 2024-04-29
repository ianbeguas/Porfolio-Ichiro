import React from "react";

const Experience = () => {
    return (
        <div className="bg-customBGgray lg:py-5 sm:py-10 sm:px-10 flex justify-center">
            <div className="max-w-4xl mx-auto sm:mx-4"> {/* Centering the container */}
                <h2 className="mb-8 text-5xl text-white text-center font-bold"><span>Education</span></h2>
                <div className="mb-4 lg:mb-20 text-white bg-gray-700 bg-opacity-20 rounded-3xl">
                    <div className="p-4 lg:p-8">
                        <p className="text-lg lg:text-xl">Urdaneta City University</p>
                        <p className="text-gray-300 text-sm lg:text-base">2019-2024</p>
                        <p className="text-gray-400 text-sm lg:text-base">I pursued my BSIT at Urdaneta City University, where I gained expertise in programming, database management, networking, web development, and software engineering. Engaging with experienced faculty and participating in extracurricular activities honed my skills in teamwork and leadership, providing a solid foundation for addressing real-world IT challenges</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
