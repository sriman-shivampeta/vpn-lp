<template>
  <div class="home">
    <NavMenu />
    <Section1 />
    <Section2 />
    <Section3 />
    <ChooseYourPlan />
    <GlobalNetwork />
  </div>
</template>

<script>
// @ is an alias to /src
import NavMenu from "@/components/NavMenu/NavMenu";
import Section1 from "@/components/PageSections/Section1";
import Section2 from "@/components/PageSections/Section2";
import Section3 from "@/components/PageSections/Section3";
import ChooseYourPlan from "@/components/PageSections/ChoosePlan";
import GlobalNetwork from "@/components/PageSections/GlobalNetwork";

export default {
  name: "Home",
  components: {
    NavMenu,
    Section1,
    Section2,
    Section3,
    ChooseYourPlan,
    GlobalNetwork,
  },
};
</script>
