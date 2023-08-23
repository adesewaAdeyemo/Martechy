import AuthPage from "../components/layout/AuthPage.vue";
import LandingPage from "../components/layout/LandingPage.vue";
import BaseCard from "../components/ui/BaseCard.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseSpinner from "../components/ui/BaseSpinner.vue";
import BaseDialog from "../components/ui/BaseDialog.vue";
import CardTpl from "../components/ui/CardTpl.vue";

const registerGlobalComponents = (app) => {
  app.component("landing-page", LandingPage);
  app.component("auth-page", AuthPage);
  app.component("base-card", BaseCard);
  app.component("base-button", BaseButton);
  app.component("base-badge", BaseBadge);
  app.component("base-spinner", BaseSpinner);
  app.component("base-dialog", BaseDialog);
  app.component("card-tpl", CardTpl);
};

export default registerGlobalComponents;
