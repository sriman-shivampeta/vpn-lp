<template>
  <div class="home">
    <Section1 />
    <Section2 />
    <Section3 />
    <ChooseYourPlan />
    <GlobalNetwork />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/PageSections/Section1";
import Section2 from "@/components/PageSections/Section2";
import Section3 from "@/components/PageSections/Section3";
import ChooseYourPlan from "@/components/PageSections/ChoosePlan";
import GlobalNetwork from "@/components/PageSections/GlobalNetwork";
import Footer from "@/components/PageSections/Footer";

export default {
  name: "Home",
  components: {
    Section1,
    Section2,
    Section3,
    ChooseYourPlan,
    GlobalNetwork,
    Footer,
  },
};
</script>
