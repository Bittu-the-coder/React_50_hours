import "./App.css";
import { AdminInfo } from "./components/AdminInfo";
import Button from "./components/Button";
import { UserInfo } from "./components/UserInfo";
// import type { AdminInfoList, Info } from "./types";

function App() {
  // const user: Info = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "john@example.com",
  // };

  // const admin: AdminInfoList = {
  //   id: 1,
  //   name: "Jane Smith",
  //   email: "jane@example.com",
  //   role: "Administrator",
  //   lastLogin: new Date(),
  // };

  return (
    <>
      <h1>Hello</h1>
      {/* <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}
      <UserInfo
        username="Rakesh"
        email="rakesh@example.com"
        age={25}
        location={["New York", "London", "Tokyo"]}
      />
      <AdminInfo
        username="Rakesh"
        email="rakesh@example.com"
        age={25}
        location={["Tokyo"]}
        admin="Yes"
      />

      <Button
        label="Click"
        onClick={() => alert("Button clicked!")}
        disabled={false}
      />
    </>
  );
}

export default App;
