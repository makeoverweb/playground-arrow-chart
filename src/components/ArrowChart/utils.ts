import { IArrowChartData } from './data';


export interface IArrowChartPoint {
  offset: number;
  label: string;
}

export type TArrowChartEventColor = 'lightBlue' | 'darkBlue' | 'darkGreen' | 'green' | 'yellow' | 'red' | 'grey';

interface IArrowChartPreparedDataEvent {
  title: string;
  topEndDate: number;
  topStartDate: number;
  bottomEndDate: number;
  bottomStartDate: number;
  topDuration: number;
  bottomDuration: number;
  bottomColor: TArrowChartEventColor;
}

export interface IArrowChartEventPoint extends IArrowChartPoint {
  dateLabel: string;
  duration: number;
  color: TArrowChartEventColor;
}

export interface IArrowChartEventPointWithDelta extends IArrowChartEventPoint {
  delta: number;
}

interface IArrowChartPrepareProps {
  width: number;
  dayMinWidth?: number;
  intervalMinWidth?: number;
}

interface IArrowChartPrepared {
  width: number;
  axisPoints: IArrowChartPoint[];
  startAxisPointLabel: string;
  endAxisPointLabel: string;
  topPoints: IArrowChartEventPoint[];
  bottomPoints: IArrowChartEventPointWithDelta[];
  topEndPoint: IArrowChartPoint;
  bottomEndPoint: IArrowChartPoint;
  currentDatePoint: IArrowChartPoint;
  dayWidth: number;
}

const str2date = (date: string): number => {
  const [year, month, day] = date.split('-').map(Number);
  return Date.UTC(year, month - 1, day, 0, 0, 0, 0);
}

const any2date = (date: string | number | Date): number => {
  if (date instanceof Date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }
  if (typeof date === 'string') {
    return str2date(date);
  }
  return date;
}

const dayMs = 86400000;

const diffDays = (date1: number, date2: number) => (date1 - date2) / dayMs;

const formatDate = (date: Date | number): string => {
  date = date instanceof Date ? date : new Date(date);
  return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
}

type ScalingFn = (date: number) => number;

const createLinearScalingFn = (startDate: number, dayWidth: number): ScalingFn =>
  (date: number) => diffDays(date, startDate) * dayWidth;

const round2 = (value: number): number => value;

/*
const getBottomEventColor = (topEndDate: number, bottomStartDate: number, bottomEndDate: number, currentDate: number): TArrowChartEventColor => {
  if (bottomStartDate > currentDate) {
    if (topEndDate <= currentDate) {
      return 'red';
    }
    return 'grey';
  } else {
    if (currentDate >= bottomEndDate) {
        return 'darkGreen';
    }
    if (topEndDate === bottomEndDate) {
      return 'green';
    }
    if (topEndDate < bottomEndDate) {
      return 'yellow';
    }
  }
  return 'grey';
}*/


export const prepareChart = (
  data: IArrowChartData,
  currentDateAny: string | Date | number,
  props: IArrowChartPrepareProps
): IArrowChartPrepared => {

  const {
    width: containerWidth,
    intervalMinWidth = 5,
    dayMinWidth = 2,
  } = props;

  const currentDate = any2date(currentDateAny);
  const startDate = str2date(data.startDate);
  const topEndDate = str2date(data.topEndDate);
  const bottomEndDate = str2date(data.bottomEndDate);

  const eventsCount = data.events.length;
  const events: IArrowChartPreparedDataEvent[] = new Array(eventsCount);

  let minInterval = Infinity;
  for (let i = 0; i < eventsCount; ++i) {
    const event = data.events[i];
    const topEndDate = str2date(event.topEndDate);
    const bottomEndDate = str2date(event.bottomEndDate);
    const topStartDate = i === 0 ? startDate : events[i - 1].topEndDate;
    const bottomStartDate = i === 0 ? startDate : events[i - 1].bottomEndDate;

    const topInt = diffDays(topEndDate, topStartDate);
    const bottomInt = diffDays(bottomEndDate, bottomStartDate);

    events[i] = {
      title: event.title,
      topEndDate,
      bottomEndDate,
      topDuration: topInt,
      bottomDuration: bottomInt,
      topStartDate,
      bottomStartDate,
      bottomColor: event.bottomColor || 'grey',
    };
    minInterval = Math.min(minInterval, topInt, bottomInt);
  }

  const endDate = Math.max(topEndDate, bottomEndDate);
  const totalLength = diffDays(endDate, startDate);
  let dayWidth = Math.max(containerWidth / totalLength, dayMinWidth);

  const minIntWidth = minInterval * dayWidth;

  if (minIntWidth < intervalMinWidth) {
    dayWidth = intervalMinWidth / minInterval;
  }
  dayWidth = round2(dayWidth);

  const width = dayWidth * totalLength;
  const scale = createLinearScalingFn(startDate, dayWidth);

  const startTime = startDate;
  const endTime = startTime + totalLength * dayMs;

  const axisPoints: IArrowChartPoint[] = [];
  const pointDate = new Date(startTime);
  pointDate.setDate(0);
  pointDate.setMonth(pointDate.getMonth() + 1);
  while (pointDate.getTime() < endTime) {
    axisPoints.push({
      label: formatDate(pointDate),
      offset: scale(pointDate.getTime()),
    });
    pointDate.setMonth(pointDate.getMonth() + 1);
  }

  const topPoints: IArrowChartEventPoint[] = new Array(events.length);
  const bottomPoints: IArrowChartEventPointWithDelta[] = new Array(events.length);

  for (let i = 0; i < events.length; i++) {
    const { title, topEndDate, topStartDate, bottomEndDate, bottomColor, topDuration, bottomDuration } = events[i];
    topPoints[i] = {
      label: title,
      dateLabel: formatDate(topEndDate),
      offset: scale(topEndDate),
      duration: topDuration + 1,
      color: topStartDate <= currentDate ? 'lightBlue' : 'darkBlue'
    };
    bottomPoints[i] = {
      label: title,
      dateLabel: formatDate(bottomEndDate),
      offset: scale(bottomEndDate),
      duration: bottomDuration + 1,
      delta: diffDays(bottomEndDate, topEndDate),
      color: bottomColor,
    };
  }

  return {
    width,
    startAxisPointLabel: formatDate(startDate),
    endAxisPointLabel: formatDate(endDate),
    axisPoints,
    topPoints,
    bottomPoints,
    dayWidth,
    topEndPoint: {
      offset: scale(topEndDate),
      label: formatDate(topEndDate),
    },
    bottomEndPoint: {
      offset: scale(bottomEndDate),
      label: formatDate(bottomEndDate),
    },
    currentDatePoint: {
      offset: scale(currentDate),
      label: formatDate(currentDate),
    }
  };
};


export const isRectIntersect = (
  left1: number,
  top1: number,
  right1: number,
  bottom1: number,
  left2: number,
  top2: number,
  right2: number,
  bottom2: number,
) => !(left2 > right1 || right2 < left1 || top2 > bottom1 || bottom2 < top1);
