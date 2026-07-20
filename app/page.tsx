
"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button
        className="w-40 h-20 bg-blue-500  "
        onClick={() => {
          router.push("/about-us");
          router.back()
        }}
      >
        Go to About us
      </button>
    </div>
  );
}
