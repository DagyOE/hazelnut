import { v4 as uuid } from "uuid";

export const logout = () => ({
  type: "LOGOUT",
});

export const login = (email, password, navigate) => {
  return (dispatchEvent) => {
    if (email === "admin@admin.com" && password === "admin") {
      const token = uuid();
      const adminToken = uuid();
      const userId = uuid();

      dispatchEvent({
        type: "LOGIN_SUCCESS",
        payload: { token, adminToken, userId },
      });

      navigate("/home");
    } else {
      dispatchEvent({
        type: "LOGIN_FAILURE",
      });
    }
  };
};
