function addStudentAchievement(studentinfotable) {
    let stuInfo;
    let stuInfo1;
    let readlineSync = require("readline-sync");
    try {
        stuInfo = readlineSync.question("请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：");
    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    if(stuInfo.split(',').length===7){
        studentinfotable.push(stuInfo.split(','));
        //console.log('11111111');
        return studentinfotable;
    }else{
        while(1){
            try {
                stuInfo1 = readlineSync.question("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
            } catch (e) {
                console.error(e);
                process.exit(1);
            }
            console.log(stuInfo1.split(','));
            if(stuInfo1.split(',').length===7){
                studentinfotable.push(stuInfo1.split(','));
                return studentinfotable;
            }
        }

    }
}
//addStudentAchievement([]);
module.exports=addStudentAchievement;
//张三，2011500，4，语文：95，数学：75，英语：80，编程：80