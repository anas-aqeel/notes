"use client"
import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureFour = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture: Kinetic Theory & Gas Laws</h1>

                {/* Key Laws */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Key Laws</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Boyle's Law:</strong> <MathTxt>{"\\(P \\propto \\frac{1}{V}\\)"}</MathTxt>
                            <br /><span className="text-gray-800">Applicable at high pressure.</span>
                        </li>
                        <li className="text-red-500">
                            <strong>Charles' Law:</strong> <MathTxt>{"\\(V \\propto T\\)"}</MathTxt>
                            <br /><span className="text-gray-800">Applicable at low temperature.</span>
                        </li>
                    </ul>
                </section>

                {/* Real Gas Behavior */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Real Gas Behavior</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li><span className="text-black">Real gases deviate from ideal behavior at <strong>high pressure</strong> and <strong>low temperature</strong>.</span></li>
                        <li><span className="text-black">Real gases behave ideally at <strong>low pressure</strong> and <strong>high temperature</strong>.</span></li>
                    </ul>
                </section>

                {/* Important Formulas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Important Formulas</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Ideal Gas Law:</strong><br />
                            <p className="text-gray-800 text-center">
                                <MathTxt>{"\\(PV = nRT\\)"}</MathTxt>
                            </p>
                        </li>
                        <li className="text-red-500">
                            <strong>Pressure Formula:</strong><br />
                            <p className="text-gray-800 text-center">
                                <MathTxt>{"\\(P = \\frac{1}{3} \\rho \\bar{v}^2\\)"}</MathTxt>
                            </p>
                        </li>
                        <li className="text-red-500">
                            <strong>Root Mean Square (RMS) Speed:</strong><br />
                            <p className="text-gray-800 text-center">
                                <MathTxt>{"\\(v_{rms} = \\sqrt{\\frac{3P}{\\rho}} = \\sqrt{\\frac{3PV}{mN}} \\approx \\sqrt{\\frac{3nRT}{mN}}\\)"}</MathTxt>
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Avogadro's Number and Molar Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Avogadro's Number & Molar Concepts</h2>
                    <ul className="list-disc space-y-3 ml-6 text-xl font-medium text-black">
                        <li><MathTxt>{"\\(N_A = 6.022 \\times 10^{23}\\)"}</MathTxt> <span className="text-gray-800"> (Avogadro's number)</span></li>
                        <li><MathTxt>{"\\(N_p\\)"}</MathTxt> <span className="text-gray-800"> = Number of particles</span></li>
                        <li><MathTxt>{"\\(n = \\frac{N_p}{N_A}\\)"}</MathTxt> <span className="text-gray-800"> = Number of moles</span></li>
                        <li><MathTxt>{"\\(m\\)"}</MathTxt> <span className="text-gray-800"> = Mass in grams</span></li>
                        <li><MathTxt>{"\\(M\\)"}</MathTxt> <span className="text-gray-800"> = Molar mass (g/mol)</span></li>
                    </ul>
                </section>

                {/* Relation Formulas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Relation Formulas</h2>
                    <ul className="list-disc space-y-3 ml-6 text-xl font-medium text-black">
                        <li><MathTxt>{"\\(m = n \\times M\\)"}</MathTxt> <span className="text-gray-800">(Mass is the product of moles and molar mass)</span></li>
                        <li><MathTxt>{"\\(PV = nRT\\)"}</MathTxt> <span className="text-gray-800">(Ideal gas law)</span></li>
                        <li><MathTxt>{"\\(v_{rms} = \\sqrt{\\frac{3RT}{M}}\\)"}</MathTxt> <span className="text-gray-800">(RMS speed in terms of molar mass)</span></li>
                        <li><MathTxt>{"\\(k_B = \\frac{R}{N_A}\\)"}</MathTxt> <span className="text-gray-800">(Boltzmann constant relation)</span></li>
                    </ul>
                </section>

                {/* Practice Questions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Practice Questions</h2>
                    <ol className="list-decimal ml-6 text-xl font-medium text-black">
                        <li className="mb-4">
                            Oxygen is filled in a closed metal jar of volume <MathTxt>{"\\(10^{-3} \\text{ m}^3\\)"}</MathTxt> at a pressure of <MathTxt>{"\\(1.5 \\times 10^5 \\text{ Pa}\\)"}</MathTxt> and temperature 400 K. The jar has a small leak in it. The atmospheric pressure is <MathTxt>{"\\(10^5 \\text{ Pa}\\)"}</MathTxt> and the atmospheric temperature is 300 K. Find the mass of the gas that leaks out by the time the pressure and temperature inside the jar equalize with the surroundings.
                        </li>
                        <li className="mb-4">
                            The velocities of three molecules are 3v, 4v, and 5v, respectively. Their RMS speed will be:
                            <br /><strong>Answer:</strong> <MathTxt>{"\\(\\sqrt{\\frac{50}{3}} v\\)"}</MathTxt>
                        </li>
                        <li className="mb-4">
                            Four molecules of a gas have speeds (in km/s) 1, 2, 3, and 4. Find the RMS speed.
                            <br /><strong>Answer:</strong> <MathTxt>{"\\(\\sqrt{\\frac{30}{4}} \\approx \\frac{\\sqrt{15}}{2} \\text{ km/s}\\)"}</MathTxt>
                        </li>
                        <li className="mb-4">
                            What will be the temperature when the RMS velocity is double of that at 300 K?
                            <br /><strong>Answer:</strong> 1200 K
                        </li>
                        <li className="mb-4">
                            By what factor will the RMS velocity change if the temperature is raised from 27°C to 327°C?
                            <br /><strong>Answer:</strong> <MathTxt>{"\\(\\sqrt{2}\\)"}</MathTxt>
                        </li>
                    </ol>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
                    <p className="text-xl font-medium text-black">
                        This lecture covers fundamental gas laws including Boyle's and Charles' laws, real gas behavior, key formulas for RMS speed, relations involving molar quantities, and practice problems on RMS speed and temperature changes.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureFour;