
/*const regix =/^[a-zA-Z]{2,15}$/;
//Verification 
function Verification(){

    const Name=document.getElementById("basic-url").value;
    const input=document.getElementById("basic-url");
    const span=document.getElementById("mySpan");   

    if(!regix.test(Name)){
 
            input.style.borderColor="red";
            span.style.color="red";
            span.innerText="Name is not valide";
    }else{
            input.style.borderColor="green";
            span.style.color="green";
            span.innerText="Name is valide";
    }
    
}*/

const regix =/^[A-Z][a-zA-Z]{0,10}([-|']{0,1}[a-z]{2,10})?([\s][a-zA-Z]{0,10}([-|']{0,1}[a-z]{2,10})?)?$/;
        //Verification 
        document.getElementById("myButton").addEventListener("click" ,validateName);

        function validateName(){
            
            
            const input=document.getElementById("basic-url");
            const Name=input.value;
            const span=document.getElementById("mySpan");   
            
            if(Name.trim()===""){
              alert("Please enter Name");
              return;
            }

            if(!regix.test(Name)){
        
                    input.style.borderColor="red";
                    span.style.color="red";
                    span.innerText="Name is not valide";
            }else{
                    input.style.borderColor="green";
                    span.style.color="green";
                    span.innerText="Name is valide";
            }
        }











