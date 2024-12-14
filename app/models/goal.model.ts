export interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline?: Date;
  category: GoalCategory;
}

export enum GoalCategory {
  SAVINGS = 'savings',
  VACATION = 'vacation',
  PURCHASE = 'purchase',
  EMERGENCY = 'emergency'
}

export interface GoalProgress {
  percentage: number;
  remaining: number;
  isCompleted: boolean;
}