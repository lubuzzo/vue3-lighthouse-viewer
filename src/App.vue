<script>
import VueLighthouseViewer from './components/lighthouse-viewer/main';
import reportJson from '../public/report.json'

export default {
  components: {
    VueLighthouseViewer
  },
  data() {
    return {
      json: reportJson,
    };
  },
};
</script>

<template>
  <VueLighthouseViewer :json="json" />
</template>