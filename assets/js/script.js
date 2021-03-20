var timeOfDay = moment();
var hours = [
    {display:"9 AM", color: 9},
    { display:"10 AM", color: 10}, 
    {display:"11 AM", color: 11}, 
    {display:"12 PM", color: 12}, 
    {display:"1 PM", color: 13}, 
    {display:"2 PM", color: 14}, 
    {display:"3 PM",color: 15}, 
    {display:"4 PM", color:16}, 
    {display:"5 PM", color: 17}
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
    for (var i=0; i < hours.length; i++){
        console.log(hours[i])
        var row =$("<div>").addClass("row")
        var time =$("<div>").addClass("col-1").append($("<p>").text(hours[i].display));
        var button = $("<button type='button'>").text("btn").addClass("btn btn-outline-secondary");
        var textarea=$("<textarea class= 'form-control taskinput'>");
        var task = $("<div>").addClass("col-11 input-group").append(textarea, button);
        $(".schedule").append(row);
        row.append(time, task);
        if(hours[i].color > currentHour){
            textarea.addClass("alert alert-success")
        }
        else if(hours[i].color < currentHour){
            textarea.addClass("alert alert-dark")
        }
        else{
            textarea.addClass("alert alert-danger")
        }
    }
}
displayWorkDay();
function taskSaver() {

}
//check if there are any saved tasks

//check if time blocks are in the past present or future

//click a time block to enter an event

//get the current day and display it