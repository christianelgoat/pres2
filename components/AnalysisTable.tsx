
import React from 'react';
import { TABLE_DATA } from '../constants';
import type { TableRowData } from '../types';

const TableHeader: React.FC = () => (
  <thead className="bg-slate-100">
    <tr>
      <th className="p-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">Componente del Diagrama</th>
      <th className="p-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">Concepto Teórico</th>
      <th className="p-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">Aplicación en el Proyecto "Smart Control Stock"</th>
      <th className="p-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">Evidencia Cuantitativa</th>
      <th className="p-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider border border-slate-200">Evidencia Cualitativa (Causa Raíz)</th>
    </tr>
  </thead>
);

const TableRow: React.FC<{ row: TableRowData }> = ({ row }) => {
  const isSummaryRow = !row.application && !row.quantitative && !row.qualitative;
  const rowClass = isSummaryRow ? 'bg-slate-50 font-medium' : 'bg-white';
  
  return (
    <tr className={rowClass}>
      <td className="p-4 align-top text-sm text-slate-800 font-bold border border-slate-200 whitespace-nowrap">{row.component}</td>
      <td className="p-4 align-top text-sm text-slate-700 border border-slate-200">{row.theory}</td>
      <td className="p-4 align-top text-sm text-slate-700 border border-slate-200">{row.application}</td>
      <td className="p-4 align-top text-sm text-slate-700 border border-slate-200">{row.quantitative}</td>
      <td className="p-4 align-top text-sm text-slate-700 border border-slate-200">{row.qualitative}</td>
    </tr>
  );
};


const AnalysisTable: React.FC = () => {
  return (
    <table className="w-full border-collapse">
      <TableHeader />
      <tbody>
        {TABLE_DATA.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default AnalysisTable;
