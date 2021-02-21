import { toast } from 'react-toastify';

const apiError = () => {
	toast.error('Covid API id down, please try again later', { toastId: 'api-error' });
};

export default apiError;
