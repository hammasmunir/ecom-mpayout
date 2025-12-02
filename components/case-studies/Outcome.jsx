import React from 'react';

const exampleOutcomes = {
  heading: 'Metrics',
  beforeLabel: 'Before Ecom Payouts',
  afterLabel: 'After Ecom Payouts',
  rows: [
    {
      metric: 'Chargeback Rate',
      before: '2.5%',
      after: '0.8%',
    },
    {
      metric: 'Authorization Rate',
      before: '82%',
      after: '93%',
    },
    {
      metric: 'Settlement Time',
      before: '5-7 days',
      after: '1-2 days',
    },
    {
      metric: 'Monthly Processing Volume',
      before: '$150K',
      after: '$450K',
    },
  ],
};

const normalizeData = (data) => {
  if (Array.isArray(data)) {
    return {
      heading: 'Key Outcomes',
      beforeLabel: 'Before Ecom Payouts',
      afterLabel: 'After Ecom Payouts',
      rows: data,
    };
  }

  return {
    heading: data?.heading || 'Key Outcomes',
    beforeLabel: data?.beforeLabel || 'Before',
    afterLabel: data?.afterLabel || 'After',
    rows: data?.rows || [],
  };
};

const Outcome = ({ data = exampleOutcomes }) => {
  const { heading, beforeLabel, afterLabel, rows } = normalizeData(data);

  if (rows.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium sm:text-2xl lg:text-4xl">Key Outcomes</h2>
        <p>No outcome data available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-medium sm:text-2xl lg:text-4xl">Key Outcomes</h2>
      <div className="rounded-md border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] table-fixed text-sm sm:text-base lg:text-xl">
            <thead className="bg-gray-50 text-center">
              <tr>
                <th className="w-1/3 px-4 py-3 font-normal text-gray-900 sm:p-5 lg:p-6">
                  {heading}
                </th>
                <th className="w-1/3 border-l border-gray-200 px-4 py-3 font-normal text-gray-900 sm:p-5 lg:p-6">
                  {beforeLabel}
                </th>
                <th className="w-1/3 border-l border-gray-200 bg-[#0357F0] px-4 py-3 font-normal text-white sm:p-5 lg:p-6">
                  {afterLabel}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="w-1/3 px-4 py-3 text-gray-900 sm:p-5 lg:p-6">{item.metric}</td>
                  <td className="w-1/3 border-l border-gray-200 px-4 py-3 text-gray-500 sm:p-5 lg:p-6">
                    {item.before}
                  </td>
                  <td className="w-1/3 border-l border-gray-200 px-4 py-3 text-gray-500 sm:p-5 lg:p-6">
                    {item.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Outcome;
