// داده‌های صیغه‌ها و ضمایر
const conjugationsData = [
    // ماضی
    { type: 'ماضی', root: 'فعل', pronoun: 'هو', form: 'فَعَلَ', meaning: 'او انجام داد (مذکر غایب مفرد)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'هما', form: 'فَعَلاَ', meaning: 'آن دو انجام دادند (مذکر غایب مثنی)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'هم', form: 'فَعَلُوا', meaning: 'آن‌ها انجام دادند (مذکر غایب جمع)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'هی', form: 'فَعَلَتْ', meaning: 'او انجام داد (مونث غایب مفرد)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'هما', form: 'فَعَلَتَا', meaning: 'آن دو انجام دادند (مونث غایب مثنی)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'هنّ', form: 'فَعَلْنَ', meaning: 'آن‌ها انجام دادند (مونث غایب جمع)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'أنتَ', form: 'فَعَلْتَ', meaning: 'تو انجام دادی (مذکر مخاطب مفرد)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'أنتما', form: 'فَعَلْتُمَا', meaning: 'شما دو نفر انجام دادید (مخاطب مثنی)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'أنتم', form: 'فَعَلْتُمْ', meaning: 'شما انجام دادید (مذکر مخاطب جمع)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'أنتِ', form: 'فَعَلْتِ', meaning: 'تو انجام دادی (مونث مخاطب مفرد)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'أنتما', form: 'فَعَلْتُمَا', meaning: 'شما دو نفر انجام دادید (مخاطب مثنی)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'أنتنَّ', form: 'فَعَلْتُنَّ', meaning: 'شما انجام دادید (مونث مخاطب جمع)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'أنا', form: 'فَعَلْتُ', meaning: 'من انجام دادم (متکلم وحده)' },
    { type: 'ماضی', root: 'فعل', pronoun: 'نحن', form: 'فَعَلْنَا', meaning: 'ما انجام دادیم (متکلم مع الغیر)' },
    // مضارع
    { type: 'مضارع', root: 'فعل', pronoun: 'هو', form: 'یَفعَلُ', meaning: 'او انجام می‌دهد/خواهد داد (مذکر غایب مفرد)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'هما', form: 'یَفعَلانِ', meaning: 'آن دو انجام می‌دهند/خواهند داد (مذکر غایب مثنی)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'هم', form: 'یَفعَلُونَ', meaning: 'آن‌ها انجام می‌دهند/خواهند داد (مذکر غایب جمع)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'هی', form: 'تَفعَلُ', meaning: 'او انجام می‌دهد/خواهد داد (مونث غایب مفرد)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'هما', form: 'تَفعَلانِ', meaning: 'آن دو انجام می‌دهند/خواهند داد (مونث غایب مثنی)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'هنّ', form: 'یَفعَلنَ', meaning: 'آن‌ها انجام می‌دهند/خواهند داد (مونث غایب جمع)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنتَ', form: 'تَفعَلُ', meaning: 'تو انجام می‌دهی/خواهی داد (مذکر مخاطب مفرد)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنتما', form: 'تَفعَلانِ', meaning: 'شما دو نفر انجام می‌دهید/خواهید داد (مخاطب مثنی)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنتم', form: 'تَفعَلُونَ', meaning: 'شما انجام می‌دهید/خواهید داد (مذکر مخاطب جمع)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنتِ', form: 'تَفعَلینَ', meaning: 'تو انجام می‌دهی/خواهی داد (مونث مخاطب مفرد)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنتما', form: 'تَفعَلانِ', meaning: 'شما دو نفر انجام می‌دهید/خواهید داد (مخاطب مثنی)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنتنَّ', form: 'تَفعَلنَ', meaning: 'شما انجام می‌دهید/خواهید داد (مونث مخاطب جمع)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنا', form: 'أفعَلُ', meaning: 'من انجام می‌دهم/خواهم داد (متکلم وحده)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'نحن', form: 'نَفعَلُ', meaning: 'ما انجام می‌دهیم/خواهیم داد (متکلم مع الغیر)' },
    // امر
    { type: 'امر', root: 'فعل', pronoun: 'أنتَ', form: 'اِفعَلْ', meaning: 'انجام بده! (مذکر مخاطب مفرد)' },
    { type: 'امر', root: 'فعل', pronoun: 'أنتما', form: 'اِفعَلاَ', meaning: 'انجام بدهید! (مخاطب مثنی)' },
    { type: 'امر', root: 'فعل', pronoun: 'أنتم', form: 'اِفعَلُوا', meaning: 'انجام بدهید! (مذکر مخاطب جمع)' },
    { type: 'امر', root: 'فعل', pronoun: 'أنتِ', form: 'اِفعَلی', meaning: 'انجام بده! (مونث مخاطب مفرد)' },
    { type: 'امر', root: 'فعل', pronoun: 'أنتما', form: 'اِفعَلاَ', meaning: 'انجام بدهید! (مخاطب مثنی)' },
    { type: 'امر', root: 'فعل', pronoun: 'أنتنَّ', form: 'اِفعَلْنَ', meaning: 'انجام بدهید! (مونث مخاطب جمع)' }
];

const pronounsData = [
    { pronoun: 'هو', meaning: 'او (مذکر غایب مفرد)' },
    { pronoun: 'هما', meaning: 'آن دو (مذکر غایب مثنی)' },
    { pronoun: 'هم', meaning: 'آن‌ها (مذکر غایب جمع)' },
    { pronoun: 'هی', meaning: 'او (مونث غایب مفرد)' },
    { pronoun: 'هما', meaning: 'آن دو (مونث غایب مثنی)' },
    { pronoun: 'هنّ', meaning: 'آن‌ها (مونث غایب جمع)' },
    { pronoun: 'أنتَ', meaning: 'تو (مذکر مخاطب مفرد)' },
    { pronoun: 'أنتما', meaning: 'شما دو نفر (مخاطب مثنی)' },
    { pronoun: 'أنتم', meaning: 'شما (مذکر مخاطب جمع)' },
    { pronoun: 'أنتِ', meaning: 'تو (مونث مخاطب مفرد)' },
    { pronoun: 'أنتما', meaning: 'شما دو نفر (مخاطب مثنی)' },
    { pronoun: 'أنتنَّ', meaning: 'شما (مونث مخاطب جمع)' },
    { pronoun: 'أنا', meaning: 'من (متکلم وحده)' },
    { pronoun: 'نحن', meaning: 'ما (متکلم مع الغیر)' }
];

let remainingQuestions = []; // سوالاتی که هنوز باید پرسیده شوند
let answeredCorrectly = []; // سوالاتی که به درستی پاسخ داده شده‌اند
let currentQuestion = null;
let totalQuestions = conjugationsData.length + pronounsData.length; // 34 صیغه + 14 ضمیر = 48 سوال در کل
let correctCount = 0;

// عناصر DOM
const questionText = document.getElementById('question-text');
const answerInputArea = document.getElementById('answer-input-area');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const feedbackArea = document.getElementById('feedback-area');
const progressBarFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const restartButton = document.getElementById('restart-button');

// تابع شروع مجدد بازی
function initializeGame() {
    // ترکیب صیغه ها و ضمایر به عنوان سوالات
    remainingQuestions = [];
    answeredCorrectly = [];
    correctCount = 0;
    
    // اضافه کردن سوالات صیغه
    conjugationsData.forEach((data, index) => {
        // نوع 1: اطلاعات را بده، صیغه را بخواه
        remainingQuestions.push({
            id: `verb-${index}-type1`,
            type: 'conjugation',
            subType: 'form_from_info',
            question: data,
            answered: false
        });
        // نوع 2: صیغه را بده، اطلاعات را بخواه (ضمیر و نوع)
        remainingQuestions.push({
            id: `verb-${index}-type2`,
            type: 'conjugation',
            subType: 'info_from_form',
            question: data,
            answered: false
        });
    });

    // اضافه کردن سوالات ضمایر
    pronounsData.forEach((data, index) => {
        remainingQuestions.push({
            id: `pronoun-${index}-type1`,
            type: 'pronoun',
            subType: 'pronoun_from_info', // سوالی که معنی ضمیر را بدهد و ضمیر را بخواهد
            question: data,
            answered: false
        });
        remainingQuestions.push({
            id: `pronoun-${index}-type2`,
            type: 'pronoun',
            subType: 'info_from_pronoun', // سوالی که ضمیر را بدهد و معنی را بخواهد
            question: data,
            answered: false
        });
    });

    // در این حالت، totalQuestions شامل هر دو نوع سوال برای هر مورد میشه
    // اگر سوالات هر آیتم (صیغه یا ضمیر) دو نوع هستند، پس totalQuestions = conjugationsData.length * 2 + pronounsData.length * 2
    // اما در خواست شما "کل ۳۴ تا حالات(۱۴+۱۴+۶) همه رو یکبار بیاره" بود
    // که به نظر میرسه منظور از "حالات" خود آیتم های conjugationsData هستند.
    // بیایید فعلاً سوالات را به صورت یکتا در نظر بگیریم و بعداً اگر خواستید سوالات را از هر آیتم دو نوع کنیم، کد را اصلاح می کنیم.
    // برای پوشش دادن "۳۴ تا حالات" و بعداً اضافه کردن ضمایر به عنوان آیتم های جداگانه:
    totalQuestions = conjugationsData.length; // فقط 34 صیغه اصلی (بدون در نظر گرفتن دو نوع سوال برای هر کدام)
    // برای ضمایر، بیایید فرض کنیم فعلا فقط یک نوع سوال از هر کدام پرسیده می شود
    // برای اینکه سیستم "اگر درست جواب دادم دیگه نیاره، ولی اگر غلط جواب دادم دوباره بیاره" درست کار کند،
    // هر "سوال" باید یکتا باشد.
    // بیایید از ابتدا هر "حالت" را به عنوان یک سوال در نظر بگیریم، و بعداً می توانیم نوع سوال را تغییر دهیم.

    // بازنویسی remainingQuestions برای پوشش "۳۴ حالت" و "۱۴ ضمیر" به عنوان سوالات یکتا
    remainingQuestions = [];
    conjugationsData.forEach((data, index) => {
        remainingQuestions.push({
            id: `conjugation-${index}`,
            type: 'conjugation',
            data: data,
            correctlyAnswered: false // برای پیگیری اینکه آیا درست جواب داده شده است یا خیر
        });
    });

    pronounsData.forEach((data, index) => {
        remainingQuestions.push({
            id: `pronoun-${index}`,
            type: 'pronoun',
            data: data,
            correctlyAnswered: false
        });
    });

    totalQuestions = remainingQuestions.length; // تعداد کل آیتم هایی که باید از آنها سوال شود
    correctCount = 0;
    
    shuffleArray(remainingQuestions); // سوالات را به هم می‌ریزیم
    updateProgressBar();
    nextQuestion();
    checkButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    feedbackArea.textContent = '';
}


// تابع برای به هم ریختن آرایه (برای تصادفی کردن سوالات)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// تابع برای به روزرسانی نوار وضعیت
function updateProgressBar() {
    const percentage = (correctCount / totalQuestions) * 100;
    progressBarFill.style.width = `${percentage}%`;
    progressText.textContent = `${correctCount}/${totalQuestions}`;
}

// تابع برای نمایش سوال بعدی
function nextQuestion() {
    feedbackArea.textContent = '';
    checkButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
    answerInputArea.innerHTML = ''; // پاک کردن ورودی‌های قبلی

    if (remainingQuestions.length === 0 && answeredCorrectly.length === totalQuestions) {
        questionText.textContent = 'تبریک! شما تمام سوالات را پاسخ دادید!';
        checkButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        return;
    }

    // اگر تمام سوالات اولیه تمام شده و هنوز سوالات غلطی وجود دارد، آن‌ها را به لیست اضافه کن
    if (remainingQuestions.length === 0) {
        remainingQuestions = answeredCorrectly.filter(q => !q.correctlyAnswered);
        shuffleArray(remainingQuestions);
        // اگر هنوز هم سوالی نیست، یعنی همه درست جواب داده شده‌اند
        if (remainingQuestions.length === 0) {
             questionText.textContent = 'تبریک! شما تمام سوالات را پاسخ دادید!';
             checkButton.style.display = 'none';
             restartButton.style.display = 'inline-block';
             return;
        }
    }


    currentQuestion = remainingQuestions.shift(); // یک سوال از لیست برمی‌داریم

    // 50/50 شانس برای هر نوع سوال
    const questionTypeRandom = Math.random();

    if (currentQuestion.type === 'conjugation') {
        // سوالات صیغه
        if (questionTypeRandom < 0.5) {
            // نوع ۱: اطلاعات رو بده و صیغه رو بخواه
            questionText.innerHTML = `<p>فعل **${currentQuestion.data.root}**، نوع **${currentQuestion.data.type}**، ضمیر **${currentQuestion.data.pronoun}** را صرف کنید:</p>`;
            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'conjugation-answer';
            input.placeholder = 'شکل صرف شده فعل را وارد کنید (با حرکات)';
            answerInputArea.appendChild(input);
            input.focus();
        } else {
            // نوع ۲: صیغه رو بده و اطلاعات رو بخواه
            questionText.innerHTML = `<p class="arabic-text">${currentQuestion.data.form}</p><p>این صیغه چه نوعی (ماضی/مضارع/امر) است و مربوط به کدام ضمیر (مثلاً هو، أنتَ) است؟</p>`;
            
            const typeSelect = document.createElement('select');
            typeSelect.id = 'type-answer';
            ['ماضی', 'مضارع', 'امر'].forEach(opt => {
                const option = document.createElement('option');
                option.value = opt;
                option.textContent = opt;
                typeSelect.appendChild(option);
            });
            answerInputArea.appendChild(typeSelect);

            const pronounSelect = document.createElement('select');
            pronounSelect.id = 'pronoun-answer';
            // اضافه کردن تمام ضمایر به گزینه ها
            pronounsData.forEach(p => {
                const option = document.createElement('option');
                option.value = p.pronoun;
                option.textContent = p.pronoun + ' (' + p.meaning.split('(')[0].trim() + ')'; // نمایش ضمیر و بخشی از معنی
                pronounSelect.appendChild(option);
            });
            answerInputArea.appendChild(pronounSelect);
        }
    } else if (currentQuestion.type === 'pronoun') {
        // سوالات ضمیر
        if (questionTypeRandom < 0.5) {
            // نوع ۱: معنی رو بده و ضمیر رو بخواه
            questionText.innerHTML = `<p>ضمیر مربوط به **"${currentQuestion.data.meaning}"** کدام است؟</p>`;
            const pronounSelect = document.createElement('select');
            pronounSelect.id = 'pronoun-answer';
            // اضافه کردن تمام ضمایر به گزینه ها
            pronounsData.forEach(p => {
                const option = document.createElement('option');
                option.value = p.pronoun;
                option.textContent = p.pronoun;
                pronounSelect.appendChild(option);
            });
            answerInputArea.appendChild(pronounSelect);
        } else {
            // نوع ۲: ضمیر رو بده و معنی رو بخواه
            questionText.innerHTML = `<p class="arabic-text">${currentQuestion.data.pronoun}</p><p>این ضمیر چه معنایی دارد؟</p>`;
            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'pronoun-meaning-answer';
            input.placeholder = 'معنی ضمیر را وارد کنید (مثلاً او - مذکر غایب مفرد)';
            answerInputArea.appendChild(input);
            input.focus();
        }
    }
}

// تابع برای بررسی پاسخ
function checkAnswer() {
    let isCorrect = false;

    if (currentQuestion.type === 'conjugation') {
        if (currentQuestion.subType === 'form_from_info') {
            const userAnswer = document.getElementById('conjugation-answer').value.trim();
            // نرمال‌سازی حرکات (مثلاً تشدید) برای مقایسه دقیق‌تر
            const normalizedUserAnswer = userAnswer.normalize('NFC').replace(/[\u064B-\u065F\u0670]/g, ''); // حذف حرکات
            const normalizedCorrectAnswer = currentQuestion.data.form.normalize('NFC').replace(/[\u064B-\u065F\u0670]/g, ''); // حذف حرکات
            
            // ابتدا مقایسه دقیق، اگر غلط بود، بدون حرکات مقایسه کن
            if (userAnswer === currentQuestion.data.form) {
                isCorrect = true;
            } else if (normalizedUserAnswer === normalizedCorrectAnswer) {
                isCorrect = true;
                feedbackArea.textContent = `پاسخ شما صحیح است، اما حرکات ممکن است کمی تفاوت داشته باشد. (پاسخ صحیح: ${currentQuestion.data.form})`;
                feedbackArea.className = 'feedback-area correct';
                // در این حالت هم باید درست محسوب شود
            } else {
                isCorrect = false;
            }

            if (!isCorrect) {
                feedbackArea.textContent = `غلط بود. پاسخ صحیح: ${currentQuestion.data.form}`;
                feedbackArea.className = 'feedback-area incorrect';
            }

        } else if (currentQuestion.subType === 'info_from_form') {
            const userType = document.getElementById('type-answer').value;
            const userPronoun = document.getElementById('pronoun-answer').value;

            if (userType === currentQuestion.data.type && userPronoun === currentQuestion.data.pronoun) {
                isCorrect = true;
            } else {
                isCorrect = false;
                feedbackArea.textContent = `غلط بود. پاسخ صحیح: نوع: ${currentQuestion.data.type}, ضمیر: ${currentQuestion.data.pronoun}`;
                feedbackArea.className = 'feedback-area incorrect';
            }
        }
    } else if (currentQuestion.type === 'pronoun') {
        if (currentQuestion.subType === 'pronoun_from_info') {
            const userAnswer = document.getElementById('pronoun-answer').value;
            if (userAnswer === currentQuestion.data.pronoun) {
                isCorrect = true;
            } else {
                isCorrect = false;
                feedbackArea.textContent = `غلط بود. پاسخ صحیح: ${currentQuestion.data.pronoun}`;
                feedbackArea.className = 'feedback-area incorrect';
            }
        } else if (currentQuestion.subType === 'info_from_pronoun') {
            const userAnswer = document.getElementById('pronoun-meaning-answer').value.trim().toLowerCase();
            const correctMeaningLower = currentQuestion.data.meaning.toLowerCase();

            // بررسی تقریبی معنی (ممکن است بخواهید دقیق تر کنید)
            if (correctMeaningLower.includes(userAnswer) || userAnswer.includes(correctMeaningLower)) {
                isCorrect = true;
            } else {
                isCorrect = false;
                feedbackArea.textContent = `غلط بود. پاسخ صحیح: ${currentQuestion.data.meaning}`;
                feedbackArea.className = 'feedback-area incorrect';
            }
        }
    }

    if (isCorrect) {
        feedbackArea.textContent = 'صحیح بود! (Sugoi desu! すごい です!)';
        feedbackArea.className = 'feedback-area correct';
        if (!currentQuestion.correctlyAnswered) { // اگر برای اولین بار درست جواب داده
            correctCount++;
            currentQuestion.correctlyAnswered = true;
            // سوالی که درست جواب داده شده رو دیگه به remainingQuestions برنمی گردونیم
            // ولی اونو توی answeredCorrectly نگه می داریم تا مجموع سوالات درست رو بتونیم بشماریم
        }
    } else {
        // اگر غلط بود، سوال رو به انتهای لیست سوالات برگردون (برای تکرار)
        currentQuestion.correctlyAnswered = false; // مطمئن میشیم که این سوال "درست پاسخ داده شده" نیست
        remainingQuestions.push(currentQuestion);
    }
    
    updateProgressBar();
    checkButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}


// رویدادها
checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', initializeGame);

// شروع بازی هنگام بارگذاری صفحه
initializeGame();
                         
