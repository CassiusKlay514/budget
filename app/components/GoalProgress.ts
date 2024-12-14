import { Observable } from '@nativescript/core';

export class GoalProgress extends Observable {
    private _title: string;
    private _current: number;
    private _target: number;

    constructor(title: string, current: number, target: number) {
        super();
        this._title = title;
        this._current = current;
        this._target = target;
    }

    get title(): string {
        return this._title;
    }

    get progress(): number {
        return (this._current / this._target) * 100;
    }

    get progressText(): string {
        return `${this.progress.toFixed(0)}%`;
    }

    get amountText(): string {
        return `${this._current}€ / ${this._target}€`;
    }
}