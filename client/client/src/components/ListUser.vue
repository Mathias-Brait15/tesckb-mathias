<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "ListUser",
  props: ["users"],
  methods: {
    ...mapActions(useCounterStore, ["handleDelete", "handleEdit"]),
  },
};
</script>

<template>
  <tr>
    <td>{{ users.nama }}</td>
    <td>{{ users.alamat }}</td>
    <td>{{ users.nomor_telepon }}</td>
    <td>{{ users.jenis_kelamin }}</td>
    <td>
      <button
        class="btn btn-success me-2"
        @click.prevent="handleEdit(users.id)"
        
      >
      
        Edit
      </button>

      <button class="btn btn-danger" @click.prevent="handleDelete(users.id)">
        Delete
      </button>
    </td>
  </tr>
</template>
