import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { localUrl, herokuUrl } from "@/constant/constant";

Vue.use(Vuex);

const baseUrl = document.baseURI.match("localhost") ? localUrl : herokuUrl;

export default new Vuex.Store({
  state: {
    posts: [],
    error_message: "",
  },
  mutations: {
    SET_STATE(state, message) {
      state[message.stateName] = message.payload;
    },
  },
  actions: {
    async fetchPostsAction({ commit }) {
      try {
        const response = await axios.get(baseUrl);
        if (response.status) {
          commit("SET_STATE", {
            stateName: "posts",
            payload: response.data.data,
          });
        }
      } catch (error) {
        commit("SET_STATE", {
          stateName: "error_message",
          payload: error.message,
        });
      }
    },
  },
  modules: {},
});
