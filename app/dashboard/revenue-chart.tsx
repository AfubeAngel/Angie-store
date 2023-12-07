import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';

export default async function RevenueChart({
  revenue,
}: {
  revenue: Revenue[];
}) {
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const barWidth = 100 / revenue.length; // Calculate the width based on the number of bars
  const spacing = 5; // Set the spacing between bars

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex items-end">
          {revenue.map((month, index) => (
            <div
              key={month.month}
              className="flex flex-col items-center gap-3"
              style={{
                flex: `1 0 calc(${barWidth}% - ${spacing}px)`, // Subtract spacing
                maxWidth: `calc(${barWidth}% - ${spacing}px)`, // Subtract spacing
                marginRight: index < revenue.length - 1 ? `${spacing}px` : '0', // Add margin-right except for the last bar
              }}
            >
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
