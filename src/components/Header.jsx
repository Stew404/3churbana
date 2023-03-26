import React from "react";

import logo from "../assets/logo.png";
import logoRes from "../assets/logoRes.png";

export default function Header() {
    return (
        <header className="w-screen max-h-[80px] sm:max-h-[100px] h-screen bg-main">
            <div className="container h-full flex items-center justify-between px-4">
                <img className="hidden lg:block" src={logo} alt="3churbana" />
                <img
                    className="max-h-[80%] sm:max-h-full lg:hidden"
                    src={logoRes}
                    alt="3churbana"
                />
                <nav className="text-navsize font-bold uppercase basis-3/4 lg:basis-2/4 flex items-center justify-around">
                    <a href="#about" className="hover:scale-125">
                        О нас
                    </a>
                    <a href="#reviews" className="hover:scale-125">
                        Отзывы
                    </a>
                    <a href="#premiere" className="hover:scale-125">
                        Премьера
                    </a>
                </nav>
            </div>
        </header>
    );
}
