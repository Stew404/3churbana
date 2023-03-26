import React from "react";
import SectionHeading from "./SectionHeading";

export default function Premiere() {
    return (
        <section id="premiere">
            <SectionHeading headingText={"премьера"} />
            <h4 className="text-center text-h4 font-bold my-[50px]">
                Встречайте премьерную озвучку нашей студии!!!
            </h4>
            <div className="min-[480px]:container mx-auto relative w-[90vw] pt-[50vw] min-[480px]:w-[70vw] min-[480px]:pt-[39vw] mb-[10rem]">
                <iframe
                    src="https://vk.com/video_ext.php?oid=-57590786&id=456240202&hash=77ca0757584c5caa&hd=3"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                    className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </section>
    );
}
