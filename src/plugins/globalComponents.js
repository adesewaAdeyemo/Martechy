import AuthPage from "../components/layout/AuthPage.vue";
import LandingPage from "../components/layout/LandingPage.vue";
import BaseCard from "../components/ui/BaseCard.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseSpinner from "../components/ui/BaseSpinner.vue";
import BaseDialog from "../components/ui/BaseDialog.vue";
import CardTpl from "../components/ui/CardTpl.vue";
import FullNav from "../components/ui/FullNav.vue";
import Product from "../components/component/product.vue";
import Table from "../components/component/table.vue"

const registerGlobalComponents = (app) => {
  app.component("landing-page", LandingPage);
  app.component("auth-page", AuthPage);
  app.component("base-card", BaseCard);
  app.component("base-button", BaseButton);
  app.component("base-badge", BaseBadge);
  app.component("base-spinner", BaseSpinner);
  app.component("base-dialog", BaseDialog);
  app.component("card-tpl", CardTpl);
  app.component("full-nav", FullNav);
  app.component("product-tpl", Product);
  app.component("table-tpl", Table);
};

export default registerGlobalComponents;
