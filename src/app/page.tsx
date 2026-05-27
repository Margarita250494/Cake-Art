import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center ">
      <Image
        src="https://res.cloudinary.com/dc9fmzb2e/image/upload/v1779813464/background_r4fz6w.jpg"
        alt=""
        width={700}
        height={700}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </main>
  );
}
