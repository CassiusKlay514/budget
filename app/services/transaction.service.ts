import { BaseService } from './base.service';
import { Transaction, TransactionSummary, TransactionCategory } from '../models/transaction.model';

export class TransactionService extends BaseService {
  private static instance: TransactionService;
  private transactions: Transaction[] = [];

  static getInstance(): TransactionService {
    if (!TransactionService.instance) {
      TransactionService.instance = new TransactionService();
    }
    return TransactionService.instance;
  }

  getTransactions(): Transaction[] {
    return [...this.transactions];
  }

  addTransaction(transaction: Transaction): void {
    try {
      this.transactions.unshift(transaction);
      this.notifyPropertyChange('transactions', this.transactions);
    } catch (error) {
      this.handleError(error);
    }
  }

  getSummary(): TransactionSummary {
    const summary: TransactionSummary = {
      total: 0,
      count: this.transactions.length,
      byCategory: {} as Record<TransactionCategory, number>
    };

    this.transactions.forEach(transaction => {
      summary.total += transaction.amount;
      summary.byCategory[transaction.category] = 
        (summary.byCategory[transaction.category] || 0) + transaction.amount;
    });

    return summary;
  }
}