"use client";
import React, { useState } from "react";
import { SearchMaker } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
const SearchBar = () => {
  const router = useRouter();
  const [maker, setMaker] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (maker === "" && model === "") {
      return alert("Please Fill The Search Bar");
    }

    updateSearchParams(model.toLowerCase(), maker.toLowerCase());
  };

  const updateSearchParams = (model: string, maker: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (maker) {
      searchParams.set("maker", maker);
    } else {
      searchParams.delete("maker");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMaker maker={maker} setMaker={setMaker} />
        <SearchButton otherClasses=" sm:hideen" />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          alt="image"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClasses=" sm:hideen" />
      </div>
      {/* <SearchButton otherClasses=" max-sm:hideen" /> */}
    </form>
  );
};

export default SearchBar;
