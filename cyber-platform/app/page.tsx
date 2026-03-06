'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, AlertTriangle, ScanLine, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PhishingLanding() {
  const containerRef = useRef(null);
  
  // Track scroll progress for the crazy background transitions
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background color morphing based on scroll depth
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8],
    ["#ef4444", "#000000", "#111827", "#050505"] // Red -> Black -> Dark Blue -> Void
  );

  return (
    <motion.main 
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
      className="text-white font-sans transition-colors duration-500"
    >
      {/* =========================================
          SECTION 1: THE LOUD HEART ATTACK (HERO)
          ========================================= */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Crazy rotating background element */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute w-[150vw] h-[150vw] bg-[repeating-conic-gradient(rgba(0,0,0,0.1)_0_15deg,transparent_15deg_30deg)] pointer-events-none"
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="bg-black text-white px-8 py-4 rounded-full font-black tracking-widest text-xl mb-8 flex items-center gap-4 border-4 border-white z-10"
        >
          <ShieldCheck className="w-8 h-8 text-green-400" />
          YOU ARE SAFE. THIS WAS A TEST.
        </motion.div>

        <h1 className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter uppercase z-10 mix-blend-difference">
          You Just <br /> Scanned A <br />
          <span className="text-black bg-white px-4 italic">Fake QR Code.</span>
        </h1>

        <p className="mt-12 text-2xl md:text-4xl font-bold max-w-4xl z-10">
          No data was stolen. Your device is safe. 
          <br className="mb-4"/>
          But if this was a real attacker, <span className="text-black bg-yellow-400 px-2">you'd already be hacked.</span>
        </p>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 z-10 flex flex-col items-center"
        >
          <span className="font-bold tracking-widest uppercase mb-4 text-xl">Scroll to see how</span>
          <ArrowRight className="w-12 h-12 rotate-90" />
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: CRAZY STICKY SCROLL STORYTELLING
          ========================================= */}
      <section className="relative h-[400vh]">
        {/* Sticky Container - stays on screen while user scrolls through the 400vh */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          
          {/* Transitioning Background Text (Watermark) */}
          <motion.div 
            style={{ 
              x: useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-50%"]),
              opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.8], [0, 0.1, 0])
            }}
            className="absolute text-[30vw] font-black whitespace-nowrap text-white/10 pointer-events-none select-none"
          >
            QUISHING QUISHING QUISHING QUISHING
          </motion.div>

          {/* Cards that slide up based on scroll */}
          <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center">
            
            {/* STEP 1 */}
            <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]),
                y: useTransform(scrollYProgress, [0.1, 0.2, 0.3], [100, 0, -100]),
                scale: useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0.8, 1, 0.8]),
              }}
              className="absolute w-full md:w-1/2 left-0"
            >
              <div className="bg-yellow-400 text-black p-10 rounded-3xl rotate-[-2deg] shadow-2xl border-8 border-black">
                <h2 className="text-6xl font-black mb-6 uppercase">1. The Trap</h2>
                <p className="text-3xl font-bold leading-tight">
                  Attackers slap fake QR stickers over real ones on parking meters, restaurant menus, or flyers. 
                  <br/><br/>
                  Because it's a physical sticker in the real world, your brain trusts it.
                </p>
              </div>
            </motion.div>

            {/* STEP 2 */}
            <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]),
                y: useTransform(scrollYProgress, [0.3, 0.4, 0.5], [100, 0, -100]),
                scale: useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0.8, 1, 0.8]),
              }}
              className="absolute w-full md:w-1/2 right-0"
            >
              <div className="bg-blue-500 text-white p-10 rounded-3xl rotate-[2deg] shadow-2xl border-8 border-black">
                <h2 className="text-6xl font-black mb-6 uppercase">2. Bypassing IT</h2>
                <p className="text-3xl font-bold leading-tight">
                  When you scan it with your personal phone, it bypasses all of your company's expensive firewalls and email filters. 
                  <br/><br/>
                  You are completely off the grid.
                </p>
              </div>
            </motion.div>

            {/* STEP 3 */}
            <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]),
                y: useTransform(scrollYProgress, [0.5, 0.6, 0.7], [100, 0, -100]),
                scale: useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0.8, 1, 0.8]),
              }}
              className="absolute w-full md:w-1/2 left-0"
            >
              <div className="bg-red-500 text-white p-10 rounded-3xl rotate-[-1deg] shadow-2xl border-8 border-black">
                <h2 className="text-6xl font-black mb-6 uppercase">3. The Fake Site</h2>
                <p className="text-3xl font-bold leading-tight">
                  It loads a website that looks exactly like a real Microsoft, Google, or Banking login. 
                  <br/><br/>
                  You type in your password. The attacker gets it instantly. Game over.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: LOUD CALL TO ACTION
          ========================================= */}
      <section className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center border-t-[20px] border-yellow-400 relative z-20">
        
        <ScanLine className="w-32 h-32 text-white mb-8 animate-pulse" />
        
        <h2 className="text-[8vw] font-black uppercase leading-none mb-8">
          Are your passwords <br/>
          <span className="text-red-500">already out there?</span>
        </h2>
        
        <p className="text-3xl text-gray-400 font-bold max-w-4xl mb-16">
          This QR code was safe, but real breaches happen daily. Enter your email in our security dashboard to see if your data is being sold on the dark web right now.
        </p>

        <Link href="/dashboard" className="group relative bg-white text-black px-12 py-8 rounded-full font-black text-4xl uppercase hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-6 overflow-hidden">
          <span className="relative z-10">Check My Email Now</span>
          <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform relative z-10" />
        </Link>
      </section>

    </motion.main>
  );
}