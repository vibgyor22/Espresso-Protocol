import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Microscope, LineChart, Database } from 'lucide-react';

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

const Landing = () => {
  return (
    <div className="bg-[#fcfaf9] text-[#1a0f0a] selection:bg-[#4a2c20] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-[#fcfaf9] to-transparent">
        <div className="font-serif text-xl font-bold tracking-tight text-[#1a0f0a]">
          Espresso Protocol
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-[#4a2c20]">
          <a href="#problem" className="hover:text-[#8b5e3c] transition-colors" data-testid="link-nav-problem">Problem</a>
          <a href="#vision" className="hover:text-[#8b5e3c] transition-colors" data-testid="link-nav-vision">Vision</a>
          <a href="#process" className="hover:text-[#8b5e3c] transition-colors" data-testid="link-nav-process">Process</a>
          <a href="#impact" className="hover:text-[#8b5e3c] transition-colors" data-testid="link-nav-impact">Impact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <ParallaxSection speed={0.1} className="bg-[#fcfaf9]">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-serif font-medium leading-[1.1] mb-12 text-[#1a0f0a]"
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
            <p className="text-xl md:text-2xl font-light text-[#4a2c20] mb-6 max-w-2xl leading-relaxed" data-testid="text-hero-subheadline">
              Espresso Protocol is being built to let users interact with data through statistically grounded econometric models, producing results that are reliable, traceable, and open to questioning.
            </p>
            <p className="text-sm md:text-base text-[#8b5e3c] mb-16 max-w-xl font-light leading-relaxed italic" data-testid="text-hero-supporting">
              Ask questions, explore what-if scenarios, and forecast outcomes knowing every result is backed by explicit models, assumptions, and diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Button 
                variant="outline" 
                className="rounded-none border-[#1a0f0a] bg-transparent text-[#1a0f0a] hover:bg-[#1a0f0a] hover:text-[#fcfaf9] px-10 py-7 text-[10px] uppercase tracking-[0.2em] h-auto transition-all duration-500"
                data-testid="button-explore-concept"
              >
                Explore the concept
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-none text-[#8b5e3c] hover:text-[#1a0f0a] hover:bg-transparent px-10 py-7 text-[10px] uppercase tracking-[0.2em] h-auto flex gap-3 items-center group transition-all"
                data-testid="button-how-inference-works"
              >
                How inference works <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Problem Statement */}
      <ParallaxSection id="problem" speed={0.08} className="bg-[#1a0f0a] text-[#fcfaf9] border-y border-[#3a2a22]">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#d7ccc8] font-bold block mb-12">The Fragility of Insight</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#fcfaf9]" data-testid="text-problem-statement">
              Decisions depend on econometric analysis that is often fragile or difficult to interrogate.
            </h2>
          </div>
          <div className="space-y-10 text-[#d7ccc8] font-light leading-relaxed text-lg md:text-xl">
            <p>
              Across finance, policy, and research, models are chosen inconsistently, assumptions are implicit, and results are treated as fixed once produced. Even when analysis is technically sound, it is rarely interactive.
            </p>
            <p>
              Decision makers cannot easily ask how results would change under different assumptions or specifications. Newer tools make interaction easier but blur the boundary between explanation and inference.
            </p>
            <p className="pt-12 border-t border-[#3a2a22]">
              There is a missing layer between raw data and decision making: <span className="text-[#fcfaf9] font-normal italic">a transparent, interactive inference layer grounded in econometrics.</span>
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* What We Are Building */}
      <ParallaxSection id="vision" speed={0.12} className="bg-[#fcfaf9]">
        <div className="max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8b5e3c] font-bold block mb-12">Architecture</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-16 text-[#1a0f0a]" data-testid="text-vision-headline">
            An attempt to formalize and expose the inference layer itself.
          </h2>
          <div className="space-y-8 text-[#4a2c20] text-xl font-light leading-relaxed">
            <p>
              Espresso Protocol is designed to standardize how econometric models are selected, validated, and interpreted, while allowing users to interact with those models directly.
            </p>
            <p>
              The goal is not to simplify econometrics away, but to make correct inference <span className="text-[#1a0f0a] underline underline-offset-8 decoration-[#d7ccc8]">usable, inspectable, and explorable.</span>
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* How It Works (Metaphors) */}
      <div id="process" className="bg-[#fcfaf9]">
        {/* The Grind */}
        <ParallaxSection speed={0.04} className="border-b border-[#e5e0dd]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#1a0f0a] mb-4" data-testid="text-step-grind-title">The Grind</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b5e3c] font-semibold">Data Structure</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-3xl font-light text-[#4a2c20] leading-relaxed" data-testid="text-step-grind-description">
                Data is organized so time structure, units, panel dimensions, and transformations are explicit before modeling begins.
              </p>
            </div>
          </div>
        </ParallaxSection>

        {/* The Extraction */}
        <ParallaxSection speed={0.04} className="bg-[#1a0f0a] text-[#fcfaf9] border-b border-[#3a2a22]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#fcfaf9] mb-4" data-testid="text-step-extraction-title">The Extraction</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d7ccc8] font-semibold">Model Choice</p>
            </div>
            <div className="md:w-2/3 space-y-10">
              <p className="text-3xl font-light text-[#d7ccc8] leading-relaxed" data-testid="text-step-extraction-description">
                Appropriate econometric or time-series models are selected based on the data and question.
              </p>
              <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.3em] text-[#d7ccc8] pt-12">
                <div className="border-l border-[#4a2c20] pl-6">Heteroskedasticity</div>
                <div className="border-l border-[#4a2c20] pl-6">Multicollinearity</div>
                <div className="border-l border-[#4a2c20] pl-6">Autocorrelation</div>
                <div className="border-l border-[#4a2c20] pl-6">Stationarity</div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* The Brew */}
        <ParallaxSection speed={0.04} className="border-b border-[#e5e0dd]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#1a0f0a] mb-4" data-testid="text-step-brew-title">The Brew</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b5e3c] font-semibold">Statistical Inference</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-3xl font-light text-[#4a2c20] leading-relaxed mb-12" data-testid="text-step-brew-description">
                Models are estimated using traceable statistical methods.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-[#8b5e3c] font-light text-lg">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#1a0f0a]" /> Coefficients & Forecasts</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#1a0f0a]" /> Uncertainty Quantification</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#1a0f0a]" /> Model Diagnostics</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#1a0f0a]" /> Robustness Checks</li>
              </ul>
            </div>
          </div>
        </ParallaxSection>

        {/* The Serve */}
        <ParallaxSection speed={0.04} className="bg-[#1a0f0a] text-[#fcfaf9]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#fcfaf9] mb-4" data-testid="text-step-serve-title">The Serve</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d7ccc8] font-semibold">Interactive Inference</p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p className="text-3xl font-light text-[#d7ccc8] leading-relaxed" data-testid="text-step-serve-description">
                A language interface allows users to interrogate results, ask what-if questions, and explore alternative specifications. 
              </p>
              <p className="text-base text-[#d7ccc8] italic bg-[#241712] p-8 border-l-2 border-[#4a2c20] leading-relaxed">
                Language is used to explain and navigate inference, not to generate results. All answers remain statistically computed.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </div>

      {/* What Makes This Different */}
      <ParallaxSection speed={0.08} className="bg-[#fcfaf9] py-48 border-t border-[#e5e0dd]">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-24 text-[#1a0f0a]" data-testid="text-different-headline">
            Designed around reliable econometric inference first, interaction second.
          </h2>
          <div className="grid sm:grid-cols-2 gap-16">
            {[
              { icon: ShieldCheck, text: "Generated by an explicit statistical model" },
              { icon: Microscope, text: "Tied to stated assumptions" },
              { icon: Database, text: "Reproducible from the data" },
              { icon: LineChart, text: "Open to interrogation and scenario analysis" }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <item.icon className="w-8 h-8 text-[#8b5e3c] mt-1 shrink-0" strokeWidth={1.5} />
                <p className="text-2xl font-light text-[#4a2c20] leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-32 pt-16 border-t border-[#e5e0dd]">
            <p className="text-2xl md:text-3xl font-serif italic text-[#8b5e3c] leading-relaxed">
              "Interaction never replaces inference. It exposes it."
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Use Cases */}
      <section className="bg-[#1a0f0a] text-[#fcfaf9] py-48 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#d7ccc8] font-bold block mb-24">Specific Use Cases</span>
          <div className="grid md:grid-cols-2 gap-x-32 gap-y-24">
            {[
              { title: "Macroeconomic Forecasting", description: "Interactively explore forecasts while understanding how assumptions and model choices affect outcomes." },
              { title: "Policy Evaluation", description: "Test whether an intervention caused change and examine sensitivity across specifications." },
              { title: "Investment Analysis", description: "Analyze how shocks propagate through markets while accounting for volatility, correlation, and regime changes." },
              { title: "Academic Research", description: "Run and interrogate models with full visibility into assumptions, diagnostics, and reproducibility." }
            ].map((useCase, i) => (
              <div key={i} className="group" data-testid={`card-use-case-${i}`}>
                <h4 className="text-2xl font-serif text-[#fcfaf9] mb-6 group-hover:text-[#d7ccc8] transition-colors">{useCase.title}</h4>
                <p className="text-base text-[#d7ccc8] leading-relaxed font-light">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions List */}
      <ParallaxSection speed={0.06} className="bg-[#fcfaf9]">
        <div className="max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8b5e3c] font-bold block mb-16">The Interrogation</span>
          <div className="space-y-16">
            {[
              "What is the appropriate econometric model for this data?",
              "Which assumptions are driving this result?",
              "How sensitive is the conclusion to alternative specifications?",
              "What happens under different scenarios?",
              "How stable is this relationship over time?"
            ].map((q, i) => (
              <div key={i} className="flex gap-12 items-start border-b border-[#e5e0dd] pb-12 last:border-0" data-testid={`text-question-${i}`}>
                <span className="text-[#1a0f0a] font-serif italic text-3xl">0{i+1}</span>
                <p className="text-3xl md:text-5xl font-serif text-[#4a2c20] leading-[1.2]">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Intended Impact */}
      <ParallaxSection id="impact" speed={0.04} className="bg-[#1a0f0a] text-[#fcfaf9] border-y border-[#3a2a22]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#d7ccc8] font-bold block mb-16">Intended Impact</span>
          <p className="text-4xl md:text-6xl font-serif text-[#fcfaf9] leading-tight mb-12" data-testid="text-impact-statement">
            Improving how people reason with data.
          </p>
          <p className="text-xl md:text-2xl text-[#d7ccc8] font-light leading-relaxed max-w-3xl mx-auto">
            By combining rigorous econometrics with an interactive inference layer, Espresso Protocol aims to make reliable inference easier to use, easier to question, and harder to misuse in high-stakes decisions.
          </p>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="bg-[#fcfaf9] py-48 px-6 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-center font-serif text-3xl md:text-5xl text-[#1a0f0a] mb-24 max-w-3xl leading-snug" data-testid="text-closing-line">
            Espresso Protocol is an ongoing effort to make econometric inference reliable, interactive, and usable where decisions truly matter.
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full pt-32 border-t border-[#e5e0dd] gap-16">
            <div>
              <div className="font-serif text-2xl font-bold text-[#1a0f0a] mb-4">Espresso Protocol</div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8b5e3c]">© 2026 Under Development</p>
            </div>
            <div className="flex flex-wrap gap-12 text-[10px] uppercase tracking-[0.4em] font-medium text-[#8b5e3c]">
              <a href="#" className="hover:text-[#1a0f0a] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1a0f0a] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1a0f0a] transition-colors">Technical Brief</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
