// add state
import React from "react";
import { Link } from "react-router-dom";
import { FaLink, GiLargePaintBrush } from "react-icons/fa";
import { TbPaintFilled } from "react-icons/tb"
import { BsWrenchAdjustable, BsFillBuildingsFill } from "react-icons/bs"
import { IoMdSchool } from "react-icons/io"
import { FcFactoryBreakdown, FcFeedback } from "react-icons/fc"
import "tailwindcss/tailwind.css";

const FacilityLinks = () => {
    return (
        <div className="mt-10">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Helpful Links for Building Maintenance
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Here are some useful links that can help you with your facility management tasks.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-full md:w-1/3 lg:w-1/3">
                            <div className="p-4 m-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#003058] shadow-lg shadow-[#ba1c21]">
                                <div className="flex items-center">
                                    <h1 className="text-center flex-grow">Sherwin Williams</h1>
                                    <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#003058] hover:bg-[#ba1c21] hover:scale-110 transform transition-transform">
                                        <Link
                                            to="https://www.sherwin-williams.com/homeowners?gclid=CjwKCAjw0N6hBhAUEiwAXab-TTjD2_3-uXe8hlFFohualn6LWru89JSW7pCZf7YH2Dr_9vSYvDR5ZhoCDnsQAvD_BwE"
                                            className="text-lg font-medium text-gray-900 underline a"
                                        >
                                            <TbPaintFilled className="h-10 w-10 rounded-full bg-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3 lg:w-1/3">
                            <div className="p-4 m-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#003058] shadow-lg shadow-[#ba1c21]">
                                <div className="flex items-center">
                                    <h1 className="text-center flex-grow">Lowes</h1>
                                    <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#003058] hover:bg-[#ba1c21] hover:scale-110 transform transition-transform">
                                        <Link
                                            to="https://www.lowes.com/"
                                            className="text-lg font-medium text-gray-900 underline a"
                                        >
                                            <BsWrenchAdjustable className="h-10 w-10 rounded-full bg-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3 lg:w-1/3">
                            <div className="p-4 m-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#003058] shadow-lg shadow-[#ba1c21]">
                                <div className="flex items-center">
                                    <h1 className="text-center flex-grow">Home Depot</h1>
                                    <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#003058] hover:bg-[#ba1c21] hover:scale-110 transform transition-transform">
                                        <Link
                                            to="https://www.homedepot.com/"
                                            className="text-lg font-medium text-gray-900 underline a"
                                        >
                                            <BsWrenchAdjustable className="h-10 w-10 rounded-full bg-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3 lg:w-1/3">
                            <div className="p-4 m-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#003058] shadow-lg shadow-[#ba1c21]">
                                <div className="flex items-center">
                                    <h1 className="text-center flex-grow">Utah Tech Homepage</h1>
                                    <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#003058] hover:bg-[#ba1c21] hover:scale-110 transform transition-transform">
                                        <Link
                                            to="https://utahtech.edu/"
                                            className="text-lg font-medium text-gray-900 underline a"
                                        >
                                            <IoMdSchool className="h-10 w-10 rounded-full bg-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3 lg:w-1/3">
                            <div className="p-4 m-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#003058] shadow-lg shadow-[#ba1c21]">
                                <div className="flex items-center">
                                    <h1 className="text-center flex-grow">Utah Tech Floor Plans</h1>
                                    <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#003058] hover:bg-[#ba1c21] hover:scale-110 transform transition-transform">
                                        <Link
                                            to="https://floorplans.utahtech.edu/"
                                            className="text-lg font-medium text-gray-900 underline a"
                                        >
                                            <FcFactoryBreakdown className="h-10 w-10 rounded-full bg-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 w-full md:w-1/3 lg:w-1/3">
                            <div className="p-4 m-4 rounded-lg transition-all hover:shadow-lg hover:shadow-[#003058] shadow-lg shadow-[#ba1c21]">
                                <div className="flex items-center">
                                    <h1 className="text-center flex-grow">Email</h1>
                                    <div className="flex items-center justify-center h-14 w-14 rounded-md bg-[#003058] hover:bg-[#ba1c21] hover:scale-110 transform transition-transform">
                                        <Link
                                            to="https://outlook.live.com/owa/"
                                            className="text-lg font-medium text-gray-900 underline a"
                                        >
                                            <FcFeedback className="h-10 w-10 rounded-full bg-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add more links as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityLinks;
