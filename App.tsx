
import React from 'react';
import AnalysisTable from './components/AnalysisTable';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold text-slate-800">Análisis de Proyecto: Smart Control Stock</h1>
            <p className="mt-1 text-slate-500">Evaluación de componentes, conceptos y evidencias del proyecto.</p>
          </div>
          <div className="overflow-x-auto">
            <AnalysisTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
