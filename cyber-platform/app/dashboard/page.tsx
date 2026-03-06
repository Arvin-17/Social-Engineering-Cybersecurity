'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Skull, ShieldAlert, RefreshCcw, AlertOctagon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);

  const handleScan = async () => {
    if (!email) return;
    
    setIsScanning(true);
    setHasScanned(false);
    setLogs([]);
    
    // Brutalist, high-anxiety loading logs
    const logSequence = [
      "ACCESSING DARK WEB ARCHIVES...",
      "BYPASSING ENCRYPTION...",
      "QUERYING 12,492 KNOWN BREACHES...",
      "MATCHING CREDENTIALS...",
      "EXTRACTING EXPOSURE DATA..."
    ];
    
    for (let i = 0; i < logSequence.length; i++) {
      await new Promise(r => setTimeout(r, 600));
      setLogs(prev => [logSequence[i], ...prev]); // Add to top of list
    }

    await new Promise(r => setTimeout(r, 1000));

    // Mock Results for the dramatic reveal
    setResults([
      { name: 'LinkedIn', year: 2012, data: ['Emails', 'Passwords'], color: 'bg-blue-500' },
      { name: 'Canva', year: 2019, data: ['Emails', 'Names', 'Passwords', 'Locations'], color: 'bg-purple-500' },
      { name: 'Apollo', year: 2018, data: ['Emails', 'Job Titles', 'Phone Numbers'], color: 'bg-yellow-400 text-black' },
    ]);
    
    setIsScanning(false);
    setHasScanned(true);
  };

  const resetScan = () => {
    setEmail('');
    setHasScanned(false);
    setResults([]);
  };

  return (
    <main className="min-h-screen bg-[#facc15] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* =========================================
          MARQUEE WARNING BANNER
          ========================================= */}
      <div className="bg-black text-white py-3 border-b-8 border-black overflow-hidden whitespace-nowrap flex relative z-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="font-black text-2xl tracking-widest uppercase flex gap-10"
        >
          <span>/// THREAT INTELLIGENCE SCANNER</span>
          <span>/// ENTER YOUR EMAIL AT YOUR OWN RISK</span>
          <span>/// THREAT INTELLIGENCE SCANNER</span>
          <span>/// ENTER YOUR EMAIL AT YOUR OWN RISK</span>
          <span>/// THREAT INTELLIGENCE SCANNER</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto p-6 md:p-12 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-[#facc15] px-6 py-3 font-black tracking-widest uppercase text-lg border-4 border-black hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              BACK TO HOME
            </motion.button>
          </Link>
        </motion.div>

        <AnimatePresence mode="wait">
          
          {/* =========================================
              PHASE 1: THE INPUT STATE
              ========================================= */}
          {!isScanning && !hasScanned && (
            <motion.div 
              key="input-phase"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="flex flex-col items-center justify-center min-h-[70vh] text-center"
            >
              <AlertOctagon className="w-32 h-32 mb-8 stroke-[3px]" />
              <h1 className="text-[10vw] md:text-[6vw] font-black uppercase leading-none tracking-tighter mb-8">
                Is your data <br />
                <span className="bg-black text-white px-4 py-2 inline-block -rotate-2">on the dark web?</span>
              </h1>
              
              <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 mt-8">
                <input 
                  type="email" 
                  placeholder="TARGET@EMAIL.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-3xl md:text-5xl font-black p-6 md:p-8 border-8 border-black bg-white placeholder-gray-400 focus:outline-none focus:bg-black focus:text-white transition-colors uppercase shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
                />
                <button 
                  onClick={handleScan}
                  disabled={!email}
                  className="bg-red-500 text-white border-8 border-black p-6 md:p-8 text-3xl md:text-5xl font-black uppercase shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-4 group shrink-0"
                >
                  <Search className="w-10 h-10 group-hover:scale-125 transition-transform" />
                  SCAN
                </button>
              </div>
            </motion.div>
          )}

          {/* =========================================
              PHASE 2: THE CHAOTIC SCANNING STATE
              ========================================= */}
          {isScanning && (
            <motion.div 
              key="scanning-phase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[70vh] text-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <Search className="w-40 h-40 mb-12" />
              </motion.div>
              
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 animate-pulse">
                ANALYZING...
              </h2>

              <div className="w-full max-w-3xl bg-black text-green-400 p-8 border-8 border-black font-mono text-xl md:text-3xl text-left h-64 overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
                {/* Fake scanline effect */}
                <div className="absolute inset-0 bg-white/5 animate-[scan_1s_ease-in-out_infinite]" />
                
                {logs.map((log, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`mb-4 ${idx === 0 ? 'text-white font-bold' : 'opacity-50'}`}
                  >
                    &gt; {log}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* =========================================
              PHASE 3: THE BRUTALIST RESULTS STATE
              ========================================= */}
          {hasScanned && (
            <motion.div 
              key="results-phase"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-h-[70vh] pt-12"
            >
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
                <div>
                  <div className="inline-flex items-center gap-4 bg-red-500 text-white px-6 py-2 border-4 border-black font-black text-2xl uppercase mb-6 rotate-[-2deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <Skull className="w-8 h-8" />
                    EXPOSURE DETECTED
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                    YOUR DATA IS <br/>
                    <span className="text-red-500 underline decoration-black underline-offset-8">COMPROMISED.</span>
                  </h2>
                </div>
                
                <button 
                  onClick={resetScan}
                  className="bg-black text-white px-8 py-4 border-4 border-black font-black text-xl uppercase hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3"
                >
                  <RefreshCcw className="w-6 h-6" />
                  NEW SCAN
                </button>
              </div>

              {/* Grid of brutalist breach cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {results.map((breach, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: idx % 2 === 0 ? 2 : -2 }}
                    transition={{ delay: idx * 0.15, type: "spring" }}
                    className={`${breach.color || 'bg-white'} border-8 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col`}
                  >
                    <div className="flex justify-between items-start mb-12">
                      <h3 className="text-4xl md:text-5xl font-black uppercase break-words">{breach.name}</h3>
                      <span className="bg-black text-white px-4 py-2 font-black text-2xl border-4 border-black">
                        {breach.year}
                      </span>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="font-black text-xl uppercase border-b-4 border-black pb-2 mb-4">
                        Data Stolen:
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {breach.data.map((item: string, i: number) => (
                          <span key={i} className="bg-black text-white px-3 py-1 font-bold text-sm uppercase">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================
            THREAT INTEL: INFAMOUS BREACHES
            ========================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
              INFAMOUS <br />
              <span className="bg-red-500 text-white px-4 py-2 inline-block rotate-[3deg]">BREACHES</span>
            </h2>
            <p className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto">
              These are the motherlode data dumps that put billions of passwords on the dark web. <br />
              <span className="text-red-500">Your credentials are probably in one of them.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
              className="bg-fuchsia-500 text-white p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="text-5xl font-black uppercase mb-6">ROCKYOU</h3>
              <p className="text-2xl font-bold mb-4">2009 - 32 MILLION PASSWORDS</p>
              <p className="text-xl leading-tight">
                The breach that exposed "password" as the most common password. Plaintext passwords stolen from a gaming forum. Still circulating today.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-blue-500 text-white p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="text-5xl font-black uppercase mb-6">COLLECTION #1</h3>
              <p className="text-2xl font-bold mb-4">2019 - 773 MILLION EMAILS</p>
              <p className="text-xl leading-tight">
                A massive compilation of breached data from hundreds of sources. Contains emails, passwords, and personal info from major breaches like Yahoo and LinkedIn.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="bg-yellow-400 text-black p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="text-5xl font-black uppercase mb-6">MOTHER OF ALL BREACHES</h3>
              <p className="text-2xl font-bold mb-4">2020 - 1.4 BILLION RECORDS</p>
              <p className="text-xl leading-tight">
                The largest single breach ever. Contains 993 million unique emails and 21 million unique passwords from thousands of smaller breaches.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* =========================================
            THREAT INTEL: QUISHING STATISTICS
            ========================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
              WHY <br />
              <span className="bg-black text-white px-4 py-2 inline-block -rotate-2">QUISHING</span> <br />
              WORKS
            </h2>
            <p className="text-3xl md:text-5xl font-bold max-w-5xl mx-auto">
              QR phishing bypasses corporate IT because it starts in the physical world. <br />
              <span className="text-red-500">Your brain trusts what you see with your eyes.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
              className="bg-red-500 text-white p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="text-4xl font-black uppercase mb-6">PHYSICAL TO DIGITAL</h3>
              <p className="text-2xl font-bold mb-4">87% OF PHISHING STARTS WITH EMAIL</p>
              <p className="text-xl leading-tight">
                But quishing starts with a sticker on a parking meter or menu. Your personal device scans it, completely bypassing company firewalls and email filters.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-white text-black p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="text-4xl font-black uppercase mb-6">TRUST BIAS</h3>
              <p className="text-2xl font-bold mb-4">94% OF USERS TRUST PHYSICAL OBJECTS</p>
              <p className="text-xl leading-tight">
                If you see a QR code on a real-world object, your brain assumes it's legitimate. Attackers exploit this by placing fake codes over real ones.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="bg-purple-500 text-white p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="text-4xl font-black uppercase mb-6">ZERO DETECTION</h3>
              <p className="text-2xl font-bold mb-4">IT DEPARTMENTS CAN'T SEE IT</p>
              <p className="text-xl leading-tight">
                Unlike email phishing, quishing happens on personal devices outside the corporate network. No logs, no alerts, no protection.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="bg-green-500 text-white p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <h3 className="text-4xl font-black uppercase mb-6">RISING THREAT</h3>
              <p className="text-2xl font-bold mb-4">300% INCREASE IN 2023</p>
              <p className="text-xl leading-tight">
                Quishing attacks have exploded with the rise of QR codes for contactless payments and COVID tracing. Attackers are getting creative with placement.
              </p>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}