const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'w'];

    let currentKeyIndex = 0;

    const keyElement = document.getElementById('key');

    
    function showCurrentKey() {
      keyElement.textContent = keys[currentKeyIndex];
    }

    
    function startGame() {
      currentKeyIndex = Math.floor(Math.random() * keys.length);
      showCurrentKey();
      PNotify.success({
        text: 'Гра розпочата! Натисни правильну клавішу.',
        delay: 1500
      });
    }

    
    document.addEventListener('keydown', (event) => {
      const pressedKey = event.key.toLowerCase();

      if (pressedKey === keys[currentKeyIndex]) {
        PNotify.success({
          text: `✅ Правильно! Клавіша "${pressedKey.toUpperCase()}"`,
          delay: 1000
        });
        
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        showCurrentKey();
      } else {
        PNotify.error({
          text: `❌ Неправильно! Ти натиснув "${pressedKey.toUpperCase()}"`,
          delay: 1500
        });
      }
    });

    
    document.addEventListener('keypress', (event) => {
      event.preventDefault();
    });

    
    document.getElementById('newGame').addEventListener('click', startGame);

    
    startGame();