<template>
  <li class="w-full">
    <a
      class="md:px-2 py-2 text-sm bg-transparent rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline"
      :href="url"
    >
      {{ name }}
    </a>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
