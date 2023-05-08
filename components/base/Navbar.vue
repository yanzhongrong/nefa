<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-20 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="lg:flex-row space-x-4 xl:space-x-8">
        <div class="w-full py-6">
          <div class="text-white font-black text-xl">TINY SD</div>
        </div>
      </div>
      <div class="w-80">
        <ul
          class="w-full text-white h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-1 space-y-1 lg:space-y-0"
        >
          <NavLink name="首页" url="#" />
          <NavLink name="关于" url="#" />
          <base-button class="md:px-2 py-2 w-full text-sm bg-transparent rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline">
            登陆
          </base-button>
          |
          <base-button class="md:px-2 py-2 w-full text-sm bg-transparent rounded-lg text-white hover:text-gray-100 focus:outline-none focus:shadow-outline">
            注册
          </base-button>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: true,
      dropdownNavbar: false,
    }
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>
