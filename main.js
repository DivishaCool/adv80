var name_of_student = [];

function submit(){
    var display_name = [];
    for( var i = 1; i<=4; i++){
        var name = document.getElementById("name_of_the_student_" +i).value;
        console.log(name);
        name_of_student.push(name);

    } 

    console.log(name_of_student);
    var length_student_array = name_of_student.length;
    console.log(length_student_array);

    for( var j = 0; j<length_student_array; j++){
        display_name.push("<h4>NAME - " + name_of_student[j]+"</h4>");
        console.log(display_name);

    }

    document.getElementById("display_name_with_commas").innerHTML=display_name;
    var  remove_commas = display_name.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";


}

function sorting(){
    name_of_student.sort();
    console.log(name_of_student);
    var display_sorting = [];
    var length_array = name_of_student.length;
    console.log(length_array);
    for( var k = 0; k<length_array; k++){
        display_sorting.push("<h4>NAME - " + name_of_student[k] + "</h4>");
        console.log(display_sorting);
        
    } 

    var remove_commas = display_sorting.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    
    
}
