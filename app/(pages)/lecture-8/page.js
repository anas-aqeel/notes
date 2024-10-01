"use client"
import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureEight = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture 8: Advanced Thermodynamics Concepts</h1>

                {/* Triple Point of Water */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Triple Point of Water</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li><strong>Definition:</strong> The unique state where solid, liquid, and vapor phases of water coexist in thermodynamic equilibrium.</li>
                        <li><strong>Conditions:</strong> Occurs at 273.16 K (0.01°C) and 4.58 mm Hg (611.73 Pa).</li>
                        <li><strong>Significance:</strong> Used to define the Kelvin temperature scale, ensuring consistent temperature measurements globally.</li>
                    </ul>
                </section>

                {/* Entropy Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Entropy Concepts</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li><strong>Definition:</strong> A measure of disorder in a system.</li>
                        <li><strong>Key principles:</strong>
                            <ul className="list-disc ml-6">
                                <li><MathTxt>{"\\(\\Delta S > 0\\)"}</MathTxt> for irreversible (real) processes</li>
                                <li>Constant (ideal) entropy represented as a square diagram</li>
                                <li>White area represents "shake" or disorderliness</li>
                                <li>Black area represents order/de-localization</li>
                            </ul>
                        </li>
                        <li><strong>Important relation:</strong> <MathTxt>{"\\(\\frac{\\Delta S}{\\Delta Q} = \\frac{1}{T}\\)"}</MathTxt> for temperature</li>
                    </ul>
                </section>

                {/* Thermodynamic Formulas and Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Thermodynamic Formulas and Concepts</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li><strong>Heat transfer formulas:</strong>
                            <ul className="list-disc ml-6">
                                <li><MathTxt>{"Q = mL"}</MathTxt> (latent heat for phase changes)</li>
                                <li><MathTxt>{"Q = mc\\(\\Delta T\\)"}</MathTxt> (sensible heat for temperature changes)</li>
                            </ul>
                        </li>
                        <li><strong>First Law of Thermodynamics:</strong> <MathTxt>{"\\(\\Delta U = \\Delta Q - \\Delta W\\)"}</MathTxt></li>
                        <li><strong>Efficiency of heat engines:</strong>
                            <ul className="list-disc ml-6">
                                <li className='max-w-sm w-full mx-auto mb-6'>General: <MathTxt>{"\\(\\eta = \\frac{W}{Q_H} = \\frac{Q_H - Q_L}{Q_H} = 1 - \\frac{Q_L}{Q_H}\\)"}</MathTxt></li>
                                <li className='max-w-sm w-full mx-auto'>Carnot cycle: <MathTxt>{"\\(\\eta = 1 - \\frac{T_L}{T_H}\\)"}</MathTxt></li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* PV Diagram and Work */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">PV Diagram and Work</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Work done = Area under PV curve</li>
                        <li>Processes visualized: Isothermal, isobaric, isochoric</li>
                        <li>Carnot cycle representation on PV diagram</li>
                        <li><strong>Importance:</strong> Allows visualization of thermodynamic processes and calculation of work done</li>
                    </ul>
                </section>





                {/* Conclusion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
                    <p className="text-xl font-medium text-black">
                        These concepts and formulas form the foundation of classical thermodynamics. They describe the behavior of energy, heat, and work in physical systems, from simple phase changes to complex heat engines. Understanding these principles allows for the analysis and optimization of various thermal processes and systems, crucial in fields ranging from engineering to physical chemistry.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureEight;