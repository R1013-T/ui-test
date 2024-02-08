import React from "react";
import BorderButton from "../components/buttons/border";
import GradientButton from "../components/buttons/gradient";
import { MovingBorderButton } from "../components/buttons/moving-border";

export default function ButtonPage() {
  return (
    <div className="bg-black flex gap-3 h-screen p-10" >
      <BorderButton />
      <GradientButton />
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Shimmer
      </button>
      <MovingBorderButton
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </MovingBorderButton>
    </div>
  );
}
