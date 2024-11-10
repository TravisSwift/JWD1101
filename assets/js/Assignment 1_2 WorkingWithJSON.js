function createObjectFromJSON(jsonData){

    //For the input data, try to parse it as JSON.
    //If successful, use CreateHTML to create the HTML element.
    //On Error, let the user know the text was not valid JSON format
    try{

        //Convert the JSON into a JS object with JSON.parse()
        let jsObject = JSON.parse(jsonData);
        createHTML(jsObject);
    }
    //If try throws an error, it's not valid JSON.  Output to the page.
    catch (e){
        let errorText = document.createElement("p");
        errorText = "Not Valid Json Data";
        document.body.append(errorText);
    }

}

function createHTML(object)
{
    let div = document.createElement("div");
    let style = ""
 
    for(let data in object)
    {
        style += `${data}:${object[data]};`
    }
 
    div.style.cssText = style;
 
    div.style.minHeight= '10px';
    document.body.append(div);
}