import React from "react";
import personsData from "../assets/about/PersonList.json";
import jenyaImg from "../assets/about/jenya.png";
import artemImg from "../assets/about/artem.png";
import yulyaImg from "../assets/about/yulya.png";

const persons = personsData.persons;
const images = {
    jenya: jenyaImg,
    artem: artemImg,
    yulya: yulyaImg,
};

export default function PersonList() {
    return (
        <div className="xl:container md:px-5 flex flex-col md:flex-row justify-between mt-section">
            {persons.map((person) => {
                return (
                    <div className="flex justify-between items-center px-[3rem] md:px-0 mb-[2rem] md:flex-col even:flex-row-reverse md:even:flex-col odd:text-right md:max-w-[30%] md:w-screen">
                        <img
                            className="md:max-w-full max-w-[40%] max-h-aboutimg w-auto h-auto object-contain mb-6 border-b-[3px] border-solid border-yellow"
                            src={images[person.image]}
                            alt={person.name}
                        />
                        <article className="basis-3/4 px-[1rem] ">
                            <h4 className="text-h4 md:text-center font-bold mb-6">
                                {person.name}
                            </h4>
                            <p className="text-navsize md:text-center">
                                {person.description}
                            </p>
                        </article>
                    </div>
                );
            })}
        </div>
    );
}
