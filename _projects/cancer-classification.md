---
title: "Cancer Classification"
order: 1
category: "Machine Learning · Classification"
summary: "Six classification methods on a feature-heavy, highly imbalanced cancer dataset, reaching over 95% accuracy for the rarer groups."
period: "May – Jun 2025"
context: "Chalmers University of Technology"
tools: "Python, scikit-learn"
tags: ["Python", "scikit-learn", "Classification", "Imbalanced data"]
cover: /assets/images/project-cancer.svg
cover_alt: "Illustration of a scatter plot with many sage dots on the left, a few dark dots on the right and a dashed decision boundary between them"
# Fill these in when the repo / demo exist. Empty = the button shows "coming soon".
code_url: ""      # e.g. https://github.com/floatzell/cancer-classification
demo_url: ""      # e.g. a Streamlit or Hugging Face Space link
notebook_url: ""  # optional, e.g. an nbviewer link
# Note: your CV lists this as "Breast Cancer Classification Project" – rename the title above if you prefer.
---

> **Headline result:** over **95% accuracy for the rarer groups**, on a dataset with a very large number of features and heavily skewed group sizes.
{: .callout}

## Problem

When some groups are rare, a classifier can look excellent on paper simply by favouring the common ones, while missing exactly the cases that matter most. The aim of this project was to build and compare classifiers that stay reliable *for the rarer groups*, not just on average.

<span class="todo">[Add 1–2 sentences of context: what is being classified (type, subtype, outcome?), why it matters, and what a "good" model means here.]</span>

## Data

The dataset was both **feature-heavy** (a large number of predictors per sample) and **highly imbalanced** (a few groups far rarer than the rest). That combination is what makes it interesting: plain accuracy is misleading, and many features raise the risk of overfitting.

<span class="todo">[Add: dataset name and source, number of samples and features, class counts, missing values, licence.]</span>

## Methods

Everything was done in Python with scikit-learn. Six methods were trained and compared:

| Model | Short name | Family |
|---|---|---|
| k-Nearest Neighbours | KNN | Distance-based |
| Logistic Regression | LR | Linear |
| Random Forest | RF | Tree ensemble |
| Quadratic Discriminant Analysis | QDA | Probabilistic |
| Multi-Layer Perceptron | MLP | Neural network |
| Support Vector Classifier | SVC | Margin-based / kernel |

<span class="todo">[Add: preprocessing, how you handled the imbalance (class weights? resampling?), how you handled the many features (scaling? selection? dimensionality reduction?), validation strategy and hyperparameter tuning.]</span>

## Results

The best models reached **over 95% accuracy for the rarer groups**.

| Model | Overall accuracy | Accuracy, rarer groups |
|---|---|---|
| KNN | – | – |
| LR | – | – |
| RF | – | – |
| QDA | – | – |
| MLP | – | – |
| SVC | – | – |

<span class="todo">[Replace the dashes with your real numbers, say which model won and why, and add a confusion matrix or per-group chart (save it in assets/images/ and embed it here).]</span>

## Improvements & next steps

- <span class="todo">[What limited performance or interpretability?]</span>
- <span class="todo">[What would you try next, e.g. other ways of handling imbalance, feature selection, calibrated probabilities, stricter validation?]</span>

## Demo & code

<span class="todo">[Add a short note on how to run the code, and embed or link the demo here, e.g. a Streamlit app or a Hugging Face Space.]</span>
