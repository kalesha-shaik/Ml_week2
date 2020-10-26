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
var food;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    food = JSON.parse(xhttp.responseText);
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


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       health_issues = JSON.parse(xhttp.responseText);
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();

function taketheinput(event){
    if(event.key === "Enter"){
        message.innerHTML += user.outerHTML;
        msgno += 1;
        message.lastChild.id = msg_no;
        message.lastChild.childNodes[3].textContent = input.value;
        processinput(input.value.toLowerCase());
        input.value = "";
    }
}

function processinput(inputvalue){
    if(inputvalue!=""){
        message.innerHTML += bot_block.outerHTML;
        msgno += 1;
        message.lastChild.id = msg_no ;
        message.lastChild.childNodes[3].textContent = botreply(inputvalue)
    }
}
function botreply(inputvalue){
    res = inputvalue.match(/(food_items)|(\w+)/g);
    var result = "";
    if(result.includes(inputvalue)==false && flag==false){
        flag = true;
        return "Hello! "+inputvalue.toUpperCase()+" Enter Your name";
    }
    if(res.includes("food_items yesno tables booking")){
        return restfood.food_items;
	}
	if(res.includes("tables")){
        return restfood.tables;
    }
    
    if(res.includes("thankyou")){
        return "Hope I am helpful.."
    }
    inp = "";
    res.forEach(function(product){
       if(healthIssues.hasOwnProperty(product)){
       inp= "Enter here";
       restfood = rest[product];
       }
    })
    if(inp){
       return inp;
    }
	return "Hey..! i am a bot. i can not correct my self. make sure you entered correct input  :-)" ;
}
