type Transaction = {
  type: 'deposit' | 'withdraw' | 'transfer';
  amount: number;
  date: Date;
  details?: string;
};

class BankAccount {

  private readonly accountNumber: string;
  private balance: number;
  private transactionHistory: Transaction[] = [];

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

 
  getAccountInfo() {
    return {
      accountNumber: this.accountNumber,
      balance: this.balance,
    };
  }


  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    this.balance += amount;
    this.recordTransaction({ type: "deposit", amount, date: new Date() });
  }

 
  withdraw(amount: number) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
    this.recordTransaction({ type: "withdraw", amount, date: new Date() });
  }


  transferFunds(amount: number, toAccount: BankAccount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.withdraw(amount);
    toAccount.deposit(amount);

    const detailsFrom = `Transferred to account ${toAccount.accountNumber}`;
    const detailsTo = `Received from account ${this.accountNumber}`;

   
    this.recordTransaction({
      type: "transfer",
      amount,
      date: new Date(),
      details: detailsFrom,
    });

    toAccount.recordTransaction({
      type: "transfer",
      amount,
      date: new Date(),
      details: detailsTo,
    });
  }


  getTransactionHistory(): readonly Transaction[] {
    return this.transactionHistory;
  }


  private recordTransaction(transaction: Transaction) {
    this.transactionHistory.push(transaction);
  }
}



const account1 = new BankAccount("1234567890", 1000);
const account2 = new BankAccount("0987654321", 500);

account1.deposit(500);
account1.withdraw(200);
account1.transferFunds(300, account2);

console.log("Account 1 Info:", account1.getAccountInfo());
console.log("Account 1 Transactions:", account1.getTransactionHistory());

console.log("Account 2 Info:", account2.getAccountInfo());
console.log("Account 2 Transactions:", account2.getTransactionHistory());
