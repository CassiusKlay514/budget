import { Observable } from '@nativescript/core';
import { Transaction } from '../../models/transaction.model';
import { formatCurrency } from '../../utils/formatters';
import { formatDate } from '../../utils/date-helpers';

export class TransactionItem extends Observable {
    private _transaction: Transaction;

    constructor(transaction: Transaction) {
        super();
        this._transaction = transaction;
    }

    get title(): string {
        return this._transaction.title;
    }

    get icon(): string {
        return this._transaction.icon;
    }

    get formattedAmount(): string {
        return formatCurrency(this._transaction.amount);
    }

    get formattedDate(): string {
        return formatDate(this._transaction.date);
    }

    get amountClass(): string {
        return this._transaction.amount < 0 ? 'negative' : 'positive';
    }
}