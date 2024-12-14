import { Observable } from '@nativescript/core';
import { Transaction } from '../models/transaction';

export class TransactionService extends Observable {
    private static instance: TransactionService;
    private transactions: Transaction[] = [];

    static getInstance(): TransactionService {
        if (!TransactionService.instance) {
            TransactionService.instance = new TransactionService();
        }
        return TransactionService.instance;
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }

    addTransaction(transaction: Transaction): void {
        this.transactions.unshift(transaction);
        this.notifyPropertyChange('transactions', this.transactions);
    }

    removeTransaction(id: string): void {
        this.transactions = this.transactions.filter(t => t.id !== id);
        this.notifyPropertyChange('transactions', this.transactions);
    }
}