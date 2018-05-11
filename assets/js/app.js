// Mark To-do as done
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// Delete To-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

// Ad new To-do
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
	}
});