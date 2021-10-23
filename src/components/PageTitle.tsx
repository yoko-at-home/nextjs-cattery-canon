export const PageTitle = (props) => {
  return (
    <h1 className='mt-10 mb-15 lg:mb-20 text-2xl font-extrabold leading-loosee tracking-loose bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-900   sm:text-3xl  md:text-4xl md:mb-16'>
      {props.children}
    </h1>
  );
};
export const PageTitleLarge = (props) => {
  return (
    <h1 className='mt-10 mb-14 text-4xl font-extrabold leading-loosee tracking-loose bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-900   sm:text-3xl  md:text-4xl md:mb-16'>
      {props.children}
    </h1>
  );
};
