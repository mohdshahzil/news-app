import { Button } from "@/components/ui/button";
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
          <div className="font-light">{formattedDate}</div>
          <Button variant="outline" className="rounded-none p-4">
            Subscribe
          </Button>
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
};

export default Navbar;
