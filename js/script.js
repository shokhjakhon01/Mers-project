import tabs from "./modules/tabs";
  import data from "./modules/datas";
  import modal from "./modules/modal";
  import accordion from "./modules/accordion";
  import classes from "./modules/class";
  import loader from "./modules/loader";
  import slider from "./modules/slider";
  import {openModal} from './modules/modal'

window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(()=> openModal('.modal', modalTimer), 50000);

  tabs();
  data();
  modal('[data-modal]', ".modal", modalTimer);
  accordion(modalTimer);
  classes();
  loader();
  slider();
});
