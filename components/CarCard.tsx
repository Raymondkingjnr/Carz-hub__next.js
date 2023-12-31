"use client";
import { CarProps } from "@/type";
import Image from "next/image";
import React, { useState } from "react";
import { Button, CardDetails } from ".";
import { calculateCarRent, generateCarsImage } from "@/utiles";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;

  const car_rent = calculateCarRent(city_mpg, year);

  return (
    <div className="car0-card group">
      <main className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </main>
      <p className="flex mt-6 text-[32px] font-semibold">
        <span className=" self-start text-[14px] font-semibold">$</span>
        {car_rent}
        <span className=" self-end text-[14px] font-medium"> /day</span>
      </p>

      <div className=" relative w-full object-contain h-40 my-3">
        <Image
          src={generateCarsImage(car)}
          alt="image"
          fill
          className=" object-contain"
        />
      </div>
      <div className=" relative flex w-full mt-2">
        <main className=" flex group-hover:invisible w-full justify-between text-gray-900">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt="image"
              width={20}
              height={20}
              className=" object-contain"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/tire.svg"}
              alt="image"
              width={20}
              height={20}
              className=" object-contain"
            />
            <p className="text-[14px]">{drive.toLocaleUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/gas.svg"}
              alt="image"
              width={20}
              height={20}
              className=" object-contain"
            />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </main>
        <div className="car-card__btn-container">
          <Button
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
