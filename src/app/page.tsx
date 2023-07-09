export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-sky-400">Hello</h1>
      <div
        className="w-full h-screen bg-cover bg-center ..."
        style={{
          backgroundImage: `url('/image/beach.jpg')`,
        }}
      ></div>
    </main>
  );
}
