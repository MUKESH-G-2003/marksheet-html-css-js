
// const result = document.getElementById("result");

function Total() {
    const theory1 = parseInt(document.getElementById("theory1").value)||0;
    const theory2 = parseInt(document.getElementById("theory2").value)||0;
    const theory3 = parseInt(document.getElementById("theory3").value)||0;
    const theory4 = parseInt(document.getElementById("theory4").value)||0;
    const theory5 = parseInt(document.getElementById("theory5").value)||0;
    const theory6 = parseInt(document.getElementById("theory6").value)||0;
    const theory7 = parseInt(document.getElementById("theory7").value) || 0;
    
    
    if (theory1 > 80 || theory1 < 0) {
        alert("Please enter a number between 0 and 80.");
        return document.getElementById("theory1").value = '';
    }
    if (theory2 > 80 || theory2 < 0) {
        alert("Please enter a number between 0 and 80.");
        return document.getElementById("theory2").value = '';
    }
    if (theory3 > 80 || theory3 < 0) {
        alert("Please enter a number between 0 and 80.");
        return document.getElementById("theory3").value = '';
    }
    if (theory4 > 80 || theory4 < 0) {
        alert("Please enter a number between 0 and 80.");
        return document.getElementById("theory4").value = '';
    }
    if (theory5 > 80 || theory5 < 0) {
        alert("Please enter a number between 0 and 80.");
        return document.getElementById("theory5").value = '';
    }
    if (theory6 > 80 || theory6 < 0) {
        alert("Please enter a number between 0 and 80.");
        return document.getElementById("theory6").value = '';
    }
    if (theory7 > 80 || theory7 < 0) {
        alert("Please enter a number between 0 and 80.");
        return document.getElementById("theory7").value = '';
    }
    
    
    const pra1 = parseInt(document.getElementById("pra1").value) || 0;
    const pra2 = parseInt(document.getElementById("pra2").value) || 0;
    const pra3 = parseInt(document.getElementById("pra3").value) || 0;
    const pra4 = parseInt(document.getElementById("pra4").value) || 0;
    const pra5 = parseInt(document.getElementById("pra5").value) || 0;
    const pra6 = parseInt(document.getElementById("pra6").value) || 0;
    const pra7 = parseInt(document.getElementById("pra7").value) || 0;

    if (pra1 > 20 || pra1 < 0) {
        alert("Please enter a number between 0 and 20");
        return document.getElementById("pra1").value = '';
    }
    if (pra2 > 20 || pra2 < 0) {
        alert("Please enter a number between 0 and 20");
        return document.getElementById("pra2").value = '';
    }
    if (pra3 > 20 || pra3 < 0) {
        alert("Please enter a number between 0 and 20");
        return document.getElementById("pra3").value = '';
    }
    if (pra4 > 20 || pra4 < 0) {
        alert("Please enter a number between 0 and 20");
        return document.getElementById("pra4").value = '';
    }
    if (pra5 > 20 || pra5 < 0) {
        alert("Please enter a number between 0 and 20");
        return document.getElementById("pra5").value = '';
    }
    if (pra6 > 20 || pra6 < 0) {
        alert("Please enter a number between 0 and 20");
        return document.getElementById("pra6").value = '';
    }
    if (pra7 > 80 || pra7 < 0) {
        alert("Please enter a number between 0 and 20");
        return document.getElementById("pra7").value = '';
    }

    const sub1 = document.getElementById("total1");
    const sub2 = document.getElementById("total2");
    const sub3 = document.getElementById("total3");
    const sub4 = document.getElementById("total4");
    const sub5 = document.getElementById("total5");
    const sub6 = document.getElementById("total6");
    const sub7 = document.getElementById("total7");

    const percentage = document.getElementById("percentage");
    const grandtotal = document.getElementById("grandtotal");

    let total1 = theory1 + pra1;
    let total2 = theory2 + pra2;
    let total3 = theory3 + pra3;
    let total4 = theory4 + pra4;
    let total5 = theory5 + pra5;
    let total6 = theory6 + pra6;
    let total7 = theory7 + pra7;

 
    let total = total1 + total2 + total3 + total4 + total5 + total6 + total7;
    let per = parseFloat((total / 700)).toFixed(2)*100;

    //results
    sub1.innerHTML = total1;
    sub2.innerHTML = total2;
    sub3.innerHTML = total3;
    sub4.innerHTML = total4;
    sub5.innerHTML = total5;
    sub6.innerHTML = total6;
    sub7.innerHTML = total7;

    document.getElementById("status1").textContent = total1 >= 40 ? "pass" : "fail";
    document.getElementById("status2").textContent = total2 >= 40 ? "pass" : "fail";
    document.getElementById("status3").textContent = total3 >= 40 ? "pass" : "fail";
    document.getElementById("status4").textContent = total4 >= 40 ? "pass" : "fail";
    document.getElementById("status5").textContent = total5 >= 40 ? "pass" : "fail";
    document.getElementById("status6").textContent = total6 >= 40 ? "pass" : "fail";
    document.getElementById("status7").textContent = total7 >= 40 ? "pass" : "fail";

    document.getElementById("result").textContent = total >= 280 ? "pass" : "fail";
    // const p = document.getElementById("percentage").value;
    if (per > 90) {
        document.getElementById("grade").textContent = "A+";
    }
    else if (per >= 80) {
        document.getElementById("grade").textContent = "A";
    }
    else if (per >= 70) {
        document.getElementById("grade").textContent = "B+";
    }
    else if (per >= 60) {
        document.getElementById("grade").textContent = "B";
    }
    else if (per >= 50) {
        document.getElementById("grade").textContent = "C";
    }
    else {
        document.getElementById("grade").textContent = "F";
    }
    grandtotal.innerHTML = total;
    // result.innerHTML = total;
    percentage.innerHTML = per;
}