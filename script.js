function calculate(){
    let p = document.getElementById('p').value;
    let c = document.getElementById('c').value;
    let d = document.getElementById('d').value;
    let f = document.getElementById('f').value;

    const total = parseFloat(p) + parseFloat(c) + parseFloat(d) + parseFloat(f);
    document.getElementById("demo").innerHTML = `your total number is ${total}`;

    const per = (total / 400)*100;
    document.getElementById("demo1").innerHTML = `your total percentage is ${per}`;

    if(per>=100){
        document.getElementById("demo2").innerHTML = `your grade is a++`;
    }
    
    if(per>=90){
        document.getElementById("demo2").innerHTML = `your grade is a++`;
    }
    
    if(per>=80){
        document.getElementById("demo2").innerHTML = `your grade is a++`;
    }
    
    if(per>=70){
        document.getElementById("demo2").innerHTML = `your grade is a`;
    }
    
    if(per>=60){
        document.getElementById("demo2").innerHTML = `your grade is b++`;
    }
    
    if(per>=50){
        document.getElementById("demo2").innerHTML = `your grade is b`;
    }
    
    if(per>=40){
        document.getElementById("demo3").innerHTML = `your grade is c++`;
    }
    else{
        document.getElementById("demo3").innerHTML = `you are failed`;
    }
}