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

function incomeOverTime(selling_price, time){
    
}


