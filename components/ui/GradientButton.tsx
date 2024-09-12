import React from 'react'

function GradientButton({ word }:{ word : string }) {
    return (
        <button className="relative inline-flex h-12 mt-10 
        overflow-hidden rounded-full p-[1px] focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cde4ff_0%,#3580ff_50%,#cde4ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {word}
            </span>
        </button>
    );
}

export default GradientButton