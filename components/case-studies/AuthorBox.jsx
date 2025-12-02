import React from 'react';

const AuthorBox = ({ text, name, desg }) => {
  return (
    <section className="w-full rounded-2xl px-5 py-20 shadow-[0px_4px_20px_2px_#0000001F]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
        <h4 className="inter-font mb-3 text-xl font-medium md:text-3xl">&quot;{text}&quot;</h4>
        <p className="text-black">{name}</p>
        <span className="text-text">{desg}</span>
      </div>
    </section>
  );
};

export default AuthorBox;
