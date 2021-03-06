import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const somatoryIncome = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((somatory, transaction) => somatory + transaction.value, 0);

    const somatoryOutcome = this.transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce((somatory, transaction) => somatory + transaction.value, 0);

    const total = somatoryIncome - somatoryOutcome;

    const balance = {
      income: somatoryIncome,
      outcome: somatoryOutcome,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const newTransaction = new Transaction({ title, value, type });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
