import toast from 'react-hot-toast';

export default function registerErrors(error) {
  if (error) {
    const emailErr = error?.data?.errors?.email?.message;
    if (emailErr) {
      toast.error(emailErr);
    }

    const passwordErr = error?.data?.errors?.password?.message;
    if (passwordErr) {
      toast.error(passwordErr);
    }

    const errCode = error?.data?.code;
    if (errCode === 11000) {
      toast.error(`${error.data.keyValue.email} is already registered!`);
    }
  }
}
