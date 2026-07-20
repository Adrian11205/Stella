import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const information = ["About", "Contacts", "Services"];
  const address = ["Mihai Viteazu 2/1", "Aleco Russo 21"];

  return (
    <div className="flex  bg-black text-white  border-t-2 border-gray-100 w-full flex-col sm:flex-row items-center px-10 2xl:px-20 py-8 sm:py-3  justify-between gap-4 text-center sm:text-start ">
      <div className="flex flex-col order-1 sm:order-1">
        {information.map((item, i) => (
          <span key={i} className="hover:underline cursor-pointer font-bold">
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-7 text-3xl order-3 sm:order-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>

      <div className="flex flex-col items-center sm:items-start  order-2 sm:order-3">
        <span>
          <b>Address :</b>
        </span>
        <ul>
          {address.map((item, i) => (
            <li key={i} className=" hover:underline list-disc  cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
