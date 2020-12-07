anime.timeline()
  .add({
    targets: '.room .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
 }).add({
    targets: '.room',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4500
  });