var isValid = function(s) {
    const hashMap = {"(":")", "{":"}", "[":"]"}
    const space = [];
    for(let ch of s){
        if(hashMap[ch]){
            space.push(hashMap[ch]);
        } else if (space.length>0&&space[space.length-1]===ch){
            space.pop();
        }else{
            return false;
        }
    }
    return space.length===0;
    };
    console.log(isValid("[["));