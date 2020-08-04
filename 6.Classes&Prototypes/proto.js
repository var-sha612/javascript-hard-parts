function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    // const newUser = Object.create({}); has no proto link to UserFunctionStore

    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function() {this.score++},
    login: function() { console.log("logged in");}
};

const user1 = userCreator("will",3);
debugger
const user2 = userCreator("tim", 5);
user1.increment();