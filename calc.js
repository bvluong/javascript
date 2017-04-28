
function hello() {
  return "hello, " + this.username;
}



class User {
  constructor() {
    this.username = 'Bryant';
  }

}

let obj1 = new User;
obj1.hello();
