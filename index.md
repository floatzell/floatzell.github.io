---
layout: default
title: Home
---

<!--
  HOME PAGE
  Edit text directly below. Things that come from other files:
    - Site title, links, nav .......... _config.yml
    - Tech stack cards ................ _data/skills.yml
    - Education timeline .............. _data/education.yml
    - Project cards ................... one file per project in _projects/
  Anything wrapped in <span class="todo">…</span> is a placeholder you still need to fill in.
-->

<section class="hero" id="top" data-section>
  <div class="blob blob--one" aria-hidden="true"></div>
  <div class="blob blob--two" aria-hidden="true"></div>
  <div class="container hero__grid">
    <div class="hero__text">
      <p class="chip chip--sage">{{ site.tagline }}</p>
      <h1>{{ site.title | replace: 'William', '<span class="mark">William</span>' }}</h1>
      <p class="hero__lead">Engineering Mathematics graduate from Chalmers who builds data-driven, analytical solutions with meaningful impact, from long-horizon power demand forecasting to classification, portfolio optimization and image analysis.</p>
      <div class="hero__actions">
        <a class="btn btn--primary" href="#projects">See my projects <svg class="icon" aria-hidden="true"><use href="#i-arrow-down"/></svg></a>
        <a class="btn btn--ghost" href="{{ site.cv | relative_url }}" target="_blank" rel="noopener">CV <svg class="icon" aria-hidden="true"><use href="#i-download"/></svg></a>
        <a class="btn btn--ghost" href="{{ site.social.linkedin }}" target="_blank" rel="noopener">LinkedIn <svg class="icon" aria-hidden="true"><use href="#i-linkedin"/></svg></a>
      </div>
      <ul class="hero__meta">
        <li><svg class="icon" aria-hidden="true"><use href="#i-pin"/></svg> {{ site.location }}</li>
        <li>MSc Engineering Mathematics &amp; Computational Science, Chalmers</li>
      </ul>
    </div>

    <figure class="portrait">
      <div class="portrait__shape" aria-hidden="true"></div>
      <!-- HEADSHOT PLACEHOLDER: replace assets/images/headshot-placeholder.svg (or change the src) with a square photo -->
      <img src="{{ '/assets/images/headshot-placeholder.svg' | relative_url }}" alt="Portrait of William Karlsson" width="480" height="480">
      <span class="sticker sticker--a" aria-hidden="true">Forecasting</span>
      <span class="sticker sticker--b" aria-hidden="true">Bayesian</span>
      <span class="sticker sticker--c" aria-hidden="true">Classification</span>
    </figure>
  </div>
</section>

<section class="section" id="about" data-section>
  <div class="container">
    <header class="section__head reveal">
      <p class="kicker"><span>01</span> About me</p>
      <h2>Math brain, data heart.</h2>
    </header>
    <div class="about">
      <div class="reveal">
        <p>I'm an Engineering Mathematics graduate from Chalmers University of Technology, based in Gothenburg. I like building predictive models and analyses on large datasets that lead to something meaningful, and I enjoy getting the statistics right as much as getting the code to run.</p>
        <p>My master thesis at Göteborg Energi was about long-term electricity demand forecasting. I combined machine learning (XGBoost), deep learning (LSTM) and Bayesian statistics to support power system planning.</p>
        <p>Before that I worked as a researcher at Chalmers Innovation Office and Chalmers Ventures. I secured project funding to investigate the industrial applicability of research in theoretical mathematics, and wrote research software for discovering and storing high-dimensional lattice arrangements. Today I also teach mathematics as a substitute teacher at upper-secondary school.</p>
        <!-- Add a personal sentence here if you like: hobbies, what you geek out about, what you want to work on next. -->
      </div>
      <aside class="facts reveal" style="--d: 120ms" aria-label="Quick facts">
        <dl>
          <div><dt>Based in</dt><dd>{{ site.location }}</dd></div>
          <div><dt>Education</dt><dd>MSc Engineering Mathematics and Computational Science, Chalmers</dd></div>
          <div><dt>Thesis</dt><dd>Long-term power demand forecasting, Göteborg Energi</dd></div>
          <div><dt>Languages</dt><dd>Swedish (native) · English (fluent) · Spanish (B2)</dd></div>
        </dl>
      </aside>
    </div>
  </div>
</section>

<section class="section section--tint" id="tech-stack" data-section>
  <div class="container">
    <header class="section__head reveal">
      <p class="kicker"><span>02</span> Tech stack</p>
      <h2>The toolbox.</h2>
      <p>The languages, libraries and methods I reach for most. Hover over the chips, they're friendly.</p>
    </header>
    <div class="grid grid--skills">
      {% for group in site.data.skills %}
      <div class="reveal" style="--d: {{ forloop.index0 | times: 70 }}ms">
        <article class="skill">
          <h3>{{ group.title | escape }}</h3>
          <ul class="chips">
            {% for item in group.items %}<li>{{ item | escape }}</li>{% endfor %}
          </ul>
        </article>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section" id="projects" data-section>
  <div class="container">
    <header class="section__head reveal">
      <p class="kicker"><span>03</span> Featured projects</p>
      <h2>Things I've built.</h2>
      <p>Each project has its own write-up covering the problem, the data, the methods, the results and what I'd improve next, with code and a demo alongside.</p>
    </header>
    <div class="grid grid--projects">
      {% assign projects = site.projects | sort: "order" %}
      {% for p in projects %}
      <div class="reveal" style="--d: {{ forloop.index0 | times: 90 }}ms">
        {% include project-card.html project=p %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--tint" id="education" data-section>
  <div class="container">
    <header class="section__head reveal">
      <p class="kicker"><span>04</span> Education</p>
      <h2>Where I studied.</h2>
    </header>
    <ol class="timeline">
      {% for e in site.data.education %}
      <li class="reveal" style="--d: {{ forloop.index0 | times: 100 }}ms">
        <div class="timeline__item">
          <p class="timeline__when">{{ e.period | escape }}{% if e.badge %} <span class="timeline__badge">{{ e.badge | escape }}</span>{% endif %}</p>
          <h3>{{ e.degree | escape }}</h3>
          <p class="timeline__school">{{ e.school | escape }}</p>
          {% if e.note %}<p class="timeline__note">{{ e.note | escape }}</p>{% endif %}
        </div>
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="section" id="currently" data-section>
  <div class="container">
    <header class="section__head reveal">
      <p class="kicker"><span>05</span> Currently</p>
      <h2>Right now.</h2>
    </header>
    <div class="now">
      <div class="now__item reveal">
        <div class="now__tile">
          <p class="now__label">Teaching</p>
          <p>Substitute teacher in mathematics at Sjölins Gymnasium and Polhemsgymnasiet, since August 2026.</p>
        </div>
      </div>
      <div class="now__item reveal" style="--d: 90ms">
        <div class="now__tile">
          <p class="now__label">Building</p>
          <p>This portfolio, plus interactive demos for each of my projects.</p>
        </div>
      </div>
      <div class="now__item reveal" style="--d: 180ms">
        <div class="now__tile">
          <p class="now__label">Learning</p>
          <p><span class="todo">[What are you learning right now?]</span></p>
        </div>
      </div>
      <div class="now__item reveal" style="--d: 270ms">
        <div class="now__tile">
          <p class="now__label">Open to</p>
          <p><span class="todo">[e.g. data science roles in Gothenburg or remote]</span></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact on-dark" id="contact" data-section>
  <div class="container">
    <p class="kicker"><span>06</span> Get in touch</p>
    <h2>Let's talk data.</h2>
    <p class="contact__lead">Have a role, a collaboration or just a question about one of my projects? I'd love to hear from you.</p>
    <div class="contact__mail-row">
      <a class="contact__mail" href="mailto:{{ site.social.email }}">{{ site.social.email }}</a>
      <button class="btn btn--ghost btn--sm copy" type="button" data-copy="{{ site.social.email }}">
        <svg class="icon" aria-hidden="true"><use href="#i-copy"/></svg>
        <span data-copy-label aria-live="polite">Copy</span>
      </button>
    </div>
    <div class="contact__actions">
      <a class="btn" href="mailto:{{ site.social.email }}"><svg class="icon" aria-hidden="true"><use href="#i-mail"/></svg> Email me</a>
      <a class="btn btn--ghost" href="{{ site.social.linkedin }}" target="_blank" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-linkedin"/></svg> LinkedIn</a>
      <a class="btn btn--ghost" href="{{ site.social.github }}" target="_blank" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-code"/></svg> GitHub</a>
      <a class="btn btn--ghost" href="{{ site.cv | relative_url }}" target="_blank" rel="noopener"><svg class="icon" aria-hidden="true"><use href="#i-download"/></svg> CV</a>
    </div>
  </div>
</section>
