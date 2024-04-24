const accountId = 144553
let accountEmail = "aquibak011@gmail.com"
var accountPassword = "12345"
accountCity = "Bhiwandi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ak011@.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])