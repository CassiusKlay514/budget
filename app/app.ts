import { Application } from '@nativescript/core';
import { initializeApp } from './app.init';

// Initialize app services and configurations
initializeApp();

Application.run({ moduleName: 'app-root' });