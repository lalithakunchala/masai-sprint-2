

    var save = document.getElementById("save");
    var sal_cal = 0;
    save.addEventListener('click',function saveFun(){
        event.preventDefault();
        var name = document.getElementById("name");
        var salary = document.getElementById("salary");
        if(name.value==""||salary.value==""){
            alert("Enter details");
        }
        else{
            var bal = document.getElementById("displayBal");
            bal.setAttribute('class','normal')
            var name = document.getElementById("name");
            var displayname = document.getElementById("display");
            displayname.textContent = "Name :"+name.value;
            var salary = document.getElementById("salary");
            var totalsal = document.getElementById("totalsal");
            totalsal.innerHTML = "Total salary :" + salary.value;
            var balance = document.getElementById("displayBal");
            balance.textContent = "Balance :" + salary.value;
            sal_cal = salary.value;
            name.value = "";
            salary.value = "";
        }
        
    });
        var groc = 0;       
        var curr = 0;
        var fee = 0;
        var pap = 0;
        var pet = 0;
        var entertain = 0;
        var grocery = [];
        var current = [];
        var fees = [];
        var paper = [];
        var petrol =[];
        var entertainment = [];
        update.addEventListener('click',function updatebal(){
            event.preventDefault();
            var ogroc = {Date:"",Amount:""};
            var ocurr = {Date:"",Amount:""};;
            var ofee = {Date:"",Amount:""};;
            var opap = {Date:"",Amount:""};;
            var opet = {Date:"",Amount:""};;
            var oentertain = {};
        var odate = document.getElementById("date");
        var g = document.getElementById("g");
        if(g>0){
            g.textContent =   "Grocery     :" + groc;
        }
        
        var cur = document.getElementById("cur");
        if(cur>0){
            cur.textContent = "Current bill:"+ curr;
        }
       
        var f = document.getElementById("f");
        if(f>0){
            f.textContent =   "Fees        :"+ fee;
        }
        
        var p = document.getElementById("p");
        if(p>0){
            p.textContent = "Paper bill    :" + pap;  
        }
        
        var pt = document.getElementById("pt");
        if(pt>0){
            pt.textContent = "Petrol       :"+ pet;
        }
        
        var e = document.getElementById("e");
        if(e>0){
            e.textContent = "Entertainment  :"+ entertain;
        }
        
        var ex = document.getElementById("expenditure");
        var expenditure = ex.value;
        var sel = document.getElementById("selection");
        var selection = sel.value;

        if(selection=="grocery"){
            ogroc={Date:date.value,Amount:Number(expenditure)}
            grocery.push(ogroc);
            console.log(grocery);
            var ggg = 0
            for(var i=0; i<grocery.length; i++){
                
                ggg = ggg + grocery[i].Amount;
            }
            g.textContent = "Grocery:" + ggg;
            groc = ggg
            var displayItem2 = document.getElementById("displayItem2");
            displayItem2.textContent = "";
            console.log(grocery);

        }
        else if(selection=="current"){
            ocurr={Date:date.value,Amount:Number(expenditure)}
            current.push(ocurr);
            for(var i=0; i<current.length; i++){
                curr = curr + current[i].Amount;
            }
            cur.textContent = "Current bill:"+ curr;
            var displayItem2 = document.getElementById("displayItem2");
            displayItem2.textContent = "";
            
        }
        else if(selection=="fees"){
            ofee={Date:date.value,Amount:Number(expenditure)}
            fees.push(ofee);
            for(var i=0; i<fees.length; i++){
                fee = fee + fees[i].Amount;
            }
            f.textContent = "Fees :"+ fee;
            var displayItem2 = document.getElementById("displayItem2");
            displayItem2.textContent = "";
            

        }
        else if(selection=="paper"){
            opap={Date:date.value,Amount:Number(expenditure)}
            paper.push(opap);
            for(var i=0; i<paper.length; i++){
                pap = pap + paper[i].Amount;
            }
            p.textContent = "Paper bill :" + pap;
            var displayItem2 = document.getElementById("displayItem2");
            displayItem2.textContent = "";
            
        }
        else if(selection=="petrol"){
            opet={Date:date.value,Amount:Number(expenditure)}
            petrol.push(opet);
            for(var i=0; i<petrol.length; i++){
                pet = pet + petrol[i].Amount;
            }
            pt.textContent = "Petrol:"+ pet;
            var displayItem2 = document.getElementById("displayItem2");
            displayItem2.textContent = "";
            
        }
        else if(selection=="entertainment"){
            oentertain={Date:date.value,Amount:Number(expenditure)}
            entertainment.push(oentertain);
            for(var i=0; i<entertainment.length; i++){
                entertain = entertain + entertainment[i].Amount;
            }
            e.textContent = "Entertainment:"+ entertain;
            var displayItem2 = document.getElementById("displayItem2");
            displayItem2.textContent = "";
            
        }
        var totalexp = groc + curr + fee + pap + pet + entertain;
        var bal = document.getElementById("displayBal");
        var totalbal = sal_cal - totalexp;
        bal.innerHTML = "Balance :" + totalbal;
        ex.value = "";
        sel.value = "first";
        

        if(totalbal<2000){
            bal.setAttribute('class','rd');
        }
        
            

    });
    console.log(grocery);
    console.log(current);

    var igrocery = document.getElementById("igrocery");
    igrocery.addEventListener('click',function disp(){
        var displayItem2 = document.getElementById("displayItem2");
        displayItem2.textContent = "Grocery";
        var li = document.createElement("li");
        displayItem2.appendChild(li);
        li.textContent = "Amount"+" ------- "+ "Date";
        if(grocery.length==0){
            var li = document.createElement("li");
            li.innerHTML =  "No details";
            displayItem2.appendChild(li);
        }
        for(var i=0; i<grocery.length; i++){
            var li = document.createElement("li");
            li.innerHTML =  grocery[i].Amount+"/-  :"+"------"+ grocery[i].Date;
            displayItem2.appendChild(li);
        }
    })

    var icurrent = document.getElementById("icurrent");
    icurrent.addEventListener('click',function disp(){
        var displayItem2 = document.getElementById("displayItem2");
        displayItem2.textContent = "Current";
        if(current.length==0){
            var li = document.createElement("li");
            li.innerHTML =  "No details";
            displayItem2.appendChild(li);
        }
        for(var i=0; i<current.length; i++){
            var li = document.createElement("li");
            li.innerHTML =  current[i].Amount+"/-  :"+"------"+ current[i].Date;
            displayItem2.appendChild(li);
        }
    })

    var ischoolfees = document.getElementById("ischoolfees");
    ischoolfees.addEventListener('click',function disp(){
        var displayItem2 = document.getElementById("displayItem2");
        displayItem2.textContent = "Schoolfees";
        if(fees.length==0){
            var li = document.createElement("li");
            li.innerHTML =  "No details";
            displayItem2.appendChild(li);
        }
        for(var i=0; i<fees.length; i++){
            var li = document.createElement("li");
            li.innerHTML =  fees[i].Amount+"/-  :"+"------"+ fees[i].Date;
            displayItem2.appendChild(li);
        }
    })

    var ipaper = document.getElementById("ipaper");
    ipaper.addEventListener('click',function disp(){
        var displayItem2 = document.getElementById("displayItem2");
        displayItem2.textContent = "Paper";
        if(paper.length==0){
            var li = document.createElement("li");
            li.innerHTML =  "No details";
            displayItem2.appendChild(li);
        }
        for(var i=0; i<paper.length; i++){
            var li = document.createElement("li");
            li.innerHTML =  paper[i].Amount+"/-  :"+"------"+ paper[i].Date;
            displayItem2.appendChild(li);
        }
    })

    var ipetrol = document.getElementById("ipetrol");
    ipetrol.addEventListener('click',function disp(){
        var displayItem2 = document.getElementById("displayItem2");
        displayItem2.textContent = "Petrol";
        if(petrol.length==0){
            var li = document.createElement("li");
            li.innerHTML =  "No details";
            displayItem2.appendChild(li);
        }
        for(var i=0; i<petrol.length; i++){
            var li = document.createElement("li");
            li.innerHTML =  petrol[i].Amount+"/-  :"+"------"+ petrol[i].Date;
            displayItem2.appendChild(li);
        }
    })

    var ientertainment = document.getElementById("ientertainment");
    ientertainment.addEventListener('click',function disp(){
        var displayItem2 = document.getElementById("displayItem2");
        displayItem2.textContent = "Entertainment";
        if(entertainment.length==0){
            var li = document.createElement("li");
            li.innerHTML =  "No details";
            displayItem2.appendChild(li);
        }
        for(var i=0; i<entertainment.length; i++){
            var li = document.createElement("li");
            li.innerHTML =  entertainment[i].Amount+"/-  :"+"------"+ entertainment[i].Date;
            displayItem2.appendChild(li);
        }
    })


    