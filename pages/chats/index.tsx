const Chats = () => {
  return (
    <div className='divide-y-[1px] py-10'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
        <div className='flex items-center space-x-3 px-4 py-3'>
          <div className='h-12 w-12 rounded-full bg-slate-300' />
          <div className='cursor-pointer'>
            <p className='text-gray-700'>Steve Jebs</p>
            <p className='text-sm text-gray-500'>
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
