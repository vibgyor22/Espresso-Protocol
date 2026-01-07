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
    <div className="bg-[#fcfaf9] text-[#241712] selection:bg-[#4a2c20] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-[#fcfaf9] to-transparent">
        <div className="font-serif text-xl font-bold tracking-tight text-[#4a2c20]">
          Espresso Protocol
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8d7b74]">
          <a href="#problem" className="hover:text-[#4a2c20] transition-colors" data-testid="link-nav-problem">Problem</a>
          <a href="#vision" className="hover:text-[#4a2c20] transition-colors" data-testid="link-nav-vision">Vision</a>
          <a href="#process" className="hover:text-[#4a2c20] transition-colors" data-testid="link-nav-process">Process</a>
          <a href="#impact" className="hover:text-[#4a2c20] transition-colors" data-testid="link-nav-impact">Impact</a>
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
            className="text-5xl md:text-8xl font-serif font-medium leading-[1.1] mb-12 text-[#241712]"
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
            <p className="text-xl md:text-2xl font-light text-[#5d4a41] mb-6 max-w-2xl leading-relaxed" data-testid="text-hero-subheadline">
              Espresso Protocol is being built to let users interact with data through statistically grounded econometric models, producing results that are reliable, traceable, and open to questioning.
            </p>
            <p className="text-sm md:text-base text-[#8d7b74] mb-16 max-w-xl font-light leading-relaxed italic" data-testid="text-hero-supporting">
              Ask questions, explore what-if scenarios, and forecast outcomes knowing every result is backed by explicit models, assumptions, and diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Button 
                variant="outline" 
                className="rounded-none border-[#4a2c20] bg-transparent text-[#4a2c20] hover:bg-[#4a2c20] hover:text-white px-10 py-7 text-[10px] uppercase tracking-[0.2em] h-auto transition-all duration-500"
                data-testid="button-explore-concept"
              >
                Explore the concept
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-none text-[#8d7b74] hover:text-[#4a2c20] hover:bg-transparent px-10 py-7 text-[10px] uppercase tracking-[0.2em] h-auto flex gap-3 items-center group transition-all"
                data-testid="button-how-inference-works"
              >
                How inference works <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Problem Statement */}
      <ParallaxSection id="problem" speed={0.08} className="bg-[#f5f0ed] border-y border-[#e8dfd8]">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-bold block mb-12">The Fragility of Insight</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#241712]" data-testid="text-problem-statement">
              Decisions depend on econometric analysis that is often fragile or difficult to interrogate.
            </h2>
          </div>
          <div className="space-y-10 text-[#5d4a41] font-light leading-relaxed text-lg md:text-xl">
            <p>
              Across finance, policy, and research, models are chosen inconsistently, assumptions are implicit, and results are treated as fixed once produced. Even when analysis is technically sound, it is rarely interactive.
            </p>
            <p>
              Decision makers cannot easily ask how results would change under different assumptions or specifications. Newer tools make interaction easier but blur the boundary between explanation and inference.
            </p>
            <p className="pt-12 border-t border-[#e8dfd8]">
              There is a missing layer between raw data and decision making: <span className="text-[#241712] font-normal italic">a transparent, interactive inference layer grounded in econometrics.</span>
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* What We Are Building */}
      <ParallaxSection id="vision" speed={0.12} className="bg-[#fcfaf9]">
        <div className="max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-bold block mb-12">Architecture</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-16 text-[#241712]" data-testid="text-vision-headline">
            An attempt to formalize and expose the inference layer itself.
          </h2>
          <div className="space-y-8 text-[#5d4a41] text-xl font-light leading-relaxed">
            <p>
              Espresso Protocol is designed to standardize how econometric models are selected, validated, and interpreted, while allowing users to interact with those models directly.
            </p>
            <p>
              The goal is not to simplify econometrics away, but to make correct inference <span className="text-[#241712] underline underline-offset-8 decoration-[#e8dfd8]">usable, inspectable, and explorable.</span>
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* How It Works (Metaphors) */}
      <div id="process" className="bg-[#fcfaf9]">
        {/* The Grind */}
        <ParallaxSection speed={0.04} className="border-b border-[#f5f0ed]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#241712] mb-4" data-testid="text-step-grind-title">The Grind</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-semibold">Data Structure</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-3xl font-light text-[#5d4a41] leading-relaxed" data-testid="text-step-grind-description">
                Data is organized so time structure, units, panel dimensions, and transformations are explicit before modeling begins.
              </p>
            </div>
          </div>
        </ParallaxSection>

        {/* The Extraction */}
        <ParallaxSection speed={0.04} className="bg-[#f5f0ed] border-b border-[#e8dfd8]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#241712] mb-4" data-testid="text-step-extraction-title">The Extraction</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-semibold">Model Choice</p>
            </div>
            <div className="md:w-2/3 space-y-10">
              <p className="text-3xl font-light text-[#5d4a41] leading-relaxed" data-testid="text-step-extraction-description">
                Appropriate econometric or time-series models are selected based on the data and question.
              </p>
              <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.3em] text-[#8d7b74] pt-12">
                <div className="border-l border-[#d7ccc8] pl-6">Heteroskedasticity</div>
                <div className="border-l border-[#d7ccc8] pl-6">Multicollinearity</div>
                <div className="border-l border-[#d7ccc8] pl-6">Autocorrelation</div>
                <div className="border-l border-[#d7ccc8] pl-6">Stationarity</div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* The Brew */}
        <ParallaxSection speed={0.04} className="border-b border-[#f5f0ed]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#241712] mb-4" data-testid="text-step-brew-title">The Brew</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-semibold">Statistical Inference</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-3xl font-light text-[#5d4a41] leading-relaxed mb-12" data-testid="text-step-brew-description">
                Models are estimated using traceable statistical methods.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-[#8d7b74] font-light text-lg">
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#d7ccc8]" /> Coefficients & Forecasts</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#d7ccc8]" /> Uncertainty Quantification</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#d7ccc8]" /> Model Diagnostics</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 bg-[#d7ccc8]" /> Robustness Checks</li>
              </ul>
            </div>
          </div>
        </ParallaxSection>

        {/* The Serve */}
        <ParallaxSection speed={0.04} className="bg-[#f5f0ed]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-serif text-[#241712] mb-4" data-testid="text-step-serve-title">The Serve</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-semibold">Interactive Inference</p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p className="text-3xl font-light text-[#5d4a41] leading-relaxed" data-testid="text-step-serve-description">
                A language interface allows users to interrogate results, ask what-if questions, and explore alternative specifications. 
              </p>
              <p className="text-base text-[#8d7b74] italic bg-[#fcfaf9] p-8 border-l-2 border-[#d7ccc8] leading-relaxed">
                Language is used to explain and navigate inference, not to generate results. All answers remain statistically computed.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </div>

      {/* What Makes This Different */}
      <ParallaxSection speed={0.08} className="bg-[#fcfaf9] py-48 border-t border-[#f5f0ed]">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-24 text-[#241712]" data-testid="text-different-headline">
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
                <item.icon className="w-8 h-8 text-[#8d7b74] mt-1 shrink-0" strokeWidth={1.5} />
                <p className="text-2xl font-light text-[#5d4a41] leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-32 pt-16 border-t border-[#f5f0ed]">
            <p className="text-2xl md:text-3xl font-serif italic text-[#8d7b74] leading-relaxed">
              "Interaction never replaces inference. It exposes it."
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Use Cases */}
      <section className="bg-[#f5f0ed] py-48 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-bold block mb-24">Specific Use Cases</span>
          <div className="grid md:grid-cols-2 gap-x-32 gap-y-24">
            {[
              { title: "Macroeconomic Forecasting", description: "Interactively explore forecasts while understanding how assumptions and model choices affect outcomes." },
              { title: "Policy Evaluation", description: "Test whether an intervention caused change and examine sensitivity across specifications." },
              { title: "Investment Analysis", description: "Analyze how shocks propagate through markets while accounting for volatility, correlation, and regime changes." },
              { title: "Academic Research", description: "Run and interrogate models with full visibility into assumptions, diagnostics, and reproducibility." }
            ].map((useCase, i) => (
              <div key={i} className="group" data-testid={`card-use-case-${i}`}>
                <h4 className="text-2xl font-serif text-[#241712] mb-6 group-hover:text-[#5d4a41] transition-colors">{useCase.title}</h4>
                <p className="text-base text-[#8d7b74] leading-relaxed font-light">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions List */}
      <ParallaxSection speed={0.06} className="bg-[#fcfaf9]">
        <div className="max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-bold block mb-16">The Interrogation</span>
          <div className="space-y-16">
            {[
              "What is the appropriate econometric model for this data?",
              "Which assumptions are driving this result?",
              "How sensitive is the conclusion to alternative specifications?",
              "What happens under different scenarios?",
              "How stable is this relationship over time?"
            ].map((q, i) => (
              <div key={i} className="flex gap-12 items-start border-b border-[#f5f0ed] pb-12 last:border-0" data-testid={`text-question-${i}`}>
                <span className="text-[#d7ccc8] font-serif italic text-3xl">0{i+1}</span>
                <p className="text-3xl md:text-5xl font-serif text-[#5d4a41] leading-[1.2]">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Intended Impact */}
      <ParallaxSection id="impact" speed={0.04} className="bg-[#f5f0ed] border-y border-[#e8dfd8]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74] font-bold block mb-16">Intended Impact</span>
          <p className="text-4xl md:text-6xl font-serif text-[#241712] leading-tight mb-12" data-testid="text-impact-statement">
            Improving how people reason with data.
          </p>
          <p className="text-xl md:text-2xl text-[#5d4a41] font-light leading-relaxed max-w-3xl mx-auto">
            By combining rigorous econometrics with an interactive inference layer, Espresso Protocol aims to make reliable inference easier to use, easier to question, and harder to misuse in high-stakes decisions.
          </p>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="bg-[#fcfaf9] py-48 px-6 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-center font-serif text-3xl md:text-5xl text-[#241712] mb-24 max-w-3xl leading-snug" data-testid="text-closing-line">
            Espresso Protocol is an ongoing effort to make econometric inference reliable, interactive, and usable where decisions truly matter.
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full pt-32 border-t border-[#f5f0ed] gap-16">
            <div>
              <div className="font-serif text-2xl font-bold text-[#241712] mb-4">Espresso Protocol</div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d7b74]">© 2026 Under Development</p>
            </div>
            <div className="flex flex-wrap gap-12 text-[10px] uppercase tracking-[0.4em] font-medium text-[#8d7b74]">
              <a href="#" className="hover:text-[#241712] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#241712] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#241712] transition-colors">Technical Brief</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
