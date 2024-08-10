let Name1=document.getElementById('id1');
// let id1=document.getElementById('id2');
let author=document.getElementById('id3');
let category=document.getElementById('id6');
let desc=document.getElementById('id5');
let submit=document.getElementById('submit');

let mood ='add';
let t;
var lettersOnly = /^[\u0600-\u06FFa-zA-Z\s\-!@#$%^&*()_+={}[\]:;"'<>,.?/|]*$/;


// function deleteBook(button) {
//      // to get the row to remove 
//      var row = button.parentNode.parentNode;
//      row.parentNode.removeChild(row);
// }


//create

// let dataarray;
// if(localStorage.Array !=null){
//      dataarray= JSON.parse(localStorage.Array);
// }
// else{
//      dataarray=[];
// }


submit.onclick=function(){
     let obj = {
          Name1: Name1.value,
          // id1: id1.value,
          author: author.value,
          category:category.value,
          desc: desc.value,
          
     }
     
     

     if (obj.Name1 === '') {
          alert('Please enter book name');
          return false;
     }
     // if (obj.id1 === '') {
     //      alert('Please enter id of book');
     //      return false;
     // }
     if (obj.author === '') {
          alert('Please enter author of book');
          return false;
     }
     if (obj.category === '') {
          alert('Please choose category of book');
          return false;
     }
     if (obj.desc === '') {
          alert('Please enter description of book ');
          return false;
     }

     if (obj.Name1.length <=3 ) {
          alert('the length of book name must be more than 3 letters ');
          return false;
     }
     if (obj.Name1.length >30 ) {
          alert('the length of book name must be no more than 30 letters ');
          return false;
     }
     if (obj.author.length <=3 ) {
          alert('the length of author must be more than 3 letters ');
          return false;
     }
     if (obj.author.length >20 ) {
          alert('the length of author must be no more than 30 letters ');
          return false;
     }
     if (obj.category.length <=3 ) {
          alert('the length of category must be more than 3 letters ');
          return false;
     }
     if (obj.category.length >20 ) {
          alert('the length of category must be no more than 30 letters ');
          return false;
     }

     // if (isNaN(obj.id1)) {
     //      alert('ID should consist of numbers only');
     //      return false;
     // }

     if (obj.desc.length <= 10) {
          alert('the length of description must be more than 10 letters ');
          return false;
     }
     if (obj.desc.length > 250) {
          alert('the length of description must be no more than 250 letters ');
          return false;
     }

     // if (!lettersOnly.test(obj.Name1)) {
     //      alert('Book name should contain letters only');
     //      return false;
     // }

     if (!lettersOnly.test(obj.author)) {
          alert('author should contain letters only');
          return false;
     }

     if (!lettersOnly.test(obj.category)) {
          alert('category should contain letters only');
          return false;
     }

     var arabicEnglishLettersOnly = /[a-zA-Z\u0600-\u06FF]+/;

     if (!arabicEnglishLettersOnly.test(obj.desc)) {
          alert('Description should contain at least 10 letter');
          return false;
     }

     // var idExists = checkIdExists(obj.id1);
     // if (idExists) {
     //      alert('ID already exists');
     //      return false;
     // }


     
     
     // if (obj.Name1 != "" && obj.id1 != "" && obj.author != "" && obj.category != "" && obj.desc != "" ){
     //      if (mood == 'add') {
     //           dataarray.push(obj);
     //      }
     //      else{
     //           dataarray[t]=obj;
     //           mood='add';
     //           submit.innerHTML='Add';
     //      }
          
     //      localStorage.setItem('Array', JSON.stringify(dataarray));
     //      clearInputs();
          
     // // }
     
     // console.log(dataarray);
    
     // readData();
   

}

// function checkIdExists(id) {
//      // Get existing data from local storage
//      var existingData = JSON.parse(localStorage.Array);
//     if(mood !='exist'){
//          // Check if existingData is null (no data in local storage) or empty
//          if (existingData.length === 0) {
//               return false; // ID does not exist
//          }

//          // Loop through existingData to check if ID exists
//          for (var i = 0; i < existingData.length; i++) {
//               if (existingData[i].id1 === id) {
//                    return true; // ID exists
//               }
//          }

//          return false; // ID does not exist
//     }
     
// }





// //clear inputs
// function clearInputs(){
//      Name1.value='';
//      id1.value='';
//      author.value='';
//      category.value='';
//      desc.value='';

// }

// //read
// function readData(){
//      let table='';
//      for(let i=0; i<dataarray.length; i++){
//           table += `<tr>
//                     <td>${i+1}</td>
//                     <td> ${dataarray[i].Name1}</td>
//                     <td> ${dataarray[i].author}</td>
//                     <td> ${dataarray[i].category} </td>
//                     <td> ${dataarray[i].desc}</td>
//                      <td> <button onclick="editData(${i})"class='del'>edit</button>
//                          <br>
//                          <br>
//                          <button onclick="deleteBook(${i})" class='del'>delete</button>
//                     </td>
//                </tr>`
//      }
//      document.getElementById('tableBody').innerHTML=table;

// }
// readData();

// //delete
// function deleteBook(i){
//      dataarray.splice(i,1);
  
//      localStorage.Array=JSON.stringify(dataarray);
//      readData();
// }

// //edit 
// function editData(i){
//      Name1.value=dataarray[i].Name1;
//      id1.value=dataarray[i].id1;
//      author.value=dataarray[i].author;
//      category.value=dataarray[i].category;
//      desc.value=dataarray[i].desc;
//      submit.innerHTML='edit';
//      mood='edit';
//      t=i;
//      scroll({
//           top:0,
//           behavior:'smooth'
//      })
     

     

// }


