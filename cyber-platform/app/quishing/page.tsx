'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, AlertTriangle, ScanLine, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PhishingLanding() {
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
          SECTION 1: THE LOUD HEART ATTACK (HERO)
          ========================================= */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-[#facc15]">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-[#facc15] px-6 py-3 font-black tracking-widest uppercase text-lg border-4 border-black hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              BACK TO HOME
            </motion.button>
          </Link>
        </motion.div>
        
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
          className="bg-black text-white px-8 py-4 rounded-full font-black tracking-widest text-xl mb-8 flex items-center gap-4 border-4 border-black z-10"
        >
          <ShieldCheck className="w-8 h-8 text-green-400" />
          YOU ARE SAFE. THIS WAS A TEST.
        </motion.div>

        <h1 className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter uppercase z-10 text-black">
          You Just <br /> Scanned A <br />
          <span className="text-white bg-black px-4 italic">Fake QR Code.</span>
        </h1>

        <p className="mt-12 text-2xl md:text-4xl font-bold max-w-4xl z-10 text-black">
          No data was stolen. Your device is safe. 
          <br className="mb-4"/>
          But if this was a real attacker, <span className="text-white bg-black px-2">you'd already be hacked.</span>
        </p>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-4 z-10 flex flex-col items-center"
        >
          <span className="font-black uppercase text-lg mb-4 border-b-4 border-red-500 pb-2 text-red-500">Scroll</span>
          <Zap className="w-8 h-8 stroke-[3px] text-red-500" />
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: SCROLL STORYTELLING (WHILEINVIEW)
          ========================================= */}
      <div className="bg-black w-full text-white">
        
        {/* STEP 1 SECTION */}
        <section className="min-h-screen flex items-center justify-center p-6 border-b border-neutral-900">
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="w-full md:w-1/2"
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
        </section>

        {/* STEP 2 SECTION */}
        <section className="min-h-screen flex items-center justify-center p-6 border-b border-neutral-900">
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="w-full md:w-1/2 md:ml-auto"
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
        </section>

        {/* STEP 3 SECTION */}
        <section className="min-h-screen flex items-center justify-center p-6 border-b border-neutral-900">
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="w-full md:w-1/2"
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
        </section>

      </div>

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
