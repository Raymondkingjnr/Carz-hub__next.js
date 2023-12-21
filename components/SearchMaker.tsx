"use client";
import React, { useState, Fragment } from "react";
import { SearchMakerProps } from "@/type";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchMaker = ({ maker, setMaker }: SearchMakerProps) => {
  const [query, setQuery] = useState("");

  const filterdMakers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-menufacturer">
      <Combobox value={maker} onChange={setMaker}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src={"/car-logo.svg"}
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Benz"
            displayValue={(maker: string) => maker}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave=" transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/* CARS OPTIONS */}

            <Combobox.Options>
              {filterdMakers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    ` relative search-menufacturer__option p-3 font-medium text-base cursor-pointer ${
                      active
                        ? "bg-primary-blue rounded-lg  text-white"
                        : "text-gray-900"
                    } `
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMaker;
