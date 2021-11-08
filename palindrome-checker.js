function palindrome(str) {
  str = str.toLowerCase();
  str = str.match(/[a-z]|[0-9]/g);
  console.log(str);
  for(let i = 0; i < str.length/2; i++){
    if(str[i] !== str[str.length - 1 - i]){
      console.log(str[i] !== str[str.length - 1 - i]);
      return false;
    }
  }
  return true;
}

palindrome("_eye");
