const Home = () => {
  return (
    <div className='grid min-h-screen place-content-center gap-10 bg-slate-400 px-20 py-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      <div className='rounded-3xl bg-white p-6 shadow-xl'>
        <form className='flex flex-col space-y-2 p-5'>
          <input
            type='text'
            required
            placeholder='username'
            className='peer rounded-md border border-gray-400 p-1'
          />
          <span className='hidden peer-invalid:block peer-invalid:text-red-500'>
            This input is invalid.
          </span>
          <span className='hidden peer-valid:block peer-valid:text-teal-500'>
            Awesome username!
          </span>
          <span className='hidden peer-hover:block peer-hover:text-amber-500'>
            Hello!
          </span>
          <input type='submit' value='Login' className='bg-white' />
        </form>
      </div>
      <div className='rounded-3xl bg-white p-6 shadow-xl'>
        <details className='select-none open:bg-amber-50'>
          <summary>What is my fav. food!?</summary>
          <span>Potato</span>
        </details>
        <ul className='ml-4 mt-4 list-disc marker:text-teal-500'>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
          <li>list 4</li>
        </ul>
        <input
          type='file'
          className='transition-colors file:cursor-pointer file:rounded-md file:border-0 file:bg-purple-100 file:hover:border-purple-300 file:hover:bg-purple-300 file:hover:text-white'
        />
        <p className='first-letter:text-7xl first-letter:hover:text-red-300'>
          Hello world!
        </p>
      </div>
      <div className='rounded-3xl bg-white p-6 shadow-xl'>
        <span className='text-3xl font-semibold'>Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((v, i) => (
            <div
              key={i}
              className='my-2 flex justify-between first:bg-blue-50 last:bg-teal-50'
            >
              <span className='text-gray-500'>Grey Chair</span>
              <span className='font-semibold'>$19</span>
            </div>
          ))}
        </ul>

        <ul>
          {['a', 'b', 'c', ''].map((c, i) => (
            <li className='border py-2 empty:bg-red-50' key={i}>
              {c}
            </li>
          ))}
        </ul>
        <div className='mt-2 flex justify-between border-t-2 border-dashed pt-2'>
          <span>Total</span>
          <span className='font-semibold'>$38</span>
        </div>
        <button className='mx-auto mt-5 block w-3/4 rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500'>
          Checkout
        </button>
      </div>
      <div className='group overflow-hidden rounded-3xl bg-white shadow-xl'>
        <div className=' p-6 pb-14 portrait:bg-indigo-500 landscape:bg-teal-500'>
          <span className='text-2xl text-white'>Profile</span>
        </div>
        <div className='relative -top-5 rounded-3xl bg-white p-6'>
          <div className='relative -top-14 flex items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='text-lg font-medium'>340</span>
            </div>
            <div className='h-24 w-24 rounded-full bg-zinc-300 transition-colors group-hover:bg-red-300' />
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='text-lg font-medium'>$340</span>
            </div>
          </div>
          <div className='-mb-5 -mt-12 flex flex-col items-center'>
            <span className='text-lg font-medium'>Joie-Kim</span>
            <span className='text-sm text-gray-500'>Seoul, Korea</span>
          </div>
        </div>
      </div>
      <div className='rounded-3xl bg-white p-6 shadow-xl md:col-span-2 lg:col-span-1'>
        <div className='mb-5 flex items-center justify-between'>
          <span>⬅️</span>
          <div className='space-x-3'>
            <span>⭐️ 4.9</span>
            <span className='rounded-md p-2 shadow-xl'>💖</span>
          </div>
        </div>
        <div className='mb-5 h-72 bg-zinc-400' />
        <div className='flex flex-col'>
          <span className='text-xl font-medium'>Swoon Lounge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='mb-5 mt-3 flex items-center justify-between'>
            <div className='space-x-2'>
              <button className='h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2' />
              <button className='h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2' />
              <button className='h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2' />
            </div>
            <div className='flex items-center space-x-5'>
              <button className=' flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500'>
                -
              </button>
              <span>1</span>
              <button className=' flex aspect-square w-8 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500'>
                +
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-medium'>$450</span>
            <button className='rounded-lg bg-blue-500 px-8 py-2 text-center text-xs text-white'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
