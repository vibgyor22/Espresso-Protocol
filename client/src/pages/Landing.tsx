import React, { useRef, useMemo, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Database,
  Cpu,
  BarChart3,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const ParallaxSection = ({
  children,
  speed = 0.5,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 ${className}`}
    >
      <motion.div
        style={{ y }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

// Minimal abstract number texture - only used in select strategic locations
const SubtleNumberTexture = ({
  position = "right",
  opacity = 0.04,
}: {
  position?: "left" | "right" | "center";
  opacity?: number;
}) => {
  const numbers = useMemo(() => {
    return Array.from({ length: 8 }).map(() =>
      Array.from({ length: 6 }).map(() =>
        Math.floor(Math.random() * 1000000)
          .toString()
          .padStart(6, "0"),
      ),
    );
  }, []);

  const positionClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${positionClasses[position]} pointer-events-none select-none`}
      style={{ opacity }}
    >
      <div className="flex gap-3 font-mono text-[7px] text-[#3d2b1f] rotate-12">
        {numbers.map((col, i) => (
          <div key={i} className="flex flex-col gap-1">
            {col.map((num, j) => (
              <span key={j} className="tracking-tighter">
                {num}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inference Console Component with animated workflow
const InferenceConsole = () => {
  const consoleRef = useRef(null);
  const isInView = useInView(consoleRef, { once: true, amount: 0.3 });
  const [currentStep, setCurrentStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  const steps = [
    {
      type: "user",
      content:
        "What is the causal effect of raising interest rates on unemployment in the Eurozone?",
      timestamp: "14:32:01",
    },
    {
      type: "system",
      label: "DATA INGESTION",
      content: "Loading ECB policy rates, Eurostat unemployment (2000-2024)...",
      details: [
        "→ 288 monthly observations",
        "→ 19 member states panel",
        "→ 4 control variables identified",
      ],
      timestamp: "14:32:02",
    },
    {
      type: "system",
      label: "ASSUMPTIONS CHECK",
      content: "Validating econometric assumptions...",
      details: [
        "✓ Stationarity: ADF test passed (p < 0.01)",
        "✓ No multicollinearity: VIF < 5 for all regressors",
        "⚠ Heteroskedasticity detected → Robust SE enabled",
        "✓ Lag structure: BIC suggests 4 lags optimal",
      ],
      timestamp: "14:32:04",
    },
    {
      type: "system",
      label: "MODEL SELECTION",
      content: "Selecting appropriate specification...",
      details: [
        "→ Causal question detected: IV/2SLS recommended",
        "→ Panel structure: Fixed effects for country heterogeneity",
        "→ Time dynamics: Distributed lag model (4 quarters)",
        "→ Instrument: US Fed funds rate (relevance F = 42.3)",
      ],
      timestamp: "14:32:05",
    },
    {
      type: "system",
      label: "ESTIMATION",
      content: "Running Panel IV with fixed effects...",
      timestamp: "14:32:06",
    },
    {
      type: "result",
      label: "RESULTS",
      content:
        "A 100bp increase in ECB rates is associated with a 0.34pp rise in unemployment over 12 months.",
      details: [
        "Coefficient: 0.0034 (SE: 0.0008)",
        "95% CI: [0.0018, 0.0050]",
        "First-stage F: 42.3 (strong instrument)",
        "Hansen J: 0.82 (p = 0.36, valid overid)",
      ],
      validation:
        "Robustness: Result stable across 3 alternative specifications (±0.0006)",
      timestamp: "14:32:08",
    },
    {
      type: "user",
      content:
        "What would unemployment look like if rates increased by 200bp next quarter?",
      timestamp: "14:32:45",
    },
    {
      type: "result",
      label: "FORECAST",
      content: "Projected unemployment trajectory under 200bp rate hike:",
      details: [
        "Q1 2025: 6.4% → 6.5% (+0.1pp)",
        "Q2 2025: 6.5% → 6.8% (+0.3pp)",
        "Q3 2025: 6.8% → 7.2% (+0.4pp)",
        "Q4 2025: 7.2% → 7.5% (+0.3pp)",
      ],
      validation:
        "Prediction interval: ±0.4pp (68% CI). Model assumes no concurrent fiscal response.",
      timestamp: "14:32:47",
    },
  ];

  // Start animation when scrolled into view
  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  // Run animation once, then stop
  useEffect(() => {
    if (!hasStarted || hasCompleted) return;
    if (currentStep >= steps.length - 1) {
      setHasCompleted(true);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 1200);

    return () => clearTimeout(timer);
  }, [hasStarted, hasCompleted, currentStep, steps.length]);

  return (
    <div ref={consoleRef} className="bg-[#1a1410] rounded-sm border border-[#3d2b1f]/30 overflow-hidden shadow-2xl">
      {/* Console Header */}
      <div className="bg-[#2b1d14] px-4 py-3 flex items-center justify-between border-b border-[#3d2b1f]/20">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#6f4e37]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#8b6914]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#4a7c59]" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#6f4e37] font-mono">
          Espresso Inference Console
        </span>
        <div className="w-12" />
      </div>

      {/* Console Body */}
      <div className="p-6 font-mono text-sm max-h-[500px] overflow-y-auto">
        <AnimatePresence mode="wait">
          {steps.slice(0, currentStep + 1).map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-6 ${i === currentStep ? "" : "opacity-60"}`}
            >
              {step.type === "user" ? (
                <div className="flex gap-3">
                  <MessageSquare className="w-4 h-4 text-[#a67c52] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-[8px] text-[#6f4e37] mb-1">
                      [{step.timestamp}] USER
                    </div>
                    <p className="text-[#fdfaf7]">{step.content}</p>
                  </div>
                </div>
              ) : step.type === "result" ? (
                <div className="flex gap-3">
                  <BarChart3 className="w-4 h-4 text-[#4a7c59] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="text-[8px] text-[#4a7c59] mb-1">
                      [{step.timestamp}] {step.label}
                    </div>
                    <p className="text-[#fdfaf7] font-medium mb-3">
                      {step.content}
                    </p>
                    {step.details && (
                      <div className="bg-[#2b1d14] rounded px-3 py-2 mb-2">
                        {step.details.map((detail, j) => (
                          <div
                            key={j}
                            className="text-[#dcd2cc] text-xs py-0.5"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}
                    {step.validation && (
                      <div className="flex items-start gap-2 text-xs text-[#8b6914]">
                        <Check className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span>{step.validation}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex gap-3">
                  <Cpu className="w-4 h-4 text-[#6f4e37] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="text-[8px] text-[#6f4e37] mb-1">
                      [{step.timestamp}] {step.label}
                    </div>
                    <p className="text-[#dcd2cc] mb-2">{step.content}</p>
                    {step.details && (
                      <div className="pl-2 border-l border-[#3d2b1f]/30">
                        {step.details.map((detail, j) => (
                          <div
                            key={j}
                            className={`text-xs py-0.5 ${
                              detail.startsWith("✓")
                                ? "text-[#4a7c59]"
                                : detail.startsWith("⚠")
                                  ? "text-[#8b6914]"
                                  : "text-[#6f4e37]"
                            }`}
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Blinking cursor */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-[#a67c52] ml-1"
        />
      </div>

      {/* Progress indicator */}
      <div className="bg-[#2b1d14] px-4 py-2 flex gap-1">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${i <= currentStep ? "bg-[#6f4e37]" : "bg-[#3d2b1f]/30"}`}
          />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-[#1a1410] px-4 py-3 border-t border-[#3d2b1f]/20">
        <p className="text-[9px] text-center uppercase tracking-[0.15em] text-[#6f4e37]/70 font-mono">
          Visual representation only — not a final product depiction
        </p>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="bg-[#fdfaf7] text-[#3d2b1f] selection:bg-[#6f4e37] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-[#fdfaf7] to-transparent">
        <div className="font-serif text-xl font-bold tracking-tight text-[#3d2b1f]">
          Espresso Protocol
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-[#6f4e37]">
          <a
            href="#problem"
            className="hover:text-[#a67c52] transition-colors"
            data-testid="link-nav-problem"
          >
            Why
          </a>
          <a
            href="#cases"
            className="hover:text-[#a67c52] transition-colors"
            data-testid="link-nav-cases"
          >
            Use Cases
          </a>
          <a
            href="#console"
            className="hover:text-[#a67c52] transition-colors"
            data-testid="link-nav-console"
          >
            Console
          </a>
          <a
            href="#impact"
            className="hover:text-[#a67c52] transition-colors"
            data-testid="link-nav-impact"
          >
            Impact
          </a>
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
            <p
              className="text-xl md:text-2xl font-light text-[#6f4e37] mb-6 max-w-2xl leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              Espresso Protocol is being built to let users interact with data
              through statistically grounded econometric models, producing
              results that are reliable, traceable, and open to questioning.
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

      {/* Problem Statement Section */}
      <section
        id="problem"
        className="bg-[#3d2b1f] text-[#fdfaf7] py-32 px-6 md:px-24 relative overflow-hidden"
      >
        {/* Subtle number texture - strategic placement */}
        <SubtleNumberTexture position="right" opacity={0.03} />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#dcd2cc] font-bold block mb-16">
            The Problem
          </span>

          {/* First Problem: Accessibility Gap */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-12"
            >
              <h2
                className="text-4xl md:text-5xl font-serif mb-6 text-[#fdfaf7]"
                data-testid="text-problem-accessibility-headline"
              >
                You have the data. You know the question.<br />
                <span className="text-[#a67c52]">The statistics shouldn't stop you.</span>
              </h2>
              <p className="text-xl text-[#dcd2cc] leading-relaxed font-light">
                Researchers with real-world impact—in health, policy, climate—shouldn't 
                need a PhD in econometrics to get statistically valid answers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#2b1d14]/50 p-8 rounded-sm border border-[#fdfaf7]/5"
                data-testid="card-problem-accessibility-1"
              >
                <p className="text-[#a67c52] text-sm uppercase tracking-widest mb-4 font-medium">Today</p>
                <p className="text-[#fdfaf7] text-lg font-light leading-relaxed">
                  IV, DiD, panel models—years to learn, easy to misapply. 
                  Most researchers either outsource or skip rigorous analysis entirely.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#2b1d14]/50 p-8 rounded-sm border border-[#fdfaf7]/5"
                data-testid="card-problem-accessibility-2"
              >
                <p className="text-[#4a7c59] text-sm uppercase tracking-widest mb-4 font-medium">With Espresso</p>
                <p className="text-[#fdfaf7] text-lg font-light leading-relaxed">
                  Bring your data. Ask your question. Get validated results with 
                  transparent assumptions you can actually interrogate.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#fdfaf7]/10 mb-24" />

          {/* Second Problem: LLM Limitations */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-12"
            >
              <h2
                className="text-4xl md:text-5xl font-serif mb-6 text-[#fdfaf7]"
                data-testid="text-problem-headline"
              >
                LLMs sound confident.<br />
                <span className="text-[#a67c52]">But they can't do statistics.</span>
              </h2>
              <p className="text-xl text-[#dcd2cc] leading-relaxed font-light">
                They hallucinate p-values, invent coefficients, and confuse correlation with causation. 
                For real econometric analysis, you need real computation.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  label: "Fabricated outputs",
                  desc: "Plausible numbers with zero statistical validity",
                },
                {
                  icon: Database,
                  label: "No actual estimation",
                  desc: "Never runs regressions on your real data",
                },
                {
                  icon: TrendingUp,
                  label: "No causal reasoning",
                  desc: "Can't identify or correct for endogeneity",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#2b1d14]/50 p-6 rounded-sm border border-[#fdfaf7]/5"
                  data-testid={`card-problem-${i}`}
                >
                  <item.icon className="w-5 h-5 text-[#a67c52] mb-4" />
                  <h4 className="text-[#fdfaf7] font-medium mb-2">{item.label}</h4>
                  <p className="text-sm text-[#dcd2cc]/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#fdfaf7]/10 pt-16">
            <h3 className="text-2xl font-serif text-[#fdfaf7] mb-8">
              What Espresso Protocol addresses
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Opaque methodology",
                  solution:
                    "Every model choice, assumption, and diagnostic is exposed and queryable",
                },
                {
                  title: "Unreproducible results",
                  solution:
                    "Full audit trail from raw data to final coefficient with version control",
                },
                {
                  title: "Inaccessible expertise",
                  solution:
                    "Natural language interface to professional-grade econometric methods",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l border-[#6f4e37] pl-6"
                  data-testid={`card-solution-${i}`}
                >
                  <h4 className="text-xs uppercase tracking-widest text-[#a67c52] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[#dcd2cc] font-light leading-relaxed">
                    {item.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="cases" className="bg-[#fdfaf7] py-48 px-6 md:px-24 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-bold block mb-24">
            Specific Use Cases
          </span>
          <div className="grid md:grid-cols-2 gap-x-32 gap-y-24">
            {[
              {
                title: "Macroeconomic Forecasting",
                description:
                  "Interactively explore forecasts while understanding how assumptions and model choices affect outcomes.",
              },
              {
                title: "Policy Evaluation",
                description:
                  "Test whether an intervention caused change and examine sensitivity across specifications.",
              },
              {
                title: "Investment Analysis",
                description:
                  "Analyze how shocks propagate through markets while accounting for volatility, correlation, and regime changes.",
              },
              {
                title: "Academic Research",
                description:
                  "Run and interrogate models with full visibility into assumptions, diagnostics, and reproducibility.",
              },
            ].map((useCase, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={i}
                className="group"
                data-testid={`card-use-case-${i}`}
              >
                <h4 className="text-2xl font-serif text-[#3d2b1f] mb-6 group-hover:text-[#6f4e37] transition-colors">
                  {useCase.title}
                </h4>
                <p className="text-base text-[#6f4e37] leading-relaxed font-light">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture / Vision */}
      <ParallaxSection
        id="vision"
        speed={0.12}
        className="bg-[#fdfaf7] relative"
      >
        {/* Subtle number texture - bottom left corner */}
        <SubtleNumberTexture position="left" opacity={0.025} />

        <div className="max-w-4xl relative">
          <motion.div
            className="absolute -left-24 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#6f4e37]/20 to-transparent hidden xl:block"
            style={{ scaleY: 1.5 }}
          />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-bold block mb-12">
            Architecture
          </span>
          <h2
            className="text-5xl md:text-7xl font-serif mb-16 text-[#3d2b1f]"
            data-testid="text-vision-headline"
          >
            An attempt to formalize and expose the inference layer itself.
          </h2>
          <div className="space-y-8 text-[#6f4e37] text-xl font-light leading-relaxed">
            <p>
              Espresso Protocol is designed to standardize how econometric
              models are selected, validated, and interpreted, while allowing
              users to interact with those models directly.
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
              <h3
                className="text-6xl font-serif text-[#3d2b1f] mb-4"
                data-testid="text-step-grind-title"
              >
                The Grind
              </h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-semibold">
                Data Structure & Validation
              </p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p
                className="text-3xl font-light text-[#6f4e37] leading-relaxed"
                data-testid="text-step-grind-description"
              >
                Data is organized so time structure and transformations are
                explicit. Critical diagnostic checks are performed before
                estimation.
              </p>
              <div className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.3em] text-[#6f4e37] pt-12">
                <div className="border-l border-[#6f4e37] pl-6 py-2">
                  Heteroskedasticity Check
                </div>
                <div className="border-l border-[#6f4e37] pl-6 py-2">
                  Multicollinearity Scan
                </div>
                <div className="border-l border-[#6f4e37] pl-6 py-2">
                  Autocorrelation Test
                </div>
                <div className="border-l border-[#6f4e37] pl-6 py-2">
                  Stationarity / Unit Root
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* The Extraction */}
        <ParallaxSection
          speed={0.04}
          className="bg-[#3d2b1f] text-[#fdfaf7] border-b border-[#2b1d14]"
        >
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3
                className="text-6xl font-serif text-[#fdfaf7] mb-4"
                data-testid="text-step-extraction-title"
              >
                The Extraction
              </h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#dcd2cc] font-semibold">
                Model Specification
              </p>
            </div>
            <div className="md:w-2/3 space-y-10">
              <p
                className="text-3xl font-light text-[#dcd2cc] leading-relaxed"
                data-testid="text-step-extraction-description"
              >
                Appropriate econometric or time-series models are selected based
                on the structural properties of the data.
              </p>
              <div className="flex flex-wrap gap-4 pt-8">
                {[
                  "Vector Autoregression (VAR)",
                  "GMM Estimation",
                  "Diff-in-Diff",
                  "Fixed Effects Panel",
                  "Instrumental Variables (IV)",
                  "Bayesian Inference",
                ].map((model, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-[#fdfaf7]/20 text-[10px] uppercase tracking-widest text-[#dcd2cc]"
                  >
                    {model}
                  </span>
                ))}
                <span className="px-4 py-2 text-[10px] uppercase tracking-widest text-[#dcd2cc]/50 italic">
                  ... and others
                </span>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* The Brew */}
        <ParallaxSection speed={0.04} className="border-b border-[#e5e0dd]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3
                className="text-6xl font-serif text-[#3d2b1f] mb-4"
                data-testid="text-step-brew-title"
              >
                The Brew
              </h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-semibold">
                Statistical Inference
              </p>
            </div>
            <div className="md:w-2/3">
              <p
                className="text-3xl font-light text-[#6f4e37] leading-relaxed mb-12"
                data-testid="text-step-brew-description"
              >
                Models are estimated using traceable statistical methods with
                full sensitivity mapping.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-[#6f4e37] font-light text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#3d2b1f]" /> Coefficients &
                  Forecasts
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#3d2b1f]" /> Uncertainty
                  Quantification
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#3d2b1f]" /> Robustness Checks
                </li>
              </ul>
            </div>
          </div>
        </ParallaxSection>

        {/* The Serve */}
        <ParallaxSection speed={0.04} className="bg-[#3d2b1f] text-[#fdfaf7]">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3">
              <h3
                className="text-6xl font-serif text-[#fdfaf7] mb-4"
                data-testid="text-step-serve-title"
              >
                The Serve
              </h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#dcd2cc] font-semibold">
                Interactive Interrogation
              </p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <p
                className="text-3xl font-light text-[#dcd2cc] leading-relaxed"
                data-testid="text-step-serve-description"
              >
                A language interface allows users to navigate the inference
                layer, exploring alternative specifications and what-if
                scenarios.
              </p>
            </div>
          </div>
        </ParallaxSection>
      </div>

      {/* Inference Console Showcase */}
      <section
        id="console"
        className="bg-[#fdfaf7] py-32 px-6 md:px-24 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-bold block mb-8">
              Inference Console
            </span>
            <h2
              className="text-4xl md:text-6xl font-serif text-[#3d2b1f] mb-6"
              data-testid="text-console-headline"
            >
              See the reasoning, not just the answer
            </h2>
            <p className="text-xl text-[#6f4e37] font-light max-w-2xl">
              Watch how Espresso processes a real macroeconomic policy
              question—from data ingestion through model selection to validated
              results.
            </p>
          </div>

          <InferenceConsole />

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Transparent", desc: "Every step logged and queryable" },
              { label: "Validated", desc: "Statistical checks at each stage" },
              {
                label: "Interactive",
                desc: "Ask follow-up questions naturally",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-[#6f4e37]"
                data-testid={`text-console-feature-${i}`}
              >
                <div className="text-sm uppercase tracking-widest font-medium mb-2">
                  {item.label}
                </div>
                <div className="text-sm font-light opacity-70">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <ParallaxSection
        id="impact"
        speed={0.04}
        className="bg-[#fdfaf7] border-y border-[#e5e0dd]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37] font-bold block mb-16">
            Intended Impact
          </span>
          <p
            className="text-4xl md:text-6xl font-serif text-[#3d2b1f] leading-tight mb-12"
            data-testid="text-impact-statement"
          >
            Improving how people reason with data.
          </p>
          <p className="text-xl md:text-2xl text-[#6f4e37] font-light leading-relaxed max-w-3xl mx-auto">
            By combining rigorous econometrics with an interactive inference
            layer, Espresso Protocol aims to make reliable inference easier to
            use, easier to question, and harder to misuse.
          </p>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="bg-[#fdfaf7] py-48 px-6 md:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <p
            className="text-center font-serif text-3xl md:text-5xl text-[#3d2b1f] mb-24 max-w-3xl leading-snug"
            data-testid="text-closing-line"
          >
            Espresso Protocol is an ongoing effort to make econometric inference
            reliable, interactive, and usable.
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full pt-32 border-t border-[#e5e0dd] gap-16">
            <div>
              <div className="font-serif text-2xl font-bold text-[#3d2b1f] mb-4">
                Espresso Protocol
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6f4e37]">
                © 2026 Under Development
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
