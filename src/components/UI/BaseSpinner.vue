<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader::after {
  content: 'loading';

  max-width: 75px;
  max-height: 75px;
  border: 15px solid whitesmoke;
  border-top-color: aqua;
  border-radius: 50%;
  animation: loading 0.75s ease infinite;
}

@keyframes loading {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
