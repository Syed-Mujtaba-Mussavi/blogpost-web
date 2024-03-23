import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <div className="h-[500px] overflow-y-auto">
        {users.map((user) => (
          <div className={styles.user} key={user.id}>
            <div className={styles.detail}>
              <Image
                src={user.img || "/noAvatar.png"}
                alt=""
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <span>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.userButton}>Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
