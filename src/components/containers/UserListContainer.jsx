import { useDispatch, useSelector } from "react-redux";
import UserList from "../user/UserList";
import axios from "axios";
import { useCallback } from "react";
import { getUsersFail, getUsersStart, getUsersSuccess } from "../../redux/actions";

export const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(
    async function getusers() {
      try {
        dispatch(getUsersStart());

        const res = await axios.get("https://api.github.com/users");
        dispatch(getUsersSuccess(res.data));
      } catch (error) {
        dispatch(getUsersFail(error));
      }
    },
    [dispatch]
  );

  return <UserList users={users} getUsers={getUsers} />;
};
