"use client"
import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const LectureSeven = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture 7: Thermodynamic Processes and Heat Capacity</h1>

                {/* Key Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Key Concepts</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Heat and thermodynamics</li>
                        <li>Isothermal and adiabatic processes</li>
                        <li>Heat capacity and latent heat</li>
                        <li>Specific heat capacity and molar heat capacity</li>
                        <li>PV diagrams and work done in thermodynamic processes</li>
                        <li>First law of thermodynamics</li>
                        <li>Internal energy and enthalpy</li>
                        <li>Joule-Thomson effect</li>
                    </ul>
                </section>

                {/* Important Formulas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Important Formulas</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li className="text-red-500">
                            <strong>Heat transfer:</strong>
                            <MathTxt>{"\\[ Q = mc\\Delta T \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Latent heat:</strong>
                            <MathTxt>{"\\[ Q = mL \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Work done by gas:</strong>
                            <MathTxt>{"\\[ W = P\\Delta V \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>First law of thermodynamics:</strong>
                            <MathTxt>{"\\[ \\Delta U = Q - W \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Enthalpy:</strong>
                            <MathTxt>{"\\[ H = U + PV \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Mayer's relation:</strong>
                            <MathTxt>{"\\[ C_P - C_V = R \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Heat capacity ratio:</strong>
                            <MathTxt>{"\\[ \\gamma = \\frac{C_P}{C_V} \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Adiabatic process:</strong>
                            <MathTxt>{"\\[ PV^\\gamma = \\text{constant} \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Work in isothermal process:</strong>
                            <MathTxt>{"\\[ W = nRT\\ln(\\frac{V_2}{V_1}) \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Isothermal process:</strong>
                            <MathTxt>{"\\[ P_1V_1 = P_2V_2 \\]"}</MathTxt>
                        </li>
                        <li className="text-red-500">
                            <strong>Adiabatic process:</strong>
                            <MathTxt>{"\\[ T_1V_1^{\\gamma-1} = T_2V_2^{\\gamma-1} \\]"}</MathTxt>
                        </li>
                    </ul>
                </section>

                {/* Practice Questions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Practice Questions</h2>
                    <ol className="list-decimal space-y-6 ml-6 text-xl font-medium text-black">
                        <li>Calculate Molar Heat Capacity of gas when 4 moles of gas absorb 3000 J of heat energy, and its temperature increases by 25°C. (Ans: 30 J/mol·K)</li>
                        <li>A sample of water with a mass of 200 grams is heated, and its temperature rises from 25°C to 35°C. Calculate heat transferred to water. Given that specific heat capacity of water is 4.2 J/g·K (Ans: 8.4 kJ)</li>
                        <li>A gas confined in a cylinder undergoes an expansion from 2.0 L to a final volume of 4.0 L against a constant external pressure of 1 atm. Find approximate work done by the gas during expansion process. Given that 1 atm = 101325 N/m². (Ans: 200 J)</li>
                        <li>A gas undergoes isothermal expansion at a constant temperature of 300K. If the gas absorbs 500 J of heat during the process, calculate the work done by the gas. (Ans: 500 J)</li>
                        <li>A 300 g piece of copper at 100°C is placed in 200 g of water at 20°C. If the final temperature of the system is 30°C, calculate the specific heat capacity of copper. Specific Heat Capacity of Water is 4.2 J/g·K (Ans: 0.4 J/g·K)</li>
                        <li>How much heat is required to raise the temperature of 1000 g of lead from 25°C to 100°C? Specific heat capacity of lead is 0.128 J/g·K. (Ans: 9600 J)</li>
                        <li>A 2kg iron block is taken from the furnace where its temperature was 650°C and placed on a very large block of ice at 0°C. Assuming that all heat given by iron is used to melt the ice, how much ice is melted? (Specific heat capacity of iron: 450 J/Kg·K & Latent Heat of Fusion of Ice: 3.00 x 10⁵ J/Kg) (Ans: 1.95 Kg)</li>
                        <li>
                            (i) 2 mol of an ideal gas is heated at constant pressure, so that its temperature increases from 27°C to 127°C. Find work done by the gas. Take R=8.3 J/mol·K (Ans: 1660J)
                            (ii) For the same gas in a process, if its volume increases from 1000 cc to 2000 cc at constant pressure 100 kPa. Find work done by the gas. (Ans: 100J)
                        </li>
                        <li>The pressure in monoatomic gas increases linearly from 4 x 10⁵ Nm⁻² to 8 x 10⁵ Nm⁻², when its volume increases from 0.2 m³ to 0.5 m³. Calculate the work done by the gas. (Ans: 1.8 x 10⁵ J)</li>
                        <li>
                            The figure shows a PV graph of the thermodynamic behavior of an ideal gas. Find out from this graph:
                            (i) work done by the gas in the process A→B, B→C, C→D and D→A. (Ans: 7200J, 0J, -1200J, 0J)
                            (ii) work done by the gas in complete cycle A→B→C→D→A (Ans: 6000J)
                        </li>
                    </ol>
                </section>

                {/* Additional Information */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Additional Information</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Explanation of PV diagrams for various thermodynamic processes</li>
                        <li>Comparison between isothermal and adiabatic processes</li>
                        <li>Relationship between heat capacity at constant pressure (CP) and constant volume (CV)</li>
                        <li>Discussion on internal energy changes in ideal gases</li>
                        <li>Explanation of Joule-Thomson effect and inversion temperature</li>
                        <li>Derivation of work done in isothermal and adiabatic processes</li>
                        <li>Concept of reversible and irreversible processes</li>
                        <li>Definition and significance of enthalpy</li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
                    <p className="text-xl font-medium text-black">
                        This lecture covered essential concepts in thermodynamics, including various processes, heat capacity, and the first law of thermodynamics. Understanding these principles is crucial for analyzing heat transfer, work done, and energy changes in thermodynamic systems.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default LectureSeven;