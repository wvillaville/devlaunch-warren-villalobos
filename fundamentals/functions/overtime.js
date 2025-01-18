const prompt = require('prompt-sync')();

const hourlyRate = parseFloat(prompt('Enter the hourly rate: '));
const entryTime = prompt('Enter the entry time (HH:MM): ');
const exitTime = prompt('Enter the exit time (HH:MM): ');


if (isNaN(hourlyRate) || isNaN(convertTimeToMinutes(entryTime)) || isNaN(convertTimeToMinutes(exitTime))) {
    console.log('Invalid input. Please enter numeric values for hourly rate, entry time, and exit time.');
    process.exit(1);
}

const entryMinutes = convertTimeToMinutes(entryTime);
const exitMinutes = convertTimeToMinutes(exitTime);

const totalWorkedMinutes = exitMinutes - entryMinutes;
const regularTime = 480; 
const overtime = totalWorkedMinutes > regularTime ? totalWorkedMinutes - regularTime : 0;
const regularMinutes = Math.min(totalWorkedMinutes, regularTime);

const regularPay = calculateRegularPay(regularMinutes, hourlyRate);
const overtimePay = calculateOvertimePay(overtime, hourlyRate);
const totalPay = regularPay + overtimePay;


function convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

function calculateOvertimePay(overtime, rate) {
    return overtime > 0 ? overtime * (rate / 60) * 1.5 : 0;
}

function calculateRegularPay(time, rate) {
    return time * (rate / 60);
}

console.log(`Hourly Rate: $${hourlyRate.toFixed(2)}`);
console.log(`Entry Time: ${entryTime}`);
console.log(`Exit Time: ${exitTime}`);
console.log(`Total Worked Time: ${totalWorkedMinutes} minutes`);
console.log(`Total Overtime: ${overtime} minutes`);
console.log(`Regular Pay: $${regularPay.toFixed(2)}`);
console.log(`Overtime Pay: $${overtimePay.toFixed(2)}`);
console.log(`Total Pay: $${totalPay.toFixed(2)}`);
