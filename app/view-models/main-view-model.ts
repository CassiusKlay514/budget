import { Observable } from '@nativescript/core';
import { TransactionService } from '../services/transaction.service';
import { GoalService } from '../services/goal.service';
import { TransactionItem } from '../components/transaction/transaction-item';
import { GoalProgress } from '../components/goal/goal-progress';
import { StatsCard } from '../components/stats/stats-card';

export class MainViewModel extends Observable {
    private _transactionService: TransactionService;
    private _goalService: GoalService;
    private _isDark: boolean = false;

    constructor() {
        super();
        this._transactionService = TransactionService.getInstance();
        this._goalService = GoalService.getInstance();
        this.loadData();
    }

    private loadData(): void {
        this.notifyPropertyChange('transactions', this.transactions);
        this.notifyPropertyChange('goals', this.goals);
        this.notifyPropertyChange('stats', this.stats);
    }

    get transactions(): TransactionItem[] {
        return this._transactionService.getTransactions()
            .map(t => new TransactionItem(t));
    }

    get goals(): GoalProgress[] {
        return this._goalService.getGoals()
            .map(g => new GoalProgress(g));
    }

    get stats(): StatsCard[] {
        const summary = this._transactionService.getSummary();
        return [
            new StatsCard('Balance', '2,450€', '+12.5%', true),
            new StatsCard('Dépenses', '1,280€', '-8.3%', false),
            new StatsCard('Économies', '450€', '+4.7%', true)
        ];
    }

    get isDark(): boolean {
        return this._isDark;
    }

    toggleTheme(): void {
        this._isDark = !this._isDark;
        this.notifyPropertyChange('isDark', this._isDark);
    }
}