import { BaseService } from './base.service';
import { Goal, GoalProgress } from '../models/goal.model';

export class GoalService extends BaseService {
  private static instance: GoalService;
  private goals: Goal[] = [];

  static getInstance(): GoalService {
    if (!GoalService.instance) {
      GoalService.instance = new GoalService();
    }
    return GoalService.instance;
  }

  getGoals(): Goal[] {
    return [...this.goals];
  }

  addGoal(goal: Goal): void {
    try {
      this.goals.push(goal);
      this.notifyPropertyChange('goals', this.goals);
    } catch (error) {
      this.handleError(error);
    }
  }

  getGoalProgress(goalId: string): GoalProgress | null {
    const goal = this.goals.find(g => g.id === goalId);
    if (!goal) return null;

    const percentage = (goal.current / goal.target) * 100;
    return {
      percentage,
      remaining: goal.target - goal.current,
      isCompleted: percentage >= 100
    };
  }

  updateProgress(goalId: string, amount: number): void {
    try {
      const goal = this.goals.find(g => g.id === goalId);
      if (goal) {
        goal.current += amount;
        this.notifyPropertyChange('goals', this.goals);
      }
    } catch (error) {
      this.handleError(error);
    }
  }
}