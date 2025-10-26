// ===============================================
//  РЕДАКТИРОВАТЬ СПИСОК КОМАНДЫ И СООБЩЕНИЯ ЗДЕСЬ
// ===============================================

/* =====================================================
 РЕДАКТИРОВАТЬ СПИСОК КОМАНДЫ ТОЛЬКО ЗДЕСЬ 
===================================================== */
const staffList = [
  {
    name: "Flashyy [UA]",
    rank: "Начальник метрополитена",
    avatar: "https://avatars.fastly.steamstatic.com/fabb70f858be7c8fba3453d95de354aa91b05b49_full.jpg"
  },
  {
    name: "Lis",
    rank: "Заместитель начальника метрополитена",
    avatar: "https://avatars.fastly.steamstatic.com/54be38c13d0e7792de2af9a76c4e376766cf697a_full.jpg"
  },
  {
    name: "mortich",
    rank: "Тех. Администратор",
    avatar: "https://avatars.fastly.steamstatic.com/75af1c1f6f2255ff7e399d3aad1b65912966b8ac_full.jpg"
  }
  // Просто добавьте новый объект {} сюда, чтобы добавить игрока
];

/* =====================================================
  РЕДАКТИРОВАТЬ СООБЩЕНИЯ ЗАГРУЗКИ ТОЛЬКО ЗДЕСЬ
===================================================== */
const loadingMessages = [
  "Загрузка карты...",
  "Подключение к серверу...",
  "Проверка устава (не забудьте прочитать!)...",
  "Сборка вагонов...",
  "Приятной поездки!"
];

// =============== НИЖЕ — ЛОГИКА ===============

/**
 * Рендер карточек команды в слайдер.
 * Генерирует слайды .swiper-slide на основе staffList.
 */
function renderStaffSlides() {
  const container = document.getElementById("staffSlider");
  if (!container) return;
  container.innerHTML = ""; // Очистка

  staffList.forEach(member => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
      <article class="card">
        <img class="avatar" src="${member.avatar}" alt="${member.name}" loading="lazy" />
        <div class="name">${member.name}</div>
        <div class="rank">${member.rank}</div>
      </article>
    `;

    container.appendChild(slide);
  });
}

/**
 * Запуск слайдера (Swiper).
 */
function initSwiper() {
  // eslint-disable-next-line no-undef
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 2200,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      640: { spaceBetween: 14 },
      900: { spaceBetween: 16 }
    }
  });
  return swiper;
}

/**
 * Цикличная смена сообщений загрузки.
 */
function cycleLoadingMessages() {
  const el = document.getElementById("loadingStatus");
  if (!el || !loadingMessages.length) return;
  let idx = 0;
  el.textContent = loadingMessages[idx];

  setInterval(() => {
    idx = (idx + 1) % loadingMessages.length;
    el.textContent = loadingMessages[idx];
  }, 3000);
}

// Инициализация после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  renderStaffSlides();
  initSwiper();
  cycleLoadingMessages();
});
