"use strict";
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  // Метод создает и возвращает объект транзакции.
  // Принимает сумму и тип транзакции.
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      amount,
      type
    };
    return transaction;
  },

  // Метод отвечающий за добавление суммы к балансу.
  // Принимает сумму танзакции.
  // Вызывает createTransaction для создания объекта транзакции
  // после чего добавляет его в историю транзакций
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  //  Метод отвечающий за снятие суммы с баланса.
  //  Принимает сумму танзакции.
  //  Вызывает createTransaction для создания объекта транзакции
  //  после чего добавляет его в историю транзакций.
  //  Если amount больше чем текущий баланс, выводи сообщение
  //  о том, что снятие такой суммы не возможно, недостаточно средств.
  withdraw(amount) {
    if (amount > this.getBalance()) {
      console.log("Cнятие такой суммы не возможно, недостаточно средств!");
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    }
  },

  //  Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },

  //  Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (const details of this.transactions) {
      if (details.id === id) {
        return details;
      }
    }
  },

  //  Метод возвращает количество средств
  //  определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let transactionSum = 0;
    for (const details of this.transactions) {
      if (details.type === type) {
        transactionSum += details.amount;
      }
    }
    return transactionSum;
  }
};

// ===============- Проверка -========
// console.log(account.getBalance());
account.deposit(100);
account.withdraw(50);
account.withdraw(10);
account.deposit(210);
account.withdraw(30);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

