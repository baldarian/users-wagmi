import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../api";
import Button from "../components/Button";

function UserDetail() {
  const { userId } = useParams();
  const query = useQuery(["user", userId], () => fetchUser(userId!));
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto relative md:w-1/3 w-full m-auto pt-20">
      <Button onClick={() => navigate("/")}>Go Back</Button>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg object-fill w-full h-64"
          src={`https://picsum.photos/200/300?dummy=${query.data?.id}`}
          alt=""
        />

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {query.data?.first_name} {query.data?.last_name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {query?.data?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
