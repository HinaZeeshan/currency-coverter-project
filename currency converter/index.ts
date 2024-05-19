#! /usr/bin/env node

import inquirer from "inquirer";
let c_value: {[key:string] : number} = {
    pkr: 278.40,
    USD: 1,
    UAE: 3.67
}
let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "converting from",
    choices:['pkr', 'USD', 'UAE']
},
{
    type: "list",
    name: "to",
    message: "converting to",
    choices:['pkr', 'USD', 'UAE']
},
{
    type: "number",
    name: "amount",
    message: "Your amount to convert" 
}
]);

console.log(c_value[ans.to]/ c_value[ans.from]*ans.amount);