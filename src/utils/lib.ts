export const getStorageAuthItems = () => {
  const token =
    typeof window !== "undefined" && sessionStorage.getItem("token");
  const refresh =
    typeof window !== "undefined" && sessionStorage.getItem("refresh");
  return { token, refresh };
};
