/* returns boolean */
function testLength(value, len){
		
		if(value.length == len){
			return true;
		}
		
		else{
			return false;
		}
}

/* returns boolean */
function testNumber(value){
	
	var test = parseInt(value);
	
	if(isNaN(value) == false){ 
		if(test != "" ){
			return true; }
		else return false;
	}
	else { return false; }
}

var creditForm = '<div>' + 
		'First Name: ' +
		'<input type="text" name="firstName" id="fName" required><br><br>' +
		'Last Name: ' +
		'<input type="text" name="lastName" id="lName" required><br><br>'+	
		'Address: ' +
		'<input type="text" name="address" id="address" required><br><br>' +
		'City: ' +
		'<input type="text" name="city" id="city" required><br><br>'+
		'ZIP: ' +
		'<input type="text" name="zip" id="zip" required><br><br>' +
		'Email Address: ' +
		'<input type="text" name="email" id="eMail" required><br><br>' +
		'Name on Card: ' +
		'<input type="text" name="Cname" id="nameOnCard" required><br><br>' +
		'Card Number: ' +
		'<input type="text" name="Cnumber" id="cardNum" required><br><br>' +
		'<!-- work on -->' +
		'<a target="_blank" href="https://en.wikipedia.org/wiki/Card_security_code">CVV2/CVC: </a>' +
		'<input type="text" name="cvv2/cvc" id="CVC" required><br><br>' +
		'Card Expiration Date: ' +
		'<!-- date field -->' +
		'<input type="date" min="2017-01-01" max="2020-12-31" id="expDate">'+
		'<br><br>' +
		'<!-- select field (drop-down list) state -->' +
		'Select State: '+
		'<select id="state">' +
			'<option value="initial">Select State</option>' +
			'<option value="AL">Alabama</option>' +
			'<option value="AK">Alaska</option>' +
			'<option value="AZ">Arizona</option>' +
			'<option value="AR">Arkansas</option>' +
			'<option value="CA">California</option>' +
			'<option value="CO">Colorado</option>' +
			'<option value="CT">Connecticut</option>' +
			'<option value="DE">Delaware</option>' +
			'<option value="DC">District Of Columbia</option>' +
			'<option value="FL">Florida</option>' +
			'<option value="GA">Georgia</option>' +
			'<option value="HI">Hawaii</option>' +
			'<option value="ID">Idaho</option>' +
			'<option value="IL">Illinois</option>' +
			'<option value="IN">Indiana</option>' +
			'<option value="IA">Iowa</option>' +
			'<option value="KS">Kansas</option>' +
			'<option value="KY">Kentucky</option>' +
			'<option value="LA">Louisiana</option>' +
			'<option value="ME">Maine</option>' +
			'<option value="MD">Maryland</option>' +
			'<option value="MA">Massachusetts</option>' +
			'<option value="MI">Michigan</option>' +
			'<option value="MN">Minnesota</option>' +
			'<option value="MS">Mississippi</option>' +
			'<option value="MO">Missouri</option>' + 
			'<option value="MT">Montana</option>' +
			'<option value="NE">Nebraska</option>' +
			'<option value="NV">Nevada</option>' +
			'<option value="NH">New Hampshire</option>' +
			'<option value="NJ">New Jersey</option>' +
			'<option value="NM">New Mexico</option>' +
			'<option value="NY">New York</option>' +
			'<option value="NC">North Carolina</option>' +
			'<option value="ND">North Dakota</option>' +
			'<option value="OH">Ohio</option>' +
			'<option value="OK">Oklahoma</option>' +
			'<option value="OR">Oregon</option>' + 
			'<option value="PA">Pennsylvania</option>' +
			'<option value="RI">Rhode Island</option>' +
			'<option value="SC">South Carolina</option>' +
			'<option value="SD">South Dakota</option>' +
			'<option value="TN">Tennessee</option>' +
			'<option value="TX">Texas</option>' +
			'<option value="UT">Utah</option>' +
			'<option value="VT">Vermont</option>' +
			'<option value="VA">Virginia</option>' +
			'<option value="WA">Washington</option>' +
			'<option value="WV">West Virginia</option>' +
			'<option value="WI">Wisconsin</option>' +
			'<option value="WY">Wyoming</option>' +
		'</select>' +
		'<br><br>'
		'</div>';
	
var paypalForm = '<div>' +
		'E-mail: ' +
		'<input type="email" name="email" id="eMail" required><br><br>' +
		'Password: ' +
		'<input type="password" name="pass" id="pass" required>' + 
		'</div>';


/* changes form */
function updateFormC(control){
	/* control is radio button being clicked */
	if(control.checked){
		document.getElementById("paymentInfo").innerHTML = creditForm;
	}
}

function updateFormP(control){
	/* control is radio button being clicked */
	if(control.checked){
		document.getElementById("paymentInfo").innerHTML = paypalForm;
	}
}

/* returns boolean */
function validateControl(control, name, length){
	
	var lengthTest=false;
	
	if(testNumber(control) == false){
		alert("Error: " + name + " is not a number");
		return false;
	}
	
	if(testLength(control, length) == false && name=="zip"){
		/* display error message and retrun false */
		alert("ZIP number is incorrect");
		return false;
	}
	
	else if(testLength(control, length) == false && name=="cvc"){
		alert("CVV2 or CVC is incorrect");
		return false;
	}
	
	else return true;
}

/* returns boolean */
function validateCreditCard(value){
	var valueNoWS = value.trim();
	
	var lengthOfValue = false;
	var isNumber = false; 
	var firstDigit = false;

	
	if((valueNoWS.slice(0, 1) == 3) || (valueNoWS.slice(0, 1) == 3) ||
	(valueNoWS.slice(0, 1) == 5) || (valueNoWS.slice(0, 1) == 4)){
		firstDigit = true;
	}
	else{
		/* display error message */
		alert("Not a valid card");
		isNumber = false;
		return false;
	}
	
	/*if AmEx */
	if (valueNoWS.slice(0, 1) == 3){
		if(valueNoWS.length == 15){ 
			lengthOfValue = true; 
		}

		else{
			/* display error message */
			alert("American Express card number must habe 15 digits");
			lengthOfValue = false;
			return false;
		}
	}
	else if (valueNoWS.slice(0, 1) == 6){	
		if(valueNoWS.length == 16) { 
			lengthOfValue = true; 
		}
		
		else{
			alert("Discover card number must habe 16 digits");
			lengthOfValue = false;
			return false;	
		}
	}
	
	else if (valueNoWS.slice(0, 1) == 5){	
		if(valueNoWS.length == 16) { 
			lengthOfValue = true;
		}
		
		else{
			alert("MasterCard number must habe 16 digits");
			lengthOfValue = false;
			return false;
		}
	}

	else if (valueNoWS.slice(0, 1) == 4){	
		if(valueNoWS.length == 16) { 
			lengthOfValue = true;
		}
		
		else{
			alert("Visa card number must habe 16 digits");
			lengthOfValue = false;
			return false;	
		}			
	}	
	
	
	if(testNumber(valueNoWS) == true){ 
		isNumber = true; 
	}
	else { 
		/* display error message */
		alert("Card has been inputed incorrectly");
		isNumber = false;
		return false;
	}
	

	
	return true;
}

function validateDate(value){
	
	var today = new Date();
	var newVal = new Date(value);
	today.setHours(0,0,0,0);
	
	if(newVal<today){
		alert("Card has already expired; please input a new card number");
		return false;
	}
	
	
	
	else return true;
	
}

function validateEmail(value){
	
	if(/\S+@\S+\.\S+/.test(value) == true){
		return true;
	}
	
	else{
		alert("Email is not valid");
		return false;
	}
}

function validateForm(){
	
	if(document.getElementById("credit").checked == true){
		
		var fName = document.getElementById("fName").value;
		var lName = document.getElementById("lName").value;
		var address = document.getElementById("address").value;
		var cardNum = document.getElementById("cardNum").value;
		var zip = document.getElementById("zip").value;
		var eMail = document.getElementById("eMail").value;
		var nameOnCard = document.getElementById("nameOnCard").value;
		var CVV2CVC = document.getElementById("CVC").value;
		var state = document.getElementById("state").value;
		var expDate = document.getElementById("expDate").value;
			
		if(validateCreditCard(cardNum) == false){ 
			alert("Payment failed to send");
			return false;}
		if(validateControl(CVV2CVC, "cvc", 3) == false) {
			alert("Payment failed to send");
			return false;}
		if(validateControl(zip, "zip", 5) == false) {
			alert("Payment failed to send");
			return false;}
		if(validateEmail(eMail) == false) {
			alert("Payment failed to send");
			return false;}
		if(validateDate(expDate) == false) {
			alert("Payment failed to send");
			return false;}
		if(validateState(state) == false) {
			alert("Payment failed to send");
			return false;}

		alert("Payment Successfully sent");
		return true;

	}
	
	else if(document.getElementById("paypal").checked == true){
		
		var pass = document.getElementById("pass").value;
		var eMail = document.getElementById("eMail").value;
		
		if(validateEmail(eMail) && validatePassword(pass, 8)){
			alert("Payment Successfully sent");
			return true;
		}
		else{
			alert("Payment cannot be sent");
			return false;
		}
		
	
}

function validatePassword(value, minLength){
	
	var lengthOfValue = value.length;
	
	if(testLength(value, minLength)){
		return true;
	}
	
	else if(lengthOfValue>minLength){
		return true;
	}
	
	else{
		alert("Error: password does not excede minimum length: 8");
		return false; 
	}
}

function validateState(){
	
	var state = document.getElementById("state").value;
	
	if(state == "initial"){
		alert("Please select your current State");
		return false;
	}
	
	else return true;
	
}}