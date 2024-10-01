"use client"
import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureTwo = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture 2: Thermodynamics Fundamentals</h1>

                {/* Thermal Expansion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Thermal Expansion</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li><strong>Linear thermal expansion:</strong></li>
                        <div className="text-center text-2xl text-blue-600">
                            <MathTxt>{"\\[\\Delta L = \\alpha L_0 \\Delta T\\]"}</MathTxt>
                        </div>
                        <li><strong>Volume thermal expansion:</strong></li>
                        <div className="text-center text-2xl text-blue-600">
                            <MathTxt>{"\\[\\Delta V = \\beta V_0 \\Delta T\\]"}</MathTxt>
                        </div>
                        <li><strong>Relation:</strong></li>
                        <div className="text-center text-2xl text-blue-600">
                            <MathTxt>{"\\[\\beta \\approx 3\\alpha\\]"}</MathTxt>
                        </div>
                        <li>(for most materials)</li>
                    </ul>
                </section>
                {/* Thermal Expansion Notes */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Thermal Expansion Notes</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li><strong>Linear Expansion:</strong>
                            <ul className="list-disc ml-6">
                                <li>Formula:</li>
                                <div className="text-center text-2xl text-blue-600">
                                    <MathTxt>{"\\[\\Delta L = \\alpha L_0 \\Delta T\\]"}</MathTxt>
                                </div>
                                <li>Where: <MathTxt>{"\\(\\alpha\\)"}</MathTxt> is the linear expansion coefficient</li>
                            </ul>
                        </li>
                        <li><strong>Volumetric Expansion:</strong>
                            <ul className="list-disc ml-6">
                                <li>Formula:</li>
                                <div className="text-center text-2xl text-blue-600">
                                    <MathTxt>{"\\[\\Delta V = \\beta V_0 \\Delta T\\]"}</MathTxt>
                                </div>
                                <li>Where: <MathTxt>{"\\(\\beta\\)"}</MathTxt> is the volumetric expansion coefficient</li>
                            </ul>
                        </li>
                        <li><strong>Relationship between coefficients:</strong></li>
                        <div className="text-center text-2xl text-blue-600">
                            <MathTxt>{"\\[\\beta \\approx 3\\alpha\\]"}</MathTxt>
                        </div>
                        <li><strong>Fractional change:</strong>
                            <ul className="list-disc ml-6">
                                <li>Linear:</li>
                                <div className="text-center text-2xl text-blue-600">
                                    <MathTxt>{"\\[\\frac{\\Delta L}{L_0} = \\alpha \\Delta T\\]"}</MathTxt>
                                </div>
                                <li>Volumetric:</li>
                                <div className="text-center text-2xl text-blue-600">
                                    <MathTxt>{"\\[\\frac{\\Delta V}{V_0} = \\beta \\Delta T\\]"}</MathTxt>
                                </div>
                            </ul>
                        </li>
                        <li><strong>Percentage change:</strong>
                            <ul className="list-disc ml-6">
                                <li>Linear:</li>
                                <div className="text-center text-2xl text-blue-600">
                                    <MathTxt>{"\\[\\text{\\% change} = \\alpha \\Delta T \\times 100\\%\\]"}</MathTxt>
                                </div>
                                <li>Volumetric:</li>
                                <div className="text-center text-2xl text-blue-600">
                                    <MathTxt>{"\\[\\text{\\% change} = \\beta \\Delta T \\times 100\\%\\]"}</MathTxt>
                                </div>
                            </ul>
                        </li>
                        <li><strong>Anomalous expansion of water:</strong>
                            <ul className="list-disc ml-6">
                                <li>Water contracts when heated from 0°C to 4°C</li>
                                <li>Maximum density at 4°C</li>
                                <li>Expands when heated above 4°C</li>
                                <li>Important for aquatic life in cold climates</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                

                {/* Gas Laws */}
                
               

                

                

                {/* Practice Questions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Practice Questions</h2>
                    <ol className="list-decimal ml-6 text-xl font-medium text-black">
                        <li>A metal rod expands by 0.1% when heated from 20°C to 120°C. Calculate its linear expansion coefficient.</li>
                        <li>Calculate the work done by a gas that expands from 2 L to 5 L against a constant pressure of 1 atm.</li>
                        <li>An ideal gas undergoes an isothermal expansion at 300 K from 2 L to 5 L. If the initial pressure was 2 atm, what is the final pressure?</li>
                        <li>A heat engine operates between reservoirs at 400 K and 300 K. What is its maximum possible efficiency?</li>
                    </ol>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
                    <p className="text-xl font-medium text-black">
                        This lecture covers fundamental concepts in thermodynamics, from thermal expansion to the kinetic theory of gases. Understanding these principles is crucial for analyzing thermal systems, energy conversions, and solving practical problems in engineering and physics. The interplay between these concepts forms the foundation for more advanced topics in thermodynamics.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureTwo;