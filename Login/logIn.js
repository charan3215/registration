function getData(event){
    event.preventDefault();
     
    let uId= document.getElementById('userId');
    let upa =document.getElementById('userPass');


    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data =>console.log(data))

        
    }
