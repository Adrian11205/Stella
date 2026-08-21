const ExclusiveDeal = "/landing/ExclusiveDeal.png";
const Offerts = "/landing/Offerts.png";

export default function DealsSection() {
  return (
    <div className="flex flex-col w-full gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 mt-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
        Featured Deals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 w-full">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div
            style={{ backgroundImage: `url(${ExclusiveDeal})` }}
            className="

w-full

min-h-70 sm:min-h-85 md:min-h-105 lg:min-h-120

bg-cover bg-center

flex flex-col justify-center

px-6 sm:px-10 md:px-12

py-8

"
          >
            <p
              className="text-background font-bold leading-tight

text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Indulge in <br /> exclusive deals
            </p>

            <p className="text-background mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-md">
              Shop now and enjoy our latest fashion finds
            </p>

            <button className="mt-6 sm:mt-8 bg-brand text-background px-6 py-3 rounded-lg w-fit text-sm sm:text-base md:text-lg hover:opacity-90 transition">
              Shop now
            </button>
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div
            style={{ backgroundImage: `url(${Offerts})` }}
            className="

w-full

min-h-70 sm:min-h-85 md:min-h-105 lg:min-h-120

bg-cover bg-center

flex flex-col justify-center items-end

px-6 sm:px-10 md:px-12

py-8

text-right

"
          >
            <p
              className="text-background font-bold leading-tight

text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Welcome offer just <br /> for you
            </p>

            <p className="text-background mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-md">
              Enjoy a special discount on your first purchase
            </p>

            <button className="mt-6 sm:mt-8 bg-blues text-background px-6 py-3 rounded-lg w-fit text-sm sm:text-base md:text-lg hover:opacity-90 transition">
              Get discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
