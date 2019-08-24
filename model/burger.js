// import the orm file
// this file is going to call the orm functions
// and using specific input for it 
// export it at the end
const orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.all("burgers")
    }
}