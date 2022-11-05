import Wallet from "../components/Wallet";
import UsersTable from "../components/UsersTable";

function Users() {
  return (
    <div className="overflow-x-auto relative md:w-6/12 w-full m-auto pt-20 ">
      <div className="text-right mb-2">
        <Wallet />
      </div>
      <UsersTable />
    </div>
  );
}

export default Users;
