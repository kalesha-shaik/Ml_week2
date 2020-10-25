messages = document.getElementById('messages');
input = document.getElementById('input');
bot = document.getElementById('bot');
user = document.getElementById('user');

msgno = 0;

var flag=false;
var loadFile = function(event) {
	var image = document.getElementById('myphoto');
	image.src = URL.createObjectURL(event.target.files[0]);
};
var plants;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    plants = JSON.parse(xhttp.responseText);
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();


function taketheinput(event) {
	if(event.key === "Enter"){
		messages.innerHTML += user.outerHTML;
		msgno += 1;
		messages.lastChild.id = msgno;
		messages.lastChild.childNodes[3].textContent = input.value;
		processinput(input.value.toLowerCase());
		input.value = "";

	}
}


function processinput(inputval){
	if(inputval!=""){
		messages.innerHTML += bot.outerHTML
		msgno += 1
		messages.lastChild.id = msgno
		messages.lastChild.childNodes[3].textContent = reply(inputval)
	}
}
function reply(inputval) {
	result = inputval.match(/(how)|(\w+)/g)
	var poss = "";
	if(poss.includes(inputval)==false && flag==false){
		flag=true;
		return "Hi, "+inputval.toLowerCase()+  " please enter the item you want to eat. biryani, icecream, roti, vegrice, these are available now."
   }
	if(result.includes("kalesha")){
		return "please enter the item you want to eat. biryani, icecream, roti, vegrice, these are available now."
	}
	if(result.includes("biryani")){
		return "if you want to add another item type 'yes' else 'no'"
	}
	if(result.includes("icecream")){
		return "if you want to add another item type 'yes' else 'no'"
	}
	if(result.includes("roti")){
		return "if you want to add another item type 'yes' else 'no'"
	}
	if(result.includes("veg-rice")){
		return "if you want to add another item type 'yes' else 'no'"
	}
	if(result.includes("yes")){
		return "please enter the item you want to eat biryani, icecream, roti, vegrice, these are available now."
	}
	if(result.includes("no")){
		return "please tell us how many are you..?  maximum limit per table is 6."
	}
	if(result.includes("1")){
		return "please select a table. 10,14,20,19,26 these are availble as per your requirements"
	}
	if(result.includes("2")){
		return "please select a table. 10,14,20,19,26 these are availble as per your requirements"
	}
	if(result.includes("3")){
		return "please select a table. 10,14,20,19,26 these are availble as per your requirements"
	}
	if(result.includes("4")){
		return "please select a table. 10,14,20,19,26 these are availble as per your requirements"
	}
	if(result.includes("5")){
		return "please select a table. 10,14,20,19,26 these are availble as per your requirements"
	}
	if(result.includes("6")){
		return "please select a table.10,14,20,19,26 these are availble as per your requirements"
	}
	if(result.includes("10")){
		return "Thank you we booked 10 table for you. food will be prepared and bring to your table soon.";
	}
	if(result.includes("14")){
		return "Thank you we booked 14 table for you. food will be prepared and bring to your table soon.";
	}
	if(result.includes("20")){
		return "Thank you we booked 20 table for you. food will be prepared and bring to your table soon.";
	}
	if(result.includes("19")){
		return "Thank you we booked 19 table for you. food will be prepared and bring to your table soon.";
	}
	if(result.includes("26")){
		return "Thank you we booked 26 table for you. food will be prepared and bring to your table soon.";
	}
	if(result.includes("thankyou")){
		return "have a great day, happy eating"
	}
	inp = "";
    res.forEach(function(product){
       inp= "Enter the details you want to know like foods_to_eat, foods_to_avoid ";
       
    })
	if(inp){
		return inp;
	 }
	return "Hey..! i am a bot. i can not correct my self. make sure you entered correct input  :-)" ;
}