<template>

  <main ref="containerRef" class="container" :style="{ transform: containerTransform }">

    <section id="section-profile" ref="profileSectionRef" class="page-section">

      <span id="y-test">テスト<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35</span>

    </section>



    <section id="section-works" ref="worksSectionRef" class="page-section">

      <span id="y-test">テスト<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35</span>

    </section>

  </main>



  <nav class="floating-nav">

    <button

      id="profile"

      class="nav-item"

      :class="{ active: activeSection === 'profile' }"

      @pointerdown.prevent="onNavClick('profile')"

      @mouseover="onNavHover('profile')"

    >

      <svg

        id="profile-icon"

        ref="profileIconRef"

        class="profile-icon"

        viewBox="0 0 640 640"

        :class="{ hover: profileHover }"

        @animationend="profileHover = false"

      >

        <path d="M320 312c66.3 0 120-53.7 120-120S386.3 72 320 72s-120 53.7-120 120 53.7 120 120 120m-29.7 56C191.8 368 112 447.8 112 546.3c0 16.4 13.3 29.7 29.7 29.7h356.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3z"/>

      </svg>

      <span>Profile</span>

    </button>



    <button

      id="works"

      class="nav-item"

      :class="{ active: activeSection === 'works' }"

      @pointerdown.prevent="onNavClick('works')"

      @mouseover="onNavHover('works')"

    >

      <svg

        id="works-icon"

        ref="worksIconRef"

        class="works-icon"

        viewBox="0 0 640 640"

        :class="{ hover: worksHover }"

        @animationend="worksHover = false"

      >

        <path d="M290.4 70c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6l-20.7 51.7c-3.2 8-14.6 8-17.8 0L194.4 70c-1.5-3.6-5-6-8.9-6H176c-26.5 0-48 21.5-48 48v208h384V112c0-26.5-21.5-48-48-48H358.5c-3.9 0-7.5 2.4-8.9 6l-20.7 51.7c-3.2 8-14.6 8-17.8 0zM128 368v16c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64v-64h64c35.3 0 64-28.7 64-64v-16zm192 160c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16"/>

      </svg>

      <span>Works</span>

    </button>

  </nav>

</template>



<script setup>

import { ref, computed, nextTick } from 'vue'



const activeSection = ref('profile') // 'profile' | 'works'

const profileHover = ref(false)

const worksHover = ref(false)



const containerRef = ref(null)

const profileSectionRef = ref(null)

const worksSectionRef = ref(null)

const profileIconRef = ref(null)

const worksIconRef = ref(null)



const containerTransform = computed(() => {

  return activeSection.value === 'profile' ? 'translateX(0%)' : 'translateX(-50%)'

})



function onNavClick(section) {

  // mimic the original behavior: if not already active, scroll the target section to top and activate

  if (activeSection.value === section) return



  // use requestAnimationFrame-like timing

  requestAnimationFrame(async () => {

    if (section === 'profile' && profileSectionRef.value) {

      profileSectionRef.value.scrollTo?.(0, 0)

    } else if (section === 'works' && worksSectionRef.value) {

      worksSectionRef.value.scrollTo?.(0, 0)

    }

    // nextTick to ensure DOM updates if necessary

    await nextTick()

    activeSection.value = section

  })

}



function onNavHover(section) {

  // add hover animation class to the relevant icon (removed on animationend)

  if (section === 'profile') {

    profileHover.value = true

  } else if (section === 'works') {

    worksHover.value = true

  }

}

</script>



<style>

/* root variables and global layout (kept from original) */

* {

  box-sizing: border-box;

  margin: 0;

  padding: 0;

}



:root {

  --profile-color: #fff;

  --works-color: #c8c8c8;

  --text-color: #333;

  --active-color: #fff;

  --nav-color: #fff;

  --navbg-color: #333;

  --navitem-color: #333;

  --shadow-color: 0, 0, 0, 0.15;

  color-scheme: light dark;

}



@media (prefers-color-scheme: dark) {

:root {

  --profile-color: #646464;

  --works-color: #373737;

  --text-color: #ccc;

  --active-color: #000;

  --nav-color: #000;

  --navbg-color: #ccc;

  --navitem-color: #ccc;

  --shadow-color: 255, 255, 255, 0.15;

}

}



html, body, #app {

  font-display: swap;

  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;

  color: var(--text-color);

  overflow-x: hidden;

  height: 100vh;

  width: 100vw;

  -webkit-tap-highlight-color: transparent;

}



.container {

  position: relative;

  display: flex;

  width: 200%;

  height: 100%;

  transition: transform 1s cubic-bezier(0.5, 0, 0, 1);

}



.page-section {

  width: 100%;

  height: 100%;

  overflow-y: scroll;

  padding-top: 50px;

  padding-bottom: 150px;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;

  align-items: center;

}



#section-profile { background-color: var(--profile-color); }

#section-works { background-color: var(--works-color); }



.floating-nav {

  position: absolute;

  bottom: 30px;

  left: 50%;

  transform: translateX(-50%);

  background: var(--nav-color);

  box-shadow: 0 10px 25px rgba(var(--shadow-color));

  border-radius: 50px;

  padding: 10px;

  display: flex;

  z-index: 100;

  width: 350px;

  gap: 10px;

}



.nav-item {

  border: none;

  background: none;

  border-radius: 50px;

  cursor: pointer;

  width: 50%;

  padding: 10px 15px;

  display: flex;

  flex-direction: column;

  align-items: center;

  fill: var(--navitem-color);

  color: var(--navitem-color);

  transition: all 0.3s;

  font-size: 12px;

}



.profile-icon.hover { animation: 0.4s 1 alternate flip; }

.works-icon.hover { animation: 1.5s 1 alternate brush; }



.nav-item svg {

  width: 28px;

  height: 28px;

  margin-bottom: 4px;

}



.nav-item.active {

  fill: var(--active-color);

  color: var(--active-color);

  background: var(--navbg-color);

}



@media (max-width: 600px) {

  .floating-nav {

    bottom: 20px;

    width: 90%;

  }

}



@keyframes flip {

  from { transform: scale(1); }

  to { transform: scale(-1, 1); }

}



@keyframes brush {

  0% {

    transform-origin: top;

    transform: rotateX(0deg);

  }



  25% {

    transform-origin: top;

    transform: perspective(200px) rotateX(65deg) translateY(10px) Scale(1.2);

  }



  50% {

    transform-origin: top;

    transform: perspective(500px) rotateX(65deg) translateY(50px) Scale(1.2);

  }



  100% {

    transform-origin: top;

    transform: rotateX(0deg);

  }

}



#y-test {

  text-align: center;

  font-size: 32px;

}

</style>