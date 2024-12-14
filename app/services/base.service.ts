import { Observable } from '@nativescript/core';

export class BaseService extends Observable {
  protected notifyPropertyChange(propertyName: string, value: any): void {
    super.notifyPropertyChange(propertyName, value);
  }

  protected handleError(error: Error): void {
    console.error(`[Service Error]: ${error.message}`);
    // Add error handling logic here
  }
}