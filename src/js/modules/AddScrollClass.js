export default function AddScrollClass() {
  const scrollableBlocks = document.querySelectorAll('.js-chat-body');

  if (scrollableBlocks.length === 0) return;

  function checkScroll(block) {
    if (block.scrollHeight > block.clientHeight) {
      block.classList.add('is-scroll');
    } else {
      block.classList.remove('is-scroll');
    }
  }

  scrollableBlocks.forEach(block => checkScroll(block));

  window.addEventListener('resize', function() {
    scrollableBlocks.forEach(block => checkScroll(block));
  });
}