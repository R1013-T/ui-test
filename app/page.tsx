import Image from "next/image";
import BorderButton from "./components/buttons/border";
import GradientButton from "./components/buttons/gradient";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 bg-black h-screen overflow-y-hidden flex gap-3">
      <Link
        href="/button"
        className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
      >
        buttons
      </Link>
      <Link
        href="/background-beams"
        className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
      >
        background-beams
      </Link>
      <Link
        href="/background-gradient-animation"
        className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
      >
        background-gradient-animation
      </Link>
      <Link
        href="/meteors"
        className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
      >
        meteors
      </Link>
    </div>
  );
}
