
export interface IArrowChartDataEvent {
  title: string;
  topEndDate: string;
  bottomEndDate: string;
  bottomColor?: 'darkGreen' | 'green' | 'yellow' | 'red' | 'grey';
}

export interface IArrowChartData {
  startDate: string;
  topEndDate: string;
  bottomEndDate: string;
  events: IArrowChartDataEvent[];
}
