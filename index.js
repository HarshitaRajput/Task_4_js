var currentCustomer = 0;
		var totalCharges = 0;
    var tbl=document.getElementById("table");
        function calculate_Charges(hrs){
        
			  var charges = 2.00;
			  if (hrs > 3){
			  	charges += Math.ceil(hrs - 3) * 0.5;
         } //The garage charges an additional $0.50 per hour for each hour or part thereof in excess of three hours.
			  if (charges > 10){ //The maximum charge for any given 24-hour period is $10.00
			  	charges = 10;
        }
			    totalCharges += charges;          
		    	return charges;
          }
		  function printvalue(){
				let hrs=prompt("enter number of hours parked");
        let chrg=calculate_Charges(hrs);
        let row=tbl.insertRow();
        row.insertCell(0).innerHTML=(document.getElementById("table").rows.length)-1;
        row.insertCell(1).innerHTML=hrs;
        row.insertCell(2).innerHTML=chrg;
         
        
        
		  }