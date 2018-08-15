// write your code below!

function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(days, holiday){
  days = parseInt(days,10)
  return `It's ${holiday} days until ${days}`
}