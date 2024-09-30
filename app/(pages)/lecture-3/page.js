import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureThree = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture 3: Gas Laws</h1>

                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Introduction</h2>
                    <p className="text-xl font-medium text-black">
                        Thermodynamics is a branch of physics focused on the relationships between heat, energy, and work.
                    </p>
                </section>

                {/* Key Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Key Concepts</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li><strong>Ideal Gas Law:</strong> The ideal gas equation is used to relate pressure, volume, temperature, and number of moles.</li>
                        <li><strong>Boyle’s Law:</strong> At constant temperature, the volume of a gas is inversely proportional to its pressure.</li>
                    </ul>
                </section>

                {/* Important Formulas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Important Formulas</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Ideal Gas Law:</strong><br />
                            <p className="text-gray-800">
                                <MathTxt>{"\\[ PV = nRT \\]"}</MathTxt>
                            </p>
                        </li>
                        <li className="text-red-500">
                            <strong>Boyle's Law:</strong><br />
                            <p className="text-gray-800">
                                <MathTxt>{"\\[ P_1 V_1 = P_2 V_2 \\]"}</MathTxt>
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Practice Questions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Practice Questions</h2>
                    <ol className="list-decimal ml-6 text-xl font-medium text-black">
                        <li className="mb-4">
                            The pressure of a given mass of gas in a vessel is reduced to one-third of its initial value at constant temperature. Calculate the percentage change in volume.
                            <br /><strong>Answer:</strong> 200%&#8203;
                        </li>
                        <li className="mb-4">
                            One liter of an ideal gas at 27°C is heated at constant pressure until it reaches 297°C. What is the final volume?
                            <br /><strong>Answer:</strong> 1.9 L&#8203;
                        </li>
                        <li className="mb-4">
                            A gas at 27°C in a cylinder has a volume of 4 L and a pressure of 100 Nm². If the gas is compressed at constant temperature so that the pressure becomes 150 Nm², estimate the change in volume.
                            <br /><strong>Answer:</strong> The volume decreases (calculation required)&#8203;
                        </li>
                    </ol>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
                    <p className="text-xl font-medium text-black">
                        In this lecture, we covered fundamental gas laws and their applications, along with sample practice questions to illustrate key concepts.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureThree;
