import React from 'react';
import TaskManager from './components/TaskManager';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { APP_TEXTS } from './config/constants';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <h1 className="text-3xl font-bold text-gray-900 ml-2">{APP_TEXTS.TITLE}</h1>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            {APP_TEXTS.DESCRIPTION}
          </p>
        </header>
        
        <main>
          <TaskManager />
        </main>
      </div>
    </div>
  );
}

export default App;