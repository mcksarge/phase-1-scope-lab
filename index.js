// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = '';

//Makes customer name upper case
function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}

//Creates a global variable when called
function setBestCustomer () {
    bestCustomer = 'not bob';
}

//Changes best customer
function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'bobby boy'
}