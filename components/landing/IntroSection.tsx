import { ArrowDown } from "lucide-react";

const SimpleIsMore = "/landing/SimpleIsMore.png";

export default function IntroSection() {
  const handleNavigate = () => {
    const page3 = document.getElementById("contactPage");

    if (page3) {
      page3.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center w-full px-2 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">
      <div className="w-full max-w-400">
        <div
          style={{ backgroundImage: `url(${SimpleIsMore})` }}
          className="relative w-full h-75 sm:h-112.5 md:h-150 lg:h-187.5 xl:h-225 2xl:h-250 bg-cover bg-center bg-no-repeat rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden shadow-lg"
        >
          <p className="text-background leading-none font-light pt-3 pl-3 text-[55px] sm:text-[90px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[240px]">
            Simple
          </p>

          <p className="text-background leading-none font-light -mt-3 pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40 text-[55px] sm:text-[90px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[240px]">
            is more
          </p>

          <p className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 text-background font-bold text-right text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            DESIGNED TO
            <br />
            STAND OUT
          </p>

          <button
            onClick={handleNavigate}
            className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-2 border-border rounded-full bg-transparent"
          >
            <ArrowDown className="text-background w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </button>

          <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 text-background font-bold text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            LIMITED-EDITIONS
            <br />
            STYLES
          </p>
        </div>

        <div className="flex justify-end mt-3 text-brand text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-brand-hover transition-colors cursor-pointer">
          See all
        </div>
      </div>
    </div>
  );
}
