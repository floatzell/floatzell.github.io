---
title: "Stocks Portfolio"
order: 2
category: "Time Series · Optimization"
summary: "Forecast modelling and portfolio optimization of 10 equities, balancing return against risk with the Sharpe ratio and mean-variance optimization."
period: "Mar – Jun 2025"
context: "Chalmers University of Technology"
tools: "Python"
tags: ["Python", "Time series", "Sharpe ratio", "Mean-variance optimization"]
cover: /assets/images/project-stocks.svg
cover_alt: "Illustration of several stock price lines with one bold line rising steadily and a widening shaded forecast cone to its right"
# Fill these in when the repo / demo exist. Empty = the button shows "coming soon".
code_url: ""      # e.g. https://github.com/floatzell/stocks-portfolio
demo_url: ""      # e.g. a Streamlit or Hugging Face Space link
notebook_url: ""  # optional
---

> **Headline result:** time-series forecasting models for **10 equities**, feeding a portfolio optimized for **risk-adjusted return**.
{: .callout}

## Problem

Picking stocks is only half of investing. The other half is deciding *how much* of each to hold. This project tackled both: forecast how a set of equities might behave, then turn those forecasts into portfolio weights that maximize return per unit of risk.

<span class="todo">[Add 1–2 sentences of context: what question you set out to answer and how you judged success, e.g. versus an equal-weight baseline.]</span>

## Data

The project covers **10 equities**.

<span class="todo">[Add: which equities, the data source, the time period and frequency (daily? weekly?), and how you split history into training and testing data.]</span>

## Methods

The work had two stages.

**1. Forecast modelling.** Time-series models were fitted to the price history of each of the 10 equities to forecast their behaviour.

<span class="todo">[Add: which forecasting models you used and why, and how you evaluated forecast accuracy.]</span>

**2. Portfolio optimization.** The forecasts were used to build a portfolio with two classic tools:

- **Mean-variance optimization** (Markowitz): choose weights that trade expected return against portfolio variance.
- **Sharpe ratio**: expected excess return divided by volatility. Maximizing it targets the best return per unit of risk.

## Results

<span class="todo">[Add: how the optimized portfolio performed compared to a baseline (Sharpe ratio, return, volatility), plus a chart of the efficient frontier or cumulative returns. Save images in assets/images/ and embed them here.]</span>

## Improvements & next steps

- <span class="todo">[What are the limits of the approach, e.g. forecast uncertainty, estimation error in the covariance matrix, transaction costs?]</span>
- <span class="todo">[What would you try next, e.g. more robust optimization, rolling re-balancing, more assets?]</span>

## Demo & code

<span class="todo">[Add a short note on how to run the code, and embed or link the demo here, e.g. an interactive portfolio explorer.]</span>
