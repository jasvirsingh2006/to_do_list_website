


function task1(){
    const inputvalue= document.querySelector("#inputvalue");
    const finalvalue= inputvalue.value.trim();
    const tasklist= document.querySelector("ul");

   let li= document.createElement("li");
   let button = document.createElement("button")
    button.innerText= "Delete";
    button.addEventListener("click", () =>{
    const inputvalue= document.querySelector("#inputvalue");
    const tasklist= document.querySelector("ul");
    li.innerText="";

})  

     
     li.innerText=finalvalue;
    tasklist.appendChild(li);
    li.appendChild(button);

inputvalue.value="";
// const btn = document.querySelector("btn");
// btn.addEventListener(onclick,() =>{
    
// })
}


function reset (){
    const inputvalue= document.querySelector("#inputvalue");
    const tasklist= document.querySelector("ul");
    inputvalue.value="";
    tasklist.innerText="";
    
    

}
