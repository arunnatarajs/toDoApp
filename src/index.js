import { getValues } from "./index1";

document.addEventListener("submit", TaskManagement);

var res = "<table style='width : 100%'><tr><td class='inner'>{{date}}</td><td class='inner'>{{task}}</td><td class='inner'>{{type}}</td><td class='inner'>{{time}}</td><td class='inner'>{{desc}}</td></tr></table>"

function TaskManagement(tda) {
    tda.preventDefault();
    
    getValues();
    
    document.getElementById("todo").reset();
}

export {res} ;