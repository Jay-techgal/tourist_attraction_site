const wrapper = document.querySelector('.cards-wrapper');
const cards = Array.from(wrapper.children);

cards.forEach(card => {
    wrapper.appendChild(clone);
});

let x = 0
const speed = 1
 function animate(){
x -= speed

const firstSetWidth = cards.reduce((total, card) => total + card.offsetWidth + 32, 0);
if (Math.abs (x) >= firstSetWidth) {
    x = 0;
}
 wrapper.computedStyleMap.transform = 'translateX(${x}px)';
 requestAnimationFrame (animate);
}
    animate()
   
