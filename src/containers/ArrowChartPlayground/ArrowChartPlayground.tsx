import React, { useState } from 'react';

import { ArrowChartFluid, IArrowChartData } from 'components/ArrowChart';

import test0 from './data/test0.json';
import test1 from './data/test1.json';
import test2 from './data/test2.json';
import test3 from './data/test3.json';
import test4 from './data/test4.json';
import test5 from './data/test5.json';
import test6 from './data/test6.json';
import test7 from './data/test7.json';
import test8 from './data/test8.json';
import test9 from './data/test9.json';
import test10 from './data/test10.json';
import test11 from './data/test11.json';
import test12 from './data/test12.json';
import test13 from './data/test13.json';
import test14 from './data/test14.json';
import test15 from './data/test15.json';
import test16 from './data/test16.json';

import classes from './styles.scss';


const options = [
  {
    data: test0,
    label: 'Оригинальные данные',
  },
  {
    data: test1,
    label: 'События без отставания и опережения. Одинаковой продолжительности 15 дней',
  },
  {
    data: test2,
    label: 'События без отставания и опережения. Одинаковой продолжительности 1 день',
  },
  {
    data: test3,
    label: 'Существенное опережение графика',
  },
  {
    data: test4,
    label: 'Существенное отставание по графику',
  },
  {
    data: test5,
    label: 'Сначала отставание, потом отставание',
  },
  {
    data: test6,
    label: 'Сначала опережение, потом опережение',
  },
  {
    data: test7,
    label: 'Сначала опережение, потом выход в ту-же дату',
  },
  {
    data: test8,
    label: 'Сначала отставание, потом выход в ту-же дату',
  },
  {
    data: test9,
    label: 'Дата окончания проекта по плану и фактическая отличается от окончания последних событий'
  },
  {
    data: test10,
    label: 'События с очень длинными названиями. Одинаковой продолжительности 15 дней',
  },
  {
    data: test11,
    label: 'События с очень длинными названиями. Одинаковой продолжительности 1 день',
  },
  {
    data: test12,
    label: 'События с очень длинными названиями. Разной продолжительностью',
  },
  {
    data: test13,
    label: 'Рандомные длины событий',
  },
  {
    data: test14,
    label: 'Разная длина событий с наличием событий длиной в 1 день',
  },
  {
    data: test15,
    label: 'Мало событий',
  },
  {
    data: test16,
    label: 'Среднее количество событий (10 шт.)'
  }
]

const now = new Date();
const nowDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${(now.getDate()).toString().padStart(2, '0')}`;

export const ArrowChartPlaygroundContainer = () => {

  const [test, setTest] = useState('0');
  const [date, setDate] = useState(nowDate);

  return (
    <div className={classes.root}>
      <div className={classes.select}>
        <select
          value={test}
          onChange={(e) => { setTest(e.target.value); }}
        >
          {
            options.map(({ label }, i) => (
              <option key={i} value={i.toString()}>
                {label}
              </option>
            ))
          }
        </select>
        <input
          className={classes.dateInput}
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); } }
        />
      </div>
      <div className={classes.chart}>
        <ArrowChartFluid
          key={test}
          currentDate={date}
          data={options[Number(test)].data as IArrowChartData}
        />
      </div>
    </div>
  );
}
