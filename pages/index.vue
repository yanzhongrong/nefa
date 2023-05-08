<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24 px-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 text-center ">
          <div class="text-white text-80 font-bold mt-20 w-full">Stable Diffusion Web UI</div>
          <div class="text-white text-22 mt-10 ">加快您的创作速度，释放您的想象力，让Stable </div>
          <div class="text-white text-22 mt-1 ">Diffusion Web UI成为您最好的创作伴侣！</div>
          <base-button class="md:px-16 py-2 mt-10 text-22 font-black rounded-lg bg-[#FF0000] text-white">
            开始创作
          </base-button>
          <img class="mt-10 mx-auto" width="919" :src="require('~/assets/img/mac_ipad_iphone.jpg')" alt="">
        </div>
        <!-- 功能特点 -->
        <div class="text-center mt-20 relative">
          <div class="text-white text-42 font-semibold">TINY SD 功能特点</div>
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            :src="require('~/assets/img/pattern/star.png')"
            class="hidden sm:block absolute -top-1 sm:-top-2 right-16 lg:right-0 lg:left-[30rem] w-8"
          />
        </div>

        <!-- 配图1 -->
        <div class="flex justify-around">
          <img 
            class="mt-10" width="50%" data-aos="fade-right"
            aos-init aos-animate  :src="require('~/assets/img/illustration1.png')" alt="">
          <div class="ml-20 mt-14">
            <div class="text-white text-48 font-semibold">随时随地创作</div>
            <div class="text-white text-28 mt-10">通过移动设备实现随时随地的创作，摆脱桌面电脑的限制</div>
            <div class="text-white text-opacity-60 text-20 mt-6" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">可以在电脑、iPad、手机等设备上畅享创作的自由和便捷，无论何时何地，不受平台及配置限制，您都可以随心所欲地使用它们来创作</div>
          </div>
        </div>

        <!-- 配图2 -->
        <div class="flex justify-around mt-10">
          <div class="mr-20 mt-14">
            <div class="text-white text-48 font-semibold">简单上手</div>
            <div class="text-white text-28 mt-10">消除本地部署的复杂性，无需编写代码，通过一键操作即可轻松实现</div>
            <div class="text-white text-opacity-60 text-20 mt-6" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">复杂的部署操作及维护交给我们，让你更多精力专注在创意设计</div>
          </div>
          <img class="mt-10" width="50%" data-aos="fade-left" aos-init aos-animate  :src="require('~/assets/img/illustration2.png')" alt="">
        </div>

        <!-- 配图3 -->
        <div class="flex justify-around mt-10">
          <img 
            class="mt-10 aos-init aos-animate" 
            data-aos="fade-right"
            data-aos-once="true" width="50%" :src="require('~/assets/img/illustration3.png')" alt="">
          <div class="ml-20 mt-14">
            <div class="text-white text-48 font-semibold">无需硬件</div>
            <div class="text-white text-28 mt-10">节省昂贵的机器配置及显卡费用</div>
            <div class="text-white text-opacity-60 text-20 mt-6" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">借助云计算和虚拟化技术，你可以在不需要拥有昂贵的机器配置和显卡的情况下，轻松地进行各种创作活动</div>
          </div>
        </div>

        <!-- 配图4 -->
        <div class="flex justify-around mt-10">
          <div class="mr-20 mt-14">
            <div class="text-white text-48 font-semibold">模型库丰富</div>
            <div class="text-white text-28 mt-10">模型库全面丰富，省去更多时间，提高创作效率</div>
            <div class="text-white text-opacity-60 text-20 mt-6" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">模型陆续更新补充</div>
          </div>
          <img class="mt-10" width="50%"  :src="require('~/assets/img/illustration2.png')" alt="">
        </div>

        <!-- 配图5 -->
        <div class="flex justify-around mt-10">
          <img 
            class="mt-10" 
            data-aos="fade-right"
            data-aos-once="true" width="50%"  :src="require('~/assets/img/illustration5.jpg')" alt="">
          <div class="ml-20 mt-14">
            <div class="text-white text-48 font-semibold">支持中文</div>
            <div class="text-white text-28 mt-10">界面支持中文，更直观准确的进行操作</div>
            <div class="text-white text-opacity-60 text-20 mt-6" data-aos="fade-down" data-aos-once="true" data-aos-delay="300">中文界面不仅提供了更加友好的用户体验，让用户更加舒适和自如地进行操作</div>
          </div>
        </div>

        <!-- 作品展示 -->
        <div class="text-center mt-20 relative">
          <div class="text-white text-42 font-semibold aos-init aos-animate" data-aos="flip-down">作品展示</div>
          <div class="text-white text-22 font-semibol">基于Stable Diffusion Web UI设计</div>
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            :src="require('~/assets/img/pattern/star.png')"
            class="hidden sm:block absolute -top-1 sm:-top-2 right-16 lg:right-0 lg:left-[30rem] w-8"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            :src="require('~/assets/img/pattern/ellipse-2.png')"
            class="hidden sm:block absolute top-8 sm:top-24 right-64 sm:right-96 xl:right-[32rem] w-6"
          />

          <!-- 瀑布流 -->
          <div ref="waterfall" class="w-full relative h-1100 mt-10">
            <div 
              v-for="(item, index) in imgsArr_c" 
              :key="index"
              ref="imgBox"
              class="absolute rounded-20 p-1" 
              :style="{width: imgWidth + 'px', height: item._height + 'px'}" 
              >
              <img width="100%" class="rounded-20 opacity-0" :data-src="item.src" />
            </div>
            <div class="absolute bottom-0 w-full h-340 text-header-gradient"></div>
          </div>

        </div>

        <!-- 功能建议 -->
        <div class="text-center mt-20 relative">
          <div class="text-white text-42 font-semibold aos-init aos-animate" data-aos="flip-down">功能建议</div>
          <textarea name="story" class="mt-10 w-700 bg-[#8e8e8e] rounded-lg bg-opacity-20 border-transparent text-white text-16 text-opacity-20" rows="7" cols="90">
            您需要什么模型或者有什么建议可以给我们留言，我们非常期待您的声音
          </textarea>
          <div>
            <input type="email" placeholder="请输入您的邮箱地址" class="mt-2 w-700 bg-[#8e8e8e] text-16 border-none rounded-lg bg-opacity-20 text-white text-opacity-20"/>
          </div>
          <BaseButton
            class="w-356 mt-5 bg-white px-8 py-2  text-black"
          >
            立即留言
          </BaseButton>
        </div>
      </BaseSection>
      <!-- <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            >Sign Up Today</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            The World's <span class="text-header-gradient">Fastest Growing</span> Crypto Web App
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
            >
              Get Started
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Download App</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton>
          </div>
        </div>





        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/hero-image.webp')"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection> -->
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      imgsArr: [
        { src: require('~/assets/img/works1.jpg') },
        { src: require('~/assets/img/works2.jpg') },
        { src: require('~/assets/img/works3.jpg') },
        { src: require('~/assets/img/works4.jpg') },
        { src: require('~/assets/img/works5.jpg') },
        { src: require('~/assets/img/works6.jpg') },
        { src: require('~/assets/img/works7.jpg') },
        { src: require('~/assets/img/works8.jpg') },
        { src: require('~/assets/img/works9.jpg') },
        { src: require('~/assets/img/works10.jpg') },
        { src: require('~/assets/img/works11.jpg') },
        { src: require('~/assets/img/works12.jpg') },
      ],
      imgsArr_c: [], // 渲染的图片
      imgCol: 4, // 图片列数
      imgGap: 5, // 图片间间隔
      loadedCount: 0,
      imgBoxEls: [], // 所有 img-box 元素
      beginIndex: 0,
      colsHeightArr: [], // 保存当前每一列的高度
      reachBottomDistance: 20, // 滚动触底距离，触发加载新图片
      viewHeight: 0, // 窗口视图大小
    }
  },
  computed: {
    isMobile() {
      return !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i);
    },
    // 容器 waterfall 的宽度
    waterfallWidth() {
      return this.$refs.waterfall.clientWidth;
    },
    // 图片宽度
    imgWidth() {
      return this.colWidth - 2 * this.imgGap;
    },
    // 列宽度
    colWidth() {
      return this.waterfallWidth / this.colNum;
    },
    // 列数
    colNum() {
      return this.isMobile ? 2 : this.imgCol;
    }
  },
  watch: {
    imgsArr(newVal, oldVal) {
      if (this.imgsArr_c.length > newVal.length || (this.imgsArr_c.left > 0 && newVal[0] && !newVal[0]._height))
        this.reset();
      this.preLoad();
    }
  },
  mounted() {
    this.viewHeight = (document.documentElement.clientHeight === 0) ? document.body.clientHeight : document.documentElement.clientHeight;
    this.preLoad();
  },
  methods: {
    // 预加载 设置并保存图片宽高
    preLoad() {
      // forEach 无法通过 item 直接修改数组元素，需用数组下标修改
      this.imgsArr.forEach((item, index) => {
        if (index < this.loadedCount)
          return;
        if (!item.src) {
          this.imgsArr[index]._height = "0";
          ++this.loadedCount;
          if (this.imgsArr.length === this.loadedCount) {
            this.preloaded();
          }
        } else {
          const img = new Image();
          img.src = item.src;
          img.onload = img.onerror = (e) => {
            // 若加载失败则设置图片高度与宽度一致，加载成功则动态计算图片高度
            this.imgsArr[index]._height = e.type === "load" ? Math.round(this.imgWidth * (img.height / img.width)) : this.imgWidth
            if (e.type === "error") {
              this.imgsArr[index]._error = true;
            }
            ++this.loadedCount;
            if (this.imgsArr.length === this.loadedCount) {
              this.preloaded();
            }
          }
        }
      })
    },
    preloaded() {
      // 开始渲染
      this.imgsArr_c = [].concat(this.imgsArr);
      this.$nextTick(() => {
        // 对每个元素进行排列
        this.waterfall();
      });
    },
    // waterfall，等到整个视图都渲染完毕再执行
    waterfall() {
      // 等到整个视图都渲染完毕再执行
      this.imgBoxEls = this.$refs.imgBox;
      if (!this.imgBoxEls) return;
      let top, left, height;
      if (this.beginIndex === 0) this.colsHeightArr = []
      for (let i = this.beginIndex; i < this.imgBoxEls.length; ++i) {
        if (!this.imgBoxEls[i]) return;
        height = this.imgBoxEls[i].offsetHeight;
        // 第一行
        if (i < this.colNum) {
          this.colsHeightArr.push(height);
          top = 0;
          left = i * this.colWidth;
        } else {
          // 找到最低的高度和其索引
          const minHeight = Math.min.apply(null, this.colsHeightArr);
          const minIdx = this.colsHeightArr.indexOf(minHeight);
          top = minHeight;
          left = minIdx * this.colWidth;
          this.colsHeightArr[minIdx] += height;
        }
        
        // 设置 img-box 位置
        this.imgBoxEls[i].style.top = top + "px";
        this.imgBoxEls[i].style.left = left + "px";
        // 当前图片在窗口内，则加载
        // if (top < this.viewHeight) {
          const imgEl = this.imgBoxEls[i].children[0];
          imgEl.src = imgEl.getAttribute("data-src");
          imgEl.style.opacity = 1;
          imgEl.style.transform = "scale(1)";
        // }
      }
      this.beginIndex = this.imgBoxEls.length;
    },
    reset() {
      this.imgsArr_c = [];
      this.beginIndex = 0;
      this.loadedCount = 0;
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  z-index: 999;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
  -webkit-text-fill-color: transparent;
}
</style>
