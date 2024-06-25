// Масив професій, які оцінюються у тесті
const professions = [
    "Програміст/Розробник",
    "DevOps інженер",
    "Системний адміністратор",
    "Інженер з безпеки (Cybersecurity)",
    "Тестувальник (QA інженер)",
    "Аналітик даних",
    "Інженер машинного навчання",
    "Адміністратор баз даних (DBA)",
    "Архітектор програмного забезпечення",
    "ІТ-консультант",
    "Керівник проектів (Project Manager)",
    "Продуктовий менеджер (Product Manager)",
    "UX/UI дизайнер",
    "Сапорт-спеціаліст (Technical Support)"
];

// Масив запитань з можливими відповідями та їхніми оцінками
const questions = [
    {
        question: "Чи любите ви програмувати?",
        answers: [
            { text: "Так", scores: [10, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати в команді?",
        answers: [
            { text: "Так", scores: [5, 10, 5, 0, 5, 5, 0, 0, 5, 10, 10, 10, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [5, 0, 5, 10, 5, 5, 10, 10, 5, 0, 0, 0, 5, 5] }
        ]
    },
    {
        question: "Чи любите ви вирішувати складні технічні проблеми?",
        answers: [
            { text: "Так", scores: [10, 10, 5, 10, 5, 10, 10, 5, 10, 5, 5, 5, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 5, 5, 5, 5] }
        ]
    },
    {
        question: "Чи подобається вам адмініструвати сервери?",
        answers: [
            { text: "Так", scores: [0, 10, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 5] },
            { text: "Середина", scores: [0, 5, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до кібербезпеки?",
        answers: [
            { text: "Так", scores: [0, 0, 5, 10, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 5, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи любите ви тестувати програмне забезпечення?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам аналізувати дані?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до машинного навчання?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати з базами даних?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до розробки архітектури програмного забезпечення?",
        answers: [
            { text: "Так", scores: [10, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам консультувати з ІТ-питань?",
        answers: [
            { text: "Так", scores: [0, 10, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи любите ви керувати проектами?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам керувати продуктом?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до UX/UI дизайну?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати в технічній підтримці?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати з новими технологіями?",
        answers: [
            { text: "Так", scores: [10, 10, 5, 10, 5, 10, 10, 5, 10, 5, 5, 5, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 5, 5, 5, 5] }
        ]
    },
    {
        question: "Чи вважаєте ви себе креативною особистістю?",
        answers: [
            { text: "Так", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам вирішувати конфлікти?",
        answers: [
            { text: "Так", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи любите ви навчатися новому?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати з людьми?",
        answers: [
            { text: "Так", scores: [5, 10, 5, 0, 5, 5, 0, 0, 5, 10, 10, 10, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [5, 0, 5, 10, 5, 5, 10, 10, 5, 0, 0, 0, 5, 5] }
        ]
    },
    {
        question: "Чи вмієте ви організовувати свій час?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати з технічними документами?",
        answers: [
            { text: "Так", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи вмієте ви працювати під тиском?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати над довготривалими проектами?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи вважаєте ви себе відповідальною особистістю?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам створювати нові продукти?",
        answers: [
            { text: "Так", scores: [10, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 10, 10, 0] },
            { text: "Середина", scores: [5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 5, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи вважаєте ви себе лідером?",
        answers: [
            { text: "Так", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи вмієте ви управляти ризиками?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати з великою кількістю даних?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до розробки інтерфейсів користувача?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи любите ви вирішувати технічні завдання?",
        answers: [
            { text: "Так", scores: [10, 10, 5, 10, 5, 10, 10, 5, 10, 5, 5, 5, 5, 5] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 5, 0, 5, 0, 0, 5, 0, 5, 5, 5, 5, 5] }
        ]
    },
    {
        question: "Чи вважаєте ви себе аналітичною особистістю?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам створювати алгоритми?",
        answers: [
            { text: "Так", scores: [10, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи любите ви надавати технічну підтримку іншим?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до вивчення нових мов програмування?",
        answers: [
            { text: "Так", scores: [10, 0, 0, 0, 0, 0, 10, 0, 10, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам займатися дослідженнями у сфері ІТ?",
        answers: [
            { text: "Так", scores: [0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до автоматизації процесів?",
        answers: [
            { text: "Так", scores: [0, 10, 10, 0, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0] },
            { text: "Середина", scores: [0, 5, 5, 0, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати з великими проектами?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи маєте ви інтерес до роботи в міжнародних компаніях?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    },
    {
        question: "Чи подобається вам працювати над стартапами?",
        answers: [
            { text: "Так", scores: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
            { text: "Середина", scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { text: "Ні", scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ]
    }
];

// Індекси поточного питання та масив для зберігання балів
let currentQuestionIndex = 0;
let scores = Array(professions.length).fill(0);
let previousScores = [];

function startTest() {
    document.getElementById('test-container').innerHTML = '';
    document.getElementById('results-container').innerHTML = '';
    currentQuestionIndex = 0;
    scores.fill(0);
    previousScores = [];
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('test-container');
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${question.question}</p>`;

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.onclick = () => {
            previousScores.push([...scores]);
            answerQuestion(index);
            currentQuestionIndex++;
            showQuestion();
        };

        // Встановлення класів кнопок залежно від тексту відповіді
        if (answer.text === "Так") {
            button.className = 'btn-yes';
        } else if (answer.text === "Середина") {
            button.className = 'btn-maybe';
        } else if (answer.text === "Ні") {
            button.className = 'btn-no';
        }

        questionContainer.appendChild(button);
    });

    if (currentQuestionIndex > 0) {
        const backButton = document.createElement('button');
        backButton.innerText = 'Повернутися назад';
        backButton.onclick = () => {
            scores = previousScores.pop();
            currentQuestionIndex--;
            showQuestion();
        };
        questionContainer.appendChild(backButton);
    }
}


function answerQuestion(answerIndex) {
    const question = questions[currentQuestionIndex];
    question.answers[answerIndex].scores.forEach((score, index) => {
        scores[index] += score;
    });
}

function showResults() {
    // Очищення контейнера з питаннями
    const questionContainer = document.getElementById('test-container');
    questionContainer.innerHTML = 'ВІДТЕПЕР ВАША ЗАРПЛАТА БУДЕ У ДОЛАРАХ $';

    // Показ результатів
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '<h2>Ваші результати:</h2>';

    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    const scoreRange = maxScore - minScore;
    const results = professions.map((profession, index) => ({
        profession,
        score: ((scores[index] - minScore) / scoreRange * 100).toFixed(2)
    })).sort((a, b) => b.score - a.score);

    results.forEach((result, index) => {
        // Додаємо випадковий фактор до кожного результату
        const randomAdjustment = Math.floor(Math.random() * 10) - 5; // Випадкове значення від -5 до +4
        const adjustedScore = Math.max(0, Math.min(100, parseFloat(result.score) + randomAdjustment)); // Забезпечуємо, що результат залишається в межах 0-100
        resultsContainer.innerHTML += `<p>${index + 1}. ${result.profession}: ${adjustedScore.toFixed(2)}%</p>`;
    });
}


// Запускаємо тест
startTest();


    // Прибираємо кнопки після завершення тесту
    const questionContainer = document.getElementById('test-container');
    questionContainer.innerHTML = '';

