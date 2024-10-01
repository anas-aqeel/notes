"use client"
import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureSix = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture 6: Advanced Thermodynamics</h1>

                {/* Key Formulas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Key Formulas</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Ideal Gas Law:</strong>
                            <MathTxt>{"\\[ Q = nRT \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>First Law of Thermodynamics:</strong>
                            <MathTxt>{"\\[ \\Delta U = Q + W \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Change in Internal Energy:</strong>
                            <MathTxt>{"\\[ \\Delta U = nC_v\\Delta T \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Work Done by/on a Gas:</strong>
                            <MathTxt>{"\\[ W = -P\\Delta V \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Heat Added at Constant Pressure:</strong>
                            <MathTxt>{"\\[ Q = nC_p\\Delta T \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Relation between Heat Capacities:</strong>
                            <MathTxt>{"\\[ C_p - C_v = R \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Heat Capacity Ratio:</strong>
                            <MathTxt>{"\\[ \\gamma = \\frac{C_p}{C_v} \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Work in Isothermal Process:</strong>
                            <MathTxt>{"\\[ W = nRT\\ln(\\frac{V_2}{V_1}) \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Adiabatic Process:</strong>
                            <MathTxt>{"\\[ PV^\\gamma = \\text{constant} \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Entropy Change:</strong>
                            <MathTxt>{"\\[ \\Delta S = nC_v\\ln(\\frac{T_2}{T_1}) + nR\\ln(\\frac{V_2}{V_1}) \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Entropy Change in Reversible Process:</strong>
                            <MathTxt>{"\\[ \\Delta S = \\frac{Q}{T} \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Efficiency of Heat Engine:</strong>
                            <MathTxt>{"\\[ \\eta = 1 - \\frac{T_c}{T_h} \\]"}</MathTxt>
                        </li>
                    </ul>
                </section>

                {/* Important Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Important Concepts</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Thermodynamic processes: isothermal, isobaric, isochoric, adiabatic</li>
                        <li>State variables vs. path functions</li>
                        <li>Reversible vs. irreversible processes</li>
                        <li>Heat engines and refrigerators</li>
                        <li>Carnot cycle and its efficiency</li>
                        <li>Entropy and the Second Law of Thermodynamics</li>
                        <li>Free expansion and Joule expansion</li>
                    </ul>
                </section>

                {/* Practice Questions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Practice Questions</h2>
                    <ol className="list-decimal ml-6 text-xl font-medium text-black">
                        <li>Calculate work done in various thermodynamic processes</li>
                        <li>Determine heat added/removed in different processes</li>
                        <li>Find efficiency of heat engines</li>
                        <li>Calculate entropy changes in different processes</li>
                        <li>Solve problems involving Carnot cycle</li>
                    </ol>
                </section>

                {/* Additional Information */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Additional Information</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Sign conventions for work and heat</li>
                        <li>Graphical representations of different processes on P-V diagrams</li>
                        <li>Relationships between different thermodynamic variables</li>
                        <li>Applications of thermodynamic principles to real-world systems</li>
                        <li>Limitations of ideal gas approximations</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
                    <p className="text-xl font-medium text-black">
                        This lecture covered advanced thermodynamic concepts, including key formulas, important processes, and practical applications. Understanding these principles is crucial for analyzing heat engines, refrigeration cycles, and various thermodynamic systems.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureSix;
