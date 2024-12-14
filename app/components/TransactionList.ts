import { Observable } from '@nativescript/core';
import { Transaction } from '../models/transaction';

export class TransactionList extends Observable {
    private _items: Transaction[];

    constructor() {
        super();
        this._items = [];
    }

    get items(): Transaction[] {
        return this._items;
    }

    addTransaction(transaction: Transaction) {
        this._items.push(transaction);
        this.notifyPropertyChange('items', this._items);
    }
}