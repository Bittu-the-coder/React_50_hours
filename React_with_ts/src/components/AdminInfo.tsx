type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
  admin: string;
};
export const AdminInfo = ({ username, email, age, location, admin }: Info) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Location: {location.join(", ")}</p>
      <p>Admin: {admin}</p>
    </div>
  );
};

// import React from "react";
// import type { AdminInfoList } from "../types";

// type AdminInfoProps = {
//   admin: AdminInfoList;
// };
// const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
//   return (
//     <div>
//       <h2>Admin Information</h2>
//       <p>ID: {admin.id}</p>
//       <p>Name: {admin.name}</p>
//       <p>Email: {admin.email}</p>
//       <p>Role: {admin.role}</p>
//       <p>Last Login: {admin.lastLogin.toString()}</p>
//     </div>
//   );
// };

// export default AdminInfo;
