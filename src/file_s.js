const fs = require('fs');
exports.write = function(path, packageName, api_data){
    fs.writeFile(`${path}/${packageName}.json`, JSON.stringify(api_data), (err) => {
        if (err) throw err;
        console.log("*".repeat(100)+"\nfile written successfully!\nfile:\t"+`${path}/${packageName}.json`+"\n"+"*".repeat(100));
    });
};
exports.read = function(...path_package){
    fs.readFile(`${path_package[0]}/${path_package[1]}.json`, {encoding:'utf-8'}, (err, data)=>{
        //console.log(data);
    })
}
exports.exists = function(...path_package){
    if(fs.existsSync(`${path_package[0]}/${path_package[1]}.json`))return console.log(`${path_package[0]}/${path_package[1]}.json`);
    return false;
}