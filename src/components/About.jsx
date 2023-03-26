import React from "react";
import PersonList from "./PersonList";
import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <section id="about" className="mb-[10rem]">
            <SectionHeading headingText={"о нас"} />
            <p className="text-navsize text-center container">
                Добро пожаловать на сайт нашей студии. Здесь вы увидите только
                самый качественный контент от наших блистательных актеров
            </p>
            <PersonList />
        </section>
    );
}
