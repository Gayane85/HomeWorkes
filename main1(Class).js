1; ///////////////////
class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  get name() {
    return this.name_;
  }
  set name(value) {
    if (typeof value !== "string") {
      console.log(new Error("please input a name"));
    } else {
      return (this.name_ = value);
    }
  }
  toString() {
    return `this is ${this.name}'s email adress= ${this.email}`;
  }
}

let author = new Author("Yukio Mishima", "ahhaha", "male");
//console.log(author.toString())

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  get author() {
    return this.author_;
  }

  set author(author) {
    if (author instanceof Author) {
      this.author_ = author;
    } else {
      alert("create a author from Author class");
    }
  }
  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return ` ${this.title} book price is ${this.price}`;
  }
}
let book = new Book("The catcher in the rye", author, 3000, 10);
console.log(book.toString());

//Տնայինի 2-րդ խնդիրը
class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  get name() {
    return this.name_;
  }
  set name(value) {
    return (this.name_ = value);
  }

  get balance() {
    return this.balance_;
  }
  set balance(value) {
    return (this.balance_ = value);
  }

  get id() {
    return this.id_;
  }
  set id(value) {
    return (this.id_ = value);
  }

  credit(amount) {
    let newBalance = this.balance + amount;
    return newBalance;
  }

  debit(amount) {
    if (this.balance > amount) {
      return this.balance - amount;
    } else {
      throw new Error("Amount exceeded balance");
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount < this.balance) {
      let updatedBalance = this.balance - amount + anotherAccount;
      return updatedBalance;
    } else {
      throw new Error("Amount exceeded balance");
    }
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst === accountSecond;
  }

  toString() {
    return `Due to your id=${this.id} you can know your balance`;
  }
}
let account = new Account(17, "Tigran", 750000);
console.log(account.transferTo(100000, 200000));

3; ////////////////
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  get lastName() {
    return this.lastName_;
  }
  set lastName(value) {
    return (this.lastName_ = value);
  }

  toString() {
    return `Person's fullname is ${
      this.firstName + " " + this.lastName
    }, and person's gender is ${this.gender}`;
  }
}
let p = new Person("Gayane", "Perikhanyan", "female", 38);
//console.log(p.toString())

class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);

    this.program = program;
    this.year = year;
    this.fee = fee;
    this.data = {};
  }

  get program() {
    return this._program;
  }
  set program(value) {
    this._program = value;
  }

  get fee() {
    return this._fee;
  }
  set fee(value) {
    this._pay = value;
  }

  passExam(program_, grade) {
    this.data[program_] = grade;

    for (let i = 0; i < this.program.length; i++) {
      if (!this.program.includes(program_)) {
        return new Error("Your program does not include this exam");
      }
    }

    const allPassed = this.program.every((grade) => this.data[grade] >= 50);
    if (allPassed) {
      return (this.year += 1);
    }
  }

  toString() {
    return `If the you pass all exams, then you move on   to the next ${this.year} course `;
  }
}

class Staff extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }
  get program() {
    return this.program_;
  }
  set program(value) {
    return (this.program_ = value);
  }

  toString() {
    return `this teacher teaches ${this.program}, and receives annually ${
      this.pay * 12
    } salary `;
  }
}
let s = new Student(
  "Gayane",
  "Perikhanyan",
  "female",
  38,
  ["math", "english"],
  2,
  70000
);
console.log(s.toString());

console.log(s.passExam("math", 60));
console.log(s.passExam("english", 60));
console.log(s.toString());

let st = new Staff("Mariam", "Sargsyan", "female", 35, "physics", 200000);
console.log(st.toString());
