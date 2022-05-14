import { useContext, useEffect, useState } from "react";
import ReduxContext from "../../contexts/ReduxContext";

export default function useReduxState() {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store);
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}
