import React from "react";

export default function SectionHeading({ headingText }) {
    const pattern = "/ $ / $ / $ / $ / $ / $ / $ /";
    return (
        <h3 className="max-h-64 h-screen bg-main text-h3 uppercase font-bold overflow-hidden mb-[10rem] relative">
            <p className="whitespace-nowrap absolute animate-scroll">
                {pattern.replaceAll("$", headingText)}
            </p>
        </h3>
    );
}
