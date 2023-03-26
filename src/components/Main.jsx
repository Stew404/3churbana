import React from "react";
import mainImg from "../assets/main.png";

export default function Main() {
    return (
        <section className="container mt-[5rem]">
            <div className="basis-full sm:basis-2/4">
                <h2 className="font-bold text-h2 text-center mb-[5rem]">
                    Студия озвучки 3 CHURBANA
                </h2>
            </div>
            <img src={mainImg} alt="" />
        </section>
    );
}
