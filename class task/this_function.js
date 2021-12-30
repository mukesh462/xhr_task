// Class Declearation

class Accounting{
    constructor(name,account,balance){
        this.name= name;
        this.account=account;
        this.balance=balance;
    }
//Get balance of account function
   getBalance(){ return `Your account Balance is: ${this.balance}`

   }
   withdraw(amount){
if(amount<=this.balance){
    this.balance = this.balance- amount
    return this.getBalance()
}else{

    return `Insufficient Fund 
    ${this.getBalance()}`
    
}
   }
//Deposit Function
   deposit(amount){
       return `Your Upadted Balanace is: ${amount + this.balance}`
       
    
   }

}
// Creating New Object
var Mukesh = new Accounting("Mukesh",101,5_00_000)
var Ramesh= new Accounting("Ramesh",102,2_50_000)
var Uma= new Accounting("Uma",103,1_50_000)


console.log(Mukesh.getBalance());
console.log(Mukesh.withdraw(500));
console.log(Mukesh.deposit(500));


