// Data for conjugations and pronouns
const conjugationsData = [
    // Past tense (ماضی)
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
    // Present/Future tense (مضارع)
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
    { type: 'مضارع', root: 'فعل', pronoun: 'أنتنَّ', form: 'تَفعَلنَ', meaning: 'شما انجام می‌دهید/خواهند داد (مونث مخاطب جمع)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'أنا', form: 'أفعَلُ', meaning: 'من انجام می‌دهم/خواهم داد (متکلم وحده)' },
    { type: 'مضارع', root: 'فعل', pronoun: 'نحن', form: 'نَفعَلُ', meaning: 'ما انجام می‌دهیم/خواهیم داد (متکلم مع الغیر)' },
    // Imperative (امر)
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

let allQuestions = []; // Contains all possible questions (conjugations and pronouns)
let remainingQuestions = []; // Questions yet to be answered correctly or answered incorrectly
let correctCount = 0;
let totalUniqueQuestions = 0; // Total unique questions for the progress bar

let currentQuestion = null;
let selectedOption = null;

// DOM Elements
const selectionArea = document.getElementById('selection-area');
const quizArea = document.getElementById('quiz-area');
const startQuizButton = document.getElementById('start-quiz-button');
const checkMazy = document.getElementById('check-mazy');
const checkMozare = document.getElementById('check-mozare');
const checkAmr = document.getElementById('check-amr');
const checkPronoun = document.getElementById('check-pronoun');

const questionArea = document.getElementById('question-area'); // Added for direct manipulation
const questionText = document.getElementById('question-text');
const answerOptionsDiv = document.getElementById('answer-options');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const feedbackArea = document.getElementById('feedback-area');
const progressBarFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const restartButton = document.getElementById('restart-button');

// Function to shuffle an array (for randomizing questions)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to update the progress bar
function updateProgressBar() {
    const percentage = totalUniqueQuestions > 0 ? (correctCount / totalUniqueQuestions) * 100 : 0;
    progressBarFill.style.width = `${percentage}%`;
    progressText.textContent = `${correctCount}/${totalUniqueQuestions}`;
}

// Function to initialize/restart the game based on selected categories
function initializeGame() {
    allQuestions = [];
    
    // Build questions based on checked categories
    if (checkMazy.checked) {
        conjugationsData.filter(d => d.type === 'ماضی').forEach((data, index) => {
            allQuestions.push({ id: `mazy-${index}-type1`, category: 'conjugation', subType: 'form_from_info', questionData: data, isCorrectlyAnswered: false });
            allQuestions.push({ id: `mazy-${index}-type2`, category: 'conjugation', subType: 'info_from_form', questionData: data, isCorrectlyAnswered: false });
        });
    }
    if (checkMozare.checked) {
        conjugationsData.filter(d => d.type === 'مضارع').forEach((data, index) => {
            allQuestions.push({ id: `mozare-${index}-type1`, category: 'conjugation', subType: 'form_from_info', questionData: data, isCorrectlyAnswered: false });
            allQuestions.push({ id: `mozare-${index}-type2`, category: 'conjugation', subType: 'info_from_form', questionData: data, isCorrectlyAnswered: false });
        });
    }
    if (checkAmr.checked) {
        conjugationsData.filter(d => d.type === 'امر').forEach((data, index) => {
            allQuestions.push({ id: `amr-${index}-type1`, category: 'conjugation', subType: 'form_from_info', questionData: data, isCorrectlyAnswered: false });
            allQuestions.push({ id: `amr-${index}-type2`, category: 'conjugation', subType: 'info_from_form', questionData: data, isCorrectlyAnswered: false });
        });
    }
    if (checkPronoun.checked) {
        pronounsData.forEach((data, index) => {
            allQuestions.push({ id: `pronoun-${index}-type1`, category: 'pronoun', subType: 'pronoun_from_info', questionData: data, isCorrectlyAnswered: false });
            allQuestions.push({ id: `pronoun-${index}-type2`, category: 'pronoun', subType: 'info_from_pronoun', questionData: data, isCorrectlyAnswered: false });
        });
    }

    if (allQuestions.length === 0) {
        alert('لطفاً حداقل یک نوع سوال را انتخاب کنید.');
        return;
    }

    totalUniqueQuestions = allQuestions.length;
    remainingQuestions = [...allQuestions]; // Copy all questions to the remaining list
    correctCount = 0;
    
    shuffleArray(remainingQuestions); // Shuffle questions for a random order
    updateProgressBar();
    nextQuestion();

    selectionArea.style.display = 'none'; // Hide selection area
    quizArea.style.display = 'block';     // Show quiz area
    questionArea.style.display = 'flex';  // Show question area
}

// Function to display the next question
function nextQuestion() {
    feedbackArea.textContent = '';
    feedbackArea.className = 'feedback-area'; // Reset feedback area class
    checkButton.style.display = 'inline-block';
    checkButton.disabled = true; // Disable check button until an option is selected
    nextButton.style.display = 'none';
    answerOptionsDiv.innerHTML = ''; // Clear previous options
    selectedOption = null; // Reset selected option

    // Filter questions that haven't been answered correctly yet
    const availableQuestions = remainingQuestions.filter(q => !q.isCorrectlyAnswered);

    if (availableQuestions.length === 0) {
        questionText.textContent = 'تبریک! شما تمام سوالات را پاسخ دادید!';
        checkButton.style.display = 'none';
        nextButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        return;
    }

    // Pick a random question from the available ones
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomIndex];

    displayQuestion(currentQuestion);
}

// Function to display the question text and generate multiple-choice options
function displayQuestion(q) {
    let options = [];
    let correctAnswer;

    if (q.category === 'conjugation') {
        if (q.subType === 'form_from_info') {
            // Type 1: Given info, ask for form
            // Removed "فعل" and asterisks
            questionText.innerHTML = `نوع ${q.questionData.type}، ضمیر ${q.questionData.pronoun} را صرف کنید:`;
            correctAnswer = q.questionData.form;
            
            // Generate incorrect options from other conjugations of the same type
            const incorrectForms = conjugationsData
                .filter(item => item.form !== q.questionData.form && item.type === q.questionData.type)
                .map(item => item.form);
            shuffleArray(incorrectForms);
            options = [correctAnswer, ...incorrectForms.slice(0, 3)]; // 3 incorrect options
            
        } else {
            // Type 2: Given form, ask for info (type and pronoun)
            questionText.innerHTML = `<p class="arabic-text">${q.questionData.form}</p><p>این صیغه چه نوعی (ماضی/مضارع/امر) است و مربوط به کدام ضمیر (مثلاً هو، أنتَ) است؟</p>`;
            correctAnswer = `${q.questionData.type} - ${q.questionData.pronoun}`;

            // Generate incorrect options from other type-pronoun combinations
            const incorrectCombinations = conjugationsData
                .filter(item => `${item.type} - ${item.pronoun}` !== correctAnswer)
                .map(item => `${item.type} - ${item.pronoun}`);
            shuffleArray(incorrectCombinations);
            options = [correctAnswer, ...incorrectCombinations.slice(0, 3)];
        }
    } else if (q.category === 'pronoun') {
        if (q.subType === 'pronoun_from_info') {
            // Type 1: Given meaning, ask for pronoun
            questionText.innerHTML = `ضمیر مربوط به "${q.questionData.meaning}" کدام است؟`;
            correctAnswer = q.questionData.pronoun;

            const incorrectPronouns = pronounsData
                .filter(item => item.pronoun !== q.questionData.pronoun)
                .map(item => item.pronoun);
            shuffleArray(incorrectPronouns);
            options = [correctAnswer, ...incorrectPronouns.slice(0, 3)];
        } else {
            // Type 2: Given pronoun, ask for meaning
            questionText.innerHTML = `<p class="arabic-text">${q.questionData.pronoun}</p><p>این ضمیر چه معنایی دارد؟</p>`;
            correctAnswer = q.questionData.meaning;

            const incorrectMeanings = pronounsData
                .filter(item => item.meaning !== q.questionData.meaning)
                .map(item => item.meaning);
            shuffleArray(incorrectMeanings);
            options = [correctAnswer, ...incorrectMeanings.slice(0, 3)];
        }
    }

    shuffleArray(options); // Shuffle the options themselves

    options.forEach((optionText) => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = optionText;
        button.dataset.value = optionText; // Store the option value
        button.addEventListener('click', () => selectOption(button));
        answerOptionsDiv.appendChild(button);
    });
    currentQuestion.correctAnswer = correctAnswer; // Store the correct answer for checking
}

// Function to handle option selection
function selectOption(button) {
    // Remove 'selected' class from all buttons
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    selectedOption = button.dataset.value;
    checkButton.disabled = false; // Enable the check button
}

// Function to check the selected answer
function checkAnswer() {
    if (!selectedOption) {
        feedbackArea.textContent = 'لطفاً یک گزینه را انتخاب کنید.';
        feedbackArea.className = 'feedback-area';
        return;
    }

    const isCorrect = (selectedOption === currentQuestion.correctAnswer);
    
    // Disable all option buttons after checking
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.value === currentQuestion.correctAnswer) {
            btn.classList.add('answer-highlight'); // Green highlight for correct answer
        } else if (btn.dataset.value === selectedOption && !isCorrect) {
            btn.classList.add('incorrect-highlight'); // Red highlight for user's incorrect answer
        }
    });

    if (isCorrect) {
        feedbackArea.textContent = 'صحیح بود! (Sugoi desu! すごい です!)';
        feedbackArea.className = 'feedback-area correct';
        if (!currentQuestion.isCorrectlyAnswered) { // If answered correctly for the first time
            correctCount++;
            currentQuestion.isCorrectlyAnswered = true;
        }
    } else {
        feedbackArea.textContent = `غلط بود. پاسخ صحیح: ${currentQuestion.correctAnswer}`;
        feedbackArea.className = 'feedback-area incorrect';
        currentQuestion.isCorrectlyAnswered = false; // Mark as incorrect to be repeated
    }
    
    updateProgressBar();
    checkButton.style.display = 'none';
    nextButton.style.display = 'inline-block';

    // Check if all selected questions have been answered correctly
    const availableQuestions = remainingQuestions.filter(q => !q.isCorrectlyAnswered);
    if (availableQuestions.length === 0) {
        questionText.textContent = 'تبریک! شما تمام سوالات را پاسخ دادید!';
        nextButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    }
}

// Event Listeners
startQuizButton.addEventListener('click', initializeGame);
checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', () => {
    quizArea.style.display = 'none';     // Hide quiz area
    questionArea.style.display = 'none';  // Hide questions
    selectionArea.style.display = 'block'; // Show selection area again
    // No need to call initializeGame here, as startQuiz will handle re-initialization
});

// Initial state: Only show the selection area
// (No need to call any function on load, as the user will click 'Start Quiz')
