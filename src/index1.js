import { display } from "./index2";

const TaskDone = {};

function getValues(){

    TaskDone.date = document.getElementById("dot").value;
    TaskDone.task = document.getElementById("taskName").value;
    TaskDone.type = document.getElementById("taskType").value;
    TaskDone.time = document.getElementById("duration").value;
    TaskDone.desc = document.getElementById("description").value;

    display();

}

export{TaskDone,getValues}