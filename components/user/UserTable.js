import { Auth, API } from "aws-amplify";
import { useState, useEffect, useCallback, Fragment } from "react";
import ChangeUserGroup from "./ChangeUserGroup";
import RemoveUserGroup from "./RemoveUserFromGroup";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  console.log("USERS", users);

  const listUsers = useCallback(async (limit) => {
    let nextToken;

    let apiName = "AdminQueries";
    let path = "/listUsers";
    let myInit = {
      queryStringParameters: {
        limit: limit,
        token: nextToken,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    nextToken = NextToken;
    setUsers(rest.Users);

    return rest;
  }, []);

  useEffect(() => {
    listUsers();
  }, [listUsers]);

  return (
    <div className="overflow-x-auto relative shadow-md rounded-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="tracking-wider">
            <th scope="col" className="py-3 px-6">
              UserName
            </th>
            <th scope="col" className="py-3 px-6 ">
              Sub
            </th>
            <th scope="col" className="py-3 px-6">
              Email verified
            </th>
            <th scope="col" className="py-3 px-6">
              Phone verified
            </th>

            <th scope="col" className="py-3 px-6">
              Mobile
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="">Add To Group</span>
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="">Remove From Group</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
              >
                {user.Username}
              </th>
              {user.Attributes.map((a, i) => (
                <Fragment key={i}>
                  <td className="py-4 px-6">{a.Value}</td>
                </Fragment>
              ))}
              <td className="py-4 px-6">
                <ChangeUserGroup userName={user.Username} />
              </td>
              <td className="py-4 px-6">
                <RemoveUserGroup userName={user.Username} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
