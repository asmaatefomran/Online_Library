
document.getElementById('btn_book_store').addEventListener('click',function(){
    location.href='Books.html'
})
document.getElementById('btn_book_store_2').addEventListener('click',function(){
    location.href='Books.html'
})



// Structure the data
var books = [
    {
        category: "Drama",
        title: "Celebration of Freedom",
        author: "Ellie Tomas",
        price: 50
    },
    {
        category: "Fashion",
        title: "Star of Fashion",
        author: "Santana Delarosa",
        price: 45,
        originalPrice: 55
    },
    {
        category: "Cooking",
        title: "Mastering the Kitchen Series",
        author: "ESkye Riley",
        price: 20
    },
    {
        category: "Business",
        title: "Exploring the Creative Mind",
        author: "Kairi Velazquez",
        price: 10,
        originalPrice: 20
    },
    {
        category: "Psychology",
        title: "Biggles & the Pirate Treasure",
        author: "Sariah Howe",
        price: 150
    },
    {
        category: "Business",
        title: "Half Magic",
        author: "Ari Lynn",
        price: 67
    },
    {
        category: "Sports",
        title: "Girls in White Dresses",
        author: "Raiden Lowery",
        price: 90,
        originalPrice: 100
    },
    {
        category: "Horror",
        title: "Seventeenth Summer",
        author: "Vivian Snow",
        price: 30,
        originalPrice: 40
    }
];

 {/* Store the data in local storage */}
localStorage.setItem("books", JSON.stringify(books));

{/* // Retrieve the data from local storage */}
var storedBooks = JSON.parse(localStorage.getItem("books"));



var cardTexts = document.querySelectorAll(".third_card");

storedBooks.forEach(function(book,index){
  
        var cardText = cardTexts[index];
        cardText.style.display="block"
        cardText.querySelector("p").textContent=book.category,
        cardText.querySelector("h4").textContent = book.title;
        cardText.querySelectorAll("p")[1].textContent = "By " + book.author;
       
    
    

})








var teamCardsData = [
    {
        name: "Giana Moon",
        role: "Developer",
        description: "Lorem ipsum dolor,sed voluptatum officia fugit iste nam.",
        socialLinks: [
           {
            facebook: "https://www.facebook.com/1",
            instagram: "https://www.instagram.com/1",
            twitter: "https://twitter.com/1",
            github: "https://github.com/1"
           }
        ]
    },
    {
        name: "Zayne Wright",
        role: "Developer",
        description: "Lorem ipsum dolor,sed voluptatum officia fugit iste nam.",
        socialLinks: [
           {
            facebook: "https://www.facebook.com/2",
            instagram: "https://www.instagram.com/2",
            twitter: "https://twitter.com/2",
            github: "https://github.com/2"
           }
        ]
    },
    {
        name: "Cameron Shaffer",
        role: "Developer",
        description: "Lorem ipsum dolor,sed voluptatum officia fugit iste nam.",
        socialLinks: [
           {
            facebook: "https://www.facebook.com/3",
            instagram: "https://www.instagram.com/3",
            twitter: "https://twitter.com/3",
            github: "https://github.com/3"
           }
        ]
    },
    {
        name: "Theodore Enriqueza",
        role: "Developer",
        description: "Lorem ipsum dolor,sed voluptatum officia fugit iste nam.",
        socialLinks: [
           {
            facebook: "https://www.facebook.com/4",
            instagram: "https://www.instagram.com/4",
            twitter: "https://twitter.com/4",
            github: "https://github.com/4"
           }
        ]
    },
   
];


localStorage.setItem("teamcardsdata", JSON.stringify(teamCardsData));


var teamCards = JSON.parse(localStorage.getItem('teamcardsdata'));

var teamCardElements = document.querySelectorAll('.our_team_all_card1_text');




teamCards.forEach(function(team,index){
    var teamCardElement=teamCardElements[index];

    teamCardElement.querySelector("h3").textContent=team.name;
    teamCardElement.querySelector("h4").textContent=team.role;
    teamCardElement.querySelector("p").textContent=team.description;

    // console.log(team.socialLinks[0].facebook)
    
})






var name_val=document.getElementById("name_val");
var email_val =document.getElementById("email_val")

var text_val =document.getElementById("text_val")
var my_form =document.getElementById("my_form")
var phone_val =document.getElementById("phone_val")
var success_message=document.getElementById("success_message");



my_form.addEventListener('submit',function(e){
    e.preventDefault();

    var username=name_val.value.trim();
    var email=email_val.value.trim();
   var phone=phone_val.value.trim();
    var message=text_val.value.trim();
    var isValid = true;
    
    if (username === "") {
        showError("Name is required", "name_error");
        isValid = false;
    } else if (username.length < 3) {
        showError("The name should be at least 4 characters", "name_error");
        isValid = false;
    } else if (!/^[a-zA-Z\u0600-\u06FF]{3,}/.test(username)) {
        showError("Username must start with at least 4 letters (English or Arabic)", "name_error");
        isValid = false;
    } else {
        clearError("name_error");
    }
    


    if (email === "") {
        showError("Email is required", "emeil_error");
        isValid=false;
    } else if (!isValidEmail(email)) {
        showError("Invalid email address", "emeil_error");
        isValid=false;
    }
    else if (!hasOneDotAfterAt(email)) {
        showError("Invalid email address format: Must have exactly one '.' after '@'", "emeil_error");
        isValid = false;
    }

     else {
        clearError("emeil_error");
    }

    

    if (phone === "") {
        showError("Phone number is required", "phone_error");
        isValid=false;
    } else if (!isNumeric(phone)) {
        showError("Phone number must contain only numbers", "phone_error");
        isValid=false;
    }
    else if (!/^(?=.*[1-9].*[1-9])[0-9]{4,}$/.test(phone)) {
        showError("Phone must have at least two digits from 1 to 9", "phone_error");
        isValid = false;
    }
    else if(phone.length<10||phone.length>15){
        showError("Phone number must be from 10 to 15 digit", "phone_error");
        isValid=false;
    }
    
    else {
        clearError("phone_error");
    }




    if (message === "") {
        showError("Message is required", "message_error");
        isValid=false;
    } 
    else if (!/^[a-zA-Z\u0600-\u06FF]{3,}/.test(message)) {
        showError("Username must start with at least 3 letters (English or Arabic)", "message_error");
        isValid = false;
    }
   
    else if(message.length<3){
        showError("Message should be at least 3 charachters","message_error");
    }
   
    
    else {
        clearError("message_error");
      
    }



    if(isValid){
        name_val.value = "";
        email_val.value = "";
        text_val.value = "";
        phone_val.value="";
       success_message.style.display="block";
        setTimeout(function () {
            success_message.style.display = "none";
        }, 4000);

    }

   
    
})


function isNumeric(phone) {
    return /^[0-9]+$/.test(phone);
}



function isValidEmail(email) {
    // You can implement more sophisticated email validation if needed
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
       
}
function hasOneDotAfterAt(email) {
    var atIndex = email.indexOf('@');
    var dotIndex = email.indexOf('.', atIndex + 1); // Search for '.' after '@'
    return dotIndex !== -1 && email.lastIndexOf('.') === dotIndex;
}


function showError(message, errorId) {
    var errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
}

function clearError(errorId) {
    var errorElement = document.getElementById(errorId);
    errorElement.textContent = '';
}

