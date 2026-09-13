(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  const closeMenu = () => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      closeMenu(); toggle.focus();
    }
  });
  window.matchMedia('(min-width: 801px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const selectTab = selected => {
    tabs.forEach(tab => {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    });
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault(); selectTab(tabs[next]); tabs[next].focus();
      }
    });
  });

  // Animate once on entry without hiding offscreen content or changing scroll.
  // The original, readable HTML remains the fallback for every capability check.
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionPreference.matches || !('IntersectionObserver' in window) ||
      !Element.prototype.animate) return;

  const activeAnimations = new Set();
  const groupSelectors = ['.outcome-grid', '.system-list', '.service-grid', '.process'];
  groupSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(group => {
      [...group.children].filter(child => !child.classList.contains('outcome-intro'))
        .forEach((child, i) => {
          child.dataset.reveal = 'rise';
          child.dataset.revealDelay = Math.min(i * 65, 195);
        });
    });
  });
  document.querySelectorAll('.workflow, .press-card').forEach(card => {
    card.dataset.reveal = 'rise';
    card.dataset.revealDelay = '140';
  });

  const prepareLines = element => {
    const fragment = document.createDocumentFragment();
    let line;
    const newLine = () => {
      const mask = document.createElement('span');
      mask.className = 'line-mask';
      line = document.createElement('span');
      line.className = 'motion-line';
      mask.append(line);
      fragment.append(mask);
    };
    newLine();
    [...element.childNodes].forEach(node => {
      if (node.nodeName === 'BR') {
        // Keep a whitespace boundary for copying text and assistive technology.
        line.append(document.createTextNode(' '));
        newLine();
      } else line.append(node);
    });
    element.replaceChildren(fragment);
    return [...element.querySelectorAll('.motion-line')];
  };
  const prepareWords = element => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) fragment.append(document.createTextNode(part));
        else {
          const word = document.createElement('span');
          word.className = 'motion-word';
          word.textContent = part;
          fragment.append(word);
        }
      });
      node.replaceWith(fragment);
    });
    return [...element.querySelectorAll('.motion-word')];
  };
  const targets = [...document.querySelectorAll('[data-reveal]')];
  const parts = new Map(targets.map(element => [element,
    element.dataset.reveal === 'lines' ? prepareLines(element) :
    element.dataset.reveal === 'words' ? prepareWords(element) : [element]
  ]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      observer.unobserve(element);
      if (motionPreference.matches) return;
      const kind = element.dataset.reveal;
      const keyframes = kind === 'lines'
        ? [{ transform: 'translateY(105%)', opacity: .2 }, { transform: 'translateY(0)', opacity: 1 }]
        : kind === 'words'
        ? [{ transform: 'translateY(.6em)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }]
        : kind === 'focus'
        ? [{ filter: 'blur(7px)', transform: 'translateY(12px)', opacity: 0 }, { filter: 'blur(0)', transform: 'translateY(0)', opacity: 1 }]
        : [{ transform: 'translateY(22px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }];
      parts.get(element).forEach((part, i) => {
        const animation = part.animate(keyframes, {
          duration: kind === 'lines' ? 850 : 700,
          delay: Number(element.dataset.revealDelay || 0) +
            (kind === 'lines' ? i * 110 : kind === 'words' ? Math.min(i * 38, 340) : 0),
          easing: 'cubic-bezier(.22,1,.36,1)',
          fill: 'backwards'
        });
        activeAnimations.add(animation);
        animation.finished.then(() => activeAnimations.delete(animation),
          () => activeAnimations.delete(animation));
      });
    });
  }, { threshold: .12, rootMargin: '0px 0px -28px 0px' });
  targets.forEach(element => observer.observe(element));
  const stopMotion = () => {
    observer.disconnect();
    activeAnimations.forEach(animation => animation.cancel());
    activeAnimations.clear();
  };
  motionPreference.addEventListener('change', event => {
    if (event.matches) stopMotion();
  });
  // Focusing a moving link should always give a stable, visible target.
  document.addEventListener('focusin', event => {
    activeAnimations.forEach(animation => {
      if (animation.effect?.target.contains(event.target)) animation.cancel();
    });
  });
})();
