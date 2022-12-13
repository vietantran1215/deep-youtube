(() => {
  function retryDom() {
    const selectors = {
      suggestions:
        "#page-manager > ytd-browse > ytd-two-column-browse-results-renderer",
      shortVideos: "#items > ytd-guide-entry-renderer:nth-child(2)",
      subscriptionPage: "#items > ytd-guide-entry-renderer:nth-child(3)",
      subscriptionSection:
        "#sections > ytd-guide-section-renderer:nth-child(2)",
      exploreSection: "#sections > ytd-guide-section-renderer:nth-child(3)",
      moreOnYoutube: "#sections > ytd-guide-section-renderer:nth-child(4)",
    };
    const domCollections = Object.keys(selectors).map(key => document.querySelector(selectors[key]));
    if (domCollections.some(dom => dom === null)) {
      setTimeout(() => retryDom(), 500);
    } else {
      domCollections.forEach(dom => dom.style.display = 'none');
    }
  }
  window.addEventListener("load", function () {
    retryDom();
  });
})();
