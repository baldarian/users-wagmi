import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../api";

function UsersTable() {
  const query = useQuery(["users"], fetchUsers);
  const navigate = useNavigate();

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6 w-1/3">
            ID
          </th>
          <th scope="col" className="py-3 px-6 w-1/3">
            Full Name
          </th>
          <th scope="col" className="py-3 px-6 w-1/3">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {query.data?.map((user) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 cursor-pointer"
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <td
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.id}
            </td>
            <td className="py-4 px-6">
              {user.first_name} {user.last_name}
            </td>
            <td className="py-4 px-6">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
