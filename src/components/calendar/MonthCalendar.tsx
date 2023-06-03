import React from 'react';
import { subHours, startOfMonth, format } from 'date-fns';
import {
  MonthlyBody,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import { DayInMonth } from './DayInMonth';
import { completedTask } from '../../App';

export const MonthCalendar = ({ CompletedTasks }: { CompletedTasks: {completedTasks: completedTask[], setCompletedTasks: React.Dispatch<React.SetStateAction<completedTask[]>>}}) => {
  let [currentMonth, setCurrentMonth] = React.useState<Date>(
    startOfMonth(new Date())
  );

  // wrote the below myself
  // interface event {
  //   title: string,
  //   date: Date,
  // }

  return (
    <MonthlyCalendar
      currentMonth={currentMonth}
      onCurrentMonthChange={date => setCurrentMonth(date)}
    >
      <MonthlyNav />
      <MonthlyBody
        // events={[
        //   { title: 'Call John', date: subHours(new Date(), 2) },
        //   { title: 'Call John', date: subHours(new Date(), 1) },
        //   { title: 'Meeting with Bob', date: new Date() },
        // ]}
        events={CompletedTasks.completedTasks}
      >
        <DayInMonth<completedTask>
          renderDay={data =>
            data.map((item, index) => (
              <DefaultMonthlyEventItem
                key={index} 
                // title={'what'} date={''}
                title={item.title}
                // Format the date here to be in the format you prefer
                date={format(item.date, 'k:mm')}
              />
            ))
          }
        />
      </MonthlyBody>
    </MonthlyCalendar>
  );
};