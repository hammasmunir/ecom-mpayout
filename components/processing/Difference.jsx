import React from 'react';
import Starter from '../ui/Starter';

const Difference = () => {
  const comparisonData = [
    {
      criteria: 'MID Structure',
      payFacs: 'Shared under one MID',
      directBank: 'Dedicated to your business',
    },
    {
      criteria: 'Risk',
      payFacs: 'Shared risk → wave bans',
      directBank: 'Isolated protection',
    },
    {
      criteria: 'Support',
      payFacs: 'AI-only',
      directBank: 'Human payment experts',
    },
    {
      criteria: 'Approval',
      payFacs: 'Fast but unstable',
      directBank: 'Vetted, stable long-term',
    },
    {
      criteria: 'High-Risk Support',
      payFacs: 'Not allowed',
      directBank: 'Accepted and supported',
    },
    {
      criteria: 'Ownership',
      payFacs: 'Stripe owns your subs',
      directBank: 'You own your subs forever',
    },
  ];

  return (
    <section className="border-border border-b-[3px] border-dashed py-16 lg:py-20">
      <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-20 px-5">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Starter
            heading="The Difference That Changes Everything"
            className="lg:items-start lg:text-left"
            noCenter={true}
          />
          <p className="text-text max-w-[500px] text-center lg:text-left">
            Shared MIDs mean shared risk one bad actor can trigger wave bans for everyone. With
            dedicated MIDs, your processing is isolated, secure, and built to last.
          </p>
        </div>
        <section className="w-full">
          <div className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-2xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-[640px] table-fixed">
                <thead className="bg-[#F0F5FF] text-center">
                  <tr>
                    <th className="w-1/3 px-4 py-3 text-base font-normal text-gray-900 sm:p-5 lg:p-6 lg:text-xl">
                      Comparison Criteria
                    </th>
                    <th className="w-1/3 border-l border-gray-200 px-4 py-3 text-base font-normal text-gray-900 sm:p-5 lg:p-6 lg:text-xl">
                      PayFacs (Stripe, Shopify, etc.)
                    </th>
                    <th className="w-1/3 border-l border-gray-200 px-4 py-3 text-base font-normal text-gray-900 sm:p-5 lg:p-6 lg:text-xl">
                      Direct Bank Processing
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="bg-white">
                      <td className="text-text w-1/3 px-4 py-3 text-base sm:p-5 lg:p-6 lg:text-xl">
                        {row.criteria}
                      </td>
                      <td className="text-text w-1/3 border-l border-gray-200 px-4 py-3 text-base sm:p-5 lg:p-6 lg:text-xl">
                        {row.payFacs}
                      </td>
                      <td className="text-text w-1/3 border-l border-gray-200 px-4 py-3 text-base sm:p-5 lg:p-6 lg:text-xl">
                        {row.directBank}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Difference;
