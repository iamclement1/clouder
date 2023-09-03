// import React from 'react';
// import { useLayoutEffect } from "react";
// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
// import PageLoader from './common/PageLoader';

// export function AuthGuard({ children } : { children: React.ReactNode}) {
//   const { user, isLoading } = useSelector((state) => state.auth);
//   const router = useRouter();

//   useLayoutEffect(() => {
//     if (!isLoading) {
//       //auth is initialized and there is no user
//       if (!user?.accessToken) {
//         // redirect
//         router.push("/login");
//       }
//     }
//   }, [user, user?.accessToken, router, isLoading]);

//   /* show loading indicator while the auth provider is still loading */
//   if (isLoading) {
//     return <PageLoader />;
//   }
//   // if auth initialized with a valid user show protected page
//   if (!isLoading && user) {
//     return <>{children}</>;
//   }

//   /* otherwise don't return anything, will do a redirect from useEffect */

//   if (!isLoading && !user) {
//     return null;
//   }
// }
