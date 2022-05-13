// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const twoDrivers = drivers.slice(0,2)
    return twoDrivers
}
function returnLastTwoDrivers(drivers){
    const lastDrivers = drivers.slice(2,4)
    return lastDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(x){
    return function(x){
        return x*x
    }
}
const fareDoubler = x => 2*x
const fareTripler = x => 3*x
const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers)

/*const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const twodrive = drivers.slice(0,2);
const lstdrive = drivers.slice(2,4);

function returnFirstTwoDrivers() {
    return twodrive;
}
function returnLastTwoDrivers() {
    return lstdrive;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int) {
    return function () {
        return int*int;
    }
}
function fareDoubler(int) {
    return int*2;
}
function fareTripler(int) {
    return int*3;
}
function selectDifferentDrivers(arrayOfDrivers, funct) {
    if (funct == returnFirstTwoDrivers) {
        return twodrive;
    }
    else if (funct = returnLastTwoDrivers) {
        return lstdrive;
    }
}

returnFirstTwoDrivers();
returnLastTwoDrivers();
createFareMultiplier(5);
fareDoubler(10);
fareTripler(2);*/