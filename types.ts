
import type React from 'react';

export interface TableRowData {
  component: string;
  theory: React.ReactNode;
  application: React.ReactNode;
  quantitative: React.ReactNode;
  qualitative: React.ReactNode;
}
