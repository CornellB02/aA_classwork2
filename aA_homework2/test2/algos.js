bubbleSort(array){
    let sorted = false
    while (!sorted){

        sorted = true 
        for (let i = 0; i < array.length; i++){
            if(arr[i] > arr[i+1]){
                (arr[i],arr[i+1]) = (arr[i+1],arr[i])
                sorted = false 
            }
            
        }
    }
    return array
}


function Anagrams(word1, word2) {
    if (word1.lenght !== word2.length){
        return false
    }
    let obj = {}
    for (let i = 0; i < word1.length; i++){
        let ele1 = word1[i]
        let ele2 = word2[i]
        if(obj[char1] === undefined){
            obj[char1] = 1 
        } else {
            obj[char1] += 1
        }
        if (obj[char2] === undefined){
            obj[char2] = -1
        } else {
            obj[char2] += -1
            console.log(obj)
        }
    }
    for (let key in obj){
        // console.log(key)
        if(obj[key] !== 0){

            return false 
        }
    }
    return true 
}


if (word1.length !== word2.length) {
  return false;
}

for (var i = 0; i < word1.length; i += 1) {
  var char = word1[i];

  if (word2.indexOf(char) === -1) {
    return false;
  }
}

return true;