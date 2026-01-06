import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Scale, FileText, Database, Activity, ShieldCheck, PlayCircle } from "lucide-react";
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
            <a href="#use-cases" className="hover:text-foreground transition-colors">Use Cases</a>
            <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
          </nav>
          <div className="flex gap-4">
             <Button variant="ghost" size="sm" className="hidden sm:flex">Log in</Button>
             <Button size="sm" className="font-serif italic">Request Access</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Pre-launch Preview
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight tracking-tight text-primary">
                A standard for explainable, accountable data-driven decisions.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Espresso Protocol is a platform being built to help people turn raw data into structured, explainable inference they can question, verify, and trust.
              </motion.p>
              <motion.div variants={fadeIn} className="space-y-4">
                <p className="text-sm font-medium text-foreground/80 border-l-2 border-primary/20 pl-4 py-1">
                  Designed for decisions where assumptions matter, uncertainty must be visible, and results need to be defensible.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="h-12 px-8 text-base">Explore the idea</Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base group">
                    How it works <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

        <Separator className="container mx-auto max-w-4xl opacity-50" />

        {/* Problem Statement */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-serif text-primary">The Gap Between Analysis and Decision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Important decisions in finance, policy, research, and institutions rely on data analysis that is often opaque, difficult to reproduce, and hard to interrogate. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Statistical methods are applied inconsistently, assumptions remain implicit, and advanced analysis requires specialized expertise. Newer AI tools can produce fluent explanations without clearly showing how conclusions are derived, making accountability difficult.
            </p>
          </div>
        </section>

        {/* The Idea */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-serif mb-6 text-primary">The Idea Behind Espresso Protocol</h3>
                <div className="prose prose-stone text-muted-foreground">
                  <p className="mb-4">
                    We aim to standardize how data is transformed into inference. The goal is not to automate judgment but to make analytical steps <strong>explicit, structured, and understandable</strong>.
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <Scale className="w-5 h-5 mt-1 text-primary/60 shrink-0" />
                      <span>Reduce barriers to rigorous statistical reasoning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Activity className="w-5 h-5 mt-1 text-primary/60 shrink-0" />
                      <span>Make assumptions visible and explicitly stated</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 mt-1 text-primary/60 shrink-0" />
                      <span>Ensure results are reproducible by design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-5 h-5 mt-1 text-primary/60 shrink-0" />
                      <span>Separate statistical computation from explanation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-card p-8 rounded-sm shadow-sm border border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border/50">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Inference Pipeline</span>
                    <span className="text-xs font-mono text-primary">v0.1.0-alpha</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      <span className="text-foreground">Input: Macro_Economic_Data_2024.csv</span>
                    </div>
                    <div className="flex items-center gap-3 pl-5 border-l border-dashed border-border ml-1">
                      <span className="text-muted-foreground">↳ Assumption: Inflation adjusted (CPI)</span>
                    </div>
                    <div className="flex items-center gap-3 pl-5 border-l border-dashed border-border ml-1">
                      <span className="text-muted-foreground">↳ Method: Difference-in-Differences</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary/50" />
                      <span className="text-foreground">Output: Causal Impact Estimate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-serif text-primary mb-4">How It Works</h2>
              <p className="text-muted-foreground">A structured process to move from raw data to trusted conclusion.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "The Grind",
                  desc: "Raw data is structured and documented so inputs, units, and transformations are clear."
                },
                {
                  step: "02",
                  title: "The Extraction",
                  desc: "Appropriate econometric or statistical methods and assumptions are selected using transparent rules."
                },
                {
                  step: "03",
                  title: "The Brew",
                  desc: "Traceable statistical analysis is run, producing results with uncertainty, diagnostics, and sensitivity information."
                },
                {
                  step: "04",
                  title: "The Serve",
                  desc: "A language interface explains what was done, why, and what results mean, allowing follow-up interrogation."
                }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute top-0 left-0 text-8xl font-serif text-secondary/30 -z-10 select-none transition-colors group-hover:text-secondary/50">
                    {item.step}
                  </div>
                  <div className="pt-12 pl-4">
                    <h3 className="text-xl font-medium mb-3 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distinct Approach */}
        <section id="philosophy" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Explanation as a First-Class Requirement</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Every result is tied to a specific dataset, explicit methods, stated assumptions, and reproducible statistical output. 
              </p>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Language models are used only to communicate and clarify analysis, not to create it. This distinction ensures that the "reasoning" is mathematically grounded, not hallucinated.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary-foreground/5 border-none text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="mb-2 opacity-70"><FileText className="w-6 h-6" /></div>
                  <h4 className="font-medium mb-1">Explicit Assumptions</h4>
                  <p className="text-xs opacity-70">Nothing hidden in black boxes.</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/5 border-none text-primary-foreground">
                 <CardContent className="pt-6">
                  <div className="mb-2 opacity-70"><Activity className="w-6 h-6" /></div>
                  <h4 className="font-medium mb-1">Reproducible</h4>
                  <p className="text-xs opacity-70">Always get the same result.</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/5 border-none text-primary-foreground">
                 <CardContent className="pt-6">
                  <div className="mb-2 opacity-70"><Database className="w-6 h-6" /></div>
                  <h4 className="font-medium mb-1">Data Tracing</h4>
                  <p className="text-xs opacity-70">Lineage from source to insight.</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/5 border-none text-primary-foreground">
                 <CardContent className="pt-6">
                  <div className="mb-2 opacity-70"><PlayCircle className="w-6 h-6" /></div>
                  <h4 className="font-medium mb-1">Interactive</h4>
                  <p className="text-xs opacity-70">Ask "what if" safely.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-serif text-primary mb-4">Specific Use Cases</h2>
              <p className="text-muted-foreground">Where rigour meets reality.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Policy Evaluation",
                  desc: "Evaluating whether a policy changed outcomes over time, assessing whether changes are structural or temporary."
                },
                {
                  title: "Macroeconomic Scenarios",
                  desc: "Exploring how sensitive results are to model choices and what conditions would invalidate findings."
                },
                {
                  title: "Academic Research",
                  desc: "Supporting replicable academic research by separating statistical computation from explanation."
                }
              ].map((item, i) => (
                <Card key={i} className="bg-secondary/20 border-border/60 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 p-8 bg-muted/30 rounded-lg border border-border/50">
              <h3 className="text-xl font-serif mb-6 text-center">Types of Questions It Can Answer</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "What changed after the intervention?",
                  "Which assumptions drive this conclusion?",
                  "How sensitive are results to model choices?",
                  "What conditions would invalidate these findings?",
                  "How do outcomes differ across groups?"
                ].map((q, i) => (
                  <span key={i} className="px-4 py-2 bg-background border rounded-full text-sm text-muted-foreground shadow-sm">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intended Impact */}
        <section className="py-24 bg-secondary/30 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif text-primary mb-6">Intended Impact</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              By making statistical reasoning transparent and easier to interrogate, Espresso Protocol aims to support better decision making, improve accountability, and increase trust in data-driven conclusions across sectors.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg font-serif italic">
              Join the waiting list
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
            Espresso Protocol is an ongoing effort to rethink how people reason with data when the stakes are high.
          </p>
        </div>
      </footer>
    </div>
  );
}
