const cardHolder = document.getElementById('cardholder-name');
const cardNumber = document.getElementById('card-number');
const expiry = Array.from(document.querySelectorAll('.expiry'));
const cvc = document.getElementById('cvc');
const submit = document.getElementById('submit');
const nameOnCard = document.querySelector('.cardholder-display');
const numOnCard = document.querySelector('.card-number-display');
const expMM = document.querySelector('.expiry-month-display');
const expYY = document.querySelector('.expiry-year-display');
const cvcDisplay = document.querySelector('.cvc-display');
const thankYou = document.getElementById('thank-you-header');
const thankYouSection = document.getElementById('thank-you');
const continueButton = document.getElementById('continue-btn');
const form = document.getElementById('myForm');
const expiryErrMsg = document.querySelector('.expiry-error')

function inputName(){
  nameOnCard.innerHTML = cardHolder.value
  thankYou.innerHTML = `Thank You ${cardHolder.value}`
  if(nameOnCard.innerHTML === ""){
   nameOnCard.innerHTML = cardHolder.placeholder
  }
}

function inputCardNum(){
  let cardNumberInput =  cardNumber.value
  // Do not allow users to write invalid characters
  let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "")
  formattedCardNumber = formattedCardNumber.substring(0, 16)
  // Split the card number in groups of 4
  let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
  if(cardNumberSections !== null){
     formattedCardNumber = cardNumberSections.join(" ");
    
  }

// if the formatted card number is different from what is shown
   if(cardNumberInput !== formattedCardNumber){
     cardNumber.value = formattedCardNumber ;
   }
   numOnCard.innerHTML = cardNumber.value
   if(cardNumber.value === ""){
     numOnCard.innerHTML = cardNumber.placeholder
   }
}

function inputMM() {
  let formattedMM = expiry[0].value
  formattedMM = formattedMM.substring(0,2)
  expiry[0].value = formattedMM
  if(expiry[0].value === ""){
  expMM.innerHTML = "00";
  } else {
    expMM.innerHTML = expiry[0].value
  }
}

function inputYY(){
  let formattedYY = expiry[1].value
  formattedYY = formattedYY.substring(0,2)
  expiry[1].value = formattedYY
  if(expiry[1].value === ""){
  expYY.innerHTML = "00";
  } else {
    expYY.innerHTML = expiry[1].value
  }
}

function inputCvc(){
  let formattedCVC = cvc.value
  formattedCVC = formattedCVC.substring(0,3)
  cvc.value = formattedCVC
  if(cvc.value === ""){
    cvcDisplay.innerHTML ='000'
  } else {
    cvcDisplay.innerHTML = cvc.value
  }
}

function massValidate(){
  
  function validateName(){
    let cardHolderExp = /^[A-Z a-z]+$/;
    let errorMsg = document.getElementById('errorMsg')
    if(cardHolder.value.match(cardHolderExp)){
    errorMsg.textContent =""
    }else{
      errorMsg.textContent = 'Please Enter Card Holder Name'
    }
  }

  function validateCard(){
    let cardNumError = document.getElementById('card-num-error')
    if(cardNumber.value.length > 0 && cardNumber.value.length < 16 ){
      cardNumError.innerHTML = 'Wrong Format'
    } else if(cardNumber.value === ""){
      cardNumError.innerHTML = "Can't be blank"
    } else{
      cardNumError.innerHTML = ""
    }
    
  }

  function validateExpiry(){
    let expMonth = /^(0[1-9]|1[0-2])$/;
    let expYear = /^[0-9]{2}$/;

    if(expiry[0].value.match(expMonth)){
      expiryErrMsg.innerHTML = ""
    } else if(expiry[0].value.match(expMonth )&& expiry[1].value.match(expYear)){
     expiryErrMsg.innerHTML = ""
    } else if(expiry[0] === ""){
      expiryErrMsg.innerHTML = "Can't be blank"
    } else{
      expiryErrMsg.innerHTML = "Wrong Format!"
    }
   
  }

  function validateCvc (){
    let cvcErrorMsg = document.getElementById('error-cvc')
    let cvcExp = /^[0-9]{3}$/;
    if(cvc.value === ""){
   cvcErrorMsg.innerHTML = "Can't be blank"
    } else if(cvc.value.match(cvcExp)){
      cvcErrorMsg.innerHTML = ""
    }else{
      cvcErrorMsg.innerHTML = "Wrong Format!"
    }

  
  }

  validateCard();
  validateName();
  validateExpiry();
  validateCvc();

  let cvcExp = /^[0-9]{3}$/
  let expMonth = /^(0[1-9]|1[0-2])$/;
  let expYear = /^[0-9]{2}$/

  if(nameOnCard.innerHTML === cardHolder.placeholder ||
    cardHolder.value === "" ||
    numOnCard.innerHTML === numOnCard.placeholder || 
    cardNumber.value === "" ||
    expMM.innerHTML === "00"|| expYY.innerHTML === "00" ||
    cvcDisplay.innerHTML === "000"|| 
     (cardNumber.value.length > 0 
       && cardNumber.value.length < 16) || (cvc.value.length > 0 && cvc.value.length < 3)
       || (expiry[0].value.length > 0 && expiry[0].value.length < 2) 
       || (expiry[1].value.length > 0 && expiry[1].value.length < 2) 
       
        ){
      return false
    } else {
      return true
    }


    
  }

  
 

submit.addEventListener("click", function (){
  massValidate();

  if(massValidate() === false){
event.preventDefault()
  } else {
    event.preventDefault()
  form.classList.add("hidden")
  thankYouSection.classList.remove('hidden')
  event.preventDefault()
    // console.log((cardNumber.value > 0  && cardNumber.value < 16))
    
  }
})


continueButton.addEventListener("click", function (e){
  e.preventDefault()
  thankYouSection.classList.add("hidden")
  form.classList.remove("hidden")
  nameOnCard.innerHTML = cardHolder.placeholder
  numOnCard.innerHTML = cardNumber.placeholder
  expMM.innerHTML = "00"
  expYY.innerHTML = "00"
  cvcDisplay.innerHTML = "000"
  cardHolder.value = ""
  cardNumber.value = ""
  expiry[0].value = ""
  expiry[1].value = ""
  cvc.value = ""
  expiryErrMsg.innerHTML = ""
})



const numbers = "1,2,3,4,5,6,7"

console.log( numbers)
 