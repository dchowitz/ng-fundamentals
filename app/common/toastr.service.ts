declare let toastr: any;

export default class Toast {
  success(message: string) {
    toastr.success(message);
  }
}