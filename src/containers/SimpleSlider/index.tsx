export const SimpleSlider = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center w-screen h-screen text-5xl text-white transition-all duration-1000 ease-in-out transform translate-x-0 bg-pink-500 slide">
        Hello
      </div>
      <div className="absolute inset-0 flex items-center justify-center w-screen h-screen text-5xl text-white transition-all duration-1000 ease-in-out transform translate-x-full bg-purple-500 slide">
        There
      </div>
    </div>
  );
};
