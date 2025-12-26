const btn = document.querySelector('.ani-button');
    const box = document.querySelector('.animay');

    btn.addEventListener('click', () => {
      box.classList.toggle('hidden');
      
         if (!box.classList.contains('hidden')) {
    setTimeout(() => {
      box.classList.add('hidden');
    }, 3000);
         }

    });