/*CHECK IF NUMBER IS FROM USA*/ 
function telephoneCheck(str) {
  if(str.match(/[a-z]/g)){
    return false;
  } else if(str.match(/^1*\s*(\(\d{3}\)|\d{3})(\s|-)*\d{3}(\s|-)*\d{4}$/)){
    console.log(str.match(/^1*(\s|\()*\d{3}(\s|-)*\d{3}(\s|-)*\d{4}/))
    return true;  
  } else{
    return false;
  }
  console.log(str.match(/^1*.*\d{3}.*\d{3}.*\d{4}/))
  return false;
}

telephoneCheck("1 555)555-5555");
