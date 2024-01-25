var t1=document.getElementById("task");
var d=document.getElementById("desc");
var t=document.getElementById("timer");
var tb=document.getElementById("tb");
var tab=document.getElementById("t1");
var si;
let tr;
let td;
let td1;
let td2;
// let d;
let a=0;
let b=0;
let c=0;
let a1;
let a2;
let a3;
let b1;
let b2=0;
let b3=0;
tb.addEventListener('click',function(){
    if(tb.textContent==="Stop"){
        tb.textContent="Start"
        tb.style.color="green";
        tb.style.backgroundColor="";
        tr=document.createElement("tr");
      td=document.createElement("td");
      td1=document.createElement("td");
      td2=document.createElement("td");
      td.textContent=`${t1.value}`;
    //   console.log(t);
      td1.textContent=`${d.value}`;
      td2.textContent=t.textContent;
       tr.appendChild(td);
       tr.appendChild(td1);
       tr.appendChild(td2);
       tab.appendChild(tr);
        clearInterval(si);
        t1.value="";
        d.value="";
        a=0;
      b=0;
      c=0;
      a1="00";
      a2="00";
      a3="00"
      t.textContent=`${a1}:${a2}:${a3}`;  
    }
    else{
        this.textContent="Stop";
        tb.style.color="green";
    tb.style.backgroundColor="black";
   si= setInterval(function start(){
        c++;
        b1=c.toString().padStart(2,"0")
        if(c==60){
            c=0;
            b++;
           b2= b.toString().padStart(2,"0")
        }
        if(b==60){
            a++;
            b=0;
            b3=a.toString().padStart(2,"0")
        }
        if(a==13){
            a==1;
        }
        t.textContent=`${b3}:${b2}:${b1}`;
    },1000);
    }
})