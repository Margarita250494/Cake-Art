import Image from 'next/image'

const Page = () => {
  return (
    <main className="px-6 pt-1.5 pb-6 w-full flex-1 flex flex-col gap-6 sm:gap-10 justify-center items-center">
      <div className="w-full h-full flex flex-col gap-6 sm:gap-10 justify-center items-center">
        <Image
          src="/about.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-full max-w-100 max-h-100 scale-100 duration-500 hover:scale-[1.1]"
        />
        <div className="tracking-[0.9px] max-w-150 w-full text-center flex flex-col gap-4 text-text text-[16px]  sm:text-[18px]">
          <p>Hello, my name is <span className="text-black text-[20px] sm:text-[22px] tracking-normal">Valeriy Lindstrem</span>, I am <span className="tracking-normal text-black text-[20px] sm:text-[22px]">a pastry chef</span> working in Moscow. This is my project for making desserts to order.
            And I am delighted to invite you to join this delicious experience.
          </p>
          <p>For each dessert, I use high-quality ingredients, from flour to berries and flowers. When making them, I pay attention to the seasonality of fruits, which allows me to reveal and preserve the quality of the taste.</p>
          <p>I will be happy to cook for you.</p>
        </div>

      </div>


    </main>
  );
};
export default Page;
