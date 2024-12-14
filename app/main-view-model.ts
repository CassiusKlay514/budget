import { Observable } from '@nativescript/core';
import { Application } from '@nativescript/core';

export class MainViewModel extends Observable {
    private _isDark: boolean = false;
    private _transactions: Array<any>;

    constructor() {
        super();
        
        this._transactions = [
            { 
                title: 'Courses', 
                amount: '-€85.50',
                date: "Aujourd'hui",
                icon: '~/images/shopping.png'
            },
            { 
                title: 'Restaurant', 
                amount: '-€32.00',
                date: 'Hier',
                icon: '~/images/food.png'
            },
            { 
                title: 'Transport', 
                amount: '-€15.90',
                date: 'Hier',
                icon: '~/images/transport.png'
            }
        ];
    }

    get transactions(): Array<any> {
        return this._transactions;
    }

    toggleTheme() {
        this._isDark = !this._isDark;
        const page = Application.getRootView();
        if (this._isDark) {
            page.className = 'dark';
        } else {
            page.className = 'page';
        }
    }

    onAddExpense() {
        // Animation will be added here
        console.log('Add expense tapped');
    }
}