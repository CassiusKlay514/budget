import { Observable, Application } from '@nativescript/core';

export class ThemeService extends Observable {
    private static instance: ThemeService;
    private _isDark: boolean = false;

    static getInstance(): ThemeService {
        if (!ThemeService.instance) {
            ThemeService.instance = new ThemeService();
        }
        return ThemeService.instance;
    }

    get isDark(): boolean {
        return this._isDark;
    }

    toggleTheme(): void {
        this._isDark = !this._isDark;
        const page = Application.getRootView();
        page.className = this._isDark ? 'dark' : 'page';
        this.notifyPropertyChange('isDark', this._isDark);
    }

    applyTheme(): void {
        const page = Application.getRootView();
        page.className = this._isDark ? 'dark' : 'page';
    }
}