import { createApp } from "vue"
import LoginPageComponent from "./components/login/LoginPageComponent.vue"
import RegistrationPageComponent from "./components/registration/RegistrationPageComponent.vue";

createApp(LoginPageComponent).mount("#login-page");
createApp(RegistrationPageComponent).mount("#registration-page");