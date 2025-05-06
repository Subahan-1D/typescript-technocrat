{
  // access Modifier

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      (this.id = id), (this.name = name), (this._balance = balance);
    }

   public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

   public getBalance() {
      return this._balance
    }
  }

  const lowAccount = new BankAccount(1, "Md.Subahan Ali", 1020);
  lowAccount.addDeposit(24);
  const myBalance = lowAccount.getBalance()
  console.log(myBalance)
  console.log(lowAccount);

  class StudentAccount extends BankAccount{
    test(){
        this._balance
    }
  }


}
