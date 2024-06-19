import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { useAppSelector, useAppDispatch } from "../hooks/typeHooks";
import { fetchNews, setCategory } from "../redux/slices/newsSlice";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.news.category);
  const handleCategoryClick = (category: string) => {
    dispatch(setCategory(category));
    dispatch(fetchNews(category));
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
        <div className="text-3xl font-normal">DAILY SCOOP</div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex">
            <Input className="w-6  md:w-auto" placeholder="Search..." />
            <Button variant="ghost">
              <CiSearch />
            </Button>
          </div>
          <div className="font-light">{formattedDate}</div>
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center justify-center text-lg gap-1 md:gap-5 p-2 md:p-3">
        {/* <Button variant="ghost" onClick={() => handleCategoryClick("general")}>
          General
        </Button>
        <Button variant="ghost" onClick={() => handleCategoryClick("world")}>
          World
        </Button>
        <Button variant="ghost" onClick={() => handleCategoryClick("business")}>
          Business
        </Button>
        <Button
          variant="ghost"
          onClick={() => handleCategoryClick("technology")}
        >
          Technology
        </Button>
        <Button variant="ghost" onClick={() => handleCategoryClick("sports")}>
          Sports
        </Button>
        <Button
          variant="ghost"
          onClick={() => handleCategoryClick("entertainment")}
        >
          Entertainment
        </Button>
        <Button variant="ghost" onClick={() => handleCategoryClick("science")}>
          Science
        </Button>
        <Button variant="ghost" onClick={() => handleCategoryClick("health")}>
          Health
        </Button> */}
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            onClick={() => handleCategoryClick(category)}
            className={
              selectedCategory === category ? "bg-blue-500 text-white" : ""
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
