import Image from 'next/image';

const Sections = ({ data = [] }) => {
  return (
    <>
      {data.map((item, index) => {
        const reverse = index % 2 === 1;
        return (
          <article
            key={index}
            className={`grid w-full grid-cols-1 items-center gap-16 overflow-hidden rounded-xl p-6 shadow-[0px_4px_20px_2px_#0000001F] ${reverse ? 'lg:grid-cols-[1fr_0.7fr]' : 'lg:grid-cols-[0.7fr_1fr]'} lg:p-10`}
          >
            <div className={`flex flex-col gap-5 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
              <h3 className="text-2xl font-medium lg:text-3xl">{item.title}</h3>
              <p className="text-text text-lg lg:text-xl">{item.description}</p>
              <ul className="text-text flex flex-col gap-2 lg:text-xl">
                {item.listItems.map((listItem) => (
                  <li key={listItem} className="flex items-center gap-2">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.88333 13.3833L14.3458 6.92083L13.0625 5.6375L7.88333 10.8167L5.27083 8.20417L3.9875 9.4875L7.88333 13.3833ZM9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20313 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20313 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20313 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20313 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333Z"
                        fill="#0357F0"
                      />
                    </svg>
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              className={`h-auto w-full ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
            />
          </article>
        );
      })}
    </>
  );
};

export default Sections;
