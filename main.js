


function calculateTip() {
  const initialBill = document.getElementById('initialBill').value;
  const tipPercentage = (document.getElementById('tipPercentage').value) / 100;
  
// $100  2% > 0.02    0.02 * 100 = $2 tip
  // find tip based off of total bill andthe tip percentage

  const tip = initialBill * tipPercentage;

  //get id from text box and make it equal to tip^
  document.getElementById('tip').value = tip;

  
  // target value of number of people text input and make it a variable
  // id= "numPeople" <ID of text input
  const numOfPeople = document.getElementById('numPeople').value;
  
  const tipPerPerson = tip / numOfPeople;

   document.getElementById('tipPerPerson').value = tipPerPerson;



  //calculate final bill < total bill with total tip
  const finalBill = eval(initialBill) + eval(tip);
  document.getElementById('finalBill').value = finalBill;  



  //calculate final bill that each person will pay including tip
  // id = "finalBillPerPerson" 
  const finalBillPerPerson = finalBill / numOfPeople;
  document.getElementById('finalBillPerPerson').value = finalBillPerPerson;  


}