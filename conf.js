// conf.js
var username = "vstola",
    accessKey = "0f984e9b-3516-4073-af26-5a42ea7e3add";
exports.config = {
    framework: 'jasmine',

    sauceUser: username,
    sauceKey: accessKey,

     specs: [
        //TODO: add here other suites
        './exercise1/calculator.solution.js',
        './exercise2/todo.solution.js'
    ],

    params: {
        //TODO: add global params here
        exercise1: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex1/'
        },
        exercise2: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex2/'
        }
    }

};
