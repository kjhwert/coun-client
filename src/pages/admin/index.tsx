import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { userSelector } from "../../features/user/userSlice";
import Loading from "../../shared/components/Loading";

const Index = () => {
  const history = useHistory();
  const { user } = useAppSelector(userSelector);

  useEffect(() => {
    if (!user) {
      history.push("admin/login");
    }
  }, []);

  if (!user) {
    return <Loading />;
  }

  return <div>admin index</div>;
};

export default Index;
