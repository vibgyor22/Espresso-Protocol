<div align="center">

```
  ███████╗███████╗██████╗ ██████╗ ███████╗███████╗███████╗ ██████╗
  ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝██╔═══██╗
  █████╗  ███████╗██████╔╝██████╔╝█████╗  ███████╗███████╗██║   ██║
  ██╔══╝  ╚════██║██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║██║   ██║
  ███████╗███████║██║     ██║  ██║███████╗███████║███████║╚██████╔╝
  ╚══════╝╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝
                       P R O T O C O L
```

**Your data. A question. Real econometrics — in your terminal.**

[**espressoprotocol.in**](https://espressoprotocol.in) · [Install](#-install) · [Quick Start](#-quick-start) · [Commands](#-repl-reference) · [Models](#-supported-models)

[![Python 3.10+](https://img.shields.io/badge/python-3.10+-brown.svg?style=flat-square)](https://python.org)
[![License: Custom](https://img.shields.io/badge/license-custom%20(no%20resale)-gold.svg?style=flat-square)](LICENSE)
[![Status: Beta](https://img.shields.io/badge/status-beta-orange.svg?style=flat-square)]()
[![LLM: Claude / Gemini](https://img.shields.io/badge/LLM-Claude%20%7C%20Gemini-8A2BE2.svg?style=flat-square)]()
[![Math: Deterministic](https://img.shields.io/badge/math-deterministic-green.svg?style=flat-square)]()

</div>

---

## The idea

Most data tools make you do the statistics. Espresso does the statistics *for* you.

Load a spreadsheet, ask a question in plain English, and Espresso figures out the rest — which columns matter, which econometric model is appropriate, whether the model's assumptions hold, and what the numbers actually mean for your specific question. It narrates every decision so you can follow along, or override anything.

> **The math is always deterministic.** Coefficients, p-values, standard errors — computed by the same Python estimators academics use. The AI layer handles judgment: reading your question, choosing models, translating results into language.

Think of it as a senior statistician who happens to know your dataset.

---

## ✨ What makes it different

| | Espresso | Python/R | Excel | ChatGPT |
|---|:---:|:---:|:---:|:---:|
| Picks the right model for you | ✅ | ❌ | ❌ | ⚠️ |
| Runs diagnostics automatically | ✅ | ❌ | ❌ | ❌ |
| Math is deterministic (not LLM) | ✅ | ✅ | ✅ | ❌ |
| Plain-English interpretation | ✅ | ❌ | ❌ | ✅ |
| Switches models when assumptions fail | ✅ | ❌ | ❌ | ❌ |
| Runs in the terminal | ✅ | ✅ | ❌ | ❌ |
| No code required | ✅ | ❌ | ⚠️ | ✅ |

---

## ⚙️ How it works

```
  You ask a question in plain English
           │
           ▼
  ┌─────────────────────┐
  │   Question Parser   │  causal? associative? forecast?
  └─────────┬───────────┘
            │
            ▼
  ┌─────────────────────┐
  │   Data Profiler     │  types, ranges, missing, panel/TS structure
  └─────────┬───────────┘
            │
            ▼
  ┌─────────────────────┐
  │   Model Selector    │  15+ econometric models, ranked by fit
  └─────────┬───────────┘
            │
            ▼
  ┌─────────────────────┐
  │   Diagnostics       │  heteroscedasticity, autocorrelation, trends
  └─────────┬───────────┘     → switches model if assumptions fail
            │
            ▼
  ┌─────────────────────┐
  │   Interpreter       │  4-layer qualitative context
  └─────────┬───────────┘     domain · trends · literature · sanity
            │
            ▼
  Rich terminal output  ──→  (optional) HTML dashboard on `export`
```

---

## 📦 Install

```bash
pip install git+https://github.com/vibgyor22/Espresso-Protocol.git
```

Then add your API key — **free tier is enough:**

```bash
# Claude (recommended — cheaper, faster)
echo "ANTHROPIC_API_KEY=your-key-here" > .env

# Or use Gemini
echo "GEMINI_API_KEY=your-key-here" > .env
```

Get your key:
- **Claude:** [console.anthropic.com](https://console.anthropic.com) (free tier available)
- **Gemini:** [aistudio.google.com](https://aistudio.google.com) (free tier available)

> Espresso also runs fully offline with no API key — you get deterministic statistics but no qualitative interpretation.

---

## 🚀 Quick Start

```bash
espresso
```

That opens the interactive terminal. Then just talk to it:

```
◈  load my_data.csv
◈  did the policy change in 2018 affect unemployment?
◈  what if unemployment were 2% lower?
◈  export
```

No quotes. No flags. No syntax to memorise.

---

## 📟 Terminal demo

```
╔══════════════════════════════════════════════════════════╗
║  Espresso Protocol  ·  econometric analysis in English  ║
╚══════════════════════════════════════════════════════════╝

◈  load gdp_data.csv

  ✓ Loaded 847 rows × 12 columns
    Panel: 34 countries × 25 years (1998–2022)
    Outcome candidates: gdp_growth, consumption
    Treatment candidates: trade_openness, interest_rate, ...

◈  how does trade openness affect GDP growth?

  Model selected: Panel OLS with Two-Way Fixed Effects
  Reason: panel structure detected; causal framing → TWFE preferred

  ┌─────────────────────────────────────────────────────┐
  │  Coefficient on trade_openness                       │
  │  ──────────────────────────────────────────────────  │
  │  β = +0.043  SE = 0.011  p < 0.001  ★★★            │
  │  R² = 0.71   N = 847   Robust SE (HC1)              │
  └─────────────────────────────────────────────────────┘

  Interpretation: A 10-point increase in trade openness is
  associated with 0.43 percentage points higher GDP growth,
  controlling for country and year fixed effects.

  Sanity check: Sign positive ✓  Magnitude plausible ✓

  Suggested follow-ups:
  1. Test parallel trends assumption
  2. Run robustness check with log-log specification
  3. What if trade openness were 10pp higher?

◈  3
```

---

## 🛠️ Two ways to use it

### Interactive REPL *(recommended)*

```bash
espresso
```

Load data, ask questions, drill down — all in one session. Espresso remembers context between questions.

```
◈  load gdp_data.csv
◈  how does trade openness affect GDP growth?
◈  is that effect larger in developing countries?
◈  what if trade openness were 10 percentage points higher?
◈  export
```

### One-shot CLI

```bash
espresso analyze data.csv -q "What drove unemployment in the 2008 recession?"
```

```bash
# With HTML export
espresso analyze data.csv -q "Forecast inflation for the next 5 years" --export report.html

# Override model and columns explicitly
espresso analyze data.csv -q "Effect of interest rate on growth" \
  --outcome gdp_growth --treatment interest_rate \
  --model diff_in_diff --unit country --time year
```

---

## 📋 REPL reference

| Command | What it does |
|---|---|
| `load path/to/file.csv` | Load a dataset (CSV, Excel, Parquet) |
| *Any question* | Run a full econometric analysis |
| `1`, `2`, `3` ... | Run a suggested follow-up by number |
| `what if <var> = <value>` | Predict outcome at a scenario value |
| `what if shock = <n>` | Shift a forecast baseline by n units |
| `export` | Save a self-contained interactive HTML dashboard |
| `export table` | Export a LaTeX + Markdown regression table |
| `eras` | Break down results by historical era |
| `context` | Show relevant world events for this analysis |
| `robustness` | Run alternative model specifications |
| `verdict` | Re-print the plain-English conclusion |
| `?p-value` · `?fixed effects` | Define any statistical term |
| `show profile` | Re-print the data profile |
| `explain` | Toggle step-by-step annotation mode |

---

## 📊 Supported models

| Category | Models |
|---|---|
| **Causal inference** | Difference-in-Differences (TWFE) |
| **Forecasting** | ARIMA (auto-order), linear trend, exponential smoothing, random walk |
| **Association / Panel** | Panel OLS (TWFE), entity fixed effects, time fixed effects, first-difference, OLS, pooled OLS |
| **Non-linear** | Log-linear, log-log, polynomial OLS |
| **Robust** | Median regression, quantile regression |

All regression models apply **robust (HC1) or clustered standard errors** automatically. If a model's diagnostic tests fail, Espresso switches to a corrective specification and explains why.

---

## 📁 Supported data formats

| Format | Notes |
|---|---|
| **CSV / TSV** | Any delimiter, auto-detected |
| **Excel** (.xlsx) | Multi-sheet — pick the sheet interactively |
| **Parquet** | Full support |
| **Panel data** | Unit × time structure auto-detected |
| **Cross-sectional** | Single-period data |
| **Time series** | Single-entity with a time column |

Minimum requirement: a data file with at least two numeric columns.

---

## 🧠 Interpretation layers

After every analysis, Espresso surfaces four layers of qualitative context:

```
1. Column selection   Why these variables were chosen
2. Model rationale    Why this estimator, what it controls for
3. Result translation What the coefficients mean in plain English
4. Qualitative read   Domain knowledge · data trends · literature · sanity check
```

---

## ❓ Why not just use Python, R, or Excel?

Python and R are powerful — but they require you to:
- Already know which model to use
- Know how to run diagnostics and what they mean
- Understand what assumptions were violated and what to do next
- Translate coefficients into conclusions yourself

Excel can't run any of this at all.

Espresso handles the full stack: model selection, diagnostics, fallback logic, and interpretation. You bring the question; Espresso handles the methodology.

**It is not a replacement for statisticians.** It is what you reach for before you need one — and what helps non-statisticians do serious empirical work.

---

## 📋 Requirements

- Python **3.10** or later
- An API key from **Anthropic** or **Google** (free tier works fine)
- A data file with at least two numeric columns

---

## 🌐 Project

| | |
|---|---|
| **Website** | [espressoprotocol.in](https://espressoprotocol.in) |
| **Status** | Beta — CLI is stable, Python API may change |
| **License** | Custom — free for personal/internal use, no commercial resale ([details](LICENSE)) |

Contributions welcome — open an issue or PR.
