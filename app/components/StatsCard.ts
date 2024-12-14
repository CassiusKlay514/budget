import { Observable } from '@nativescript/core';

export class StatsCard extends Observable {
    private _title: string;
    private _value: string;
    private _trend: string;
    private _isPositive: boolean;

    constructor(title: string, value: string, trend: string, isPositive: boolean) {
        super();
        this._title = title;
        this._value = value;
        this._trend = trend;
        this._isPositive = isPositive;
    }

    get title(): string {
        return this._title;
    }

    get value(): string {
        return this._value;
    }

    get trend(): string {
        return this._trend;
    }

    get isPositive(): boolean {
        return this._isPositive;
    }
}