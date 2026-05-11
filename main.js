// =======================
// ГАЛЕРЕЯ
// =======================

const galleryImages = {
  "Торти": [
    "https://babaroma.ru/dist/media/cache/66/af/66af66721b8a055832cb433ab8316deb.jpg",
    "https://andjoy.com.ua/wp-content/uploads/2025/01/love-you-square-e1741102656787.png",
    "https://kondishop.com.ua/image/catalog/blog/kak-bystro-i-krasivo-ukrasit-tort/1.jpg",
    "https://kondishop.com.ua/image/catalog/blog/kak-bystro-i-krasivo-ukrasit-tort/Yagody-i-frukty.jpg",
    "https://www.tortik.in.ua/img/landing/product/test/28-1636932580-4x.webp",
    "https://teabakery.ru/wp-content/uploads/2025/07/IMG_20250623_085336_988-scaled.jpg"
  ],

  "Мафіни": [
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400",
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400",
    "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=400",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400"
  ],

  "Круасани": [
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
    "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=400"
  ],

  "Хліб": [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
    "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=400",
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
  ],

  "Пироги": [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
    "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=400",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400",
    "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400"
  ]
};

const tabs = document.querySelectorAll(".tab");
const gallery = document.querySelector(".gallery");

// =======================
// ПЕРЕМИКАННЯ ТАБОК
// =======================

tabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    // прибираємо active
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    // додаємо active
    tab.classList.add("active");

    // отримуємо назву категорії
    const category = tab.textContent.trim();

    // отримуємо картинки
    const images = galleryImages[category];

    // очищаємо галерею
    gallery.innerHTML = "";

    // додаємо нові картинки
    images.forEach((src) => {

      const img = document.createElement("img");

      img.src = src;
      img.alt = category;

      gallery.appendChild(img);
    });

  });

});

// запускаємо першу вкладку автоматично
if (tabs.length > 0) {
  tabs[0].click();
}


// =======================
// КОШИК
// =======================

let cartCount = 0;

const cartIcon = document.createElement("div");

cartIcon.innerHTML = `
🛒 <span id="cart-count">0</span>
`;

cartIcon.style.color = "white";
cartIcon.style.fontSize = "20px";
cartIcon.style.cursor = "pointer";
cartIcon.style.marginLeft = "auto";

const topBar = document.querySelector(".top-bar");

topBar.appendChild(cartIcon);


// =======================
// КНОПКИ ADD
// =======================

document.addEventListener("click", (e) => {

  if (
    e.target.tagName === "BUTTON" &&
    e.target.textContent === "Add"
  ) 

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;
    e.target.textContent = "✓";

    e.target.style.backgroundColor = "#4caf50";

    setTimeout(() => {

      e.target.textContent = "Add";

      e.target.style.backgroundColor = "#964b00";

    }, 1000);

  }

);

// =======================

// ПЛАВНА ПРОКРУТКА

// =======================

const productsSection = document.querySelector(".products");

const moreSection = document.querySelector(".more");

const footer = document.querySelector(".footer");

// ----- КНОПКИ HEADER -----

const mainButtons = document.querySelectorAll(".btn-main");

// "В магазин"

mainButtons[0].addEventListener("click", () => {

  productsSection.scrollIntoView({

    behavior: "smooth"

  });

});

// "Дізнатися більше"

mainButtons[1].addEventListener("click", () => {

  moreSection.scrollIntoView({

    behavior: "smooth"

  });

});

// =======================

// NAVBAR КНОПКИ

// =======================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const text = link.textContent.trim();

    // Головна сторінка

    if (text === "Головна сторінка") {

      productsSection.scrollIntoView({

        behavior: "smooth"

      });

    }

    // Footer

    if (

      text === "Блог" ||

      text === "Зв'яжіться з нами" ||

      text === "Послуги"

    ) {

      footer.scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});

// =======================

// HEADER EFFECT

// =======================

const mainHeader = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    mainHeader.style.background =

      "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')";

  } else {

    mainHeader.style.background = "";

  }

});