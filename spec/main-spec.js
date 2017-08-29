'use strict';
const main = require('../../task11/main/main.js');
//const printmainmenu = require('../../task11/main/printmainmenu.js');
const addStudentAchievement = require('../../task11/main/addStudentAchievement.js');
describe('测试', () => {
    it("测试主菜单输入3", () => {
        let result=main();
        expect(result).toBe(undefined);

    });

    it("测试生成最终成绩单", () => {
        let final='成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n'+'zhangsan|75|95|80|80|82.5|330\nlisi|85|80|90|81.5|84.125|336.5';
        let result=main();
        expect(result).toBe(final);

        });
});

