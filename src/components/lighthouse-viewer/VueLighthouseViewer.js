import { h } from 'vue';
import { renderReport } from 'lighthouse-viewer';

export default {
  name: 'VueLighthouseViewer',
  components: {},
  render() {
    return h('div', {}, []);
  },
  props: {
    json: {
      type: Object,
      required: true,
    },
  },
  computed: {
    computedJson: function () {
      return this.json;
    },
  },
  mounted() {
    this.generateReport();
  },
  methods: {
    generateReport: function () {
      const renderedReport = renderReport(this.json, {});
      this.$el.innerHTML = '';
      this.$el.appendChild(renderedReport);
    },
  },
  watch: {
    json: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.generateReport();
      }
    },
  },
};
