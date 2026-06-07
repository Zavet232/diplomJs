document.addEventListener('DOMContentLoaded', function () {

  const searchBtn = document.querySelector('.nav__actions-item a[href="#"] img[alt="значок поиска"]')?.closest('a');

  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openSearchModal();
    });
  }

  function openSearchModal() {
    const overlay = document.createElement('div');
    overlay.className = 'search-modal-overlay';

    overlay.innerHTML = `
      <div class="search-modal">
        <button class="search-modal__close" aria-label="Закрыть поиск">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="search-modal__inner">
          <div class="search-modal__label">What are you looking for?</div>

          <div class="search-modal__field">
            <svg class="search-modal__icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              class="search-modal__input"
              placeholder="Search for phones, laptops, watches..."
              autocomplete="off"
              autofocus
            >
            <button class="search-modal__submit">
              Search
            </button>
          </div>

          <div class="search-modal__tags-label">Popular searches</div>
          <div class="search-modal__tags">
            <button class="search-modal__tag">iPhone</button>
            <button class="search-modal__tag">MacBook Pro</button>
            <button class="search-modal__tag">Apple Watch</button>
            <button class="search-modal__tag">iPad</button>
            <button class="search-modal__tag">Charger</button>
            <button class="search-modal__tag">AirPods</button>
            <button class="search-modal__tag">Keyboard</button>
            <button class="search-modal__tag">Laptop</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      overlay.classList.add('search-modal-overlay--visible');
    });

    const input = overlay.querySelector('.search-modal__input');
    setTimeout(() => input.focus(), 100);

    overlay.querySelector('.search-modal__close').addEventListener('click', () => {
      closeSearchModal(overlay);
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeSearchModal(overlay);
      }
    });

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        closeSearchModal(overlay);
        document.removeEventListener('keydown', onKeyDown);
      }
    }
    document.addEventListener('keydown', onKeyDown);

    overlay.querySelectorAll('.search-modal__tag').forEach(tag => {
      tag.addEventListener('click', () => {
        input.value = tag.textContent.trim();
        input.focus();
      });
    });

    overlay.querySelector('.search-modal__submit').addEventListener('click', () => {
      const query = input.value.trim();
      if (query) {
        console.log('Search query:', query);
        closeSearchModal(overlay);
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query) {
          console.log('Search query:', query);
          closeSearchModal(overlay);
        }
      }
    });
  }

  function closeSearchModal(overlay) {
    overlay.classList.remove('search-modal-overlay--visible');
    overlay.classList.add('search-modal-overlay--hiding');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 350);
  }

});


document.addEventListener('DOMContentLoaded', function () {

  const searchBtn = document.querySelector('.nav__actions-item a img[alt="значок поиска"]')?.closest('a');

  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openSearchModal();
    });
  }

  function openSearchModal() {
    const overlay = document.createElement('div');
    overlay.className = 'search-modal-overlay';

    overlay.innerHTML = `
      <div class="search-modal">
        <button class="search-modal__close" aria-label="Закрыть поиск">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="search-modal__inner">
          <div class="search-modal__label">What are you looking for?</div>
          <div class="search-modal__field">
            <svg class="search-modal__icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" class="search-modal__input" placeholder="Search for phones, laptops, watches..." autocomplete="off" autofocus>
            <button class="search-modal__submit">Search</button>
          </div>
          <div class="search-modal__tags-label">Popular searches</div>
          <div class="search-modal__tags">
            <button class="search-modal__tag">iPhone</button>
            <button class="search-modal__tag">MacBook Pro</button>
            <button class="search-modal__tag">Apple Watch</button>
            <button class="search-modal__tag">iPad</button>
            <button class="search-modal__tag">Charger</button>
            <button class="search-modal__tag">AirPods</button>
            <button class="search-modal__tag">Keyboard</button>
            <button class="search-modal__tag">Laptop</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      overlay.classList.add('search-modal-overlay--visible');
    });

    const input = overlay.querySelector('.search-modal__input');
    setTimeout(() => input.focus(), 100);

    overlay.querySelector('.search-modal__close').addEventListener('click', () => {
      closeSearchModal(overlay);
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearchModal(overlay);
    });

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        closeSearchModal(overlay);
        document.removeEventListener('keydown', onKeyDown);
      }
    }
    document.addEventListener('keydown', onKeyDown);

    overlay.querySelectorAll('.search-modal__tag').forEach(tag => {
      tag.addEventListener('click', () => {
        input.value = tag.textContent.trim();
        input.focus();
      });
    });

    overlay.querySelector('.search-modal__submit').addEventListener('click', () => {
      const query = input.value.trim();
      if (query) {
        closeSearchModal(overlay);
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query) closeSearchModal(overlay);
      }
    });
  }

  function closeSearchModal(overlay) {
    overlay.classList.remove('search-modal-overlay--visible');
    overlay.classList.add('search-modal-overlay--hiding');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 350);
  }


  const solutionsItems = document.querySelectorAll('.nav__menu-item, .menu-list li');

  const dropdownData = [
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.5" stroke-width="2.5"/></svg>`,
      title: 'Mobile Devices',
      desc: 'iPhones, Android & accessories',
      href: '#'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><polyline points="8,21 12,17 16,21"/></svg>`,
      title: 'Computers',
      desc: 'MacBooks, iMacs & PCs',
      href: '#'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="18" x2="12" y2="21"/></svg>`,
      title: 'Tablets',
      desc: 'iPad Pro, Air & accessories',
      href: '#'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/></svg>`,
      title: 'Wearables',
      desc: 'Apple Watch, Galaxy Watch',
      href: '#'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
      title: 'Audio',
      desc: 'AirPods, headphones & speakers',
      href: '#'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
      title: 'Smart Home',
      desc: 'Bulbs, hubs & smart devices',
      href: '#'
    },
  ];

  function createDropdown() {
    const dropdown = document.createElement('div');
    dropdown.className = 'solutions-dropdown';

    dropdown.innerHTML = `
      <div class="solutions-dropdown__inner">
        <div class="solutions-dropdown__col solutions-dropdown__col--links">
          <div class="solutions-dropdown__heading">Browse by category</div>
          <ul class="solutions-dropdown__list">
            ${dropdownData.map((item, i) => `
              <li class="solutions-dropdown__item" style="--i:${i}">
                <a href="${item.href}" class="solutions-dropdown__link">
                  <span class="solutions-dropdown__link-icon">${item.icon}</span>
                  <span class="solutions-dropdown__link-text">
                    <span class="solutions-dropdown__link-title">${item.title}</span>
                    <span class="solutions-dropdown__link-desc">${item.desc}</span>
                  </span>
                  <svg class="solutions-dropdown__link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="solutions-dropdown__col solutions-dropdown__col--promo">
          <div class="solutions-dropdown__promo">
            <div class="solutions-dropdown__promo-badge">New arrival</div>
            <div class="solutions-dropdown__promo-title">iPhone 15 Pro Max</div>
            <div class="solutions-dropdown__promo-desc">Titanium design. A17 Pro chip. The most powerful iPhone ever.</div>
            <a href="#" class="solutions-dropdown__promo-btn">Shop now</a>
          </div>
          <div class="solutions-dropdown__promo solutions-dropdown__promo--dark">
            <div class="solutions-dropdown__promo-badge solutions-dropdown__promo-badge--light">Sale up to 30%</div>
            <div class="solutions-dropdown__promo-title">MacBook Air M3</div>
            <div class="solutions-dropdown__promo-desc">Supercharged by M3. Incredibly thin and light.</div>
            <a href="#" class="solutions-dropdown__promo-btn solutions-dropdown__promo-btn--light">Explore</a>
          </div>
        </div>
      </div>
    `;

    return dropdown;
  }

  let solutionsNavItem = null;
  document.querySelectorAll('.nav__menu-item').forEach(item => {
    const link = item.querySelector('.nav__menu-link');
    if (link && link.textContent.trim().toUpperCase().includes('SOLUTIONS')) {
      solutionsNavItem = item;
    }
  });

  if (solutionsNavItem) {
    const dropdown = createDropdown();
    solutionsNavItem.style.position = 'relative';
    solutionsNavItem.appendChild(dropdown);

    const arrow = solutionsNavItem.querySelector('.nav__menu-arrow');
    const link = solutionsNavItem.querySelector('.nav__menu-link');
    let isOpen = false;
    let closeTimeout = null;

    function openDropdown() {
      clearTimeout(closeTimeout);
      if (isOpen) return;
      isOpen = true;
      dropdown.classList.add('solutions-dropdown--visible');
      if (arrow) arrow.classList.add('nav__menu-arrow--rotated');
    }

    function closeDropdown() {
      closeTimeout = setTimeout(() => {
        if (!isOpen) return;
        isOpen = false;
        dropdown.classList.remove('solutions-dropdown--visible');
        if (arrow) arrow.classList.remove('nav__menu-arrow--rotated');
      }, 120);
    }

    solutionsNavItem.addEventListener('mouseenter', openDropdown);
    solutionsNavItem.addEventListener('mouseleave', closeDropdown);

    dropdown.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
    dropdown.addEventListener('mouseleave', closeDropdown);

    link.addEventListener('click', (e) => {
      e.preventDefault();
      isOpen ? closeDropdown() : openDropdown();
    });

    document.addEventListener('click', (e) => {
      if (!solutionsNavItem.contains(e.target)) {
        isOpen = false;
        dropdown.classList.remove('solutions-dropdown--visible');
        if (arrow) arrow.classList.remove('nav__menu-arrow--rotated');
      }
    });
  }

  let mobileSolutionsItem = null;
  document.querySelectorAll('.menu-list li').forEach(item => {
    const link = item.querySelector('.menu-item');
    if (link && link.textContent.trim().toUpperCase().includes('SOLUTIONS')) {
      mobileSolutionsItem = item;
    }
  });

  if (mobileSolutionsItem) {
    const mobileDropdown = document.createElement('ul');
    mobileDropdown.className = 'mobile-solutions-dropdown';
    mobileDropdown.innerHTML = dropdownData.map(item => `
      <li class="mobile-solutions-dropdown__item">
        <a href="${item.href}" class="mobile-solutions-dropdown__link">
          <span class="mobile-solutions-dropdown__icon">${item.icon}</span>
          <span>${item.title}</span>
        </a>
      </li>
    `).join('');

    mobileSolutionsItem.appendChild(mobileDropdown);
    mobileSolutionsItem.style.position = 'relative';

    const mobileLink = mobileSolutionsItem.querySelector('.menu-item');
    let mobileOpen = false;

    mobileLink.addEventListener('click', (e) => {
      e.preventDefault();
      mobileOpen = !mobileOpen;
      mobileDropdown.classList.toggle('mobile-solutions-dropdown--visible', mobileOpen);
      const mobileArrow = mobileLink.querySelector('.nav__menu-arrow');
      if (mobileArrow) mobileArrow.classList.toggle('nav__menu-arrow--rotated', mobileOpen);
    });
  }

});

/* =========================== */

const searchInput = document.getElementById('searchInput');
const clickableItems = document.querySelectorAll('.search-engine__tag');
clickableItems.forEach(item => {
    item.addEventListener('click', function() {
        searchInput.value = this.textContent;
        performSearch(this.textContent);
    });
});

function performSearch(query) {
    console.log('Ищем: ' + query);
}

/* ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#buyModal");
  const backdrop = modal.querySelector(".modal__backdrop");
  const closeBtn = modal.querySelector(".modal__close");
  const modalProductName = modal.querySelector("#modalProductName");
  const form = modal.querySelector("#modalForm");

  const discountItems = document.querySelectorAll(".discounts__item");

  discountItems.forEach((item) => {
    const buyBtn = item.querySelector("button") || item.querySelector(".discounts__btn") || item;

    buyBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const titleElement = item.querySelector(".discounts__title") || item.querySelector("h3") || item.querySelector("h4");
      const productName = titleElement ? titleElement.textContent.trim() : "Товар со скидкой";

      modalProductName.textContent = productName;

      modal.classList.add("modal--open");
      document.body.classList.add("modal-open");
    });
  });

  const closeModal = () => {
    modal.classList.remove("modal--open");
    document.body.classList.remove("modal-open");
  };

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });


  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(`Спасибо за покупку! Заказ на товар "${modalProductName.textContent}" успешно оформлен.`);
    closeModal();
    form.reset(); 
  });
});