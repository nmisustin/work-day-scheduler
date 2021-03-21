var timeOfDay = moment();
var hours = JSON.parse(localStorage.getItem("hours")) ||[
    {display:"9 AM", color: 9, input:""},
    {display:"10 AM", color: 10, input:""}, 
    {display:"11 AM", color: 11, input:""}, 
    {display:"12 PM", color: 12, input:""}, 
    {display:"1 PM", color: 13, input:""}, 
    {display:"2 PM", color: 14, input:""}, 
    {display:"3 PM", color: 15, input:""}, 
    {display:"4 PM", color:16, input:""}, 
    {display:"5 PM", color: 17, input:""}
];
var currentHour = timeOfDay.format("H")
console.log(currentHour);
//shows the current day at top using moment
function showDay(){
    var currentDay = timeOfDay.format("MMMM Do");
    $("#currentDay").html(currentDay);
}
showDay();
//creates the time of day grid
function displayWorkDay() {
    for (let i=0; i < hours.length; i++){
        console.log(hours[i])
        var row =$("<div>").addClass("row")
        var time =$("<div>").addClass("col-1 hour").append($("<p>").text(hours[i].display));
        var textarea=$("<textarea class= 'form-control' id= 'taskInput" + hours[i].color + "'>").val(hours[i].input);
        var button = $("<button type='button' id='saveButton'>").html("<span class='oi oi-box'></span>").addClass("btn btn-outline-secondary saveBtn").click(function(){
            taskSaver("#taskInput"+hours[i].color, i);
        });
        var task = $("<div>").addClass("col-11 input-group").append(textarea, button);
        $(".schedule").append(row);
        row.append(time, task);
        if(hours[i].color > currentHour){
            textarea.addClass("future")
        }
        else if(hours[i].color < currentHour){
            textarea.addClass("past")
        }
        else{
            textarea.addClass("present")
        }
    }
}
displayWorkDay();
console.log(hours);
function taskSaver(textarea, i) {
    var save = $(textarea).val().trim();
    hours[i].input = save;
    console.log(hours)
    localStorage.setItem("hours", JSON.stringify(hours)); 
}