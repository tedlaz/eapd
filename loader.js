function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

(async () => {
  try {
    await loadScript('./metadata.js');
    await loadScript('./table_options.js');
    await loadScript('./osyk_kad.js');
    await loadScript('./osyk_eid.js');
    await loadScript('./kpk.js');
    await loadScript('./epidotiseis.js');
    await loadScript('./topic.js');
    await loadScript('./app.js');
  } catch (e) {
    alert(`Failed to initialize app: ${e.message || e}`);
    console.error(e);
  }
})();
