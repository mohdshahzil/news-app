import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { useAppSelector, useAppDispatch } from "../hooks/typeHooks";
import GradualSpacing from "./magicui/gradual-spacing";
import {
  fetchNews,
  setCategory,
  setSearchTerm,
} from "../redux/slices/newsSlice";
import { useState } from "react";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.news.category);
  const searchTerm = useAppSelector((state) => state.news.searchTerm);
  const [inputValue, setInputValue] = useState(searchTerm);
  const handleSearch = () => {
    dispatch(setSearchTerm(inputValue));
    dispatch(fetchNews({ category: selectedCategory, searchTerm: inputValue }));
  };
  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
    dispatch(fetchNews({ category, searchTerm }));
  };
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);
  const categories = [
    "general",
    "world",
    "business",
    "technology",
    "sports",
    "entertainment",
    "science",
    "health",
  ];
  return (
    <>
      <div className="flex flex-row items-center justify-between p-2 md:p-3">
        <GradualSpacing
          className="font-display text-center text-3xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-4xl md:leading-[2rem]"
          text="DAILY SCOOP"
        />
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex gap-1">
            <Input
              className="w-6  md:w-auto"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={handleSearch}>
              <CiSearch />
            </Button>
          </div>
          <div className="font-light">{formattedDate}</div>
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center justify-center text-lg gap-1 md:gap-5 p-2 md:p-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => handleCategoryClick(category)}
            className={
              selectedCategory === category ? "bg-primary text-white" : ""
            }
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
