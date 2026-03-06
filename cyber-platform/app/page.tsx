'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Skull, Zap, ArrowRight, Crosshair } from 'lucide-react';
import Link from 'next/link';

export default function KryptHomepage() {
  // GLOBAL SCROLL: Tracks the whole window for the background color changes
  const { scrollYProgress: globalScroll } = useScroll();

  // Background color shifts from yellow to black to dark void as you scroll
  const bgColor = useTransform(
    globalScroll,
    [0, 0.2, 0.4, 0.8, 1],
    ["#facc15", "#fbbf24", "#000000", "#0f0f0f", "#050505"]
  );

  // Text color dynamically flips from black on yellow to white on dark backgrounds
  const textColor = useTransform(
    globalScroll,
    [0, 0.2, 0.4],
    ["#000000", "#000000", "#ffffff"]
  );

  return (
    <motion.main 
      style={{ backgroundColor: bgColor, color: textColor }}
      className="min-h-screen font-sans overflow-x-hidden selection:bg-black selection:text-white"
    >
      {/* =========================================
          SECTION 1: BRUTALIST LOGO & HERO
          ========================================= */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[#facc15]">
        
        {/* Animated background grid */}
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '80px 80px'
          }}
        />

        {/* KRYPT TYPOGRAPHIC LOGO */}
        <motion.div 
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
          className="mb-16 relative z-10 flex flex-col items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="mb-6"
          >
            <Crosshair className="w-16 h-16 stroke-[3px] text-black" />
          </motion.div>

          <div className="border-8 border-black bg-black text-white px-8 py-6 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none"
              style={{ letterSpacing: '-0.08em' }}
            >
              KRYPT
            </h2>
          </div>

          <p className="mt-6 text-2xl md:text-4xl font-black tracking-widest uppercase bg-white border-4 border-black px-4 py-2 text-black">
            THREAT INTELLIGENCE
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-10 text-center max-w-6xl z-10"
        >
          Cybersecurity <br/>
          <span className="bg-black text-yellow-300 px-6 py-3 inline-block -rotate-3 border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            IS A HUMAN
          </span>
          <br/>
          PROBLEM.
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl md:text-5xl font-black uppercase mb-16 text-center max-w-5xl z-10 leading-tight"
        >
          We Hack Your <span className="text-red-500 underline decoration-8 underline-offset-4">Perception</span> Of Safety.
        </motion.p>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-black text-white p-8 md:p-12 border-8 border-black max-w-4xl z-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
        >
          <p className="text-2xl md:text-3xl font-bold leading-tight">
            KRYPT is a brutalist security awareness platform. We transform complacency into vigilance through unforgettable, high-impact simulations of real-world threats.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 z-10 flex flex-col items-center"
        >
          <span className="font-black uppercase text-lg mb-4 border-b-4 border-red-500 pb-2 text-red-500">Scroll</span>
          <Zap className="w-8 h-8 stroke-[3px] text-red-500" />
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: HUMAN VS. MACHINE (BULLETPROOF SCROLL)
          ========================================= */}
      <div className="bg-black w-full text-white">
        
        {/* TEXT BLOCK 1 */}
        <section className="min-h-screen flex items-center justify-center p-6 border-b border-neutral-900">
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="text-center w-full max-w-5xl"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter">
              Machines Get <br/>
              <span className="text-yellow-400 bg-black px-6 py-4 mt-6 inline-block border-8 border-yellow-400 shadow-[12px_12px_0px_0px_rgba(250,204,21,0.5)]">
                FIREWALLS
              </span>
            </h2>
          </motion.div>
        </section>

        {/* TEXT BLOCK 2 */}
        <section className="min-h-screen flex items-center justify-center p-6 border-b border-neutral-900">
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="text-center w-full max-w-5xl"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter">
              Humans Rely On <br/>
              <span className="text-red-500 bg-white px-6 py-4 mt-6 inline-block border-8 border-red-500 -rotate-2 shadow-[12px_12px_0px_0px_rgba(239,68,68,0.5)]">
                TRUST
              </span>
            </h2>
          </motion.div>
        </section>

        {/* TEXT BLOCK 3 */}
        <section className="min-h-screen flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="text-center w-full max-w-5xl"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter">
              That's Why <br/>
              <span className="text-yellow-400 underline decoration-white decoration-8 underline-offset-8 block mt-6 mb-8">
                HUMANS ARE THE
              </span>
              <span className="text-red-500 text-6xl md:text-8xl lg:text-[10rem] block leading-none">
                EASIEST<br/>
                THING TO<br/>
                HACK
              </span>
            </h2>
          </motion.div>
        </section>

      </div>

      {/* =========================================
          SECTION 3: CONNECTED CTA GRID
          ========================================= */}
      <section className="min-h-screen bg-gradient-to-br from-black to-[#0f0f0f] flex flex-col items-center justify-center p-6 md:p-12 relative z-20">
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black uppercase text-center text-white mb-20 tracking-tighter leading-none"
        >
          Choose Your <br/>
          <span className="text-yellow-400">REALITY</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl w-full">
          
          {/* CARD 1: Quishing Simulation */}
          <Link href="/quishing" className="group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", bounce: 0.3 }}
              whileHover={{ translateY: 8, translateX: 8, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
              className="bg-red-500 text-white border-8 border-black p-10 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all h-full flex flex-col justify-between"
            >
              <div>
                <Skull className="w-20 h-20 mb-8 stroke-[2.5px]" />
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight tracking-tighter">
                  Did U Scan <br/>
                  A Weird <br/>
                  Link?
                </h3>
                <p className="text-xl md:text-2xl font-bold leading-tight mb-8">
                  Experience the psychological impact of a QR phishing attempt. See how attackers bypass corporate firewalls by exploiting human trust in physical objects.
                </p>
              </div>
              <div className="flex items-center gap-4 font-black text-2xl uppercase group-hover:translate-x-2 transition-transform">
                ENTER SIMULATION
                <ArrowRight className="w-8 h-8" />
              </div>
            </motion.div>
          </Link>

          {/* CARD 2: Credential Scan / Dashboard */}
          <Link href="/dashboard" className="group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ translateY: 8, translateX: 8, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
              className="bg-blue-500 text-white border-8 border-black p-10 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all h-full flex flex-col justify-between"
            >
              <div>
                <Zap className="w-20 h-20 mb-8 stroke-[2.5px]" />
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-tight tracking-tighter">
                  Enter The <br/>
                  Interrogation <br/>
                  Room
                </h3>
                <p className="text-xl md:text-2xl font-bold leading-tight mb-8">
                  Scan our threat intelligence database for known breaches. Discover if your credentials are circulating on the dark web (simulated data).
                </p>
              </div>
              <div className="flex items-center gap-4 font-black text-2xl uppercase group-hover:translate-x-2 transition-transform">
                CHECK MY EMAIL
                <ArrowRight className="w-8 h-8" />
              </div>
            </motion.div>
          </Link>

        </div>

        {/* Bottom tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white text-xl md:text-2xl font-bold mt-20 max-w-4xl"
        >
          Both simulations use <span className="text-yellow-400 font-black">MOCK DATA</span> for educational purposes only. <br/>
          <span className="text-gray-400 text-base md:text-lg">No real credentials are collected or stored.</span>
        </motion.p>
      </section>

    </motion.main>
  );
}