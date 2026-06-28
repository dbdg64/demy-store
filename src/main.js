import './style.css';

/* ==========================================
   Product Data
   ========================================== */
const products = [
  {
    name: 'ماتور ديمى 9000 واحد حصان',
    category: 'motor',
    rating: '⭐ ٥.٠٠',
    featured: true,
    specs: {
      القوة: '١ حصان',
      الدفع: 'حتى ٥٤ متر (الدور ١٢)',
      الملف: 'نحاس ١٠٠٪',
      الموبينة: '٩ سم',
      الضمان: '١٢ شهر',
    },
    features: [
      'ملف نحاس',
      'موبينة ٩سم',
      'اكس استانلس',
      'ريشة شفط من النحاس',
      'حماية حرارية',
      'ريشة توجيه زهر',
      'فارغة زهر معزولة من الصدأ',
      'موفر للكهرباء',
      'مواصفات اوروبية',
    ],
    image: 'assets/products/demy-9000-main.webp',
    extras: ['assets/products/demy-9000-alt.webp', 'assets/products/motor-9000.webp'],
  },
  {
    name: 'ماتور ميشيل متواضع الجديد',
    category: 'motor',
    specs: {
      القوة: '١ حصان',
      الميزة: 'مواصفات أوروبية',
      الضمان: 'سنتان',
    },
    image: 'assets/products/michel-new-main.webp',
  },
  {
    name: 'ماتور مدفع ٣ حصان ٢ ريشة',
    category: 'motor',
    specs: {
      القوة: '٣ حصان',
      الريش: '٢ ريشة',
      الاستخدام: 'زراعي',
      الملف: 'نحاس',
    },
    image: 'assets/products/madfa3-3hp.webp',
    extras: ['assets/products/whatsapp-product.webp'],
  },
  {
    name: 'موتور زراعى ٢ حصان',
    category: 'motor',
    specs: {
      القوة: '٢ حصان',
      النوع: 'زراعي إيطالي',
      مقاوم: 'للصدأ',
    },
    image: 'assets/products/product-design22.webp',
  },
  {
    name: 'ماتور شمامة ٢ حصان',
    category: 'motor',
    specs: {
      القوة: '٢ حصان',
      النوع: 'شمامة (سطحى)',
      الاستخدام: 'منزلي وزراعي',
    },
    image: 'assets/products/shamama-2hp-1.webp',
  },
  {
    name: 'ماتور ديمى ٣٠٠',
    category: 'motor',
    specs: {
      القوة: '١ حصان',
      النوع: 'منزلي',
      الضمان: 'سنتان',
    },
    image: 'assets/products/demy-300.webp',
  },
  {
    name: 'ماتور مدفع ١.٥ حصان',
    category: 'motor',
    specs: {
      القوة: '١.٥ حصان',
      النوع: 'مدفع',
      الملف: 'نحاس',
    },
    image: 'assets/products/madfa3-1.5hp.webp',
  },
  {
    name: 'ماتور نصف حصان',
    category: 'motor',
    specs: {
      القوة: '٠.٥ حصان',
      الملف: 'نحاس ١٠٠٪',
      الاكس: 'استانلس',
      'ريشة الشفط': 'نحاس',
      الاستخدام: 'منزلي',
    },
    features: [
      'ملف نحاس',
      'اكس استانلس',
      'ريشة الشفط من النحاس',
      'حماية حرارية',
      'ريشة توجيه زهر',
    ],
    image: 'assets/products/motor-half-hp.webp',
  },
  {
    name: 'ماتور ١ حصان فارغة استانلس',
    category: 'motor',
    specs: {
      القوة: '١ حصان',
      النوع: 'فارغة استانلس',
      الميزة: 'جسم خارجى استانلس ضد الصدأ',
    },
    image: 'assets/products/motor-1hp-stainless.webp',
  },
  {
    name: 'ماتور حركة ٥.٥ حصان سريع G',
    category: 'motor',
    specs: {
      القوة: '٥.٥ حصان',
      النوع: 'حركة سريع',
      الاستخدام: 'منزلي وصناعي',
    },
    image: 'assets/products/motor-fast-5.5hp.webp',
  },
  {
    name: 'ماتور حركة سريع + بطئ',
    category: 'motor',
    specs: {
      النوع: 'سرعتين (سريع + بطئ)',
      الملف: 'نحاس',
      الاستخدام: 'متعدد',
    },
    image: 'assets/products/motor-fast-slow.webp',
  },
  {
    name: 'غاطس ديمى ١ حصان',
    category: 'submersible',
    specs: {
      القوة: '١ حصان',
      النوع: 'غاطس',
      الاستخدام: 'آبار وعمق',
    },
    image: 'assets/products/submersible-1hp.webp',
  },
  {
    name: 'غاطس ١.٥ حصان شارب',
    category: 'submersible',
    specs: {
      القوة: '١.٥ حصان',
      الماركة: 'شارب',
      الاستخدام: 'آبار',
    },
    image: 'assets/products/submersible-sharp-1.5hp.webp',
  },
  {
    name: 'غاطس شارب ٢ حصان بمفرمة',
    category: 'submersible',
    featured: true,
    specs: {
      القوة: '٢ حصان',
      الماركة: 'شارب',
      الميزة: 'بمفرمة',
    },
    image: 'assets/products/final-product.webp',
  },
  {
    name: 'فلوماك ديمى ٩٠٠٠',
    category: 'flomax',
    specs: {
      النوع: 'فلوماك (DSK-5)',
      الميزة: 'تحكم أوتوماتيكى',
      الاستخدام: 'للضغط',
    },
    image: 'assets/products/flomax-9000-1.webp',
  },
  {
    name: 'فلوماك ديمى ٩٥٠٠ ديجيتال',
    category: 'flomax',
    featured: true,
    specs: {
      النوع: 'فلوماك ديجيتال (DSK-15)',
      المواصفات: 'إلكترونى بالكامل',
      الميزة: 'Digital Press Control',
    },
    image: 'assets/products/flomax-9500-1.webp',
    extras: ['assets/products/flomax-9500-2.webp'],
  },
  {
    name: 'بالونة مدورة ٢٤ لتر',
    category: 'spare',
    specs: {
      السعة: '٢٤ لتر',
      النوع: 'بالونة مدورة',
      الاستخدام: 'قطع غيار مواتير',
    },
    image: 'assets/products/balloon-24l.webp',
  },
];

/* ==========================================
   Accordion
   ========================================== */
document.querySelectorAll('.accordion__item').forEach((item) => {
  item.querySelector('.accordion__trigger').addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.accordion__item').forEach((el) => el.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

/* ==========================================
   Product Card Rendering
   ========================================== */
const grid = document.getElementById('products-grid');

function createProductCard(product, index) {
  const specsHtml = Object.entries(product.specs)
    .map(([key, val]) => `<li>${key}: ${val}</li>`)
    .join('');

  const ratingHtml = product.rating
    ? `<div class="product__rating">${product.rating}</div>`
    : '';

  const featuresHtml = product.features
    ? `<details class="product__features"><summary>المواصفات الكاملة</summary><ul>${product.features
        .map((f) => `<li>${f}</li>`)
        .join('')}</ul></details>`
    : '';

  const allImages = [product.image, ...(product.extras || [])];
  const galleryHtml =
    allImages.length > 1
      ? `<div class="product__gallery">${allImages
          .map(
            (img, i) =>
              `<img src="${img}" alt="${product.name} - ${i + 1}" class="product__thumb${i === 0 ? ' active' : ''}" data-index="${i}">`
          )
          .join('')}</div>`
      : '';

  const waUrl = `https://wa.me/201016892956?text=${encodeURIComponent(`أهلاً، أستفسر عن سعر ${product.name}`)}`;

  const card = document.createElement('div');
  card.className = 'product__card';
  card.dataset.category = product.category;
  card.dataset.productName = product.name;
  card.style.animationDelay = `${index * 0.06}s`;
  card.innerHTML = `
    <div class="product__image-wrap">
      ${product.featured ? '<div class="product__badge">الأكثر مبيعاً</div>' : ''}
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        class="product__main-img"
      >
      ${galleryHtml}
    </div>
    <div class="product__card-body">
      <h3>${product.name}</h3>
      ${ratingHtml}
      <ul class="product__specs">${specsHtml}</ul>
      ${featuresHtml}
      <button class="compare__toggle" data-name="${product.name}">📊 مقارنة</button>
      <a href="${waUrl}" class="cta cta--small" target="_blank">💬 استعلم عن السعر</a>
    </div>
  `;
  return card;
}

/* ==========================================
   Filter / Search
   ========================================== */
function getSearchableText(card) {
  const name = (card.dataset.productName || '').toLowerCase();
  const specs = Array.from(card.querySelectorAll('.product__specs li'))
    .map((li) => li.textContent)
    .join(' ')
    .toLowerCase();
  const features = Array.from(card.querySelectorAll('.product__features ul li'))
    .map((li) => li.textContent)
    .join(' ')
    .toLowerCase();
  return `${name} ${specs} ${features}`;
}

function filterProducts(category, query = '') {
  const cards = document.querySelectorAll('.product__card');
  cards.forEach((card) => {
    const matchCategory = category === 'all' || card.dataset.category === category;
    const searchText = query ? getSearchableText(card) : '';
    const matchQuery = !query || searchText.includes(query.toLowerCase());
    if (matchCategory && matchQuery) {
      card.style.display = 'flex';
      card.style.animation = 'none';
      card.offsetWidth;
      card.style.animation = 'fadeInUp 0.4s ease-out backwards';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ==========================================
   Render Products
   ========================================== */
if (products.length > 0) {
  products.forEach((product, index) => {
    grid.appendChild(createProductCard(product, index));
  });
} else {
  grid.innerHTML = '<div class="products__empty">قريباً — منتجاتنا في الطريق</div>';
}

/* ==========================================
   Gallery Click
   ========================================== */
document.addEventListener('click', (e) => {
  const thumb = e.target.closest('.product__thumb');
  if (!thumb) return;
  const gallery = thumb.closest('.product__gallery');
  const mainImg = gallery.closest('.product__image-wrap').querySelector('.product__main-img');
  mainImg.src = thumb.src;
  gallery.querySelectorAll('.product__thumb').forEach((t) => t.classList.remove('active'));
  thumb.classList.add('active');
});

/* ==========================================
   Filter Buttons
   ========================================== */
const filterBtns = document.querySelectorAll('.filter__btn');
const categoryCards = document.querySelectorAll('.category__card');
const searchInput = document.getElementById('product-search');
let currentCategory = 'all';

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.filter;
    filterProducts(currentCategory, searchInput ? searchInput.value : '');
  });
});

categoryCards.forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = card.dataset.category;
    filterBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === cat);
    });
    currentCategory = cat;
    filterProducts(currentCategory, searchInput ? searchInput.value : '');
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    filterProducts(currentCategory, searchInput.value);
  });
}

/* ==========================================
   Compare Panel
   ========================================== */
const comparePanel = document.getElementById('compare-panel');
const compareList = document.getElementById('compare-list');
const compareClear = document.getElementById('compare-clear');
let compareItems = [];

function updateCompareUI() {
  document.querySelectorAll('.compare__toggle').forEach((btn) => {
    const name = btn.dataset.name;
    btn.classList.toggle('active', compareItems.includes(name));
    btn.textContent = compareItems.includes(name) ? '✅ تم التحديد' : '📊 مقارنة';
  });

  if (compareItems.length >= 2) {
    comparePanel.classList.add('visible');
    renderCompareTable();
  } else {
    comparePanel.classList.remove('visible');
  }
}

function renderCompareTable() {
  const selected = products.filter((p) => compareItems.includes(p.name));
  if (selected.length < 2) return;

  const allKeys = [...new Set(selected.flatMap((p) => Object.keys(p.specs)))];
  const hasFeatures = selected.some((p) => p.features);

  let html = '<table class="compare__table"><thead><tr><th>المواصفة</th>';
  selected.forEach((p) => {
    html += `<th>${p.name}</th>`;
  });
  html += '</tr></thead><tbody>';

  allKeys.forEach((key) => {
    html += `<tr><td>${key}</td>`;
    selected.forEach((p) => {
      html += `<td>${p.specs[key] || '—'}</td>`;
    });
    html += '</tr>';
  });

  if (hasFeatures) {
    html += '<tr><td>المواصفات الكاملة</td>';
    selected.forEach((p) => {
      if (p.features) {
        html += `<td>✓ ${p.features.join(' • ')}</td>`;
      } else {
        html += '<td>—</td>';
      }
    });
    html += '</tr>';
  }

  html += '<tr><td>صورة</td>';
  selected.forEach((p) => {
    html += `<td><img src="${p.image}" alt="${p.name}" class="compare__thumb"></td>`;
  });
  html += '</tr>';

  html += '<tr><td>استفسار</td>';
  selected.forEach((p) => {
    const url = `https://wa.me/201016892956?text=${encodeURIComponent(`أهلاً، أستفسر عن سعر ${p.name}`)}`;
    html += `<td><a href="${url}" target="_blank" class="cta cta--small">💬 استعلم</a></td>`;
  });
  html += '</tr>';

  html += '</tbody></table>';
  compareList.innerHTML = html;
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.compare__toggle');
  if (!btn) return;
  const name = btn.dataset.name;
  const idx = compareItems.indexOf(name);
  if (idx > -1) {
    compareItems.splice(idx, 1);
  } else {
    if (compareItems.length >= 3) compareItems.shift();
    compareItems.push(name);
  }
  updateCompareUI();
});

if (compareClear) {
  compareClear.addEventListener('click', () => {
    compareItems = [];
    updateCompareUI();
  });
}

/* ==========================================
   Navbar Toggle
   ========================================== */
const navToggle = document.querySelector('.navbar__toggle');
const navLinks = document.querySelector('.navbar__links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ==========================================
   Service Worker
   ========================================== */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

/* ==========================================
   Back to Top Button
   ========================================== */
(function () {
  const btn = document.getElementById('back-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

/* ==========================================
   Product Quiz — اختر الماتور المناسب
   ========================================== */
(function () {
  const quizSteps = document.querySelectorAll('.quiz__step');
  const resultProduct = document.getElementById('quiz-result-product');
  const waLink = document.getElementById('quiz-wa-link');
  const resetBtn = document.querySelector('.quiz__reset');

  const recommendations = {
    'home+surface': 'ماتور ديمى 9000 واحد حصان',
    'home+submersible': 'غاطس ديمى ١ حصان',
    'home+notsure': 'ماتور ديمى 9000 واحد حصان',
    'farm+surface': 'ماتور مدفع ٣ حصان ٢ ريشة',
    'farm+submersible': 'غاطس شارب ٢ حصان بمفرمة',
    'farm+notsure': 'موتور زراعى ٢ حصان',
    'both+surface': 'ماتور شمامة ٢ حصان',
    'both+submersible': 'غاطس ١.٥ حصان شارب',
    'both+notsure': 'ماتور ديمى 9000 واحد حصان',
  };

  const answers = {};

  function showStep(id) {
    quizSteps.forEach((s) => (s.style.display = 'none'));
    const step = document.getElementById(id);
    if (step) step.style.display = 'block';
  }

  function showResult(productName) {
    const product = products.find((p) => p.name === productName);
    if (!product) return;

    const specsHtml = Object.entries(product.specs)
      .map(([k, v]) => `<li>${k}: ${v}</li>`)
      .join('');

    resultProduct.innerHTML = `
      <div class="quiz__result-card">
        <img src="${product.image}" alt="${product.name}" class="quiz__result-img">
        <div class="quiz__result-info">
          <h4>${product.name}</h4>
          <ul class="product__specs">${specsHtml}</ul>
        </div>
      </div>
    `;

    waLink.href = `https://wa.me/201016892956?text=${encodeURIComponent(`أهلاً، أستفسر عن سعر ${product.name}`)}`;
    showStep('quiz-step-result');
  }

  document.querySelectorAll('.quiz__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const step = btn.closest('.quiz__step');
      const stepId = step ? step.id : '';

      if (stepId === 'quiz-step-1') {
        answers.usage = btn.dataset.answer;
        showStep('quiz-step-2');
      } else if (stepId === 'quiz-step-2') {
        answers.type = btn.dataset.answer;
        const key = `${answers.usage}+${answers.type}`;
        const recommended = recommendations[key] || 'ماتور ديمى 9000 واحد حصان';
        showResult(recommended);
      }
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      answers.usage = '';
      answers.type = '';
      resultProduct.innerHTML = '';
      waLink.href = '#';
      showStep('quiz-step-1');
    });
  }
})();

/* ==========================================
   Customer Installations Gallery
   ========================================== */
(function () {
  const grid = document.getElementById('installations-grid');
  if (!grid) return;

  // Images array — user will add more files to public/assets/installations/
  // Each entry: { file: 'filename.webp', customer: 'اسم العميل', product: 'المنتج', location: 'المكان' }
  const photos = [
    // Placeholder: user adds real photos here
    // Example entry when images exist:
    // { file: 'customer-1.webp', customer: 'أحمد جابر', product: 'ماتور ديمى 9000', location: 'عمارة ٦ أدوار' },
  ];

  if (photos.length === 0) {
    grid.innerHTML = '<div class="installations__empty">📸 قريباً — شاركنا صورتك وظهر في المعرض</div>';
    return;
  }

  photos.forEach(function (photo, i) {
    var card = document.createElement('div');
    card.className = 'installation__card';
    card.style.animationDelay = i * 0.08 + 's';
    card.innerHTML = '\
      <div class="installation__image-wrap">\
        <img src="assets/installations/' + photo.file + '" alt="توصيلة ' + photo.customer + '" loading="lazy" class="installation__img">\
      </div>\
      <div class="installation__info">\
        <span class="installation__customer">' + photo.customer + '</span>\
        <span class="installation__detail">' + photo.product + ' — ' + photo.location + '</span>\
      </div>\
    ';
    grid.appendChild(card);
  });
})();

/* ==========================================
   JSON-LD Product Schemas (dynamic)
   ========================================== */
(function () {
  try {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const graph = products.map((p) => {
      const description =
        Object.values(p.specs)
          .filter(Boolean)
          .join('، ') || p.name;
      const imageUrl = p.image.startsWith('http')
        ? p.image
        : `https://demy-eg.com/${p.image}`;
      return {
        '@type': 'Product',
        '@id': `#product-${p.name.replace(/\s+/g, '-')}`,
        name: p.name,
        description: description,
        image: imageUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EGP',
          url: `https://wa.me/201016892956?text=${encodeURIComponent(`أهلاً، أستفسر عن سعر ${p.name}`)}`,
          availability: 'https://schema.org/InStock',
        },
      };
    });
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
    document.head.appendChild(script);
  } catch (e) {
    // Silently fail if JSON-LD injection errors
  }
})();
