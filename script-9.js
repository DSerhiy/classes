// ================ POSTPONE CODE

// const timerId1 = setTimeout(function() {
//     console.log('hellow timeout!');
// }, 1000);

// const timerId2 = setInterval(()=>{
//     console.log('Time Interval');
// }, 1000);

// clearTimeout(timerId2);

// =================CONSTRUCTOR DATE();

// const date = new Date();
// console.dir(date);

// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getDate());


// =================================

// const date = prompt('Pls insert date in following format: YYYY-MM-DD')

// alert(timeLapsed(date));

// function timeLapsed(date) {
//     const currentDate = new Date();
//     const userDate = new Date(date);
//     return (currentDate.getTime() - userDate.getTime()) / (1000 * 60 * 60);
// }

// ====================================

// function task(tick) {
//     console.log(`Tick# ${tick}`);
// }

// let counter = 1;
// function timeInterval(callback, repeat, ms) {
//     setTimeout(function(){
//         if (repeat != 0) {
//             callback(counter++);
//             timeInterval(callback, repeat - 1, ms);
//         }            
//     }, ms)
// };


// timeInterval(function(counter){
//     console.log(`task# ${counter}`)
// }, 20, 2000);

// ================================

// const arr = [
//     {a: 7},
//     {a: 4},
//     {a: 2},
//     {a: 9}
// ];

// // let sum = 0;

// // for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i].a;    
// // }
// // console.log(sum);

// console.log(arr.reduce(function(acc, next){
//     return acc + next.a;
// }, 0));


// ==========================================

// function createTask(title, description, startDate, endDate) {
//     const defaultStartDate = new Date();
//     const defaultEndDate = new Date();
//     defaultEndDate.setDate(defaultStartDate.getDate() + 1);

//     return {
//         title: title,
//         description: description,
//         start: startDate || defaultStartDate,
//         end: endDate || defaultEndDate
//     }
// };

// const arrOfTasks = [
//     createTask('taks1', 'desc1'), 
//     createTask('taks2', 'desc2'), 
//     createTask('taks3', 'desc3'),
//     createTask('taks4', 'desc4'),
//     createTask('taks5', 'desc5') ]

// // const totalTime = arrOfTasks.reduce(function (acc, next) {
// //     return (acc + (next.end.getTime() - next.start.getTime())) / (1000 * 60 * 60);
// // }, 0);

// console.log(totalTime);