import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Scale, FileText, Database, Activity, ShieldCheck, PlayCircle, Cpu, Layers, GitBranch, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/minimalist_abstract_architectural_espresso_data_structure.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-sm" />
            <span className="font-serif font-bold text-lg tracking-tight">Espresso Protocol</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a>
            <a href="#inference-layer" className="hover:text-foreground transition-colors">Inference Layer</a>
            <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
          </nav>
          <div className="flex gap-4">
             <Button variant="ghost" size="sm" className="hidden sm:flex">Whitepaper</Button>
             <Button size="sm" className="font-serif italic">Request Access</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-border/40">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Protocol Development Phase
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight tracking-tight text-primary">
                A standard for explainable, accountable econometrics.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Espresso Protocol is a specialized framework being built to transform raw data into formal, verifiable econometric inference.
              </motion.p>
              <motion.div variants={fadeIn} className="space-y-4">
                <p className="text-sm font-medium text-foreground/80 border-l-2 border-primary/20 pl-4 py-1">
                  Designed for high-stakes decisions where causal mechanisms must be proven, not just predicted.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="h-12 px-8 text-base">Explore the architecture</Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base group">
                    View Whitepaper <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-muted"
            >
              <img 
                src={heroImage} 
                alt="Abstract architectural composition representing structured data" 
                className="object-cover w-full h-full opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent mix-blend-multiply" />
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-24 bg-background border-b border-border/40">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-serif text-primary">The Epistemic Crisis in Data Science</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Institutional decisions often rely on "black box" analysis where the connection between raw observation and causal inference is broken. Traditional econometric workflows are fragmented across notebooks, making them difficult to audit or replicate at scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed italic border-t border-b border-border/40 py-6">
              "We are building a bridge between statistical rigour and organizational accountability, ensuring that every decimal point in a result can be traced back to its underlying assumptions."
            </p>
          </div>
        </section>

        {/* How It Works - Detailed Process */}
        <section id="how-it-works" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-primary mb-4">The Econometric Pipeline</h2>
              <p className="text-muted-foreground max-w-2xl">The protocol enforces a strict sequential processing of data to eliminate common biases and ensure mathematical integrity.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "1. The Grind",
                  subtitle: "Data Normalization",
                  desc: "Raw inputs undergo deterministic cleaning. Every null handling, unit conversion, and outlier treatment is recorded as a immutable transformation step.",
                  icon: Layers
                },
                {
                  title: "2. The Extraction",
                  subtitle: "Model Specification",
                  desc: "The protocol maps the research question to optimal estimators (OLS, IV, GMM). Identification strategies are formally defined before any computation begins.",
                  icon: GitBranch
                },
                {
                  title: "3. The Brew",
                  subtitle: "Execution & Testing",
                  desc: "Analysis is executed in a sandboxed environment. The system automatically runs Monte Carlo simulations and sensitivity checks to test model robustness.",
                  icon: Cpu
                },
                {
                  title: "4. The Serve",
                  subtitle: "Explainable Output",
                  desc: "Results are presented alongside a full audit trail. The language layer translates coefficients into human-readable logic without altering the underlying math.",
                  icon: Zap
                }
              ].map((item, i) => (
                <div key={i} className="space-y-4 p-6 border border-border/60 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary">{item.title}</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inference Layer - Extreme Depth */}
        <section id="inference-layer" className="py-24 bg-secondary/20 border-t border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-serif text-primary">The Inference Architecture</h2>
                <p className="text-muted-foreground">A deep dive into how Espresso Protocol ensures absolute accountability at every layer.</p>
              </div>

              <div className="space-y-12">
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div className="font-mono text-xs uppercase tracking-widest pt-2 text-primary">Layer 01: Provenance</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif">Immutable Data Lineage</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Every observation is hashed and timestamped. The protocol tracks the "genetic history" of a dataset—from the moment of ingestion through every merge, slice, and transformation. This eliminates "data amnesia" where researchers forget which version of a file produced which result.
                    </p>
                    <div className="bg-background/50 p-4 border border-border/40 font-mono text-xs space-y-1">
                      <div className="text-green-600">// Lineage verification</div>
                      <div>SHA-256: 8f42a... [Validated]</div>
                      <div>Transformation: Log_Normalization(x) [Applied]</div>
                      <div>Audit: Reversible [Confirmed]</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div className="font-mono text-xs uppercase tracking-widest pt-2 text-primary">Layer 02: Axiomatics</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif">A priori Assumption Mapping</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Before execution, the protocol requires a formal declaration of assumptions (e.g., parallel trends, exogeneity). These are not just comments; they are logical constraints that the system uses to select appropriate diagnostic tests.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div className="font-mono text-xs uppercase tracking-widest pt-2 text-primary">Layer 03: Computation</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif">Statistically Identical Environments</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Computation happens in an isolated environment that records every library version and hardware seed used. This ensures that analysis is bit-identical when re-run years later. No "reproducibility crisis" can occur within the protocol.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                  <div className="font-mono text-xs uppercase tracking-widest pt-2 text-primary">Layer 04: Interrogation</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif">The Language Interrogation Layer</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Our proprietary LLM implementation acts as an interface, not a generator. It queries the internal representation of the statistical model to answer "what-if" questions. 
                    </p>
                    <div className="border-l-2 border-primary/20 pl-6 py-4 italic text-muted-foreground">
                      "If we exclude the 2008 financial crisis from the training set, how does the standard error on our primary coefficient change?"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intended Impact */}
        <section className="py-24 bg-background text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif text-primary mb-6">Built for High-Stakes Decisions</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Espresso Protocol is not a general-purpose tool. It is designed for policymakers and researchers who require their data-driven conclusions to be legally and scientifically defensible.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg font-serif italic">
              Read the Whitepaper
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <span className="font-serif font-bold text-base tracking-tight text-primary">Espresso Protocol</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right max-w-md">
            Espresso Protocol is an ongoing effort to rethink econometric reasoning.
            <br />
            <span className="opacity-60 text-xs">A platform under development.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
