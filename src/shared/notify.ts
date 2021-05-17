import { toast, ToastOptions } from "react-toastify";

const notifyOptions: ToastOptions = {
  hideProgressBar: true,
  autoClose: 3000,
  closeOnClick: true,
};

export const notify = {
  info: (messages: string[]): void => {
    messages.map((message) => toast.info(message, notifyOptions));
  },
  success: (message: string): void => {
    toast.success(message, notifyOptions);
  },
  warning: (messages: string[]): void => {
    messages.map((message) => toast.warning(message, notifyOptions));
  },
  error: (message: string | undefined): void => {
    toast.error(message, notifyOptions);
  },
};
