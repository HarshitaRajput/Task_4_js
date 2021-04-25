


function data(){
  var n1=document.f1.fn.value;
  var n2=document.f1.ln.value;
 
  console.log("Name: ",n1,n2);
  
  var rnval= document.f1.rn.value;
  var alphanum = /^[0-9a-zA-Z]+$/;
  for (var i=0;i<rnval.length;i++){
    if (rnval[i].match(alphanum)){
      continue;
    }
    else{
      alert("registeration number not valid");
      break;
    }
  }
  console.log("Registeration number: ",rnval);
  console.log("Birthdate: ",document.f1.dob.value);
  
  var phonenum=document.f1.phnum.value;
  var num=/^[0-9]+$/;
  for (var j=0;j<phonenum.length;j++){
  if (phonenum.match(num) && phonenum.length===10){
    console.log("Phone number: ",phonenum);
    
  }
  else {
    alert("please enter valid phone number");
    break;
    
}
  console.log("Email-id: ",document.f1.mailid.value);

  
return alert("success!");

}
}

