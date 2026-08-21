const YourStyle = "/landing/YourStyle.png";
const Discover = "/landing/Discover.png";
const ExploreShoes = "/landing/ExploreShoes.png";

export default function Page3() {
  return (
    <div className="w-full flex justify-center px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        <div
          className="relative lg:col-span-1 h-130 rounded-3xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${YourStyle})` }}
        >
          <div className="absolute inset-0 bg-foreground/10" />

          <div className="relative h-full flex flex-col justify-between p-6 text-background">
            <p className="font-bold text-lg">stella</p>

            <div>
              <h1 className="font-bold text-3xl leading-snug">
                Your Style, <br />
                Delivered. <br />
                Exclusively <br />
                Online.
              </h1>
            </div>

            <p className="text-sm">www.stella.com</p>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <div
            className="relative h-62.5 rounded-3xl overflow-hidden bg-cover bg-center flex items-end justify-end"
            style={{ backgroundImage: `url(${Discover})` }}
          >
            <div className="absolute inset-0" />

            <div className="relative h-full flex flex-col justify-center p-2 ">
              <p className="text-chart-3 text-sm">Timeless elegance</p>

              <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                Discover our <br /> accessories collection
              </h2>

              <button className="mt-4 w-fit px-5 py-2 rounded-lg bg-brand text-background">
                Shop Now
              </button>
            </div>
          </div>

          <div
            className="relative h-62.5 rounded-3xl overflow-hidden bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${ExploreShoes})` }}
          >
            <div className="absolute inset-0 " />

            <div className="relative h-full flex flex-col justify-center p-2 ">
              <p className="text-chart-3 text-sm">Find your perfect pair</p>

              <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                Explore our <br /> shoes collection
              </h2>

              <button className="mt-4 w-fit px-5 py-2 rounded-lg bg-background text-background">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
