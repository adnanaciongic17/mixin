import React, { Component } from "react";
import Description from "./description.js";

class Main extends Component {
    render() {

        function edit(){
            
            var newElem = document.createElement("div");
            newElem.className = "todo-wrapper flex";
        
            var newElem1 = document.createElement("div");
            newElem1.className = "flex";
      
            var newElem2 = document.createElement("input");
            newElem2.className = "form-control";
            newElem2.id = "info";
            newElem2.type = "text";
            newElem2.placeholder = "New item";
      
            var newElem3 = document.createElement("button");
            newElem3.className = "Submit";
            newElem3.innerHTML = "New item";
            newElem3.id = "submitbutton";
            newElem3.onclick = edit2;
      
      
            var newElem4 = document.createElement("div");
            newElem4.className = "flex";
      
      
            var newElem5 = document.createElement("label");
            newElem5.className = "flexlabel";
      
            var newElem6 = document.createElement("input");
            newElem6.type = "checkbox";
            newElem6.autocomplete = false;
      
            var newElem7 = document.createElement("button");
            newElem7.className = "delbutton";
            newElem7.innerHTML = "Delete";
            newElem7.id = "delbutton";
            newElem7.onclick = dlt;
        
            newElem.append(newElem1);
            newElem1.append(newElem2);
            newElem1.append(newElem3);
            newElem.appendChild(newElem4);
        
            newElem5.append(newElem6);
            newElem4.appendChild(newElem5).appendChild(newElem6);
            newElem4.append(newElem7);
            document.getElementById("container-flex").appendChild(newElem);
         
          };

          function dlt(elem){
      
            if( elem.target && elem.target.id === 'delbutton' );
              elem.target.parentNode.parentNode.remove();
           
          };
          

          function edit2(e){
            if(e.target && e.target.id === "submitbutton"){
      
            var li = document.createElement("li");
            var inputValue = document.getElementById("submitbutton").value;
            if ( document.getElementById('info').value === ""){
                alert("Nu ai adăugat niciun produs!");
                return false;
            } else {
                var t = document.createTextNode(inputValue);
                li.appendChild(t);
            }
      
            var newEl = document.createElement("div");
            newEl.className = "todo-wrapper flex";
      
            var newEl1 = document.createElement("span");
            newEl1.className = "form-control";
            newEl1.innerHTML = document.getElementById("info").value;
      
            var newEl2 = document.createElement("div");
            newEl2.className = "flex";
      
            var newEl3 = document.createElement("label");
            newEl3.className = "flexlabel";
      
            var newEl4 = document.createElement("input");
            newEl4.type = "checkbox";
            newEl4.autocomplete = false;
      
            var newEl5 = document.createElement("button");
            newEl5.className = "delbutton";
            newEl5.innerHTML = "Delete";
            newEl5.id = "delbutton";
            newEl5.onclick = dlt;
      
            newEl.append(newEl1);
            newEl.appendChild(newEl2);
            newEl3.append(newEl4);
            newEl2.appendChild(newEl3).appendChild(newEl4);
            newEl2.append(newEl5);
            document.getElementById("container-flex").appendChild(newEl);
            e.target.parentNode.parentNode.remove();
      
            }
          };

        return (
            <div>
                <main className="flex">
    
                <section className="action-row flex" id="container-action">
                    <button onClick={edit} id="add" className="adaugare">Add</button>
                </section>
                
    
                <section className="container" id="container-flex">
                    <Description name = "Napolitane"/>
                    <Description name = "Demachiant"/>
                    <Description name = "Portocale"/>
                    <Description name = "Pomelo"/>
                    <Description name = "Ciocolată"/>
                </section>
                    
                </main>    
            </div> 
        );
    }
    
}

export default Main;