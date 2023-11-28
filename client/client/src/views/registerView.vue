<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import ListUser from "../components/ListUser.vue";

export default {
  name: "Register",
  components: {
    ListUser,
  },
  data() {
    return {
      inputData: {
        nama: "",
        alamat: "",
        nomor_telepon: "",
        jenis_kelamin: "",
      },
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["Register", "ListUsers", "getOneUser"]),
    handleAddData() {
      this.handleAddData(this.inputData);
    },
  },

  computed: {
    ...mapState(useCounterStore, ["users", "user"]),
  },

  created() {
    this.ListUsers();
    this.getOneUser();
  },
};
</script>

<template>
  <form @submit.prevent="Register(inputData)">
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="name"><b>Nama</b></label>
      <input type="text" placeholder="Masukan nama" v-model="inputData.nama" />

      <br /><br />
      <label for="psw"><b>Alamat</b></label>
      <input type="" placeholder="Masukan alamat" v-model="inputData.alamat" />

      <br /><br />
      <label><b>Nomor Telepon</b></label>
      <input
        type="text"
        placeholder="Masukan nomor telepon"
        v-model="inputData.nomor_telepon"
      />

      <br /><br />
      <label for="psw-repeat"><b>Jenis kelamin</b></label
      ><br />
      <input
        type="radio"
        id="Pria"
        value="Pria"
        v-model="inputData.jenis_kelamin"
      />
      <label for="Pria">Pria </label>

      <input
        type="radio"
        id="Wanita"
        value="Wanita"
        v-model="inputData.jenis_kelamin"
      />
      <label for="Wanita">Wanita</label>

      <hr />
      <button type="submit" class="registerbtn">Register</button>
    </div>
  </form>

  <table class="table container mt-5">
    <thead>
      <tr>
        <th scope="col">Nama</th>
        <th scope="col">Alamat</th>
        <th scope="col">Nomor Telepon</th>
        <th scope="col">Jenis Kelamin</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <ListUser v-for="el in users" :users="el" :key="el.id" />
    </tbody>
  </table>
</template>
