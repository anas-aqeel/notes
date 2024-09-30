"use client";
import React from 'react';
import MathTxt from '../components/MathTxt';

const LectureOne = () => {
  return (
    
    <section className="content">
      <div className="p-5 rounded-lg shadow-2xl bg-gray-50">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Lecture 1: Heat</h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-pink-500">
            Introduction
          </h2>
          <p className="text-xl font-medium text-black">
            Heat is defined as the motion of particles, whereas temperature is a
            measure of the degree of hotness and is related to the average
            translational kinetic energy of particles. Internal energy is the
            sum of all possible energies within a system.
          </p>
        </section>

        {/* Key Concepts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-pink-500">
            Key Concepts
          </h2>
          <ul className="list-disc ml-6 text-xl font-medium text-black">
            <li>
              <strong>Thermal Equilibrium:</strong> A state in which the net
              flow of heat between two objects in contact is zero.
            </li>
            <li>
              <strong>Thermal Contact:</strong> Heat is transferred through
              conduction, convection, or radiation (e.g., electromagnetic
              waves).
            </li>
            <li>
              <strong>Temperature Scales:</strong> Common temperature scales
              include Celsius, Fahrenheit, and Kelvin (SI unit).
            </li>
            <li>
              <strong>Reference Points:</strong> Lower fixed point (LFP) refers
              to the melting/freezing point of water at 760 mm of Hg. Upper
              fixed point (UFP) refers to the boiling/steam point of water at 1
              atm pressure.
            </li>
            <li>
              <strong>Division Equivalency:</strong> The difference between UFP
              and LFP is divided into specific divisions for each scale:
              <ul className="list-disc ml-8">
                <li>100 divisions on the Celsius scale</li>
                <li>180 divisions on the Fahrenheit scale</li>
                <li>100 divisions on the Kelvin scale</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Temperature Conversion Formula */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-pink-500">
            Important Formulas
          </h2>
          <ul className="list-disc ml-6 text-xl font-medium text-black">
            <li className="text-red-500">
              <strong>Temperature Conversion Formula:</strong><br />
              <p className="text-gray-800">
                <MathTxt>

                  {"\\[ \\frac{T_C - 0^\\circ C}{100} = \\frac{T_F - 32^\\circ F}{180} = \\frac{T_K - 273}{100} \\]"}
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
              If the thermometer reads the freezing point of water as 20°C and
              boiling point as 150°C, what will the thermometer read when the
              actual temperature is 60°C?<br />
              <strong>Options:</strong>
              <span className="text-gray-800">
                a) 98°C b) 110°C c) 40°C d) 60°C
              </span>
            </li>
            <li className="mb-4">
              In a resistance thermometer, the resistances at 0°C and 100°C are
              6.74 ohms and 7.74 ohms, respectively. What is the temperature
              corresponding to a resistance of 6.53 ohms?<br />
              <strong>Options:</strong>
              <span className="text-gray-800">
                a) 53°C b) 21°C c) -53°C d) -21°C
              </span>
            </li>
            <li className="mb-4">
              The readings of a bath on Celsius and Fahrenheit thermometers are
              in the ratio 2:5. What is the temperature of the bath?<br />
              <strong>Options:</strong>
              <span className="text-gray-800">
                a) -26.66°C b) 40°C c) 45.71°C d) 26.66°C
              </span>
              <br />
              <strong>Answer:</strong> c) 45.71°C
            </li>
            <li className="mb-4">
              If there is a 45 division change on the Celsius scale, find the
              equivalent change on the Fahrenheit scale.<br />
              <strong>Answer:</strong> 81 divisions
            </li>
          </ol>
        </section>

        {/* Key Notes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-pink-500">Key Notes</h2>
          <ul className="list-disc ml-6 text-xl font-medium text-black">
            <li>
              The Celsius and Fahrenheit scales coincide at -40°C = -40°F.
            </li>
            <li>
              The Kelvin scale is an absolute scale; 0K is the lowest possible
              temperature (absolute zero).
            </li>
            <li>
              100 divisions on the Celsius scale is equivalent to 180 divisions
              on the Fahrenheit scale.
            </li>
            <li>
              The formula for resistance thermometers is based on the change in
              resistance with respect to temperature.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-pink-500">Conclusion</h2>
          <p className="text-xl font-medium text-black">
            This lecture covered fundamental concepts of heat, temperature, and
            conversions between Celsius, Fahrenheit, and Kelvin scales, as well
            as practical examples and reference points.
          </p>
        </section>
      </div>
    </section>
  );
};

export default LectureOne;