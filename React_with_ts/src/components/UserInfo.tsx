type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
};
export const UserInfo = ({ username, email, age, location }: Info) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Location: {location.join(", ")}</p>
    </div>
  );
};

// import type React from "react";
// import type { Info } from "../types";

// type UserInfoProps = {
//   user: Info;
// };
// const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
//   return (
//     <div>
//       <h2>User Information</h2>
//       <p>ID: {user.id}</p>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserInfo;
