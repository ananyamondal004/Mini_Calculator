let add=document.querySelector("#add");
let sub=document.querySelector("#sub");
let mul=document.querySelector("#mul");
let div=document.querySelector("#div");
let input1=document.querySelector("#input1");
let input2=document.querySelector("#input2");
let result=document.querySelector("#result");


    add.addEventListener("click",()=>{
        let num1=parseInt(input1.value);
        let num2=parseInt(input2.value);
        result.innerHTML=sum(num1,num2);
    })
        function sum(input1,input2){
            let ansSum=input1+input2;
            return ansSum;
        }
            
    sub.addEventListener("click",()=>{
        let num1=parseInt(input1.value);
        let num2=parseInt(input2.value);
        result.innerHTML=subt(num1,num2);
    })
        function subt(input1,input2){
            let dif=input1-input2;
            return dif;
        }  

    mul.addEventListener("click",()=>{
        let num1=parseInt(input1.value);
        let num2=parseInt(input2.value);
        result.innerHTML=multi(num1,num2);
    })
        function multi(input1,input2){
            let ansmul=input1*input2;
            return ansmul;
        }  
        


    div.addEventListener("click",()=>{
        let num1=parseInt(input1.value);
        let num2=parseInt(input2.value);
        result.innerHTML=division(num1,num2);
    })
        function division(input1,input2){
            let ansdiv=input1/input2;
            return ansdiv;
            }  

    

    
