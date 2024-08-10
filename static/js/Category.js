












var Categorys=[
    'Physiclogy',
'Biography',
'Human Development',
'Fantasia',
'Finance',
'Fashion',
'Religion',
'Architecture',
'Children Books',
'Business',
'Sport',
'History',
'Biology',
'Math'
]

// localStorage.setItem("books", JSON.stringify(books));


localStorage.setItem('categorys',JSON.stringify(Categorys));

var allcategorys=JSON.parse(localStorage.getItem('categorys'));

var category_elements=document.querySelectorAll('.prefer_card1');



category_elements.forEach(function(cardelement,index){
  var h2element=cardelement.querySelector("h2");
  console.log(h2element)
  h2element.textContent=allcategorys[index];
    
})