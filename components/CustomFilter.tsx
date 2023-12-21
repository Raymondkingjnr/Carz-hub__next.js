"use client";
import { CustomeFilterProps } from "@/type";
import { updateSearchParams } from "@/utiles";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";

const CustomFilter = ({ title, options }: CustomeFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  // HANDLEPARAMS
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, { scroll: false });
  };

  return (
    <section className=" w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <main className=" relative w-full z-10">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className=" block truncate">{selected.title}</span>
            <Image
              src={"/chevron-up-down.svg"}
              width={20}
              height={20}
              className=" ml-4 object-contain"
              alt="Image"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom=" opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-blue-600 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={` block truncate ${
                        selected ? " font-medium" : " font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </main>
      </Listbox>
    </section>
  );
};

export default CustomFilter;
