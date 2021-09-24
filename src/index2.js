import { res } from "./index";
import { TaskDone } from "./index1";

function display() {

    var template = Handlebars.compile(res);

    var ele = template(TaskDone);

    // var ele = template({date : TaskDone.date, task: TaskDone.task, type: TaskDone.type, time: TaskDone.time, desc: TaskDone.desc});

    document.getElementById("res").innerHTML += ele;

    alert("Task will be added to To-Do App");

}

export {display} ;
