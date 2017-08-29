function main() {
    let stuinfos=[];
    let result;
    let stunumber;
    const printmainmenu= require('./printmainmenu');
    const addStudentAchievement= require('./addStudentAchievement');
    const printReportPrompt= require('./printReportPrompt');
    let whattodo = printmainmenu();
    if (whattodo==='1'){
        stuinfos.push(addStudentAchievement(stuinfos));
    }else if(whattodo==='2'){
        stunumber=printReportPrompt();
        stunumber.forEach(function (item,index) {
            if()

        })
    }
    console.log(stuinfos)
}
main();
module.exports=main;