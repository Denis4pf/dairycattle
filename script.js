milkProductions = [];

class MilkProduction {
    constructor(id, quantity, shed, date) {
        this.id = id;
        this.quantity = quantity;
        this.shed = shed;
        this.date = date;

    }

}

function submitFunction() {
    let quantityShedA = document.getElementById("shedA").value;
    let quantityShedB = document.getElementById("shedB").value;
    let quantityShedC = document.getElementById("shedC").value;
    let quantityShedD = document.getElementById("shedD").value;
    let quantityShedE = document.getElementById("shedE").value;


    let milkProductionshedA = new MilkProduction(1, quantityShedA, "A", new Date());
    let milkProductionshedB = new MilkProduction(2, quantityShedB, "B", new Date());
    let milkProductionshedC = new MilkProduction(3, quantityShedC, "C", new Date());
    let milkProductionshedD = new MilkProduction(4, quantityShedD, "D", new Date());
    let milkProductionshedE = new MilkProduction(5, quantityShedE, "E", new Date());

    milkProductions.push(milkProductionshedA);
    milkProductions.push(milkProductionshedB);
    milkProductions.push(milkProductionshedC);
    milkProductions.push(milkProductionshedD);
    milkProductions.push(milkProductionshedE);

    alert("submitted");
}


function totalProduction() {

    // loop through all the itmes in the milk productions array

    for (let i = 0; i < milkProductions.length; i++) {
        // get the production at index
        let production = milkProductions[i];
        //UPDATE THE SHED QUANTITIES PARAGRAPHS
        if (production.shed == "A") {
            let text = "Your production in Shed A is " + production.quantity + " litres per day";
            document.getElementById("productionShedA").innerHTML = text;
        }
        if (production.shed == "B") {
            let text = "Your production in Shed B is " + production.quantity + " litres per day";
            document.getElementById("productionShedB").innerHTML = text;
        }
        if (production.shed == "C") {
            let text = "Your production in Shed C is " + production.quantity + " litres per day";
            document.getElementById("productionShedC").innerHTML = text;
        }
        if (production.shed == "D") {
            let text = "Your production in Shed D is " + production.quantity + " litres per day";
            document.getElementById("productionShedD").innerHTML = text;
        }
        if (production.shed == "E") {
            let text = "Your production in Shed E is " + production.quantity + " litres per day";
            document.getElementById("productionShedE").innerHTML = text;
        }

    }

}


// leap year
document.getElementById("totals").innerHTML = "<p>The total production is " + total + " litres per day</p>"

incomeOverTime(45, 7);
incomeOverTime(45, 365);
leapYearReport();
//getIncomeOverTime()




var display_incomeOverTime_sales = document.getElementById("display_incomeOverTime_sales");


var getIncomeOverTime = function () {
    //Declare an array that will hold income and time
    var sellingPriceAndTIme = [];

    //we push the data that the user will give into the array.
    sellingPriceAndTIme.push(document.getElementById("timeLine").value);
    sellingPriceAndTIme.push(document.getElementById("price").value);
    //the values of the array are hereby tanfered into variables a,b,c,d
    var [timeLine, sellingPrice] = sellingPriceAndTIme;
    display_incomeOverTime_sales = document.getElementById("display_incomeOverTime_sales");
    if (timeLine.length === 0 || sellingPrice.length === 0) {
        display_incomeOverTime_sales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
    } else {
        //we get to convert the user input from string variables, to number variables
        time = parseFloat(timeLine);
        sell = parseFloat(sellingPrice);
        console.log(time, sell)
        incomeOverTime(sell, time);
    }

}

var incomeOverTime = function (sellingPrice, time) {
    if (time === 7) {
        document.getElementById("display_incomeOverTime_weekly").innerHTML = "<p>Your weekly income will be Ksh " + (1876 * sellingPrice * time) + " </p>"

    }
    else if (time === 365) {
        document.getElementById("display_incomeOverTime_yearly").innerHTML = "<p>Your yearly income will be Ksh " + (1876 * sellingPrice * time) + " </p>"

    }
}



var leapYearReport = function () {
    var months = {
        January: 31,
        February: 29,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    }

    monthArray = Object.keys(months);
    monthDayArray = Object.values(months);

    for (var a = 0; a < 12; a++) {
        //console.log(`Your income for   ${monthArray[a]}   is   ${(84420 * monthDayArray[a])}`);

        // var leapYearReport=  document.getElementById("leapyear");

        var para = document.createElement("p");
        para.setAttribute("id", `${monthArray[a]}`);
        para.innerHTML = `Your income for   ${monthArray[a]}   is   ${(84420 * monthDayArray[a])}`               // Insert text
        document.getElementById("leapyear").appendChild(para);
    }



}

var report = function () {

}

var comparePriceChange = function () {
    incomeOverTime(),
        incomeOverTime()
}
var reset = function () {
    location.reload();
}



function generateYearlyReport(buying_rate) {
    ul.innerHTML = ''
    Object.keys(days_in_months).forEach((key, index) => {
        var list1 = document.createElement('li');
        ul.appendChild(list1);
        list1.innerHTML = `Total income for ${key} is: ${(days_in_months[key] * total_production) * buying_rate}`;
    })
}