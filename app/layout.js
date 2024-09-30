"use client"
import { useState } from 'react';
import Head from 'next/head';
import { MathJaxContext } from 'better-react-mathjax';
import Sidebar from './components/Sidebar';
import { Dekko, Patrick_Hand } from 'next/font/google';
import "./globals.css"

const dekko = Dekko({
  weight: '400',
  subsets: ['latin'],
});

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
});


const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mathJaxConfig = {
    loader: { load: ["input/asciimath"] },
    tex: {

      inlineMath: [
        ['\\(', '\\)'],
        ['$', '$'],
      ],
    },
    svg: {
      fontCache: 'global',
    },
  };

  
  return (
    <html>

      <Head>
        <title>Physics Lectures</title>
      </Head>


      <body className={`${dekko.className} ${patrickHand.className}`}>
        <MathJaxContext config={mathJaxConfig}>
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <section className={`
            home-section p-6 relative bg-[#e4e9f7] min-h-screen transition-all duration-500 ease-in-out shadow-lg rounded-lg ${sidebarOpen ? 'left-[250px] w-[calc(100%_-_250px)]' : 'left-20 w-[calc(100%_-_80px)]'}`}>
            {children}
          </section>
        </MathJaxContext>
      </body>
    </html>

  );
};

export default Layout;
