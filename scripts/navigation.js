const discordButtons = document.querySelectorAll('[data-discord]');
const discordLink = 'https://discord.gg/kExe4HYvZZ';

discordButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.tagName.toLowerCase() === 'a') return;
    window.location.href = discordLink;
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if ('connection' in navigator && navigator.connection.saveData === false) {
    document.body.style.visibility = 'visible';
  }
});
