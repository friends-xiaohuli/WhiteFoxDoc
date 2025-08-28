<template>
  <div class="absolute flex flex-col z-[40] w-full !max-w-full items-center justify-center bg-transparent transition-bg overflow-hidden h-[60vh] -top-16 pointer-events-none opacity-[.35] dark:opacity-50">
    <div class="jumbo absolute opacity-60 animate"></div>
  </div>
</template>

<style scoped>
  .jumbo {
    --stripes: repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%);
    --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%);
    --rainbow: repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 16%, #5eead4 22%, #60a5fa 30%);
    contain: strict;
    contain-intrinsic-size: 100vw 40vh;
    background-image: var(--stripes), var(--rainbow);
    background-size: 300%, 200%;
    background-position: 50% 50%, 50% 50%;
    height: 1000px;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    -webkit-perspective: 100;
    perspective: 10000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    filter: invert(100%);
    -webkit-mask-image: radial-gradient(ellipse at 100% 20%, black 50%, transparent 70%);
    mask-image: radial-gradient(ellipse at 100% 20%, black 50%, transparent 70%);
    pointer-events: none;
    opacity: 0.5;
  }

  @keyframes jumbo-5f0d2d0c {
    0% {
      background-position: 50% 50%, 50% 50%;
    }
    to {
      background-position: 350% 50%, 350% 50%;
    }
  }

  .jumbo:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: var(--stripes), var(--rainbow);
    background-size: 200%, 100%;
    mix-blend-mode: difference;

  }

  .animate.jumbo:after {
    animation: jumbo-5f0d2d0c 120s linear infinite;
  }
</style>
