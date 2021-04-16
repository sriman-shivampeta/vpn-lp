import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import axiosInstance from "@/services/axiosInstance";
import { localUrl, herokuUrl } from "@/constant/constant";
import router from "@/router/index";

Vue.use(Vuex);

const baseUrl = document.baseURI.match("localhost") ? localUrl : herokuUrl;

axios.defaults.baseURL = "http://localhost:5000";

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
    async getUserDetails({ commit }) {
      try {
        const response = await axiosInstance.get("/user/me/");
        if (response.status === 200) {
          console.log(response.data, "getUserDetails");
        }
      } catch (error) {
        localStorage.removeItem("token");
        commit("SET_STATE", {
          stateName: "error_message",
          payload: error.message,
        });
      }
    },
    async resgisterUser({ commit }, params) {
      try {
        const requestParams = {
          username: params.name,
          email: params.email,
          password: params.password,
        };
        const response = await axiosInstance.post("/user/signup/", requestParams);
        console.log(response, "signup");
        if (response.status === 200) {
          router.push("/login");
        }
      } catch (error) {
        commit("SET_STATE", {
          stateName: "error_message",
          payload: error.message,
        });
      }
    },
    async loginUser({ commit }, params) {
      try {
        const requestParams = {
          email: params.email,
          password: params.password,
        };
        const response = await axiosInstance.post("/user/login/", requestParams);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          console.log(response.data.token);
          router.push("/home");
        }
      } catch (error) {
        commit("SET_STATE", {
          stateName: "error_message",
          payload: error.message,
        });
      }
    },
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
