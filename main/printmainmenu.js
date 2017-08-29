function PrintMainMenu() {

    let readlineSync = require("readline-sync");
    let text= '1.添加学生\n2.生成成绩单\n3.退出';
    console.log(text);
    let whattodoinfo = readlineSync.question("请输入你的选择（1~3）？");
    return whattodoinfo;
}
module.exports=PrintMainMenu;