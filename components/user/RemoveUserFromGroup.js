import { Fragment, useState, useEffect, useCallback } from "react";
import { MinusIcon } from "@heroicons/react/solid";

import { Auth, API } from "aws-amplify";

export default function RemoveUserGroup({ userName }) {
  const [selected, setSelected] = useState();
  console.log("SELECTED", selected, userName);
  const handleChange = (e) => {
    setSelected(e.target.value);
    // removeFromGroup();
  };

  async function removeFromGroup() {
    let apiName = "AdminQueries";
    let path = "/removeUserFromGroup";
    let myInit = {
      body: {
        username: userName,
        groupname: selected,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
  }

  return (
    <div className="flex space-x-2">
      <select
        value={selected}
        onChange={handleChange}
        className="rounded-md bg-gray-800 text-gray-400 text-xs"
      >
        <option value="">Remove From Group</option>
        <option value="Admin">Admin</option>
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
      </select>
      <button
        type="submit"
        onClick={removeFromGroup}
        className="bg-red-500 px-1 rounded-md shadow-md text-gray-200 text-xs hover:bg-red-600 transition ease-in-out"
      >
        <MinusIcon className="h-3 w-3" />
      </button>
    </div>
  );
}
