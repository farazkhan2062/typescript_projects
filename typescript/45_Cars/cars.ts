import { features } from "process";

function storeCarInfo (manufacturer : string, modelName : string, ...extraOption:{[key : string]: any} []): object 
{
    let carInfo : any = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carInfo;
};

let answer = storeCarInfo("Toyota", "Corolla", {color : "red"}, {features: ["Navigation", "Power Window"]});

console.log(answer);