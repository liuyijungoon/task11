function find(arr,ch) {
    for(let item of arr){
        if(item[1]===ch){
            return item;
        }
    }
    return false;
}
function main() {
    let toprinttext='成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================';
    let stuinfos=[];
    let result;
    let stunumbe=[];
    const printmainmenu= require('./printmainmenu');
    const addStudentAchievement= require('./addStudentAchievement');
    const printReportPrompt= require('./printReportPrompt');

    while(1){
        let whattodo = printmainmenu();
        if(whattodo==='3'){
            break;
        }
        else if (whattodo==='1'){
            stuinfos.push(addStudentAchievement(stuinfos));
        }else if(whattodo==='2'){
            stunumber=printReportPrompt();
            stunumber.forEach(function (item,index) {
                let obj =find(stuinfos,item);
                if(obj!==false){
                    toprinttext=toprinttext+'\n'+obj[0]+'|'+obj[4].split(':')[1]+'|'+obj[3].split(':')[1]+'|'+obj[5].split(':')[1]+'|'+obj[6].split(':')[1]+'|'+(Number(obj[4].split(':')[1])+Number(obj[3].split(':')[1])+Number(obj[5].split(':')[1])+Number(obj[6].split(':')[1]))/4;
                    toprinttext=toprinttext+'|'+(Number(obj[4].split(':')[1])+Number(obj[3].split(':')[1])+Number(obj[5].split(':')[1])+Number(obj[6].split(':')[1]));
                }
            });
            console.log(toprinttext);
            return toprinttext;
        }
        else{
            console.log('error input!')
        }

    }

}
//zhangsan,20150109,4,chinese:95,math:75,english:80,coding:80
//lisi,20150101,4,chinese:80,math:85,english:90,coding:81.5

module.exports=main;