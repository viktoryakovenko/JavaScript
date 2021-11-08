let batteryCount;
let brokenBatteryPercent;

batteryCount = prompt("Please, enter battery count", 0);
brokenBatteryPercent = prompt("Please, enter broken battery percent", 0);

while(isNaN(batteryCount) || parseInt(batteryCount) < 0)
{
    alert("Wrong battery count!");
    batteryCount = parseInt(prompt("Please, enter correct battery count", 0));
}

while(isNaN(brokenBatteryPercent) || parseInt(brokenBatteryPercent) < 0 || parseInt(brokenBatteryPercent) > 100)
{
    alert("Wrong broken battery percent!");
    brokenBatteryPercent = parseInt(prompt("Please, enter correct broken battery percent", 0));
}

const brokenBatteryCount = batteryCount * brokenBatteryPercent / 100;
const workingBatteryCount = batteryCount - brokenBatteryCount;

alert("Battery count: " + parseInt(batteryCount).toFixed(2)
    + "\nBroken Battery Percent: " + parseInt(brokenBatteryPercent).toFixed(2)
    + "%\nCount of Broken Batteries: " + parseInt(brokenBatteryCount).toFixed(2)
    + "\nCount of Working Batteries: " + parseInt(workingBatteryCount).toFixed(2));