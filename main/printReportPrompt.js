
function printReportPrompt() {
    let printInfo;
    let printInfo1;
   // let stunumber=[];
    let readlineSync = require("readline-sync");
    try {
        printInfo = readlineSync.question("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    if(!printInfo.split(',').some(function (item,index) {
            return item.length!==8;
        })){
        // stunumber.push(printInfo.split(','));
        // return stunumber;
        return printInfo.split(',');
    }else{
        while(1){
            try {
                printInfo1 = readlineSync.question("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
            } catch (e) {
                console.error(e);
                process.exit(1);
            }

            //console.log(printInfo1.split(','));
            if(!printInfo1.split(',').some(function (item,index) {
                    return item.length!==8;
                })){
                // console.log(222222222);
                // stunumber.push(printInfo1.split(','));
                // return stunumber;
                return printInfo1.split(',');
            }
        }
    }
}
module.exports=printReportPrompt;