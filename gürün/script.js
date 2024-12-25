// AOS Initialization
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Loader
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loader-container').style.display = 'none';
    }, 3000);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.navbar-logo');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '0.3rem 0';
        logo.style.height = '80px';
        logo.style.marginTop = '0';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.padding = '0.5rem 0';
        logo.style.height = '120px';
        logo.style.marginTop = '-20px';
    }
});

// Ana Slider
const mainSlider = new Swiper('.main-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-slider .swiper-button-next',
        prevEl: '.main-slider .swiper-button-prev',
    },
});

// Haberler Slider
const newsSlider = new Swiper('.news-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.news-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.news-slider .swiper-button-next',
        prevEl: '.news-slider .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});

// Gürün'ü Tanıyalım Slider
const discoverSlider = new Swiper('.discover-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.discover-slider .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});

// Sayaç Animasyonu
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounter = (counter) => {
    const target = +counter.innerText;
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => startCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
};

// Sayaçları başlat
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => startCounter(counter));
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
});

document.querySelectorAll('.stats-section').forEach(section => {
    observer.observe(section);
});

// Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 300);
    }, 2000);
});

// Projeler Grid
class ProjectsGrid {
    constructor() {
        this.grid = document.querySelector('.projects-grid');
        this.projects = [
            {
                title: 'Gökpınar Rekreasyon Alanı',
                image: 'https://picsum.photos/400/300?random=7',
                summary: 'Gökpınar Gölü çevresinde modern dinlenme ve aktivite alanları',
                startDate: '01.02.2024'
            },
            {
                title: 'Kapalı Spor Kompleksi',
                image: 'https://picsum.photos/400/300?random=8',
                summary: '2000 kişilik modern spor tesisi',
                startDate: '15.03.2024'
            },
            {
                title: 'Kültür ve Sanat Merkezi',
                image: 'https://picsum.photos/400/300?random=9',
                summary: '500 kişilik çok amaçlı salon ve sergi alanları',
                startDate: '01.04.2024'
            },
            {
                title: 'Sosyal Konutlar',
                image: 'https://picsum.photos/400/300?random=10',
                summary: '200 ailelik modern yaşam alanı',
                startDate: '15.04.2024'
            },
            {
                title: 'Kent Meydanı',
                image: 'https://picsum.photos/400/300?random=11',
                summary: 'Yeni meydan d��zenlemesi ve peyzaj çalışmaları',
                startDate: '01.05.2024'
            },
            {
                title: 'Çocuk Oyun Parkları',
                image: 'https://picsum.photos/400/300?random=12',
                summary: 'Mahallelerimize modern çocuk parkları',
                startDate: '15.05.2024'
            }
        ];

        this.init();
    }

    init() {
        this.createProjectCards();
    }

    createProjectCards() {
        this.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', index * 100);

            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <span class="project-date">Başlangıç: ${project.startDate}</span>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <a href="#" class="btn-more">Detaylar</a>
                </div>
            `;

            this.grid.appendChild(card);
        });
    }
}

// Takvim
document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'tr',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'Gürün Kültür Festivali',
                    start: '2024-01-20',
                    end: '2024-01-22'
                },
                {
                    title: 'Gençlik Spor Şenlikleri',
                    start: '2024-02-01',
                    end: '2024-02-03'
                },
                {
                    title: 'Halk Konseri',
                    start: '2024-01-25'
                },
                {
                    title: 'Çocuk Tiyatrosu',
                    start: '2024-02-10'
                },
                {
                    title: 'Resim Sergisi',
                    start: '2024-02-15',
                    end: '2024-02-20'
                },
                {
                    title: 'Kitap Fuarı',
                    start: '2024-03-01',
                    end: '2024-03-05'
                }
            ]
        });
        calendar.render();
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsGrid();
}); 