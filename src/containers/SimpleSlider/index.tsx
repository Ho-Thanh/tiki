 export const SimpleSlider = () => {
  setTimeout(function(){
      let activeSlide = document.querySelector('.slide.translate-x-0');
      activeSlide.classList.remove('translate-x-0');
      activeSlide.classList.add('-translate-x-full');
      
      let nextSlide = activeSlide.nextElementSibling;
      nextSlide.classList.remove('translate-x-full');
      nextSlide.classList.add('translate-x-0');
  }, 3000);
    return (
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center w-screen h-screen text-5xl text-white transition-all duration-1000 ease-in-out transform translate-x-0 bg-pink-500 slide">Hello</div>
        <div className="absolute inset-0 flex items-center justify-center w-screen h-screen text-5xl text-white transition-all duration-1000 ease-in-out transform translate-x-full bg-purple-500 slide">There</div>
      </div>
    )
}

