/*GIVE A PRICE, AN AMOUNT GIVEN AND AN ARRAY WITH BILLS AND THEIR AMOUNT IN THE CASH REGISTER AND RETURN WHAT REMAINS IN THE CASH REGISTER AFTER GIVING THE CHANGE*/

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let result = 0;
  for(let d = 0; d < cid.length; d++){
    result += cid[d][1];
  }
  if(change === result){
    return {status: "CLOSED", change: cid}
  }
  let changeGiven = [];
  let coinName;
  let coinValue;
  let possibilities = [
    {name: "ONE HUNDRED", amount: 100},
    {name: "TWENTY", amount: 20},
    {name: "TEN", amount: 10},
    {name: "FIVE", amount: 5},
    {name: "ONE", amount: 1},
    {name: "QUARTER", amount: 0.25},
    {name: "DIME", amount: 0.1},
    {name: "NICKEL", amount: 0.05},
    {name: "PENNY", amount: 0.01}
  ]
  
  for(let i=0; i < possibilities.length; i++){
    //if the change is still there or equal to zero and if there is cash of this nature in the box
    if(change - possibilities[i].amount >= 0 && cid[cid.length-1-i][1] - possibilities[i].amount >= 0){
      coinName = possibilities[i].name;
      coinValue = possibilities[i].amount;
      while(change - coinValue >= 0 && cid[cid.length-1-i][1] - coinValue >= 0){
        //use these bills to give the change
        change = (change - coinValue).toFixed(2);
        //take the bill from cid
        cid[cid.length-1-i][1] = (cid[cid.length-1-i][1] - coinValue).toFixed(2);
        //put it in the hand
        if(changeGiven.length !== 0 && changeGiven[changeGiven.length - 1][0] == coinName){
          changeGiven[changeGiven.length - 1][1] += coinValue;
        } else{
          changeGiven.push([coinName, coinValue]);
        }      
        //while it's still possible
      } ;
    }
  }
  for(let x = 0; x < changeGiven.length; x++){
    changeGiven[x][1] = parseFloat(changeGiven[x][1].toFixed(2));
  }
    if(change > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
    return {status: "OPEN", change: changeGiven};
  }
    
}


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
