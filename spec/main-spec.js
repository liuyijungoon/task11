'use strict';
const main = require('../../task11/main/main.js');
const printmainmenu = require('../../task11/main/printmainmenu.js');
const addStudentAchievement = require('../../task11/main/addStudentAchievement.js');
describe('测试', () => {

    it("测试main选择1", () => {
        let final=[['zhangsan', '20150109', '4', 'chinese:95', 'math:75', 'english:80', 'coding:80']];
        let result=main();
        for(let i=0;i<7;i++){
            expect(result[0][i]).toBe(final[0][i]);
        }
        });
    it("测试main选择2", () => {
        let final=[['zhangsan', '20150109', '4', 'chinese:95', 'math:75', 'english:80', 'coding:80']];
        let result=main();
        for(let i=0;i<7;i++){
            expect(result[0][i]).toBe(final[0][i]);
        }
    });

    // it("测试输入y/n", () => {
    //         spyOn(console, 'log');
    //         main();
    //         expect(console.log).toHaveBeenCalledWith('you answered:', true)
    //     });

    // it("测试printmainmenu", () => {
    //         spyOn(console, 'log');
    //         printmainmenu();
    //         expect(console.log).toHaveBeenCalledWith('1.添加学生\n2.生成成绩单\n3.退出')
    //     });

    // it("测试addStudentAchievement",() => {
    //         let studentinfotable=[];
    //         let result=addStudentAchievement(studentinfotable);
    //         expect(result).toBe([['']]);
    //
    //     });


    // it("测试addStudentAchievement1",() => {
    //     let studentinfotable=[];
    //     let final=[['zhangsan', '20150109', '4', 'chinese:95', 'math:75', 'english:80', 'coding:80']]
    //     let result=addStudentAchievement(studentinfotable);
    //     for(let i=0;i<7;i++){
    //         expect(result[0][i]).toBe(final[0][i]);
    //     }
    //
    //
    // });
});

