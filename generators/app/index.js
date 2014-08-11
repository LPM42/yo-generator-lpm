var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  method1: function() {
    console.log("My first method is running.");
  },
  method2: function() {
    console.log("My second method is running.");
  }
});