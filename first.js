document.getElementById('myform').addEventListener('submit',(event)=>{
    event.preventDefault();

    var namesk= document.getElementById("name").value;
    var mobilesk= document.getElementById("mobile").value;
    var emailsk= document.getElementById("email").value;
    var addresssk= document.getElementById("address").value;
    
    const v1 =document.getElementById("name-r8");
    v1.innerHTML=namesk;
    const v2 =document.getElementById("mobile-r8");
    v2.innerHTML=mobilesk;
    const v3 =document.getElementById("email-r8");
    v3.innerHTML=emailsk;
    document.getElementById("address-r8").innerHTML=addresssk;
  

   // console.log(name,email,pass);
})