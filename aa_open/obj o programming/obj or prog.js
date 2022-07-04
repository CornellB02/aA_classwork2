// OOP

class User {
    constructor (name, password, friends = [], location,){
        this.name = name; 
        this.password = password;
        this.friends = friends;
        this.location = location

    }
    addFriend(friend){
        this.friends.push(friend)
    }
}


let me = new User ("Cornell", "123456",[],"'NY")

// console.log(me)
me.addFriend("Manny")
console.log(me)

// trie 
// Retrieval Tree
// Prefix Tree 

names = [
    "Jonathan",
    "John",
    "Jon",
    "Joe",
    "Tom",
    "Tommy",
]

class Trie {
    constructor (val = null, children = [], parent= null, complete = false){
        this.val = val 
        this.children = children
        this.parent = parent
        this.children = complete
    }
}

// dfs = depth first search --- stack (adt datatype) -- LIFO -- Last in First Out
// bfs = breadth firsth searcg ---- queue  --- FIFO First In First Out 

let stack = [root];

while (stack.length > 0){
    let (current = stack.pop){
        for (let i = cuurent.children.lenght - 1; i >= 0; i--){
            stack.push(current.children[i])
        }
    }

}