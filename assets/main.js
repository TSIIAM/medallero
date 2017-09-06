$(function() {

  // your code will go here
var reportCard = "https://www.codeschool.com/users/alvaromesa.json";


$.ajax({
	url:reportCard,
	dataType:"jsonp",
	success: function(response){
	 
		addCourses(response.courses.completed);
	}



})
var $badges = $("#badges");

function addCourses(courses){
	courses.forEach(function(course){
		var $course = $("<div />", {
			"class":"course"
		}).appendTo($badges);

		$("<h3 />", {
			text: course.title
		}).appendTo($course);

		$("<img />", {
			src: course.badge
		}).appendTo($course);

		$("<a />" , {
			"class": "btn btn-primary",
			target: "_blank",
			href:course.url,
			text: "Ve el curso"
		}).appendTo($course);


	})
}

});
