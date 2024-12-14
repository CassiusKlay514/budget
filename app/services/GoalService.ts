import { Observable } from '@nativescript/core';

export interface Goal {
    id: string;
    title: string;
    target: number;
    current: number;
}

export class GoalService extends Observable {
    private static instance: GoalService;
    private goals: Goal[] = [];

    static getInstance(): GoalService {
        if (!GoalService.instance) {
            GoalService.instance = new GoalService();
        }
        return GoalService.instance;
    }

    getGoals(): Goal[] {
        return this.goals;
    }

    addGoal(goal: Goal): void {
        this.goals.push(goal);
        this.notifyPropertyChange('goals', this.goals);
    }

    updateGoalProgress(id: string, amount: number): void {
        const goal = this.goals.find(g => g.id === id);
        if (goal) {
            goal.current += amount;
            this.notifyPropertyChange('goals', this.goals);
        }
    }
}