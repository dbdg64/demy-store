// =========================================
//  ديمى — Water Pumps Store
//  All products scraped from michelledemy.com
// =========================================

/* --- Accordion --- */
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
  const btn = item.querySelector('.accordion__trigger');

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    accordionItems.forEach((other) => other.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

/* --- Products (all 17 products from the live WooCommerce store) --- */
const productsGrid = document.getElementById('products-grid');

const products = [
  // ======== مواتير مياه ========
  {
    name: 'ماتور ديمى 9000 واحد حصان',
    category: 'motor',
    rating: '⭐ ٥.٠٠',
    specs: {
      'القوة': '١ حصان',
      'الدفع': 'حتى ٥٤ متر (الدور ١٢)',
      'الملف': 'نحاس ١٠٠٪',
      'الموبينة': '٩ سم',
      'الضمان': '١٢ شهر',
    },
    features: ['ملف نحاس', 'موبينة ٩سم', 'اكس استانلس', 'ريشة شفط من النحاس', 'حماية حرارية', 'ريشة توجيه زهر', 'فارغة زهر معزولة من الصدأ', 'موفر للكهرباء', 'مواصفات اوروبية'],
    image: '/assets/products/demy-9000-main.png',
    extras: ['/assets/products/demy-9000-alt.png', '/assets/products/motor-9000.jpg'],
  },
  {
    name: 'ماتور ميشيل متواضع الجديد',
    category: 'motor',
    specs: { 'القوة': '١ حصان', 'الميزة': 'مواصفات أوروبية', 'الضمان': 'سنتان' },
    image: '/assets/products/michel-new-main.png',
  },
  {
    name: 'ماتور مدفع ٣ حصان ٢ ريشة',
    category: 'motor',
    specs: { 'القوة': '٣ حصان', 'الريش': '٢ ريشة', 'الاستخدام': 'زراعي', 'الملف': 'نحاس' },
    image: '/assets/products/madfa3-3hp.png',
    extras: ['/assets/products/whatsapp-product.png'],
  },
  {
    name: 'موتور زراعى ٢ حصان',
    category: 'motor',
    specs: { 'القوة': '٢ حصان', 'النوع': 'زراعي إيطالي', 'مقاوم': 'للصدأ' },
    image: '/assets/products/product-design22.png',
  },
  {
    name: 'ماتور شمامة ٢ حصان',
    category: 'motor',
    specs: { 'القوة': '٢ حصان', 'النوع': 'شمامة (سطحى)', 'الاستخدام': 'منزلي وزراعي' },
    image: '/assets/products/shamama-2hp-1.png',
  },
  {
    name: 'ماتور ديمى ٣٠٠',
    category: 'motor',
    specs: { 'القوة': '١ حصان', 'النوع': 'منزلي', 'الضمان': 'سنتان' },
    image: '/assets/products/demy-300.png',
  },
  {
    name: 'ماتور مدفع ١.٥ حصان',
    category: 'motor',
    specs: { 'القوة': '١.٥ حصان', 'النوع': 'مدفع', 'الملف': 'نحاس' },
    image: '/assets/products/madfa3-1.5hp.png',
  },
  {
    name: 'ماتور نصف حصان',
    category: 'motor',
    specs: { 'القوة': '٠.٥ حصان', 'الملف': 'نحاس ١٠٠٪', 'الاكس': 'استانلس', 'ريشة الشفط': 'نحاس', 'الاستخدام': 'منزلي' },
    features: ['ملف نحاس', 'اكس استانلس', 'ريشة الشفط من النحاس', 'حماية حرارية', 'ريشة توجيه زهر'],
    image: '/assets/products/motor-half-hp.png',
  },
  {
    name: 'ماتور ١ حصان فارغة استانلس',
    category: 'motor',
    specs: { 'القوة': '١ حصان', 'النوع': 'فارغة استانلس', 'الميزة': 'جسم خارجى استانلس ضد الصدأ' },
    image: '/assets/products/motor-1hp-stainless.png',
  },

  // ======== مواتير حركة ========
  {
    name: 'ماتور حركة ٥.٥ حصان سريع G',
    category: 'motor',
    specs: { 'القوة': '٥.٥ حصان', 'النوع': 'حركة سريع', 'الاستخدام': 'منزلي وصناعي' },
    image: '/assets/products/motor-fast-5.5hp.png',
  },
  {
    name: 'ماتور حركة سريع + بطئ',
    category: 'motor',
    specs: { 'النوع': 'سرعتين (سريع + بطئ)', 'الملف': 'نحاس', 'الاستخدام': 'متعدد' },
    image: '/assets/products/motor-fast-slow.png',
  },

  // ======== غواطس ========
  {
    name: 'غاطس ديمى ١ حصان',
    category: 'submersible',
    specs: { 'القوة': '١ حصان', 'النوع': 'غاطس', 'الاستخدام': 'آبار وعمق' },
    image: '/assets/products/submersible-1hp.png',
  },
  {
    name: 'غاطس ١.٥ حصان شارب',
    category: 'submersible',
    specs: { 'القوة': '١.٥ حصان', 'الماركة': 'شارب', 'الاستخدام': 'آبار' },
    image: '/assets/products/submersible-sharp-1.5hp.png',
  },
  {
    name: 'غاطس شارب ٢ حصان بمفرمة',
    category: 'submersible',
    specs: { 'القوة': '٢ حصان', 'الماركة': 'شارب', 'الميزة': 'بمفرمة' },
    image: '/assets/products/final-product.png',
  },

  // ======== فلوماك ========
  {
    name: 'فلوماك ديمى ٩٠٠٠',
    category: 'flomax',
    specs: { 'النوع': 'فلوماك (DSK-5)', 'الميزة': 'تحكم أوتوماتيكى', 'الاستخدام': 'للضغط' },
    image: '/assets/products/flomax-9000-1.png',
  },
  {
    name: 'فلوماك ديمى ٩٥٠٠ ديجيتال',
    category: 'flomax',
    specs: { 'النوع': 'فلوماك ديجيتال (DSK-15)', 'المواصفات': 'إلكترونى بالكامل', 'الميزة': 'Digital Press Control' },
    image: '/assets/products/flomax-9500-1.png',
    extras: ['/assets/products/flomax-9500-2.png'],
  },

  // ======== قطع غيار ========
  {
    name: 'بالونة مدورة ٢٤ لتر',
    category: 'spare',
    specs: { 'السعة': '٢٤ لتر', 'النوع': 'بالونة مدورة', 'الاستخدام': 'قطع غيار مواتير' },
    image: '/assets/products/balloon-24l.png',
  },
];

function createProductCard(product, index) {
  const specsHTML = Object.entries(product.specs)
    .map(([key, val]) => `<li>${key}: ${val}</li>`)
    .join('');

  const ratingHTML = product.rating
    ? `<div class="product__rating">${product.rating}</div>`
    : '';

  const featuresHTML = product.features
    ? `<details class="product__features"><summary>المواصفات الكاملة</summary><ul>${product.features.map(f => `<li>${f}</li>`).join('')}</ul></details>`
    : '';

  const allImages = [product.image, ...(product.extras || [])];

  const galleryThumbs = allImages.length > 1
    ? `<div class="product__gallery">${allImages.map((img, gi) =>
        `<img src="${img}" alt="${product.name} - ${gi + 1}" class="product__thumb${gi === 0 ? ' active' : ''}" data-index="${gi}">`
      ).join('')}</div>`
    : '';

  const waMsg = encodeURIComponent(`أهلاً، أستفسر عن سعر ${product.name}`);
  const waUrl = `https://wa.me/201016892956?text=${waMsg}`;

  const card = document.createElement('div');
  card.className = 'product__card';
  card.dataset.category = product.category;
  card.dataset.productName = product.name;
  card.style.animationDelay = `${index * 0.06}s`;

  card.innerHTML = `
    <div class="product__image-wrap">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        class="product__main-img"
      >
      ${galleryThumbs}
    </div>
    <div class="product__card-body">
      <h3>${product.name}</h3>
      ${ratingHTML}
      <ul class="product__specs">${specsHTML}</ul>
      ${featuresHTML}
      <button class="compare__toggle" data-name="${product.name}">📊 مقارنة</button>
      <a href="${waUrl}" class="cta cta--small" target="_blank">💬 استعلم عن السعر</a>
    </div>
  `;

  return card;
}

function getSearchableText(card) {
  const name = (card.dataset.productName || '').toLowerCase();
  const specs = Array.from(card.querySelectorAll('.product__specs li')).map(l => l.textContent).join(' ').toLowerCase();
  const features = Array.from(card.querySelectorAll('.product__features ul li')).map(l => l.textContent).join(' ').toLowerCase();
  return `${name} ${specs} ${features}`;
}

function filterProducts(category, query = '') {
  productCards.forEach((card) => {
    const catMatch = category === 'all' || card.dataset.category === category;
    const txt = query ? getSearchableText(card) : '';
    const qMatch = !query || txt.includes(query.toLowerCase());
    if (catMatch && qMatch) {
      card.style.display = 'flex';
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = 'fadeInUp 0.4s ease-out backwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// Render products
if (products.length > 0) {
  products.forEach((product, i) => {
    productsGrid.appendChild(createProductCard(product, i));
  });
} else {
  productsGrid.innerHTML = '<div class="products__empty">قريباً — منتجاتنا في الطريق</div>';
}

/* --- Gallery Thumbnail Swap --- */
document.addEventListener('click', (e) => {
  const thumb = e.target.closest('.product__thumb');
  if (!thumb) return;

  const gallery = thumb.closest('.product__gallery');
  const wrap = gallery.closest('.product__image-wrap');
  const mainImg = wrap.querySelector('.product__main-img');

  // Swap main image
  mainImg.src = thumb.src;

  // Update active thumb
  gallery.querySelectorAll('.product__thumb').forEach((t) => t.classList.remove('active'));
  thumb.classList.add('active');
});

/* --- Category Filter + Search --- */
const productCards = document.querySelectorAll('.product__card');
const filterBtns = document.querySelectorAll('.filter__btn');
const categoryCards = document.querySelectorAll('.category__card');
const searchInput = document.getElementById('product-search');
let activeFilter = 'all';

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    filterProducts(activeFilter, searchInput ? searchInput.value : '');
  });
});

categoryCards.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = card.dataset.category;
    filterBtns.forEach((b) => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    activeFilter = filter;
    filterProducts(activeFilter, searchInput ? searchInput.value : '');
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    filterProducts(activeFilter, searchInput.value);
  });
}

/* --- Product Comparison --- */
const comparePanel = document.getElementById('compare-panel');
const compareList = document.getElementById('compare-list');
const compareBtn = document.getElementById('compare-btn');
const compareClear = document.getElementById('compare-clear');
let compareSelection = [];

function updateCompareUI() {
  // Update toggle buttons
  document.querySelectorAll('.compare__toggle').forEach((btn) => {
    const name = btn.dataset.name;
    btn.classList.toggle('active', compareSelection.includes(name));
    btn.textContent = compareSelection.includes(name) ? '✅ تم التحديد' : '📊 مقارنة';
  });

  // Show/hide panel
  if (compareSelection.length >= 2) {
    comparePanel.classList.add('visible');
  } else {
    comparePanel.classList.remove('visible');
  }

  // Update compare list header only after panel is visible
  if (compareSelection.length >= 2) {
    renderComparison();
  }
}

function renderComparison() {
  const selected = products.filter((p) => compareSelection.includes(p.name));
  if (selected.length < 2) return;

  const allSpecKeys = [...new Set(selected.flatMap((p) => Object.keys(p.specs)))];
  const allFeatKeys = selected.some((p) => p.features) ? ['المواصفات الكاملة'] : [];

  let html = '<table class="compare__table"><thead><tr><th>المواصفة</th>';
  selected.forEach((p) => {
    html += `<th>${p.name}</th>`;
  });
  html += '</tr></thead><tbody>';

  allSpecKeys.forEach((key) => {
    html += `<tr><td>${key}</td>`;
    selected.forEach((p) => {
      html += `<td>${p.specs[key] || '—'}</td>`;
    });
    html += '</tr>';
  });

  // Features row
  if (allFeatKeys.length) {
    html += `<tr><td>المواصفات الكاملة</td>`;
    selected.forEach((p) => {
      if (p.features) {
        html += `<td>✓ ${p.features.join(' • ')}</td>`;
      } else {
        html += `<td>—</td>`;
      }
    });
    html += '</tr>';
  }

  // Image row
  html += `<tr><td>صورة</td>`;
  selected.forEach((p) => {
    html += `<td><img src="${p.image}" alt="${p.name}" class="compare__thumb"></td>`;
  });
  html += '</tr>';

  // WhatsApp row
  html += `<tr><td>استفسار</td>`;
  selected.forEach((p) => {
    const waMsg = encodeURIComponent(`أهلاً، أستفسر عن سعر ${p.name}`);
    const waUrl = `https://wa.me/201016892956?text=${waMsg}`;
    html += `<td><a href="${waUrl}" target="_blank" class="cta cta--small">💬 استعلم</a></td>`;
  });
  html += '</tr>';

  html += '</tbody></table>';
  compareList.innerHTML = html;
}

document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.compare__toggle');
  if (!toggle) return;

  const name = toggle.dataset.name;
  const idx = compareSelection.indexOf(name);

  if (idx > -1) {
    compareSelection.splice(idx, 1);
  } else {
    if (compareSelection.length >= 3) {
      compareSelection.shift();
    }
    compareSelection.push(name);
  }

  updateCompareUI();
});

if (compareClear) {
  compareClear.addEventListener('click', () => {
    compareSelection = [];
    updateCompareUI();
  });
}

/* --- Mobile Nav Toggle --- */
const toggleBtn = document.querySelector('.navbar__toggle');
const navLinks = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* --- PWA: Register Service Worker --- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
