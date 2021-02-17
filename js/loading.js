"use strict";

function open_site()
{
    console.log("Loading complete - Opening site");
    $("#loading").delay(1500).fadeOut(500, function() {
        document.getElementById("load_cover").style.display = "none";
        console.log("---- Site Ready ----");
    });
}

function generate_task_card(task, index)
{
    let card = `
        <div class="card todo_container" id="todo_card_` + task["id"] + `">
            <div class="card-body">
                <div class="row">`;

    if(task["completed"])
    {
        // <i class="far fa-check-square"></i>
        card += `<div class="card-text col-1 completed_task_checkbox" id="todo_card_` + task["id"] + `_checkbox">
                <i class="far fa-check-square"></i>
            </div>
            <div class="card-text col">` + task["title"] + `</div>
            <div class="card-text col" id="todo_card_` + task["id"] + `_status">
                <span class="badge badge-success">Completed</span>
            </div>`;
    }
    else
    {
        // <i class="far fa-square"></i>
        card += `<div class="card-text col-1 not_completed_task_checkbox" id="todo_card_` + task["id"] + `_checkbox">
                <i class="far fa-square"></i>
            </div>
            <div class="card-text col">` + task["title"] + `</div>
            <div class="card-text col" id="todo_card_` + task["id"] + `_status">
                <span class="badge badge-warning">Pending</span>
            </div>`;
    }

    card += `<script>
                        $('#todo_card_` + task["id"] + `_checkbox > .fa-square').click(function() {
                            task_completed(` + task["id"] + `);
                        });
                    </script>
                </div>
            </div>
        </div>
    `;

    //card += `<div class="card-text col-1">` + task["id"] + `</div>`;

    console.log("updating task " + task["id"]);
    $("#todo_list_container").append(card);
    return 1;
}

// Loading page process
$(window).on("load",function() {
    console.log("Loading Application");
    $("#load_cover").delay(1500).queue(function() {
        console.log('adding tasks to application loader');
        $("#loading_todo_container_1").show(600, function() {
            console.log('task 1 added to loader');
            $("#loading_todo_container_2").show(600, function() {
                console.log('task 2 added to loader');
                $("#loading_todo_container_3").show(600, function() {
                    console.log('task 3 added to loader');
                    $("#loading_todo_container_4").show(600, function() {
                        console.log('task 4 added to loader');
                        $("#loading_todo_container_5").show(600, function() {
                            console.log('task 5 added to loader');

                            console.log('all tasks updated - running loader');
                            //////////////////////////////////////////////////////////////////////
                            let grow = {
                                'padding-top' : '1em',
                                'padding-bottom' : '1em'
                            };

                            let shrink = {
                                'padding-top' : '0em',
                                'padding-bottom' : '0em'
                            };
                            
                            // 1 - Load application design
                            $("#loading_todo_container_1").delay(2000).animate(grow, 600, function() {
                                $("#loading_checkbox_1").delay(1000).html('<i class="far fa-check-square"></i>');
                                $("#loading_todo_container_1 .task").css('text-decoration', 'line-through');
                                $("#loading_todo_container_1").delay(1000).animate(shrink, 600, function() {
                                    console.log('task 1 complete');
                            
                                    // 2 - Load ToDo list from server - https://jsonplaceholder.typicode.com/todos
                                    $("#loading_todo_container_2").delay(1000).animate(grow, 600, function() {
                                        $("#todo_data").load("https://jsonplaceholder.typicode.com/todos", "data", function(response, status, xhr) {
                                            if(status == 'success')
                                            {
                                                $("#loading_checkbox_2").delay(1000).html('<i class="far fa-check-square"></i>');
                                                if(xhr.status == 200)
                                                {
                                                    $("#loading_todo_container_2 .task").css('text-decoration', 'line-through');
                                                    $("#loading_todo_container_2").delay(1000).animate(shrink, 600, function() {
                                                        console.log('task 2 complete');

                                                        // 3 - Set format of list - convert data to JSON object
                                                        $("#loading_todo_container_3").delay(1000).animate(grow, 600, function() {
                                                            todo_object = JSON.parse($("#todo_data").html());
                                                            console.log(todo_object);
                                                            $("#loading_checkbox_3").delay(1000).html('<i class="far fa-check-square"></i>');
                                                            $("#loading_todo_container_3 .task").css('text-decoration', 'line-through');
                                                            $("#loading_todo_container_3").delay(1000).animate(shrink, 600, function() {
                                                                console.log('task 3 complete');

                                                                // 4 - Update list to application
                                                                $("#loading_todo_container_4").delay(1000).animate(grow, 600, function() {
                                                                    // for loop creating cards in the application
                                                                    todo_object.forEach(generate_task_card);

                                                                    $("#loading_checkbox_4").delay(1000).html('<i class="far fa-check-square"></i>');
                                                                    $("#loading_todo_container_4 .task").css('text-decoration', 'line-through');
                                                                    $("#loading_todo_container_4").delay(1000).animate(shrink, 600, function() {
                                                                        console.log('task 4 complete');

                                                                        // 5 - Update variables
                                                                        $("#loading_todo_container_5").delay(1000).animate(grow, 600, function() {
                                                                            // populate variables in application
                                                                            $("#total_task_number").html(todo_object.length);
                                                                            $("#total_completed_task_number").html($(".completed_task_checkbox").length + ' (' + Math.floor(($(".completed_task_checkbox").length/todo_object.length) * 100) + '%)');
                                                                            $("#total_pending_task_number").html($("#todo_list_container > .todo_container").length - $(".completed_task_checkbox").length);
                                                                            
                                                                            $("#loading_checkbox_5").delay(1000).html('<i class="far fa-check-square"></i>');
                                                                            $("#loading_todo_container_5 .task").css('text-decoration', 'line-through');
                                                                            $("#loading_todo_container_5").delay(1000).animate(shrink, 600, function() {
                                                                                console.log('task 5 complete');

                                                                                // Open Site
                                                                                open_site();
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                }
                                                else
                                                {
                                                    console.error("Step 2 ERROR ::: " + status);
                                                    console.log("xhr.status ::: " + xhr.status);
                                                    console.log("xhr.statusText ::: " + xhr.statusText);
                                                    alert("An unexpected error has occured. Please refresh the application");
                                                }
                                            }
                                            else
                                            {
                                                console.error("Step 2 ERROR ::: " + status);
                                                console.log("xhr.status ::: " + xhr.status);
                                                console.log("xhr.statusText ::: " + xhr.statusText);
                                                alert("An unexpected error has occured. Please refresh the application");
                                            }
                                        });
                                    });
                                });
                            });

                            //////////////////////////////////////////////////////////////////////
                        });
                    });
                });
            });
        });
    });
});