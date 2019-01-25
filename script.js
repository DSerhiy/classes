

// const timerId = setTimeout(function() {
//     console.log('hellow timeout!');
// }, 1000);

// clearTimeout(timerId);


// const date = new Date();
// console.dir(date);

// date.getFullYear();
// date.getDay();
// date.getDate();

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




// function timeInterval(cb, repets, ms) {
//     let i = 1;
//     setTimeout(function(){
//         cb(i++);
//         if(i < repets)
//             setTimeout(cb, ms)
//     }, ms)
// };


// timeInterval(function(i){
//     console.log(`task# ${i}`)
// }, 20, 1000);

// ================================

const arr = [
    {a: 7},
    {a: 4},
    {a: 2},
    {a: 9}
];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].a;    
// }

// console.log(arr.reduce(function(arr){
//     return arr.a + arr.value;
// }))


// ==========================================

function createTask(title, description, startDate, endDate) {
    var defaultStartDate = new Date();
    var defaultEndDate = new Date();
    defaultEndDate.setDate(defaultStartDate.getDate() + 1);

    return {
        title: title,
        description: description,
        start: startDate || defaultStartDate,
        end: endDate || defaultEndDate
    }
}

const arrOfTasks = [
    createTask('taks1', 'desc1'), 
    createTask('taks2', 'desc2'), 
    createTask('taks3', 'desc3'),
    createTask('taks4', 'desc4'),
    createTask('taks5', 'desc5') ]

const totalTime = arrOfTasks.reduce(function (acc, next) {
    return (acc + (next.end.getTime() - next.start.getTime())) / (1000 * 60 * 60);
}, 0)