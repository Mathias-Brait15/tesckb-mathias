import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";

const BASE_URL = `http://localhost:4000/users`;

export const useCounterStore = defineStore("counter", {
  state: () => ({
    users: [],
    user: {},
  }),

  actions: {
    async Register(inputData) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/register`,
          data: {
            nama: inputData.nama,
            alamat: inputData.alamat,
            nomor_telepon: inputData.nomor_telepon,
            jenis_kelamin: inputData.jenis_kelamin,
          },
        });
        console.log(data);
      } catch (error) {
        // swal("Upss..", error.response.data.message, "error");
      }
    },

    async ListUsers() {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/getList`,
        });
        this.users = data;
      } catch (error) {}
    },

    async handleDelete(id) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: `${BASE_URL}/${id}`,
        });
        this.users();
      } catch (error) {}
    },

    async handleEdit(id) {
      try {
      } catch (error) {}
    },

    async getOneUser(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/${id}`,
        });
        this.user = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
