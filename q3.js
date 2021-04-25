var tbl=document.getElementById("table");
    
    function dataAdder(){
      
      var row=tbl.insertRow();
      let name=document.f2.f2n.value;
      let num=document.f2.f2c.value;
      let mail=document.f2.mail.value;
      let mov=document.f2.mov.value;
      let gld=document.f2.gold.value;
      let slv=document.f2.slvr.value;
      var total=(gld*300)+(slv*200);
      var dataArray=[name,num,mail,mov,gld,slv,total];
      row.insertCell(0).innerHTML=(document.getElementById("table").rows.length)-1;
      for(var i=0;i<dataArray.length;i++){
        row.insertCell(i+1).innerHTML=dataArray[i];        
      }
      
      //row.insertCell(1).innerHTML=name;
      //row.insertCell(2).innerHTML=num;
      document.f2.f2n.value="";
      document.f2.f2c.value="";
      document.f2.f2c.value="";
      document.f2.mail.value="";
      document.f2.mov.value="";
      document.f2.gold.value="";
      document.f2.slvr.value="";
      document.f2.ccno.value="";
      document.f2.mnth.value="";
      document.f2.yr.value="";
      
      return false;
    }