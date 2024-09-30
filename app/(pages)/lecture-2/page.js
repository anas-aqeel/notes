import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureTwo = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture 2: Thermodynamics</h1>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">
                        Introduction
                    </h2>
                    <p className="text-xl font-medium text-black">
                        Thermodynamics is the branch of physics that deals with heat, work, and the forms of energy involved in physical and chemical processes.
                    </p>
                </section>

                {/* Key Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">
                        Key Concepts
                    </h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>
                            <strong>First Law of Thermodynamics:</strong> Energy cannot be created or destroyed, only transformed.
                        </li>
                        <li>
                            <strong>Second Law of Thermodynamics:</strong> In any energy transfer, some energy becomes unusable, increasing entropy.
                        </li>
                        <li>
                            <strong>Third Law of Thermodynamics:</strong> As the temperature approaches absolute zero, the entropy of a system approaches a constant minimum.
                        </li>
                    </ul>
                </section>

                {/* Important Formulas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">
                        Important Formulas
                    </h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>First Law Equation:</strong><br />
                            <p className="text-gray-800">
                                <MathTxt>

                                    {"\\[ \\Delta U = Q - W \\]"}
                                </MathTxt>
                            </p>
                        </li>
                        <li className="text-red-500">
                            <strong>Entropy Formula:</strong><br />
                            <p className="text-gray-800">
                                <MathTxt>

                                    {"\\[ \\Delta S = \\frac{Q_{rev}}{T} \\]"}
                                </MathTxt>
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Practice Questions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">
                        Practice Questions
                    </h2>
                    <ol className="list-decimal ml-6 text-xl font-medium text-black">
                        <li className="mb-4">
                            A gas expands at a constant pressure of 100 kPa from a volume of 1 m³ to 3 m³. How much work is done by the gas?<br />
                            <strong>Answer:</strong> 200 kJ
                        </li>
                        <li className="mb-4">
                            In a heat engine, 500 J of heat is added, and 300 J of work is done by the system. What is the change in internal energy?<br />
                            <strong>Answer:</strong> 200 J
                        </li>
                    </ol>
                </section>

                {/* Key Notes */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Key Notes</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>
                            The internal energy of an ideal gas depends only on temperature, not on pressure or volume.
                        </li>
                        <li>
                            Heat engines are designed to convert heat into work, but some heat is always lost to the surroundings.
                        </li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
                    <p className="text-xl font-medium text-black">
                        In this lecture, we discussed the laws of thermodynamics and their practical implications for energy conversion and entropy.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureTwo;
