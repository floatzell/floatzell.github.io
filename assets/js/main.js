/* William Karlsson · Data Science Portfolio
   Small, dependency-free helpers. Everything degrades gracefully without JS. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* 1 · Header gets a shadow once the page scrolls */
  var header = document.querySelector('[data-header]');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* 2 · Mobile menu */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* 3 · Reveal-on-scroll */
  var revealEls = document.querySelectorAll('.reveal');
  if (hasIO && !reduceMotion) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 4 · Highlight the current section in the header nav (home page only) */
  var sections = document.querySelectorAll('section[data-section]');
  var navLinks = document.querySelectorAll('.site-nav a[data-spy]');
  if (hasIO && sections.length && navLinks.length) {
    var setActive = function (id) {
      navLinks.forEach(function (a) {
        var on = a.getAttribute('data-spy') === id;
        a.classList.toggle('is-active', on);
        if (on) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
      });
    };
    var spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spyIO.observe(s); });
  }

  /* 5 · Gentle 3D tilt + light sheen on project cards (mouse only) */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      var raf = 0;
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width;
        var y = (e.clientY - r.top) / r.height;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          el.style.setProperty('--ry', ((x - 0.5) * 6).toFixed(2) + 'deg');
          el.style.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
          el.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
          el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        });
      });
      el.addEventListener('pointerleave', function () {
        cancelAnimationFrame(raf);
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
      });
    });
  }

  /* 6 · Copy-email button */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('[data-copy-label]');
    var original = label ? label.textContent : '';
    function say(msg) {
      if (!label) return;
      label.textContent = msg;
      setTimeout(function () { label.textContent = original; }, 1800);
    }
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { say('Copied!'); }, function () { say('Copy failed'); });
        } else {
          say('Copy manually');
        }
      } catch (err) {
        say('Copy failed');
      }
    });
  });

  /* 7 · "On this page" list for project write-ups, built from the h2 headings */
  var toc = document.querySelector('[data-toc]');
  var prose = document.querySelector('.prose');
  if (toc && prose) {
    var heads = prose.querySelectorAll('h2[id]');
    var list = toc.querySelector('ol');
    if (list && heads.length > 1) {
      heads.forEach(function (h) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        list.appendChild(li);
      });
      toc.hidden = false;

      if (hasIO) {
        var links = list.querySelectorAll('a');
        var tocIO = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            links.forEach(function (a) {
              a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id);
            });
          });
        }, { rootMargin: '-15% 0px -75% 0px' });
        heads.forEach(function (h) { tocIO.observe(h); });
      }
    }
  }
})();
