// Constructor Invocation
function Cohort(name){
  this.name = name;
}

var cohort = new Cohort("Pocket Gophers");

// Leaving off the new keyword will make the
// object referenced by `this` equal the global object
// which in the browser is `window`

// Method Invocation
Cohort.prototype.getName = function(){
  return this.name;
}

console.log(cohort.getName());


// Free Floating Function Invocation (also callback scope)
function greeting() {
  console.log("Hello there!" + this);
}

greeting();

// $('a').click(function(event){
//   //this === the thing clicked
//   var self = this;
//   $.ajax('/someURL')
//     .done(function(response){
//       $(self).text(response);
//     });
// });

// apply and call Invocation
var kevin = {name: "Kevin"}

console.log(cohort.getName.call(kevin));
console.log(cohort.getName.apply(kevin));


(arg1, arg2) => {
  console.log(this.name);
}
