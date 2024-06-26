//1.Build a to-do list application where users can add tasks, mark them as complete, and delete them. Utilize your knowledge on DOM manipulation. (30 marks) compulsory question

    const taskInput ='taskInput'
    const taskList = 'taskList'

    function addTask() {
       
        if (taskText !== '') {
            const taskItem = document.querySelector('li');
            taskItem.innerHTML = taskText;
            taskItem.classList.push('to-do list');

            const deleteButton = document.querySelector('#delete, delete');
            deleteButton.innerHTML = 'delete';
            deleteButton.onclick = function() {
                taskItem.remove();
            };

            const 



            taskItem.new(deleteButton);
            taskList.new(taskItem);
            taskInput.value = '';
        }
    }
    console.log(addTask());

//QUESTION 2 
// Write a JavaScript program to print the multiplication table of 5 up to 12 using a for loop. (10 marks),

let numbers = [5, 6, 7, 8, 9, 10, 11, 12]

function printMultiplyTable() {
    const multiplier = 5;
    const tableLength = 12;

    for (let i = 1; i <= tableLength; i++) {
        const result = multiplier * i;
        console.log(`${multiplier} x ${i} = ${result}`);
    }
}
printMultiplyTable()


// 3. Create a class BankAccount with private properties balance and accountNumber. Implement methods deposit amount) and withdraw(amount) to modify the balance. Additionally, implement a method getBalance() to retrieve the balance. Ensure that the balance property can only be modified through the deposit and withdraw methods (20 marks)

class BankAccount {
    constructor(accountNumber) {
      let balance = 0;
      this.accountNumber = accountNumber
    }
      validAmount = (amount)=> amount > 0
      
      deposit(amount){
        if (!this.validAmount(amount)) {
          return("Insufficient Balance");

        }
        return this.balance += amount;
      };
      withdraw(amount){
        if (amount > this.balance) {
          return('Insufficient Balance');
        }
       return this.balance -= amount;
      };
      getBalance(){
        return this.balance
      }
  
    }

  const userAccount = new accountNumber('2342352645');

  userAccount.deposit(9000)

  userAccount.withdraw(20000)
  console.log(`Account Number: ${userAccount.accountNumber}, Account Balance: ${userAccount.getBalance()} `);

  



// 4. You're analyzing engagement on social media posts. Given arrays representing likes and comments for each post, write a function to calculate the total engagement (likes + comments) for each post. Use the array below… let likes = [10, 20, 15, 30] and let comments = [5, 10, 8, 15] Your result would be a new array [15,30, 23, 45 ] (15 marks)

let likes = [10, 20, 15, 30];
let comments = [5, 10, 8, 15];

function calculateTotalEngagement(likes, comments) {
    let totalEngagement = [];
    for (let i = 0; i < likes.length; i++) {
        totalEngagement.push(likes[i] + comments[i]);
    }
    return totalEngagement;
}

let totalEngagement = calculateTotalEngagement(likes, comments);
console.log(totalEngagement);



// 5. Create a class called Animal with properties like name, age, and species.Implement methods like eat() and sleep(). Then create subclasses like Dog, Cat, and Bird inheriting from the Animal class. Show instances of where an animal is eating or sleeping. (20 marks)

 class Animal {
    constructor(name){
            this.name = name,
            this.age = age,
            this.species = specie
    }
    eatFood(){
        let quantity = this.age == this.species
    }
 }


// 6. Write a function that takes a numerical grade as an argument and returns the corresponding letter grade (A,B, C, D, or F) Using the IF-ELSE statement and rewrite the function using switch case . (10 marks)

function numericalGrade(score){
  if (score >= 80) {
      return 'A'
  } else if (score >= 70) {
      return 'B'
  } else if (score >= 60) {
      return 'C'
  } else if (score >= 50) {
      return 'D'
  } else{
      return 'F'
  }
}
console.log(numericalGrade(94));





// 7. Create an object school with properties name, location, and students.students should be an array of objects, each representing a student with properties name, age, and grade. (10 marks)

const school = {
  name: "Anchorsoft",
  location: "Ikeja",
  student: [
      {
          name: "Oba",
          age: 28,
          grade: "A"
      },
      {
          name: "Bisi",
          age: 26,
          grade: "A"
      },
      {
          name: "mimi",
          age: 27,
          grade: "A"
      }
  ]
}







// 8. Create a class Product with properties name, price, and quantity.Implement methods to increase and decrease the quantity of a product (increaseQuantity(amount) and decreaseQuantity(amount)). Then, create a class Inventory that manages a list of products, allowing adding new products, removing products, and retrieving the total value of the inventory. (20 marks)




// 9. Write a loop that prints numbers from 1 to 20, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both 3 and 5 print "FizzBuzz". (15 marks)


function fizzbuzz(){
  if (result.innerHTML % 3 === 0 && result.innerHTML % 5 === 0) {
      alert("FizzBuzz!!!")
  } else if (result.innerHTML % 3 === 0) {
      alert("Fizz!")
  } else if (result.innerHTML % 5 === 0) {
      alert("Buzz!")
  } else if (result.innerHTML % 2 === 0) {
      link("https://www.google.com/")
  }
}




// 10. Develop an online shopping cart system. Create classes for Product, ShoppingCart, and Customer. Implement methods for adding/removing items, calculating totals, and processing orders. (20 marks)