const logo = [
  "/landing/LogoImg/Hermes.png",
  "/landing/LogoImg/Nb.png",
  "/landing/LogoImg/Nike.png",
  "/landing/LogoImg/Puma.png",
  "/landing/LogoImg/zara.png",
  "/landing/LogoImg/adidas.jpg",
  "/landing/LogoImg/polo.png",
  "/landing/LogoImg/Sch.png",
];

export default function BrandsSection() {
  return (
    <div className="flex flex-col mt-10 w-full p-4 gap-4">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
        Shop by Brands
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {logo.map((image, id) => (
          <div
            key={id}
            className="border-2 border-gray-200 h-30 items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-muted flex"
          >
            <img src={image} className="w-auto h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
