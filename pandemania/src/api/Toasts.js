import { toast } from 'react-toastify';

export const apiErrorToast = () => {
	toast.error('Covid API id down, please try again later', { toastId: 'api-error' });
};

export const loginSuccessToast = () => {
	toast.success('Successfully logged in!', { toastId: 'login' });
};

export const newFavouriteToast = (newFavourite) => {
	toast.info(`Your new default country is ${newFavourite}`, { toastId: `new-favourite-${newFavourite}` });
};
