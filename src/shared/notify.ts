import { toast, ToastOptions } from "react-toastify";

const notifyOptions: ToastOptions = {
  hideProgressBar: true,
  autoClose: 3000,
  closeOnClick: true,
};

export const notify = {
  info: (messages: string[]) => {
    messages.map((message) => toast.info(message, notifyOptions));
  },
  success: (message: string) => {
    toast.success(message, notifyOptions);
  },
  warning: (messages: string[]) => {
    messages.map((message) => toast.warning(message, notifyOptions));
  },
  error: (message: string | undefined) => {
    toast.error(message, notifyOptions);
  },
};
