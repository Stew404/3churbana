import React from "react";
import SectionHeading from "./SectionHeading";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kadnikov from "../assets/reviews/kadnikov.jpg";
import kolya from "../assets/reviews/kolya.jpg";
import polina from "../assets/reviews/polina.jpg";
import maxim from "../assets/reviews/maxim.jpg";
import reviewsData from "../assets/reviews/Reviews.json";

const reviews = reviewsData.reviews;
const images = {
    kadnikov,
    kolya,
    polina,
    maxim,
};

export default function Reviews() {
    return (
        <section id="reviews" className="mb-[10rem]">
            <SectionHeading headingText={"Отзывы"} />
            <Carousel
                showThumbs={false}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
                infiniteLoop={true}
                className="container select-none cursor-grab flex"
            >
                {reviews.map((review) => {
                    return (
                        <div className="flex justify-around items-center pb-[50px] px-[20px]">
                            <img
                                className="max-w-[25rem] max-h-[25rem] min-[480px]:max-w-[30rem] min-[480px]:max-h-[30rem] w-screen h-screen object-cover rounded-[50%] "
                                src={images[review.image]}
                                alt=""
                            />
                            <article className="text-left max-w-[60%]">
                                <p className="text-navsize">
                                    {review.reviewText}
                                </p>
                                <p className="font-bold text-[2rem] mt-8">
                                    {review.name}
                                </p>
                                <p className="text-[1.8rem]">
                                    {review.description}
                                </p>
                            </article>
                        </div>
                    );
                })}
            </Carousel>
        </section>
    );
}
