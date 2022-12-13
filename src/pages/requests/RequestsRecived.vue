<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred">
      <template #default>
        <p>{{ error }}</p>
      </template>
      <template #action>
        <base-button @click="confirmError">Okey</base-button>
      </template>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-if="hasRequests">
          <requests-item
            v-for="req in receviedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          ></requests-item>
        </ul>
        <h3 v-else>You haven't recevied any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';
export default {
  components: {
    RequestsItem,
  },
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  computed: {
    receviedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/loadRequests');
      } catch (error) {
        this.error = error.message || 'Something is wrong at this moment!';
      }
      this.isLoading = false;
    },
    confirmError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
