// // ========== EXERCISE 1: KEYLESS CAR ========== //

function checkDriverAge(age) {

    if(age < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age == 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (age > 18) {
        console.log("You are old enough to drive, Powering On. Enjoy the ride!");
    }

}

checkDriverAge(18);


// // ========== EXERCISE 2: What’s In My Wallet ? ========== //


function changeEnough([quarters, dimes, nickels, pennies], price) {
    let wallet = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);
    console.log(wallet)

    if (wallet >= price) {
        console.log(true)
        return true
    }
    else {
        console.log(false)
        return false;
    }
}

changeEnough([0, 0, 20, 5], 0.75);


// // ========== Exercise 3: Find The Multiples Of 23 ========== //

function multipleof23() {
    let multiple = 0;
    let arr = []

    while(multiple <= 500) {
        arr.push(multiple);
        multiple += 23;
    }
    console.log(arr);
    let total = 0;

    for(i in arr) {
        total += arr[i];
    }
    console.log(total)
}

multipleof23();


// // ========== Exercise 4: Amazon Shopping ========== //

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
    let item = prompt("Please check your item");
    if (item in amazonBasket) {
        console.log(`Your item '${item}' is in your Amazon basket`);
    } else { 
        console.log(`I could not find the item '${item}' in your Amazon basket`)
    }
}

checkBasket();


// // ========== Exercise 5: Shopping List ========== //

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]


function myBill() {
    let total = 0;
    for (i in shoppingList) {
        console.log(shoppingList[i])
        if(stock[shoppingList[i]] > 0) {
            total += prices[shoppingList[i]];
            stock[shoppingList[i]]--
        }
    }
    console.log(total)
    console.log(stock)
}

myBill(shoppingList);


// ========== Exercise 6: TIPS ========== //


function tip(bill) {

    let tip = 0;

    if(bill < 50) {
        tip = bill * 0.2;
    } else if (bill >= 50 && bill <= 200) {
        tip = bill * 0.15
    } else if (bill > 200) {
        tip = bill * 0.1;
    }

    let total = bill + tip;
    console.log(`Your tip is ${tip}`);
    console.log(`Your total bill, tip included, is ${total}`);

}

tip(40);


// ========== Exercise 7: VACATION COSTS ========== //


function hotel_cost() {

    let numNights = parseInt(prompt("Please type in the number of nights you'll stay with us"), 10);

    while (isNaN(numNights)) {
        numNights = parseInt(prompt("Please type in a valid NUMBER of nights"), 10);
    }
    
    return totalNumNights = numNights * 140;

}

function plane_ride_cost() {

    let destination = {
        Paris: 220,
        London: 183,
        Other: 300
    }

    let regex = /^[a-z]+$/gi
    let userchoice = prompt("Please type in your destination using only letters")

    while(regex.test(userchoice) == false) {
        userchoice = prompt("Please type in your destination using only letters")
        console.log(typeof(userchoice))
        console.log(userchoice) 
    }

    if (userchoice in destination) {
        console.log(destination[userchoice])
    } else { 
        userchoice = "Other";
        console.log(destination[userchoice])
    }


    return totalPlaneRide = destination[userchoice];
}


function rental_car_cost() {
    
    let carDays = parseInt(prompt("Please type in the number of days you'll rent a car"), 10);

    while (isNaN(carDays)) {
        carDays = parseInt(prompt("Please type in a valid NUMBER of days for the car rent"), 10);
    }
    
    let totalCarDays = carDays * 40;

    if (carDays > 10) {
        let discount = totalCarDays * 0.05
        totalCarDays -= discount;
    }

    return totalCarDays;
}




function total_vacation_cost() {

    let hotelfunc = hotel_cost();
    let planefunc = plane_ride_cost();
    let carfunc = rental_car_cost();

    console.log(`Your hotel will cost: $${hotelfunc}. Your plane ticket will cost $${planefunc} and your car rental will cost $${carfunc}`)
}

total_vacation_cost();