// import api from '@/utils/axiosInstance'
// import { useMutation } from '@tanstack/react-query';
// import { redirect } from 'next/navigation';

// export const page = () => {
//    const logoutUser = async () => {
//       await api.post('/auth/logout')
//       sessionStorage.removeItem('user');
//       sessionStorage.removeItem('token');
//       sessionStorage.removeItem('refreshToken');
//    }

//    const { mutate } = useMutation(logoutUser, {
//       onSuccess: () => redirect('/')
//    })
// }
