"use client"
import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureFive = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture: Kinetic Theory & Energy</h1>

                {/* Kinetic Energy Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Kinetic Energy Formulas</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Average Kinetic Energy per Molecule:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( \\frac{3}{2} kT \\)"}</MathTxt>
                            </div>
                        </li>
                        <li className="text-red-500">
                            <strong>Average Kinetic Energy per Mole:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( \\frac{3}{2} RT \\)"}</MathTxt>
                            </div>
                            <br />
                            <span className="text-gray-800">
                                where
                                <div className="flex justify-center items-center">
                                    <MathTxt>{"\\( R = 8.31 \\, \\text{J/mol K} \\)"}</MathTxt>
                                </div>
                            </span>
                        </li>
                    </ul>
                </section>

                {/* Temperature and KE Relation */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Relation between Kinetic Energy and Temperature</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>KE Proportional to Temperature:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( KE \\propto T \\)"}</MathTxt>
                            </div>
                        </li>
                        <li className="text-red-500">
                            <strong>Ratio of KE at Different Temperatures:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( \\frac{KE_1}{KE_2} = \\frac{T_1}{T_2} \\)"}</MathTxt>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Heat Capacity */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Heat Capacity</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Specific Heat Capacity:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( C = \\frac{Q}{m \\Delta T} \\)"}</MathTxt>
                            </div>
                        </li>
                        <li className="text-red-500">
                            <strong>Molar Heat Capacity:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( C_m = \\frac{C}{M} \\)"}</MathTxt>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Latent Heat */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Latent Heat</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Latent Heat of Fusion:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( Q = mH_f \\)"}</MathTxt>
                            </div>
                        </li>
                        <li className="text-red-500">
                            <strong>Latent Heat of Vaporization:</strong>
                            <div className="flex justify-center items-center">
                                <MathTxt>{"\\( Q = mH_v \\)"}</MathTxt>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Practice Questions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Practice Question</h2>
                    <p className="text-xl font-medium text-black">
                        Find the kinetic energy per mole of a gas at 27°C and 327°C.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureFive;
