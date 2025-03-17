// المتغيرات العامة
let currentCategory = '';
let currentQuotes = [];

// قاعدة بيانات الاقتباسات
const quotesDatabase = {
    self: [
        "كن نفسك، فالجميع الآخرون مشغولون بأنفسهم.",
        "التغيير يبدأ من داخلك، كن أنت البداية.",
        "لا تقارن نفسك بالآخرين، فأنت نسخة فريدة لا تتكرر.",
        "الثقة بالنفس هي أول أسرار النجاح.",
        "عندما تثق بنفسك، لن تحتاج لإثبات شيء لأحد.",
        "كل يوم هو فرصة جديدة لتكون أفضل.",
        "أنت المسؤول عن سعادتك.",
        "لا تنتظر الظروف المثالية، اصنعها."
    ],
    love: [
        "الحب يرى الجمال حيث لا يراه الآخرون.",
        "في القلب مساحات لا يملأها إلا الحب الصادق.",
        "الحب الحقيقي يجعلك أقوى وأجمل وأكثر حكمة.",
        "الحب هو أن تضع سعادة شخص آخر قبل سعادتك.",
        "في الحب نتعلم كيف نعطي دون أن ننتظر المقابل.",
        "الحب الصادق يتجاوز حدود الزمان والمكان.",
        "الحب ليس كلمات تقال، بل أفعال تثبت.",
        "في الحب نكتشف أفضل ما فينا."
    ],
    challenges: [
        "التحديات تصنع الأبطال، والصعوبات تصقل المعادن.",
        "كل تحدٍ هو فرصة مقنعة للنمو والتطور.",
        "لا تخف من التحديات، فهي تكشف عن قدراتك الحقيقية.",
        "الصعوبات هي الطريق إلى النجاح.",
        "في قلب كل تحدٍ تكمن فرصة.",
        "لا تستسلم للصعوبات، فهي اختبار لإرادتك.",
        "التحديات تجعلنا أقوى وأكثر حكمة.",
        "كل عقبة هي درس في طريق النجاح."
    ],
    friendship: [
        "الصديق الحقيقي هو من يراك في الظلام ويضيء لك الطريق.",
        "الصداقة الحقيقية كنز لا يفنى مع الزمن.",
        "في الصداقة نجد أنفسنا ونكتشف معنى الحياة.",
        "الصديق وقت الضيق.",
        "الصداقة الحقيقية لا تعرف المسافات.",
        "أصدقاؤك مرآة لشخصيتك.",
        "الصداقة هي الروح في جسدين.",
        "الأصدقاء الحقيقيون هم عائلة نختارها."
    ],
    athkar: [
        "سبحان الله وبحمده، سبحان الله العظيم.",
        "لا حول ولا قوة إلا بالله.",
        "استغفر الله العظيم وأتوب إليه.",
        "اللهم صل وسلم على نبينا محمد.",
        "سبحان الله والحمد لله ولا إله إلا الله والله أكبر.",
        "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.",
        "أستغفر الله الذي لا إله إلا هو الحي القيوم وأتوب إليه.",
        "اللهم إني أسألك العفو والعافية في الدنيا والآخرة."
    ],
    success: [
        "النجاح رحلة وليس وجهة.",
        "الفشل هو أول خطوات النجاح.",
        "اصنع نجاحك بيديك ولا تنتظر الفرص.",
        "النجاح يأتي لمن يعمل بجد وإخلاص.",
        "لا تخف من الفشل، فهو معلم عظيم.",
        "النجاح هو نتيجة قرارات صغيرة تتخذها كل يوم.",
        "خلف كل نجاح قصة كفاح.",
        "النجاح ليس نهاية، والفشل ليس قاتلاً."
    ],
    wisdom: [
        "الحكمة هي أن تعرف متى تصمت ومتى تتكلم.",
        "في الصمت حكمة، وفي الكلام حكمة أخرى.",
        "الحكيم من يتعلم من تجارب غيره.",
        "الحكمة نور يهدي صاحبه.",
        "خير الكلام ما قل ودل.",
        "العقل السليم في الجسم السليم.",
        "من حسن تدبيره قلت محاذيره.",
        "رب صمت أبلغ من كلام."
    ],
    life: [
        "الحياة جميلة بقدر ما نراها جميلة.",
        "عش كل لحظة كأنها الأخيرة.",
        "الحياة مدرسة والتجارب دروسها.",
        "في كل يوم درس جديد.",
        "الحياة قصيرة، فلا تقصرها بالهموم.",
        "الحياة مغامرة تستحق أن تُعاش.",
        "كل يوم هو صفحة جديدة في كتاب حياتك.",
        "الحياة ليست عادلة، لكنها جميلة."
    ]
};

// تهيئة Particles.js
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ff0000"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff0000",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    }
}

// تهيئة خلفيات الأقسام
function initializeCategoryBackgrounds() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        const bgAnimation = category.querySelector('.bg-animation');
        if (bgAnimation) {
            particlesJS(bgAnimation.id, {
                "particles": {
                    "number": {
                        "value": 30,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ff0000"
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 0.3,
                        "random": true
                    },
                    "size": {
                        "value": 2,
                        "random": true
                    },
                    "move": {
                        "enable": true,
                        "speed": 2
                    }
                }
            });
        }
    });
}

// وظيفة عرض الأقسام
function showCategories() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quotes-container').style.display = 'none';
    
    const categoriesElement = document.getElementById('categories');
    categoriesElement.style.display = 'grid';
    categoriesElement.style.opacity = '1';
    
    // تفعيل حركات الأقسام
    const categoryElements = document.querySelectorAll('.category');
    categoryElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('animate-fadeInUp');
    });
}

// وظيفة عرض الاقتباسات
function showQuotes(category) {
    currentCategory = category;
    currentQuotes = quotesDatabase[category];
    
    document.getElementById('categories').style.display = 'none';
    const quotesContainer = document.getElementById('quotes-container');
    quotesContainer.style.display = 'flex';
    
    displayQuotes(currentQuotes);
}

// وظيفة عرض الاقتباسات في الشبكة
function displayQuotes(quotesToShow) {
    const quotesGrid = document.getElementById('quotes-grid');
    quotesGrid.innerHTML = '';
    
    if (quotesToShow.length === 0) {
        quotesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>لم يتم العثور على نتائج</p>
            </div>
        `;
        return;
    }

    quotesToShow.forEach((quote, index) => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.setAttribute('data-aos', 'fade-up');
        quoteCard.setAttribute('data-aos-delay', index * 100);
        
        quoteCard.innerHTML = `
            <p class="quote-text">${quote}</p>
            <button class="copy-btn" onclick="copyQuote(this)">
                <i class="fas fa-copy"></i> نسخ
            </button>
        `;
        
        quotesGrid.appendChild(quoteCard);
    });

    AOS.refresh();
}

// وظيفة البحث
const searchQuotes = debounce(function() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const filteredQuotes = currentQuotes.filter(quote => 
        quote.toLowerCase().includes(searchText)
    );
    
    const searchIcon = document.querySelector('.search-icon i');
    searchIcon.className = searchText.length > 0 ? 'fas fa-times' : 'fas fa-search';
    
    displayQuotes(filteredQuotes);
}, 300);

// وظيفة تأخير البحث
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// وظيفة نسخ الاقتباس
function copyQuote(button) {
    const quoteText = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> تم النسخ';
        button.style.background = 'linear-gradient(45deg, #ff0000, #cc0000)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('فشل في نسخ النص:', err);
        button.innerHTML = '<i class="fas fa-times"></i> فشل النسخ';
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    });
}

// وظيفة مسح البحث
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput.value !== '') {
        searchInput.value = '';
        document.querySelector('.search-icon i').className = 'fas fa-search';
        displayQuotes(currentQuotes);
    }
}

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    // إظهار صفحة الترحيب فقط
    document.getElementById('welcome').style.display = 'flex';
    document.getElementById('categories').style.display = 'none';
    document.getElementById('quotes-container').style.display = 'none';
    
    // تهيئة AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });
    
    // تهيئة Particles.js
    setTimeout(initializeParticles, 100);
    setTimeout(initializeCategoryBackgrounds, 200);

    // إظهار المحتوى
    document.body.style.visibility = 'visible';
});

// استمع لأحداث لوحة المفاتيح
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        clearSearch();
    }
});

// تحديث AOS عند تغيير حجم النافذة
window.addEventListener('resize', function() {
    AOS.refresh();
});