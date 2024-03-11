import Image from "next/image";

const SinglePostPage = ({ slug }) => {
  return (
    <div className="flex gap-[50px] py-5 md:py-10 lg:py-20">
      <div className="hidden lg:block w-[600px] relative h-[calc(100vh-200px)]">
        <Image
          src="https://images.pexels.com/photos/2420376/pexels-photo-2420376.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="img"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-2 flex flex-col gap-[50px]">
        <h1 className="text-[64px]">Title</h1>
        <div className="flex gap-5">
          <Image
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=400"
            alt="avatar"
            className="rounded-[50%] object-cover w-[50px] h-[50px]"
            width={50}
            height={50}
          />
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-700 font-bold">Author</span>
            <span className="font-medium">Terry Jeffron</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-700 font-bold">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>
        </div>
        <div className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo id
          autem possimus dolor commodi eaque nisi, quaerat libero nesciunt
          repudiandae nam! Assumenda nulla doloremque illum voluptatem quisquam
          ab? Hic, cumque!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
