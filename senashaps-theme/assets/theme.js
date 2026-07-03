/* Senashaps Theme JS — Mobile menu · Accordion · Gallery · Size/Color · Qty */

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initAccordions();
  initProductGallery();
  initSizeSelector();
  initColorSwatches();
  initQtySelector();
  initSortSelect();
  initFilterBtns();
});

/* ─── Mobile Menu ─────────────────────────────── */
function initMobileMenu() {
  const openBtn  = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const nav      = document.querySelector('.mobile-nav');
  const overlay  = document.querySelector('.header-overlay');
  if (!openBtn || !nav) return;

  const open  = () => { nav.classList.add('is-open'); overlay && overlay.classList.add('is-visible'); document.body.style.overflow = 'hidden'; openBtn.setAttribute('aria-expanded','true'); };
  const close = () => { nav.classList.remove('is-open'); overlay && overlay.classList.remove('is-visible'); document.body.style.overflow = ''; openBtn.setAttribute('aria-expanded','false'); };

  openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  overlay  && overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ─── Accordion ───────────────────────────────── */
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item   = this.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');
      // Allow multiple open at once on product page; close others elsewhere
      const group = this.closest('.product-accordion');
      if (!group) {
        document.querySelectorAll('.accordion-item.is-open').forEach(el => el.classList.remove('is-open'));
      }
      item.classList.toggle('is-open', !isOpen);
      this.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ─── Product Gallery ─────────────────────────── */
function initProductGallery() {
  const mainImg = document.querySelector('#gallery-main-image');
  const thumbs  = document.querySelectorAll('.gallery-thumb');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function () {
      thumbs.forEach(t => t.classList.remove('is-active'));
      this.classList.add('is-active');
      const src = this.dataset.imageSrc;
      if (src) {
        mainImg.style.opacity = '0';
        setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 150);
      }
    });
  });
  mainImg.style.transition = 'opacity .15s ease';
}

/* ─── Size Selector ───────────────────────────── */
function initSizeSelector() {
  document.querySelectorAll('.size-selector').forEach(wrap => {
    wrap.querySelectorAll('.size-btn:not(.is-unavailable)').forEach(btn => {
      btn.addEventListener('click', function () {
        wrap.querySelectorAll('.size-btn').forEach(b => b.classList.remove('is-active'));
        this.classList.add('is-active');
        // Update label display
        const label = wrap.closest('.variant-group')?.querySelector('[data-selected-size]');
        if (label) label.textContent = this.textContent.trim();
      });
    });
  });
}

/* ─── Color Swatches ──────────────────────────── */
function initColorSwatches() {
  document.querySelectorAll('.color-swatches-lg, .product-card__swatches').forEach(wrap => {
    wrap.querySelectorAll('.color-swatch-lg, .swatch').forEach(sw => {
      sw.addEventListener('click', function () {
        wrap.querySelectorAll('.color-swatch-lg, .swatch').forEach(s => s.classList.remove('is-active'));
        this.classList.add('is-active');
        const label = wrap.closest('.variant-group')?.querySelector('[data-selected-color]');
        if (label) label.textContent = this.dataset.value || this.title || '';
      });
    });
  });
}

/* ─── Quantity Selector ───────────────────────── */
function initQtySelector() {
  document.querySelectorAll('.qty-wrap').forEach(wrap => {
    const input = wrap.querySelector('.qty-input');
    const minus = wrap.querySelector('[data-action="minus"]');
    const plus  = wrap.querySelector('[data-action="plus"]');
    if (!input) return;
    minus && minus.addEventListener('click', () => { const v = parseInt(input.value)||1; if (v>1) input.value = v-1; });
    plus  && plus.addEventListener('click',  () => { input.value = (parseInt(input.value)||1) + 1; });
    input.addEventListener('change', () => { const v = parseInt(input.value); if (!v||v<1) input.value = 1; });
  });
}

/* ─── Sort Select ─────────────────────────────── */
function initSortSelect() {
  const sel = document.querySelector('[data-sort]');
  if (!sel) return;
  sel.addEventListener('change', function () {
    const url = new URL(window.location.href);
    url.searchParams.set('sort_by', this.value);
    window.location.href = url.toString();
  });
}

/* ─── Filter Buttons ──────────────────────────── */
function initFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      this.classList.add('is-active');
    });
  });
}
