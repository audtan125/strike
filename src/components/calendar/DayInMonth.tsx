import { useMonthlyBody, useMonthlyCalendar } from "@zach.codes/react-calendar";
import { format } from "date-fns";
import { ReactNode } from "react";


type MonthlyDayProps<DayData> = {
  renderDay: (events: DayData[]) => ReactNode;
};

export function DayInMonth<DayData>({ renderDay }: MonthlyDayProps<DayData>) {
  let { locale } = useMonthlyCalendar();
  let { day, events } = useMonthlyBody<DayData>();
  let dayNumber = format(day, 'd', { locale });

  return (
    <div
      aria-label={`Events for day ${dayNumber}`}
      className="rc-h-48 rc-p-2 rc-border-b-2 rc-border-r-2"
    >
      <div className="rc-flex rc-justify-between">
        <div className="rc-font-bold">{dayNumber}</div>
        <div className="lg:rc-hidden rc-block">
          {format(day, 'EEEE', { locale })}
        </div>
      </div>
      <ul className="rc-divide-gray-200 rc-divide-y rc-overflow-hidden rc-max-h-36 rc-overflow-y-auto">
        {renderDay(events)}
      </ul>
    </div>
  );
}