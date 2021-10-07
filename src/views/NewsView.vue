<template>
  <div>
    <div v-bind:key="user.id" v-for="user in this.$store.state.news">{{user.title}}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },  
  
};
</script>

<style lang="scss" scoped>

</style>