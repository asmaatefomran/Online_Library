
var username =  request.session.username ;
var role = "user";

// localStorage.setItem('name', username);
// localStorage.setItem('role', role);


function update_nav(){
    var IN_name=username;
    var role=localStorage.role;
   
    if(IN_name&&role){
        document.getElementById('Name_AU').textContent=IN_name;

        if(role==='admin'){
            
            document.getElementById('change2').style.display='none';
            document.getElementById('change3').style.display='none';
            document.getElementById('change4').style.display='none';


            
            document.getElementById('change6').textContent='Add Books';
            document.getElementById('dashboard').textContent='DashBoard';
            document.getElementById('change1').textContent='Categories'; 
            document.getElementById('change7').textContent='View list'; 
            
        }
        else if(role==='user'){
            document.getElementById('change1').textContent='Categories';
            document.getElementById('change2').textContent='Borrowed books';
            document.getElementById('change3').textContent='About';
            document.getElementById('change4').textContent='Contact';
            
            
            document.getElementById('change6').style.display='none';
            document.getElementById('change7').style.display='none';
          
        }
    }





   
   
}
update_nav();




