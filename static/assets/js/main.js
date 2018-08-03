function updateOneTimeTotal() {
    $('.progress-onetime').css("width", "60%").text("60%");
}

function updateDailyTotal() {
    $('.progress-daily').css("width", "60%").text("60%");
}

function updateWeeklyTotal() {
    let weeklyTasksTotal = $('.weekly').find('input').length;

    let weeklyTasksCompleted = $('.weekly').find('input:checked').length;;

    let percentageCompleted = Math.round(weeklyTasksCompleted/weeklyTasksTotal * 100);
    $('.progress-weekly').css('width', `${percentageCompleted}%`).text(`${percentageCompleted}%`);
}

$('input').change(() => {
    updateOneTimeTotal();
    updateDailyTotal();
    updateWeeklyTotal();
  });

$(document).ready(() => {
})