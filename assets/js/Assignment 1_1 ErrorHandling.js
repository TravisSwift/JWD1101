'use strict'

function displayOnPage(content)
{
    let errorHTML = document.createElement("p");
    errorHTML.classList.add("warning");
    errorHTML.textContent = content;
    document.body.append(errorHTML);
}


//Issue 1 - something is wrong with this for loop.
let array = ["item1, item2, item3"];
let list = document.getElementById("list");

try{
    for(item of array)
    {
        let li = document.createElement("li")
        li.textContent = item;
        list.append(li);
    }
}
catch (e)
{
    displayOnPage(e);
}

//Issue 2 - something is wrong with working with this object.
let obj = {prop1:"value1", prop2:"value2", prop3:"value3"};
let table = document.getElementById("table");


try{
    for(let property of obj)
    {
    
        let row = document.createElement("tr");
        table.append(row);
    
        let col1 = document.createElement("td");
        col1.textContent = property;
        
        let col2 = document.createElement("td")
        col2.textContent = obj[property];
    
        row.append(col1);
        row.append(col2);
    
    }

}
catch (e){
    displayOnPage(e);
}

//Issue 3 - Something is wrong with working with this Date
try{
    let date = "05-04-1977";
    Date.convert(date);
}
catch (e){
    displayOnPage(e);
}


let end = document.createElement("h1")
end.innerText = "Script Has Ran To Completion!"
document.body.append( end );