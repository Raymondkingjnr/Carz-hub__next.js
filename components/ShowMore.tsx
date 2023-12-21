"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/type";
import { Button } from ".";
import { updateSearchParams } from "@/utiles";

const ShowMore = ({ page_number, is_next }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (page_number + 1) * 10;
    const new_pathe_name = updateSearchParams("limit", `${newLimit}`);

    router.push(new_pathe_name);
  };

  return (
    <div className=" w-full flex-center gap-5 mt-10">
      {!is_next && (
        <Button
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
