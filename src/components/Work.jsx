import React from "react";
import CalculatorImc from "../assets/CalculatorImc.jpg";
import CalculatorImg from "../assets/CalculatorImg.jpg";
import GeneratorImg from "../assets/GeneratorImg.jpg";
import TableImg from "../assets/TableImg.jpg";
import FormImg from "../assets/FormImg.jpg";
import ArtProjectImg from "../assets/ArtProject.jpg";
import ExactTimeImg from "../assets/ExactTime.jpg";
import Form002Img from "../assets/Form002Img.jpg";
import ReactDomRouterImg from "../assets/ReactDomRouterImg.jpg";


const Work = () => {
    return (
        <div name="work" className="w-full md:h-screen text-gray-50">
            <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-50 border-green-500 ">
                        Work
                    </p>
                    <p className=" py-6">// Check out some of recent work </p>
                </div>

                {/*Container  */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  ">
                    {/*Grid Item  */}
                    <div
                        style={{ backgroundImage: `url(${CalculatorImc})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                IMC Calculator
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/calculadora-imc/blob/main/imccalculator.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/calculadora-imc">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${CalculatorImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Calculator
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/calculadora/blob/main/calculadora_video.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/calculadora">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${GeneratorImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Password Generator
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/keygen/blob/main/keygen.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/keygen">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${TableImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Multiplication Table
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/formulario/blob/main/img/form.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/tabuada">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${FormImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Form Bootstrap
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/formulario/blob/main/img/form.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/formulario">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${ArtProjectImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Art Project
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/projetoart/blob/main/img/videoart.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/projetoart">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${ExactTimeImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Exacttime Store
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/exacttime/blob/main/img/exacttimevideo.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/exacttime">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Form002Img})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Form React
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/5_form_react/blob/main/src/img/formvideo.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/5_form_react">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${ReactDomRouterImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects  */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            React DOM Router
                            </span>
                            <div className=" pt-8 text-center">
                                <a href="https://github.com/agnelofneto/routerdom/blob/main/src/assets/routerdom.gif">
                                    <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/agnelofneto/routerdom">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
