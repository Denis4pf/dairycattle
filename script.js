var totalProduction = function () {
    //create an array variable to store the sales per shade in one day
    var shades = [];


    //we push the data that the user will give into the array.
    shades.push(document.getElementById("shade_a").value);
    shades.push(document.getElementById("shade_b").value);
    shades.push(document.getElementById("shade_c").value);
    shades.push(document.getElementById("shade_d").value);
    shades.push(document.getElementById("shade_e").value);


    //the values of the array are hereby tanfered into variables a,b,c,d
    var [a, b, c, d, e] = shades;

    var displayShadesSales = document.getElementById("display_shades_sales");
    if (a.length === 0 || b.length === 0 || c.length === 0 || d.length === 0) {
        displayShadesSales.innerHTML = "<p>Please fill in the values to calculate sales</p>"
    } else {
        //we get to convert the user input from string variables, to number variables
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        d = parseFloat(d);
        e = parseFloat(e);
        totalProductionCalculation(a, b, c, d, e)
    }
}

var totalProductionCalculation = function (a, b, c, d, e) {

    var total = a + b + c + d + e;

    document.getElementById("results").innerHTML = " <p>Your production in Shed A " +
        a + " litres per day <br> Your production in Shed B " +
        b + " litres per day <br> Your production in Shed C " +
        c + " litres per day <br> Your production in Shed D " +
        d + " litres per day <br> Your production in Shed E " +
        e + " litres per day <br><br> "

    document.getElementById("totals").innerHTML = "<p>The total production is " + total + " litres per day</p>"

    incomeOverTime(45, 7);
    incomeOverTime(45, 365);
    leapYearReport();
    //getIncomeOverTime()
}



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