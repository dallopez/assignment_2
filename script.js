//var prompter = prompt("what is the total of your bill?");
//document.body.querySelector("#firstTotal").innerHTML=prompter;

//var prompter = prompt("this is your taxed total");
//document.body.querySelector("#taxedTotal").innerHTML=prompter;

var firstTotal = (document.getElementById("firstTotal").value, 10);
var theTax = firstTotal * .07;
var subTotal = firstTotal + theTax;
var theTip = subTotal * .05;
var finalTotal = subTotal + theTip;

function calc()
{
  return theTax

}