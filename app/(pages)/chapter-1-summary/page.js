"use client"
import MathTxt from '@/app/components/MathTxt';
import React from 'react';

const ChapterOneSummary = () => {
    return (
        <section className="content">
            <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-green-400">Chapter 1: Thermodynamics Summary</h1>

                {/* Heat and Temperature */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Heat and Temperature</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Temperature Conversion: <MathTxt>{"\\(\\frac{T_C - 0^\\circ C}{100} = \\frac{T_F - 32^\\circ F}{180} = \\frac{T_K - 273}{100}\\)"}</MathTxt></li>
                        <li>Heat Transfer: <MathTxt>{"\\(Q = mc\\Delta T\\)"}</MathTxt></li>
                        <li>Latent Heat: <MathTxt>{"\\(Q = mL\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Thermal Expansion */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Thermal Expansion</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Linear Expansion: <MathTxt>{"\\(\\Delta L = \\alpha L_0 \\Delta T\\)"}</MathTxt></li>
                        <li>Volume Expansion: <MathTxt>{"\\(\\Delta V = \\beta V_0 \\Delta T\\)"}</MathTxt></li>
                        <li>Relation: <MathTxt>{"\\(\\beta \\approx 3\\alpha\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Gas Laws */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Gas Laws</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Ideal Gas Law: <MathTxt>{"\\(PV = nRT\\)"}</MathTxt></li>
                        <li>Boyle's Law: <MathTxt>{"\\(P_1V_1 = P_2V_2\\)"}</MathTxt></li>
                        <li>Charles' Law: <MathTxt>{"\\(\\frac{V_1}{T_1} = \\frac{V_2}{T_2}\\)"}</MathTxt></li>
                        <li>Gay-Lussac's Law: <MathTxt>{"\\(\\frac{P_1}{T_1} = \\frac{P_2}{T_2}\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Kinetic Theory */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Kinetic Theory</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Average Kinetic Energy: <MathTxt>{"\\(\\bar{E_k} = \\frac{3}{2}kT\\)"}</MathTxt></li>
                        <li>RMS Speed: <MathTxt>{"\\(v_{rms} = \\sqrt{\\frac{3kT}{m}}\\)"}</MathTxt></li>
                        <li>Pressure: <MathTxt>{"\\(P = \\frac{1}{3} \\rho \\bar{v}^2\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Thermodynamic Laws and Processes */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Thermodynamic Laws and Processes</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>First Law: <MathTxt>{"\\(\\Delta U = Q - W\\)"}</MathTxt></li>
                        <li>Work Done: <MathTxt>{"\\(W = P\\Delta V\\)"}</MathTxt> (constant pressure)</li>
                        <li>Work Done: <MathTxt>{"\\(W = \\int P dV\\)"}</MathTxt> (variable pressure)</li>
                        <li>Adiabatic Process: <MathTxt>{"\\(PV^\\gamma = constant\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Heat Engines and Efficiency */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Heat Engines and Efficiency</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Efficiency: <MathTxt>{"\\(\\eta = \\frac{W}{Q_H} = \\frac{Q_H - Q_L}{Q_H} = 1 - \\frac{Q_L}{Q_H}\\)"}</MathTxt></li>
                        <li>Carnot Efficiency: <MathTxt>{"\\(\\eta = 1 - \\frac{T_L}{T_H}\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Entropy and Second Law */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Entropy and Second Law</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Entropy Change: <MathTxt>{"\\(\\Delta S = \\frac{Q}{T}\\)"}</MathTxt> (reversible process)</li>
                        <li>Second Law: <MathTxt>{"\\(\\Delta S_{universe} \\geq 0\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Heat Capacity */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Heat Capacity</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Specific Heat: <MathTxt>{"\\(c = \\frac{Q}{m\\Delta T}\\)"}</MathTxt></li>
                        <li>Molar Heat Capacity: <MathTxt>{"\\(C = \\frac{Q}{n\\Delta T}\\)"}</MathTxt></li>
                        <li>Relation: <MathTxt>{"\\(C_p - C_v = R\\)"}</MathTxt> (ideal gases)</li>
                        <li>Heat Capacity Ratio: <MathTxt>{"\\(\\gamma = \\frac{C_p}{C_v}\\)"}</MathTxt></li>
                    </ul>
                </section>

                {/* Advanced Concepts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Advanced Concepts</h2>
                    <ul className="list-disc ml-6 text-xl font-medium text-black">
                        <li>Triple Point of Water: 273.16 K and 611.73 Pa</li>
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default ChapterOneSummary;