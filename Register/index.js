let but =document.getElementById('sub');

function registerForm(event){
    event.preventDefault();

    let nam=document.getElementById('uname').value;
    let umail=document.getElementById('uid').value;
    let phno = document.getElementById('uph').value;
    let pass=document.getElementById('upass').value;
    let rpass=document.getElementById('repass').value;
    
    console.log(nam);
    console.log(umail);
    console.log(phno);
    console.log(pass);

    if(pass === rpass)
        {
            if(!/^\d{10}$/.test(phno))
                {
                    alert("Phone Number should be 10 digits");
                    return; 
                }
           if((pass.length<8) || (!/[A-Z]/.test(pass)) || (!/[a-z]/.test(pass)) || (!/\d/.test(pass)) || ((!/[$@$!%*?&#]/.test(pass))))
            {
                alert("Password must be at least 8 characters long,one uppercase character,one lowercase character,one digit ,one special character");
                return;
            } 
           
            let users={
            "name":nam,
            "email":umail,
            "phno":phno,
            "pass":pass
            }
            fetch('http://localhost:3000/users',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
                ,body:JSON.stringify(users)})
                .then(response => response.json())
                .then(data =>console.log(data))
                .then(error => console.log(error))
            alert("Signup successful");

           }
           else
           {
            alert("Password do not match");
            return;
           }

        }



    
