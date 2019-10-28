console.log('=========WELCOME==========');
//the word section
console.log('Discounts will be offered with quanities over 10 items.\r\n The discounts offers are as follows:\r\n 10 - 25 items: 10 cents off \r\n 25 - 50 items: 25 cents off \r\n 50+     items: 50 cents off.\r\n \r\n \r\n \r\n  Items to purchase include:\r\n 1. Product ID 1 @ $1 per item. \r\n 2. Product ID 2 @ $3 per item. \r\n 3. Product ID 3 @ $5 per item. \r\n \r\nAdd item to list , example: "1 item of Product ID 1 @ $1 per item.". Type the word done,to exit.');
var items  = [];
var number_of_items = [];
var id = [];
var standard_input = process.stdin;
var grandtotal = [];
var granttotalwithdiscount = [];
function cal()
{
for(let i = 0; i<items.length; i++)
{
	var xy = items[i];
	var xyz = xy.split(" ");
	number_of_items.push(Number(xyz[0]));
	id.push(Number(xyz[5]));
}
return number_of_items , id;
}

standard_input.setEncoding('utf-8');
standard_input.on('data',function(data)
{
if(data == 'done\r\n')
{
cal();
console.log('\r\n \r\nYour orders: \r\n');
for (let i = 0; i<number_of_items.length; i++)
{
	if(id[i] == 1)
	{
		console.log(number_of_items[i]+ ' items of Product ID '+ id[i]+ ' @ $1  per item.\r\n')
	}
	else if(id[i]==2)
	{
		console.log(number_of_items[i]+ ' items of Product ID '+ id[i]+ ' @ $3 per item.\r\n')
	}
	else if(id[i]==3)
	{
		console.log(number_of_items[i]+ ' items of Product ID '+ id[i]+ ' @ $5 per item.\r\n')
	}
	else
	{
		console.log("Error ..check your input.")
		process.exit();
	}
}
console.log("\r\n Your order calculation:\r\n");
for(let i = 0; i<number_of_items.length; i++)
{
	if(number_of_items[i]<10)
	{
	if( id[i]==1)
	{
			console.log(' '+number_of_items[i] + ' * $1 = $'+ number_of_items[i]+' (no discounts)');
			grandtotal.push(number_of_items[i]);
			granttotalwithdiscount.push(number_of_items[i]);
	}else if(id[i]==2)
	{
		console.log(' '+number_of_items[i] + ' * $3 = $'+ number_of_items[i]+' (no discounts)');
			grandtotal.push(number_of_items[i]*3);
			granttotalwithdiscount.push(number_of_items[i]*3);
			
	}
	else if(id[i] == 3)
	{
		console.log(' '+number_of_items[i] + ' * $5 = $'+ number_of_items[i]+' (no discounts)');
			grandtotal.push(number_of_items[i]*5);
			granttotalwithdiscount.push(number_of_items[i]*5);
			
	}	
	}else if(number_of_items[i]>10 && number_of_items[i]<25)
	{
		if( id[i]==1)
	{
			console.log(' '+number_of_items[i] + ' * $1 = $'+ number_of_items[i]*1+' (total); '+number_of_items[i] +' * 0.10 = $'+number_of_items[i]*0.10+' (discount); $'+number_of_items[i]*1+' - $'+number_of_items[i]*0.10 +' = $'+(number_of_items[i]*1 - number_of_items[i]*0.10)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*1);
			granttotalwithdiscount.push(number_of_items[i]*1 - number_of_items[i]*0.10);
	
	}else if(id[i]==2)
	{
		
				console.log(' '+number_of_items[i] + ' * $3 = $'+ number_of_items[i]*3+' (total); '+number_of_items[i] +' * 0.10 = $'+number_of_items[i]*0.10+' (discount); $'+number_of_items[i]*3+' - $'+number_of_items[i]*0.10 +' = $'+(number_of_items[i]*3 - number_of_items[i]*0.10)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*3);
			granttotalwithdiscount.push(number_of_items[i]*3 - number_of_items[i]*0.10);
	}
	else if(id[i] == 3)
	{
		console.log(' '+number_of_items[i] + ' * $5 = $'+ number_of_items[i]*5+' (total); '+number_of_items[i] +' * 0.10 = $'+number_of_items[i]*0.10+' (discount); $'+number_of_items[i]*5+' - $'+number_of_items[i]*0.10 +' = $'+(number_of_items[i]*5 - number_of_items[i]*0.10)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*5);
			granttotalwithdiscount.push(number_of_items[i]*5 - number_of_items[i]*0.50);
			
	}
	}else if(number_of_items[i]>25 && number_of_items[i]<50)
	{
		if( id[i]==1)
	{
			console.log(' '+number_of_items[i] + ' * $1 = $'+ number_of_items[i]*1+' (total); '+number_of_items[i] +' * 0.25 = $'+number_of_items[i]*0.25+' (discount); $'+number_of_items[i]*1+' - $'+number_of_items[i]*0.25 +' = $'+(number_of_items[i]*1 - number_of_items[i]*0.25)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*1);
			granttotalwithdiscount.push(number_of_items[i]*1 - number_of_items[i]*0.25);
	
	}else if(id[i]==2)
	{
		
				console.log('- '+number_of_items[i] + ' * $3 = $'+ number_of_items[i]*3+' (total); '+number_of_items[i] +' * 0.25 = $'+number_of_items[i]*0.25+' (discount); $'+number_of_items[i]*3+' - $'+number_of_items[i]*0.25 +' = $'+(number_of_items[i]*3 - number_of_items[i]*0.25)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*3);
			granttotalwithdiscount.push(number_of_items[i]*3 - number_of_items[i]*0.25);
	}
	else if(id[i] == 3)
	{
		console.log(' '+number_of_items[i] + ' * $5 = $'+ number_of_items[i]*5+' (total); '+number_of_items[i] +' * 0.25 = $'+number_of_items[i]*0.25+' (discount); $'+number_of_items[i]*5+' - $'+number_of_items[i]*0.25 +' = $'+(number_of_items[i]*5 - number_of_items[i]*0.25)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*5);
			granttotalwithdiscount.push(number_of_items[i]*5 - number_of_items[i]*0.25);		
	}
	}
	else if(number_of_items[i]>50){
		if( id[i]==1)
	{
			console.log(' '+number_of_items[i] + ' * $1 = $'+ number_of_items[i]*1+' (total); '+number_of_items[i] +' * 0.5 = $'+number_of_items[i]*0.5+' (discount); $'+number_of_items[i]*1+' - $'+number_of_items[i]*0.5 +' = $'+(number_of_items[i]*1 - number_of_items[i]*0.5)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*1);
			granttotalwithdiscount.push(number_of_items[i]*1 - number_of_items[i]*0.5);
	
	}else if(id[i]==2)
	{
		
				console.log(' '+number_of_items[i] + ' * $3 = $'+ number_of_items[i]*3+' (total); '+number_of_items[i] +' * 0.5 = $'+number_of_items[i]*0.5+' (discount); $'+number_of_items[i]*3+' - $'+number_of_items[i]*0.5 +' = $'+(number_of_items[i]*3 - number_of_items[i]*0.5)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*3);
			granttotalwithdiscount.push(number_of_items[i]*3 - number_of_items[i]*0.5);
	}
	else if(id[i] == 3)
	{
		console.log(' '+number_of_items[i] + ' * $5 = $'+ number_of_items[i]*5+' (total); '+number_of_items[i] +' * 0.5 = $'+number_of_items[i]*0.5+' (discount); $'+number_of_items[i]*5+' - $'+number_of_items[i]*0.5 +' = $'+(number_of_items[i]*5 - number_of_items[i]*0.5)+' (total with discount);');			
				grandtotal.push(number_of_items[i]*5);
			granttotalwithdiscount.push(number_of_items[i]*5 - number_of_items[i]*0.5);		
	}
	}
	else{ console.log('Error occured..Kindly check your input...');
}
}
let r = 0 
for(let i= 0; i<grandtotal.length;i++){
	r = grandtotal[i]+ r;
}
console.log('Grand total = $'+r);
let z = 0;
for(let i= 0; i<granttotalwithdiscount.length  ;i++){
	z = granttotalwithdiscount[i]+ z;
}
console.log('Grand total with Discounts = $'+z);
process.exit();
}
else
{
	if(data.length < 34)
	{
console.log('Error.Kindly follow the example given above.');
	}
	else 
	{
items.push(data);
	}
}
});