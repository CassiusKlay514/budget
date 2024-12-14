export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: Date;
  category: TransactionCategory;
  icon: string;
}

export enum TransactionCategory {
  SHOPPING = 'shopping',
  FOOD = 'food',
  TRANSPORT = 'transport',
  ENTERTAINMENT = 'entertainment',
  BILLS = 'bills',
  OTHER = 'other'
}

export interface TransactionSummary {
  total: number;
  count: number;
  byCategory: Record<TransactionCategory, number>;
}