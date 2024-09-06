export default function ChatVersionToggle() {
  const chatVersion = document.querySelector('.js-chat-version');
  const versionToggle = document.querySelector('.js-chat-version-toggle');
  const versionButtons = document.querySelectorAll('.js-chat-version-switch');

  if (!chatVersion || !versionToggle || versionButtons.length === 0) return;

  function updateToggleTitle() {
    const activeButton = document.querySelector('.js-chat-version-switch.is-active');
    if (activeButton) {
      versionToggle.querySelector('.chat-version__toggle-title').textContent = activeButton.dataset.version;
    }
  }

  updateToggleTitle();

  versionToggle.addEventListener('click', function() {
    chatVersion.classList.toggle('is-show');
  });

  document.addEventListener('click', function(e) {
    if (!chatVersion.contains(e.target) && chatVersion.classList.contains('is-show')) {
      chatVersion.classList.remove('is-show');
    }
  });

  versionButtons.forEach(button => {
    button.addEventListener('click', function() {
      versionButtons.forEach(btn => btn.classList.remove('is-active'));
      this.classList.add('is-active');
      updateToggleTitle();
      chatVersion.classList.remove('is-show');
    });
  });
}