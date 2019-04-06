import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import blog from "@/components/blog";
import services from "@/components/services";
import contact from "@/components/contact";
import itemDetails from "@/components/itemDetails";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/home",
      name: "home2",
      component: home
    },
    {
      path: "/blog",
      name: "blog",
      component: blog
    },
    {
      path: "/services",
      name: "services",
      component: services
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    },
    {
      // this.$router.push({ name: "itemDetails", params: { Pid: prodId } });
      path: "/itemDetails/:Pid",
      name: "itemDetails",
      component: itemDetails
    }
  ]
});
