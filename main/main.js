function main() {
    let	query = require('cli-interact').getYesNo;
    let answer = query('Is it true');
    console.log('you answered:', answer);
}
module.exports=main;