'use strict';
const main = require('../../task11/main/main.js');
const printmainmenu = require('../../task11/main/printmainmenu.js');
const addStudentAchievement = require('../../task11/main/addStudentAchievement.js');
describe('测试', () => {

    it("测试输入y/n", () => {
            spyOn(console, 'log');
            main();
            expect(console.log).toHaveBeenCalledWith('you answered:', true)
        });

    it("测试printmainmenu", () => {
            spyOn(console, 'log');
            printmainmenu();
            expect(console.log).toHaveBeenCalledWith('1.添加学生\n2.生成成绩单\n3.退出')
        });

    it("测试addStudentAchievement",() => {
            let studentinfotable=[];
            let result=addStudentAchievement(studentinfotable);
            expect(result).toBe([['']]);

        });
});

