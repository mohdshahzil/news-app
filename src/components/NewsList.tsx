import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const NewsList = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-1 gap-1 gap-4 ">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>News Title</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="https://picsum.photos/600/200" alt="" />
        </CardContent>
        <CardFooter>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          harum? Saepe vero cumque provident libero ratione, error iusto
          laudantium fugiat, eum est voluptatum quos itaque eaque minus numquam
          recusandae quisquam.
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>News Title</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="https://picsum.photos/600/200" alt="" />
        </CardContent>
        <CardFooter>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          harum? Saepe vero cumque provident libero ratione, error iusto
          laudantium fugiat, eum est voluptatum quos itaque eaque minus numquam
          recusandae quisquam.
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>News Title</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="https://picsum.photos/600/200" alt="" />
        </CardContent>
        <CardFooter>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          harum? Saepe vero cumque provident libero ratione, error iusto
          laudantium fugiat, eum est voluptatum quos itaque eaque minus numquam
          recusandae quisquam.
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>News Title</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="https://picsum.photos/600/200" alt="" />
        </CardContent>
        <CardFooter>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          harum? Saepe vero cumque provident libero ratione, error iusto
          laudantium fugiat, eum est voluptatum quos itaque eaque minus numquam
          recusandae quisquam.
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsList;
