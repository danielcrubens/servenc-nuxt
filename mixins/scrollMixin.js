// scrollMixin.js
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        const offset = -9; 
        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start', offset });
      }
    }
  }
};
