<script>
import VueLighthouseViewer from 'vue-lighthouse-viewer';

export default {
  data() {
    return {
      json: '',
    };
  },
  mounted() {
    this.getReport();
  },
  methods: {
    async getReport() {
      import('../report.json').then(data => {
        console.log(data)
        this.json = data;
      })
    },
  },
};
</script>

<template>
  <VueLighthouseViewer :json="json" />
</template>