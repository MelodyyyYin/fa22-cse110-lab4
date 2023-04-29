for (let property in statistics) {
    if(key.charAt(0) === 'r' || myObject[key] % 2 === 1){
        console.log(`${property}: ${object[property]}`);
    }
}