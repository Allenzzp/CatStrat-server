

$(() => {
  const $records = $(".fc-event-title");
  for (let $record of $records) {

    if (parseInt($($record).text()) < 0) {
      $($record).addClass("neg-record");
    } else {
      $($record).addClass("pos-record");
    }
  }
})