import { useDispatch, useSelector } from "react-redux";
import UserList from "../user/UserList";
import { useCallback } from "react";
import { getUsersPromise, getUsersThunk } from "../../redux/actions";

export const UserListContainer = () => {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  /*   const getUsers = useCallback(
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
  ); */

  const getUsers = useCallback(() => {
    dispatch(getUsersPromise());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};
