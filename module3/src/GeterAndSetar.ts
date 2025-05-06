{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      (this.id = id), (this.name = name), (this._balance = balance);
    }

    //settar

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    //  public addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }

    //  public getBalance() {
    //     return this._balance
    //   }

    // getter user

    get balance() {
      return this._balance;
    }
  }

  const lowAccount = new BankAccount(1, "Md.Subahan Ali", 130);
  //   lowAccount.addDeposit(24);
  //   const myBalance = lowAccount.getBalance();
  
  // setar system
  lowAccount.deposit = 700
  // geter system
  const myBalance = lowAccount.balance;
  console.log(myBalance);
  //   console.log(lowAccount);

  
  
}
