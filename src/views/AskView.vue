<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex';

export default {

  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  },

  // #3
  // computed: {
  //   ...mapGetters({
  //     fetchedAsk: 'fetchedAsk'
  //   })
  // },

  // #2
  // computed: {
  //   ...mapState({
  //     fetchedAsk: state => state.ask
  //   })

  //   #1
  //   fetchedAsk(){
  //     return this.$store.state.ask;
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  
};
</script>

<style lang="scss" scoped>

</style>