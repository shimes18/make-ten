let point = 0;
let a,b,c,d;

document.getElementById("all").style.display = "none";
function rand() {
    return Math.floor(Math.random() * 10);
}

function start() {
    document.getElementById("all").style.display = "block";

    a = rand(), b = rand(), c = rand(), d = rand();

    document.getElementById("no").innerText = "" + a + b + c + d;

    document.getElementById("n1").value = a;
    document.getElementById("n2").value = b;
    document.getElementById("n3").value = c;
    document.getElementById("n4").value = d;

    const input = document.getElementById("o1");

    function operator() {
        input.value = input.value.replace(/[^+\-]/g, "");
    }
    input.addEventListener("input", operator);

    const input2 = document.getElementById("o2");

    function operator2() {
        input2.value = input2.value.replace(/[^+\-*/% ]/g, "");
    }

    input2.addEventListener("input", operator2);

    const input3 = document.getElementById("o3");

    function operator3() {
        input3.value = input3.value.replace(/[^+\-*/% ]/g, "");
    }

    input3.addEventListener("input", operator3);

    const input4 = document.getElementById("o4");

    function operator4() {
        input4.value = input4.value.replace(/[^+\-*/% ]/g, "");
    }

    input4.addEventListener("input", operator4);

    const input5 = document.getElementById("o5");
    function operator5() {
        input5.value = input5.value.replace(/[^+\- ]/g, "");
    }

    input5.addEventListener("input", operator5);

    const br1 = document.getElementById("b1");

    function op1() {
        br1.value = br1.value.replace(/[^( ]/g, "");
    }
    br1.addEventListener("input", op1);

    const br2 = document.getElementById("b2");

    function op2() {
        br2.value = br2.value.replace(/[^() ]/g, "");
    }
    br2.addEventListener("input", op2);

    const br3 = document.getElementById("b3");

    function op3() {
        br3.value = br3.value.replace(/[^() ]/g, "");
    }
    br3.addEventListener("input", op3);

    const br4 = document.getElementById("b4");

    function op4() {
        br4.value = br4.value.replace(/[^() ]/g, "");
    }
    br4.addEventListener("input", op4);

    const br5 = document.getElementById("b5");

    function op5() {
        br5.value = br5.value.replace(/[^() ]/g, "");
    }
    br5.addEventListener("input", op5);

    const br6 = document.getElementById("b6");

    function op6() {
        br6.value = br6.value.replace(/[^() ]/g, "");
    }
    br6.addEventListener("input", op6);

    const br7 = document.getElementById("b7");

    function op7() {
        br7.value = br7.value.replace(/[^() ]/g, "");
    }
    br7.addEventListener("input", op7);

    const br8 = document.getElementById("b8");

    function op8() {
        br8.value = br8.value.replace(/[^() ]/g, "");
    }
    br8.addEventListener("input", op8);

const button = document.getElementById("check");

button.addEventListener("click", function func() {
        let r1 = input.value;
        let r2 = input2.value;
        let r3 = input3.value;
        let r4 = input4.value;
        let r5 = input5.value;
        let bra1 = br1.value;
        let bra2 = br2.value;
        let bra3 = br3.value;
        let bra4 = br4.value;
        let bra5 = br5.value;
        let bra6 = br6.value;
        let bra7 = br7.value;
        let bra8 = br8.value;
        let sum;
        try {
            sum = eval(`${r5} ${bra1} ${r1} a ${bra2} ${r2} ${bra3} b ${bra4} ${r3} ${bra5} c ${bra6} ${r4} ${bra7} d ${bra8}`);
            if (sum == 10) {
                document.getElementById("value").innerHTML = "Correct answer! " + r5 + bra1 + r1 + a + bra2 + r2 + bra3 + b + bra4 + r3 + bra5 + c + bra6 + r4 + bra7 + d + bra8 + " is equal to 10!";
            }
            else {
                document.getElementById("value").innerHTML = "Incorrect answer! " + r5 + bra1 + r1 + a + bra2 + r2 + bra3 + b + bra4 + r3 + bra5 + c + bra6 + r4 + bra7 + d + bra8 + "=" + sum + " which is not equal to 10!";
            }
        } catch (e) {
            document.getElementById("value").innerHTML = "invalid expression!";
            return;
        }
    });

const button2 = document.getElementById("homeag")

button2.addEventListener("click", function homeagain() {
    document.getElementById("home").style.display = "block";
    document.getElementById("all").style.display = "none";
});

}

const button1 = document.getElementById("st")

button1.addEventListener("click", function bleh() {
    start();
    document.getElementById("home").style.display = "none";
});

document.getElementById("new").addEventListener("click", function new2(){
    start();
});