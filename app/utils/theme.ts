import { Application } from '@nativescript/core';

export function toggleTheme(isDark: boolean): void {
    const page = Application.getRootView();
    page.className = isDark ? 'dark' : 'page';
}

export function applyTheme(isDark: boolean): void {
    toggleTheme(isDark);
}