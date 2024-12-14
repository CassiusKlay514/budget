import { TransactionService } from './services/transaction.service';
import { GoalService } from './services/goal.service';

export function initializeApp() {
    // Initialize services
    TransactionService.getInstance();
    GoalService.getInstance();
    
    // Add any other initialization logic here
    console.log('App initialized successfully');
}