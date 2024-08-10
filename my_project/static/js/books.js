var allbooks = [
    {
        title: 'Secret History of Bigfoot',
        author: 'John O’Connor',
        genre: 'History',
        link: 'Read More'
    },

    {
        title: 'The Painter\'s Daughters',
        author: 'Emily Howes',
        genre: 'Art',
        link: 'Read More'
    },
    {
        title: 'نظرية الفستق',
        author: 'فهد عامرالأحمدى',
        genre: 'التنمية البشرية وتطوير الذات',
        link: 'Read More'
    },
    {
        title: 'رحلتى من الشك الى الايمان',
        author: 'د/مصطفى محمود',
        genre: 'علم النفس والمنطق',
        link: 'Read More'
    },
    {
        title: 'فاتتنى صلاة',
        author: 'اسلام جمال',
        genre: 'أركان الاسلام والايمان',
        link: 'Read More'
    },
    {
        title: 'Men Are From Mars - Women Are From Venus',
        author: 'John Gray',
        genre: 'Human Development And Self-development',
        link: 'Read More'
    },
    {
        title: 'عبقرية محمد',
        author: 'عباس محمود العقاد',
        genre: 'الأدب الأفريقي مترجم',
        link: 'Read More'
    },
    {
        title: 'عقدك النفسية سجنك الأبدي',
        author: 'يوسف الحسني',
        genre: 'علم النفس',
        link: 'Read More'
    },
    {
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        genre: 'Human Development and Self-Development',
        link: 'Read More'
    },
    {
        title: 'إيكادولي',
        author: 'حنان لاشين',
        genre: 'رواية خيالية',
        link: 'Read More'
    },
    {
        title: 'أوبال',
        author: 'حنان لاشين',
        genre: 'رواية خيالية',
        link: 'Read More'
    },
    {
        title: 'أمانوس',
        author: 'حنان لاشين',
        genre: 'رواية خيالية',
        link: 'Read More'
    },
    {
        title: 'كويكول',
        author: 'حنان لاشين',
        genre: 'رواية خيالية',
        link: 'Read More'
    },
    {
        title: 'سقطرى',
        author: 'حنان لاشين',
        genre: 'رواية خيالية',
        link: 'Read More'
    },
    {
        title: 'أرض زيكولا',
        author: 'عمرو عبد الحميد',
        genre: 'رواية خيالية',
        link: 'Read More'
    },
    {
        title: 'أماريتا',
        author: 'عمرو عبد الحميد',
        genre: 'رواية خيالية',
        link: 'Read More'
    },
    {
        title: 'كن لنفسك كل شئ',
        author: 'عمار الشمرى',
        genre: 'روايات عربية',
        link: 'Read More'
    },
    {
        title: 'سر الغرفة 207',
        author: 'أحمد خالد توفيق',
        genre: 'رعب',
        link: 'Read More'
    },
    {
        title: 'ابتسم فأنت ميت',
        author: 'حسن الجندى',
        genre: 'رعب',
        link: 'Read More'
    },
    {
        title: 'Dark Star Burning, Ash Falls White',
        author: 'Amélie Wen Zhao',
        genre: 'Fantasy',
        link: 'Read More'
    },
    {
        title: 'Harry Potter And The Philosophers Stone',
        author: 'J. K Rowling',
        genre: 'Fantasy',
        link: 'Read More'
    },
    {
        title: 'Harry Potter and the Sorcerer’s Stone',
        author: 'J. K Rowling',
        genre: 'Fantasy',
        link: 'Read More'
    },
    // Add more book objects here
];

 {/* Store the data in local storage */}
localStorage.setItem("allbooks", JSON.stringify(allbooks));

{/* // Retrieve the data from local storage */}
var storedBooks = JSON.parse(localStorage.getItem("allbooks"));



var cardTexts = document.querySelectorAll(".box");

storedBooks.forEach(function(book, index) {
    var cardText = cardTexts[index];
    cardText.style.display = "block";
    cardText.querySelector("h3").textContent = book.title;
    cardText.querySelector("p").textContent = book.author;
    cardText.querySelectorAll("p")[1].textContent =   book.genre;
    cardText.querySelector("a").textContent =  book.link;
});