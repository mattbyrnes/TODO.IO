const socket = io();

const addTodo = function (event) {
	event.preventDefault();
	const item = $("#input-todo").val();
	socket.emit("add-todo", { item: item });
	$("#input-todo").val("");
};

function getTodos() {
	$("#list-todo").empty();
	$.get("api/todo", function (data) {
		data.forEach(e => {
			if (!e.complete) {
				$("#list-todo").append(
					`<li id="${e._id}">
            			<label>${e.item}</label>
            			<i class="far fa-circle" data="${e.complete}"></i>
          			</li>`
				);
			} else {
				$("#list-todo").append(
					`<li id="${e._id}">
            			<label style="color:#bbb">${e.item}</label>
            			<i class="far fa-times-circle" data="${e.complete}"></i>
          			</li>`
				);
			}
		});
	});
}

socket.on("render-todo", function (data) {
	$("#list-todo").append(
		`<li id="${data._id}">
      <label>${data.item}</label>
      <i class="far fa-circle" data="${data.complete}"></i>
    </li>`
	);
});

var clicked = false;

$("#list-todo").on("click", "i", function () {

	if (clicked) {
		const id = $(this).parent().attr("id");
		$.ajax({
			url: `api/todo/${id}`,
			method: "DELETE"
		});
		getTodos();
		clicked = false;
	}
	else {
		const id = $(this).parent().attr("id");
		let data = {
			id: id,
			complete: true
		};
		$.ajax({
			url: "api/todo",
			method: "PUT",
			data: data,
			dataType: "json"
		});
		$(this).siblings("label")
		$(this).removeClass("far fa-circle");
		$(this).addClass("far fa-times-circle");
		getTodos();
		clicked = true;
	};

});

$("#btn-todo").on("click", addTodo);
getTodos();

