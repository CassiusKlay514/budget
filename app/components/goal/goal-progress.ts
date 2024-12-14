import { Observable } from '@nativescript/core';
import { Goal } from '../../models/goal.model';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

export class GoalProgress extends Observable {
    private _goal: Goal;

    constructor(goal: Goal) {
        super();
        this._goal = goal;
    }

    get title(): string {
        return this._goal.title;
    }

    get progress(): number {
        return (this._goal.current / this._goal.target) * 100;
    }

    get progressText(): string {
        return formatPercentage(this.progress);
    }

    get amountText(): string {
        return `${formatCurrency(this._goal.current)} / ${formatCurrency(this._goal.target)}`;
    }
}