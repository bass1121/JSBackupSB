import moment from 'moment';

console.log(moment.now()); //1615065503851 (epic timestamp)

const rightNow = moment();//turns moment.now into a function

const myBirthday = moment('1985-11-21', 'YYYY-MM-DD');//turns moment.now into a function or an object

//console.log(myirthday.format('dddd'));
console.log(myBirthday.fromNow());