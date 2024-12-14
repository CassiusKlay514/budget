import { formatCurrency } from '@nativescript/core/text/formatting';

export function formatAmount(amount: number): string {
    return formatCurrency(amount, 'EUR', 'fr-FR');
}

export function formatPercentage(value: number): string {
    return `${value.toFixed(1)}%`;
}