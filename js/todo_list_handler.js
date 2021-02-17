"use strict";

function task_completed(task_id)
{
    $('#todo_card_' + task_id + '_checkbox').html('<i class="far fa-check-square"></i>');
    $('#todo_card_' + task_id + '_status').html('<span class="badge badge-success">Completed</span>');

    $('#todo_card_' + task_id + '_checkbox').removeClass('not_completed_task_checkbox');
    $('#todo_card_' + task_id + '_checkbox').addClass('completed_task_checkbox');

    $("#total_completed_task_number").html($(".completed_task_checkbox").length + ' (' + Math.floor(($(".completed_task_checkbox").length/todo_object.length) * 100) + '%)');
    $("#total_pending_task_number").html($("#todo_list_container > .todo_container").length - $(".completed_task_checkbox").length);

    // promise function to provide congratulation message for every 5 new completed tasks
    let promise = new Promise(function(resolve, reject) {
        if(parseInt($(".completed_task_checkbox").length) % 5 == 0)
        {
            resolve();
        }
        else
        {
            reject();
        }
    });

    // delay set to make sure that congradulations alert message is shown only after 5th task also is updated as completed
    setTimeout(() => {
        promise.then(
            function() {
                alert('Congradulations - you have completed 5 new tasks');
                console.log('5 new tasks completion has been updated');
            },
            function() {console.log('task completion has been updated - 5 new tasks not yet covered');}
        );
    }, 500);
}