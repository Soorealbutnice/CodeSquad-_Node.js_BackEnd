(function callModuleChecker(){
    result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

function typeCheck(value){
    if (isNaN(value) || typeof(value) === "string"){
        return false;
    }
    return true;
}

module.exports.sum = (arr) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if(typeCheck(arr[i])){
            result += arr[i];
        }
    }

    return result;
}
