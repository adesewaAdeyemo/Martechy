import Swal from "sweetalert2";

const SweetAlert = {};
SweetAlert.install = (Vue) => {
  Vue.prototype.$swal = Swal;
};

export default SweetAlert;
