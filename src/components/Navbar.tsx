import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);
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
        <div>World</div>
        <div>Business</div>
        <div>Technology</div>
        <div>Sports</div>
        <div>Entertainment</div>
      </div>
    </>
  );
};

export default Navbar;
