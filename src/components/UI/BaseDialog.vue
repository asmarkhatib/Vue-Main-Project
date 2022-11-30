<template>
  <div></div>
  <dialog v-if="show" open>
    <base-card>
      <section>
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
      </section>
      <section>
        <slot></slot>
      </section>
      <section>
        <slot name="action"></slot>
      </section>
    </base-card>
  </dialog>
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['show', 'title'],
};
</script>
