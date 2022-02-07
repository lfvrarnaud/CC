import { useState, useEffect } from "react";

import { fetchMe } from "../services/api";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setUser(await fetchMe());
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading ? null : children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
