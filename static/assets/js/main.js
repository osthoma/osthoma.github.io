function updateOneTimeTotal() {
    let tasksTotal = $('.onetime').find('input').length;

    let tasksCompleted = $('.onetime').find('input:checked').length;;

    let percentageCompleted = Math.round(tasksCompleted/tasksTotal * 100);
    $('.progress-onetime').css('width', `${percentageCompleted}%`).text(`${percentageCompleted}%`);
}

function updateDailyTotal() {
    let tasksTotal = $('.daily').find('input').length;

    let tasksCompleted = $('.daily').find('input:checked').length;;

    let percentageCompleted = Math.round(tasksCompleted/tasksTotal * 100);
    $('.progress-daily').css('width', `${percentageCompleted}%`).text(`${percentageCompleted}%`);
}

function updateWeeklyTotal() {
    let tasksTotal = $('.weekly').find('input').length;

    let tasksCompleted = $('.weekly').find('input:checked').length;;

    let percentageCompleted = Math.round(tasksCompleted/tasksTotal * 100);
    $('.progress-weekly').css('width', `${percentageCompleted}%`).text(`${percentageCompleted}%`);
}

$('input').change(() => {
    updateOneTimeTotal();
    updateDailyTotal();
    updateWeeklyTotal();
  });

$(document).ready(() => {
})