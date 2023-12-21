import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisable?: boolean;
}

export interface SearchMakerProps {
  maker: string;
  setMaker: (maker: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  maker: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomeFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  page_number: number;
  is_next: string;
}
