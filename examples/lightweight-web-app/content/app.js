const status = document.querySelector('.status');

if (status) {
  status.title = `Rendered at ${new Date().toLocaleTimeString()}`;
}
