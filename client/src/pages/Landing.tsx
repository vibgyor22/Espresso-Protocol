import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Microscope, LineChart, Database, ArrowDown } from 'lucide-react';

const ParallaxSection = ({ children, speed = 0.5, className = "", id = "" }: { children: React.ReactNode, speed?: number, className?: string, id?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <section id={id} ref={ref} className={`relative overflow-hidden min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 ${className}`}>
      <motion.div style={{ y }} className="relative z-10 w-full max-w-5xl mx-auto">
        {children}
      </motion.div>
    </section>
  );
};

const NumberSpiral = () => {
  const { scrollYProgress } = useScroll();
  
  // Spiral motion across the page
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["10%", "90%", "10%", "90%", "50%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  
  // Mixed blend mode makes it respond to background colors
  // But we can also use a filter or explicit color transform if preferred.
  // Using mix-blend-difference is the most efficient way to invert based on background.
  
  const numbers = useMemo(() => {
    return Array.from({ length: 40 }).map(() => Math.floor(Math.random() * 10000).toString().padStart(4, '0'));
  }, []);

  return (
    <motion.div 
      style={{ 
        left: x, 
        top: y,
        rotate,
      }}
      className="fixed z-40 pointer-events-none mix-blend-difference flex flex-col items-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Abstract Arrow Body made of numbers */}
        <div className="flex flex-wrap w-24 justify-center gap-1 opacity-80">
          {numbers.map((num, i) => (
            <span key={i} className="text-[6px] font-mono text-white leading-none">
              {num}
            </span>
          ))}
        </div>
        {/* Arrow Head */}
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-white mt-2" />
      </div>
    </motion.div>
  );
};

const Landing = () => {
  // Coffee brown colors: 
  // Base: #3d2b1f (Coffee)
  // Darker: #2b1d14
  // Accents: #6f4e37 (Coffee Brown)
  // Background: #fdfaf7 (Creamy)

  return (
    <div className="bg-[#fdfaf7] text-[#3d2b1f] selection:bg-[#6f4e37] selection:text-white font-sans antialiased overflow-x-hidden">
      <NumberSpiral />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-[#fdfaf7] to-transparent">
        <div className="font-serif text-xl font-bold tracking-tight text-[#3d2b1f]">
          Espresso Protocol
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-[#6f4e37]">
          <a href="#vision" className="hover:text-[#a67c52] transition-colors" data-testid="link-nav-vision">Vision</a>
          <a href="#cases" className="hover:text-[#a67c52] transition-colors" data-testid="link-nav-cases">Use Cases</a>
          <a href="#process" className="hover:text-[#a67c52] transition-colors" data-testid="link-nav-process">Process</a>
          <a href="#impact" className="hover:text-[#a67c52] transition-colors" data-testid="link-nav-impact">Impact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <ParallaxSection speed={0.1} className="bg-[#fdfaf7]">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-serif font-medium leading-[1.1] mb-12 text-[#3d2b1f]"
            data-testid="text-hero-headline"
          >
            Econometrics you can interrogate
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl font-light text-[#6f4e37] mb-6 max-w-2xl leading-relaxed" data-testid="text-hero-subheadline">
              Espresso Protocol is being built to let users interact with data through statistically grounded econometric models, producing results that are reliable, traceable, and open to questioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mt-12">
              <Button 
                variant="outline" 
                className="rounded-none border-[#3d2b1f] bg-transparent text-[#3d2b1f] hover:bg-[#3d2b1f] hover:text-[#fdfaf7] px-10 py-7 text-[10px] uppercase tracking-[0.2em] h-auto transition-all duration-500"
                data-testid="button-explore-concept"
              >
                Explore the concept
              </Button>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Use Cases */}
      <section id="cases" className="bg-[#3d2b1f] text-[#fdfaf7] py-48 px-6 md:px-24 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-[#fdfaf7] h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#dcd2cc] font-bold block mb-24">Specific Use Cases</span>
          <div className="grid md:grid-cols-2 gap-x-32 gap-y-24">
            {[
              { title: "Macroeconomic Forecasting", description: "Interactively explore forecasts while understanding how assumptions and model choices affect outcomes." },
              { title: "Policy Evaluation", description: "Test whether an intervention caused change and examine sensitivity across specifications." },
              { title: "Investment Analysis", description: "Analyze how shocks propagate through markets while accounting for volatility, correlation, and regime changes." },
              { title: "Academic Research", description: "Run and interrogate models with full visibility into assumptions, diagnostics, and reproducibility." }
            ].map((useCase, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={i} 
                className="group" 
                data-testid={`card-use-case-${i}`}
              >
                <h4 className="text-2xl font-serif text-[#fdfaf7] mb-6 group-hover:text-[#dcd2cc] transition-colors">{useCase.title}</h4>
                <p className="text-base text-[#dcd2cc] leading-relaxed font-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture / Vision */}
      <ParallaxSection id="vision" speed={0.12} className="bg-[#fdfaf7]">
        <div className="max-w-4xl relative">
          <motion.div 
            className="absolute -left-24 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#6f4e37]/20 to-transparent hidden xl:block"
            style={{ scaleY: 1.5 }}
          />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-bold block mb-12">Architecture</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-16 text-[#3d2b1f]" data-testid="text-vision-headline">
            An attempt to formalize and expose the inference layer itself.
          </h2>
          <div className="space-y-8 text-[#6f4e37] text-xl font-light leading-relaxed">
            <p>
              Espresso Protocol is designed to standardize how econometric models are selected, validated, and interpreted, while allowing users to interact with those models directly.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* How It Works */}
      <div id="process" className="bg-[#fdfaf7]">
        {/* The Grind */}
        <ParallaxSection speed={0.04} className="border-b border-[#e5e0dd]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#3d2b1f] mb-4" data-testid="text-step-grind-title">The Grind</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-semibold">Data Structure & Validation</p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p className="text-3xl font-light text-[#6f4e37] leading-relaxed" data-testid="text-step-grind-description">
                Data is organized so time structure and transformations are explicit. Critical diagnostic checks are performed before estimation.
              </p>
              <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.3em] text-[#6f4e37] pt-12">
                <div className="border-l border-[#6f4e37] pl-6 py-2">Heteroskedasticity Check</div>
                <div className="border-l border-[#6f4e37] pl-6 py-2">Multicollinearity Scan</div>
                <div className="border-l border-[#6f4e37] pl-6 py-2">Autocorrelation Test</div>
                <div className="border-l border-[#6f4e37] pl-6 py-2">Stationarity / Unit Root</div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* The Extraction */}
        <ParallaxSection speed={0.04} className="bg-[#3d2b1f] text-[#fdfaf7] border-b border-[#2b1d14]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#fdfaf7] mb-4" data-testid="text-step-extraction-title">The Extraction</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#dcd2cc] font-semibold">Model Specification</p>
            </div>
            <div className="md:w-2/3 space-y-10">
              <p className="text-3xl font-light text-[#dcd2cc] leading-relaxed" data-testid="text-step-extraction-description">
                Appropriate econometric or time-series models are selected based on the structural properties of the data.
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                {["Vector Autoregression (VAR)", "GMM Estimation", "Diff-in-Diff", "Fixed Effects Panel", "Instrumental Variables (IV)", "Bayesian Inference"].map((model, i) => (
                  <span key={i} className="px-4 py-2 border border-[#fdfaf7]/20 text-[10px] uppercase tracking-widest text-[#dcd2cc]">
                    {model}
                  </span>
                ))}
                <span className="px-4 py-2 text-[10px] uppercase tracking-widest text-[#dcd2cc]/50 italic">... and others</span>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* The Brew */}
        <ParallaxSection speed={0.04} className="border-b border-[#e5e0dd]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#3d2b1f] mb-4" data-testid="text-step-brew-title">The Brew</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-semibold">Statistical Inference</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-3xl font-light text-[#6f4e37] leading-relaxed mb-12" data-testid="text-step-brew-description">
                Models are estimated using traceable statistical methods with full sensitivity mapping.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-[#6f4e37] font-light text-lg">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#3d2b1f]" /> Coefficients & Forecasts</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#3d2b1f]" /> Uncertainty Quantification</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#3d2b1f]" /> Robustness Checks</li>
              </ul>
            </div>
          </div>
        </ParallaxSection>

        {/* The Serve */}
        <ParallaxSection speed={0.04} className="bg-[#3d2b1f] text-[#fdfaf7]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#fdfaf7] mb-4" data-testid="text-step-serve-title">The Serve</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#dcd2cc] font-semibold">Interactive Interrogation</p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p className="text-3xl font-light text-[#dcd2cc] leading-relaxed" data-testid="text-step-serve-description">
                A language interface allows users to navigate the inference layer, exploring alternative specifications and what-if scenarios.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </div>

      {/* Impact */}
      <ParallaxSection id="impact" speed={0.04} className="bg-[#fdfaf7] border-y border-[#e5e0dd]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-bold block mb-16">Intended Impact</span>
          <p className="text-4xl md:text-6xl font-serif text-[#3d2b1f] leading-tight mb-12" data-testid="text-impact-statement">
            Improving how people reason with data.
          </p>
          <p className="text-xl md:text-2xl text-[#6f4e37] font-light leading-relaxed max-w-3xl mx-auto">
            By combining rigorous econometrics with an interactive inference layer, Espresso Protocol aims to make reliable inference easier to use, easier to question, and harder to misuse.
          </p>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="bg-[#fdfaf7] py-48 px-6 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-center font-serif text-3xl md:text-5xl text-[#3d2b1f] mb-24 max-w-3xl leading-snug" data-testid="text-closing-line">
            Espresso Protocol is an ongoing effort to make econometric inference reliable, interactive, and usable.
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full pt-32 border-t border-[#e5e0dd] gap-16">
            <div>
              <div className="font-serif text-2xl font-bold text-[#3d2b1f] mb-4">Espresso Protocol</div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37]">© 2026 Under Development</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
