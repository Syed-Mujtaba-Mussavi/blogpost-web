import { getUser } from "@/lib/data";
import Image from "next/image";
// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH AN API
  //   const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
  return (
    <div className="flex items-center gap-5">
      <Image
        src={user?.img ? user.img : "/noavatar.png"}
        alt="avatar"
        className="rounded-[50%] object-cover w-[50px] h-[50px]"
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-[10px]">
        <span className="text-gray-700 font-bold">Author</span>
        <span className="font-medium">{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
