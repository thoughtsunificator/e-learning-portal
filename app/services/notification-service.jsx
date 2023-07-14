import { toast } from "react-toastify";

class NotificationService {
  success(message) {
    console.log("success message--", message);
    toast.success(message);
  }

  error(message) {
    console.log("error message--", message);
    toast.error(message);
  }

  redirect(location) {
    console.log("location--", location);
    setTimeout(() => {}, 3000);
  }
}

const Notification = new NotificationService();

Object.freeze(Notification);

export default Notification;
