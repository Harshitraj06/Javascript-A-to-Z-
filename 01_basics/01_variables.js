  const accountId = 14321;
  let accountEmail = "raj@gmail.com";
  var accountPassword = "12232";
  accountCity = "Noida";

  /* 
  prefer not to use var 
  because of issue in block scope and functional scope
  */

  console.log(accountId);

  console.table([accountId, accountEmail, accountPassword, accountCity]);