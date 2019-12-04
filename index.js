const container = document.getElementsByClassName('container')[0];
const image = document.getElementById('name');

function handlePlayState() {
  if (image.style.animationPlayState === 'running' || image.style.animationPlayState === '') {
    image.style.animationPlayState = 'paused';
  } else if (image.style.animationPlayState === 'paused') {
    image.style.animationPlayState = 'running';
  }
}

function handleAnimation() {
  if (image.classList.contains('animation-initiated')) {
    handlePlayState();
  } else {
    image.classList.add('animation-initiated');
    image.classList.add('initial-slide');
  }
}

container.addEventListener('click', handleAnimation);

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 32) {
    handleAnimation();
  }
});

image.addEventListener('animationend', () => {
  image.classList.remove('initial-slide');
  image.classList.add('full-slide');
});

