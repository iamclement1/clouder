export const getStorageAuthItems = () => {
  const token =
    typeof window !== "undefined" && sessionStorage.getItem("token");
  const refreshToken =
    typeof window !== "undefined" && sessionStorage.getItem("refreshToken");
  return { token, refreshToken };
};
