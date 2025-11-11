// --- MASTER ALPHABET SYSTEMS ---

const alphabetSystems = {
    'novgorodov': {
        applyLongVowels: true, // Special rule for this system
        map: {
            'А': 'a', 'а': 'a',
            'Б': 'b', 'б': 'b',
            'В': '—', 'в': '—', 
            'Г': 'g', 'г': 'g',
            'Ҕ': 'ʃ', 'ҕ': 'ʃ',
            'Д': 'd', 'д': 'd',
            'И': 'i', 'и': 'i',
            'Й': 'j', 'й': 'j',
            'Ҋ': 'ɟ', 'ҋ': 'ɟ',
            'К': 'k', 'к': 'k',
            'Л': 'l', 'л': 'l',
            'М': 'm', 'м': 'm',
            'Н': 'n', 'н': 'n',
            'Ҥ': 'ŋ', 'ҥ': 'ŋ',
            'О': 'ɔ', 'о': 'ɔ',
            'Ө': 'ꭢ', 'ө': 'ꭢ',
            'П': 'p', 'п': 'p',
            'Р': 'r', 'р': 'r',
            'С': 's', 'с': 's',
            'Һ': 'h', 'һ': 'h',
            'Т': 't', 'т': 't',
            'У': 'u', 'у': 'u',
            'Ү': 'y', 'ү': 'y',
            'Х': 'q', 'х': 'q',
            'Ч': 'c', 'ч': 'c',
            'Ы': 'ɯ', 'ы': 'ɯ',
            'Э': 'e', 'э': 'e',
        },
        combinations: [
            { cyrillic: 'ыа', latin: 'ꭠ' },
            { cyrillic: 'иэ', latin: 'ꭡ' },
            { cyrillic: 'уо', latin: 'ꭣ' },
            { cyrillic: 'үө', latin: 'w' },
            { cyrillic: 'Дь', latin: 'з' },
            { cyrillic: 'дь', latin: 'з' },
            { cyrillic: 'Ль', latin: 'ʎ' },
            { cyrillic: 'ль', latin: 'ʎ' },
            { cyrillic: 'Нь', latin: 'ɲ' },
            { cyrillic: 'нь', latin: 'ɲ' },
        ]
    },
    'latin1929': {
        applyLongVowels: false,
        map: {
            'А': 'A', 'а': 'a',
            'Б': 'B', 'б': 'b',
            'В': '—', 'в': '—',
            'Г': 'G', 'г': 'g',
            'Ҕ': 'Ƣ', 'ҕ': 'ƣ',
            'Д': 'D', 'д': 'd',
            'Е': '—', 'е': '—',
            'Ё': '—', 'ё': '—',
            'Ж': '—', 'ж': '—',
            'З': '—', 'з': '—',
            'И': 'I', 'и': 'i',
            'Й': 'J', 'й': 'j',
            'Ҋ': '—', 'ҋ': '—',
            'К': 'K', 'к': 'k',
            'Л': 'L', 'л': 'l',
            'М': 'M', 'м': 'm',
            'Н': 'N', 'н': 'n',
            'Ҥ': 'Ꞑ', 'ҥ': 'ꞑ',
            'О': 'O', 'о': 'o',
            'Ө': 'Ɵ', 'ө': 'ɵ',
            'П': 'P', 'п': 'p',
            'Р': 'R', 'р': 'r',
            'С': 'S', 'с': 's',
            'Һ': 'H', 'һ': 'h',
            'Т': 'T', 'т': 't',
            'У': 'U', 'у': 'u',
            'Ү': 'Y', 'ү': 'y',
            'Ф': '—', 'ф': '—',
            'Х': 'Q', 'х': 'q',
            'Ц': '—', 'ц': '—',
            'Ч': 'C', 'ч': 'c',
            'Ш': '—', 'ш': '—',
            'Щ': '—', 'щ': '—',
            'Ъ': '—', 'ъ': '—',
            'Ы': 'Ь', 'ы': 'ь',
            'Ь': '—', 'ь': '—',
            'Э': 'E', 'э': 'e',
            'Ю': '—', 'ю': '—',
            'Я': '—', 'я': '—',
        },
        combinations: [
            { cyrillic: 'Дь', latin: 'Ç' },
            { cyrillic: 'дь', latin: 'ç' },
            { cyrillic: 'Ль', latin: 'Lj' },
            { cyrillic: 'ль', latin: 'lj' },
            { cyrillic: 'Нь', latin: 'Nj' },
            { cyrillic: 'нь', latin: 'nj' },
        ]
    },
    'botlingk': {
        applyLongVowels: false,
        map: {
            'А': 'А', 'а': 'а',
            'Б': 'Б', 'б': 'б',
            'В': '—', 'в': '—',
            'Г': 'Г', 'г': 'г',
            'Ҕ': 'Ҕ', 'ҕ': 'ҕ',
            'Д': 'Д', 'д': 'д',
            'Е': '—', 'е': '—',
            'Ё': '—', 'ё': '—',
            'Ж': '—', 'ж': '—',
            'З': '—', 'з': '—',
            'И': 'І', 'и': 'і',
            'Й': 'Ј', 'й': 'ј',
            'Ҋ': 'Ɉ', 'ҋ': 'ɉ',
            'К': 'K', 'к': 'к',
            'Л': 'Л', 'л': 'л',
            'М': 'М', 'м': 'м',
            'Н': 'Н', 'н': 'н',
            'Ҥ': 'Ҥ', 'ҥ': 'ҥ',
            'О': 'О', 'о': 'о',
            'Ө': 'Ӧ', 'ө': 'ӧ',
            'П': 'П', 'п': 'п',
            'Р': 'Р', 'р': 'р',
            'С': 'С', 'с': 'с',
            'Һ': 'һ', 'һ': 'һ',
            'Т': 'T', 'т': 'т',
            'У': 'У', 'у': 'у',
            'Ү': 'Ӱ', 'ү': 'ӱ',
            'Ф': '—', 'ф': '—',
            'Х': 'Х', 'х': 'х',
            'Ц': '—', 'ц': '—',
            'Ч': 'Ч', 'ч': 'ч',
            'Ш': '—', 'ш': '—',
            'Щ': '—', 'щ': '—',
            'Ъ': '—', 'ъ': '—',
            'Ы': 'Ы', 'ы': 'ы',
            'Ь': '—', 'ь': '—',
            'Э': 'Ӓ', 'э': 'ӓ',
            'Ю': '—', 'ю': '—',
            'Я': '—', 'я': '—',
        },
        combinations: [
            { cyrillic: 'Дь', latin: 'Џ' },
            { cyrillic: 'дь', latin: 'џ' },
            { cyrillic: 'Ль', latin: 'L' }, // Per list
            { cyrillic: 'ль', latin: 'l' }, // Per list
            { cyrillic: 'Нь', latin: "Н’" },
            { cyrillic: 'нь', latin: "н'" },
        ]
    },
    'khitrov': {
        applyLongVowels: false,
        map: {
            'А': 'А', 'а': 'а',
            'Б': 'Б', 'б': 'б',
            'В': '—', 'в': '—',
            'Г': 'Г', 'г': 'г',
            'Ҕ': '—', 'ҕ': '—',
            'Д': 'Д', 'д': 'д',
            'Е': 'Е', 'е': 'е',
            'Ё': '—', 'ё': '—',
            'Ж': '—', 'ж': '—',
            'З': '—', 'з': '—',
            'И': 'И', 'и': 'и', // Simplified from 'и / і'
            'Й': 'Й', 'й': 'й',
            'Ҋ': '—', 'ҋ': '—',
            'К': 'К', 'к': 'к',
            'Л': 'Л', 'л': 'л',
            'М': 'И', 'м': 'м',
            'Н': 'Н', 'н': 'н',
            'Ҥ': 'Ҥ', 'ҥ': 'ҥ',
            'О': 'О', 'о': 'о',
            'Ө': 'Ё', 'ө': 'ё',
            'П': 'П', 'п': 'п',
            'Р': 'Р', 'р': 'р',
            'С': 'С', 'с': 'с',
            'Һ': '—', 'һ': '—',
            'Т': 'Т', 'т': 'т',
            'У': 'У', 'у': 'у',
            'Ү': '—', 'ү': '—',
            'Ф': '—', 'ф': '—',
            'Х': 'Х', 'х': 'х',
            'Ц': '—', 'ц': '—',
            'Ч': 'Ч', 'ч': 'ч',
            'Ш': '—', 'ш': '—',
            'Щ': '—', 'щ': '—',
            'Ъ': 'ъ', 'ъ': 'ъ',
            'Ы': 'Ы', 'ы': 'ы',
            'Ь': '—', 'ь': '—',
            'Э': 'Э', 'э': 'э',
            'Ю': 'Ю', 'ю': 'ю',
            'Я': 'Я', 'я': 'я',
        },
        combinations: [
            { cyrillic: 'Дь', latin: 'Ԫ' },
            { cyrillic: 'дь', latin: 'ԫ' },
            { cyrillic: 'Нь', latin: 'Нь' },
            { cyrillic: 'нь', latin: 'нь' },
            { cyrillic: 'Ль', latin: '—' }, // Per list
            { cyrillic: 'ль', latin: '—' }, // Per list
        ]
    }
};

const longVowelMap = {
    'aa': 'a:',
    'ii': 'i:',
    'uu': 'u:',
    'ɯɯ': 'ɯ:',
    'ɔɔ': 'ɔ:',
    'ee': 'e:',
    'yy': 'y:',
    'ꭢꭢ': 'ꭢ:'
};

function transliterate(text, systemKey) {
    if (!text) return '';

    const rules = alphabetSystems[systemKey];
    if (!rules) {
        console.error('Invalid transliteration system key:', systemKey);
        return text; 
    }
    
    const transliterationMap = rules.map;
    const specialCombinations = rules.combinations;
    
    let result = text;

    // Process combinations first (e.g., 'Дь' -> 'з')
    const sortedCombinations = [...specialCombinations].sort((a, b) => b.cyrillic.length - a.cyrillic.length);
    
    for (const combo of sortedCombinations) {
        const escaped = combo.cyrillic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'g');
        result = result.replace(regex, combo.latin);
    }

    // Process single characters
    let transliterated = '';
    for (let i = 0; i < result.length; i++) {
        const char = result[i];
        
        if (transliterationMap[char] !== undefined) {
            transliterated += transliterationMap[char];
        } else {
            transliterated += char;
        }
    }

    // Process long vowels for Novgorodov system
    if (rules.applyLongVowels) {
        for (const [pattern, replacement] of Object.entries(longVowelMap)) {
            const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(escaped, 'g');
            transliterated = transliterated.replace(regex, replacement);
        }
    }

    return transliterated;
}

function insertAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    textarea.value = value.substring(0, start) + text + value.substring(end);
    const newCursorPos = start + text.length;
    textarea.setSelectionRange(newCursorPos, newCursorPos);
    textarea.focus();
}

const specialCharacters = [
    { cyrillic: 'Ҕ', latin: 'ʃ', label: 'Ҕ → ʃ' },
    { cyrillic: 'ҕ', latin: 'ʃ', label: 'ҕ → ʃ' },
    { cyrillic: 'Һ', latin: 'h', label: 'Һ → h' },
    { cyrillic: 'һ', latin: 'h', label: 'һ → h' },
    { cyrillic: 'Ҥ', latin: 'ŋ', label: 'Ҥ → ŋ' },
    { cyrillic: 'ҥ', latin: 'ŋ', label: 'ҥ → ŋ' },
    { cyrillic: 'Ө', latin: 'ꭢ', label: 'Ө → ꭢ' },
    { cyrillic: 'ө', latin: 'ꭢ', label: 'ө → ꭢ' },
    { cyrillic: 'Ү', latin: 'y', label: 'Ү → y' },
    { cyrillic: 'ү', latin: 'y', label: 'ү → y' },
];

// --- DOM Manipulation and Event Listeners ---

document.addEventListener('DOMContentLoaded', function() {
    const inputTextarea = document.getElementById('input-text');
    const outputTextarea = document.getElementById('output-text');
    const translateBtn = document.getElementById('translate-btn');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const toast = document.getElementById('toast');
    const specialCharsGrid = document.getElementById('special-chars-grid');
    const alphabetSelect = document.getElementById('alphabet-select');

    // --- Theme Toggling ---
    function initTheme() {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeUI(currentTheme);
    }

    function updateThemeUI(theme) {
        if (theme === 'light') {
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark';
        } else {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
        }
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeUI(newTheme);
    });
    initTheme();

    // --- Toast Function ---
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    // --- Buttons ---
    clearBtn.addEventListener('click', function() {
        inputTextarea.value = '';
        outputTextarea.value = '';
        inputTextarea.focus();
    });

    copyBtn.addEventListener('click', function() {
        const text = outputTextarea.value;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('Copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                outputTextarea.select();
                document.execCommand('copy');
                showToast('Copied to clipboard!');
            });
        } else {
            showToast('Nothing to copy');
        }
    });

    // --- Special Chars Grid Population ---
    specialCharacters.forEach(char => {
        const button = document.createElement('button');
        button.className = 'char-btn';
        button.innerHTML = `
            <span class="char-cyrillic">${char.cyrillic}</span>
            <span class="arrow">→</span>
            <span class="char-latin">${char.latin}</span>
        `;
        button.addEventListener('click', function() {
            insertAtCursor(inputTextarea, char.cyrillic);
        });
        specialCharsGrid.appendChild(button);
    });

    // --- Transliteration Logic Hookup ---
    function performTransliteration() {
        const inputText = inputTextarea.value;
        const selectedSystem = alphabetSelect.value;
        const transliteratedText = transliterate(inputText, selectedSystem);
        outputTextarea.value = transliteratedText;
    }

    translateBtn.addEventListener('click', performTransliteration);

    // Translate on Ctrl/Cmd + Enter
    inputTextarea.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            performTransliteration();
        }
    });
});