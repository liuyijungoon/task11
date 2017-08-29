'use strict';
const main = require('../../task11/main/main.js');
//const printmainmenu = require('../../task11/main/printmainmenu.js');
const addStudentAchievement = require('../../task11/main/addStudentAchievement.js');
describe('测试', () => {

    it("测试输入zhangsan的成绩", () => {

        spyOn(console, 'log');
        let final=[['zhangsan', '20150109', '4', 'chinese:95', 'math:75', 'english:80', 'coding:80']];
        let result=addStudentAchievement([]);
        for(let i=0;i<7;i++){
            expect(result[0][i]).toBe(final[0][i]);
        }
        expect(console.log).toHaveBeenCalledWith('学生zhangsan的成绩被添加')

    });
});

