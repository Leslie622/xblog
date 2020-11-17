<template>
  <div class="demo-1">
    <main>
      <div id="container"></div>
      <div class="frame">
        <div class="frame__deco">
          <span class="frame__deco-inner"></span>
        </div>
      </div>
      <div class="content">
        <div class="content__item">
          <button class="content__button">Here we go!</button>
        </div>
        <div class="content__item content__item--details">
          <h3 class="content__location">武汉 - WuHan</h3>
          <h1 class="content__title">Leslie</h1>
          <p class="content__date">光谷职业学院第一届网页设计技能赛参赛作品</p>
        </div>
        <div
          class="content__item content__item--details content__item--columns"
        >
          <div class="content__inner">
            <p class="name">姓名：李逸帆</p>
            <p class="academy">学院：互联网+</p>
            <p class="class">班级：软件4班</p>
            <p class="division">负责模块：前端，网页</p>
            <p><em>QQ： </em>416317444</p>
            <p><em>weChat： </em>rebirth0622</p>
          </div>
          <div class="content__inner">
            <p class="name">姓名：李儒龙</p>
            <p class="academy">学院：互联网+</p>
            <p class="class">班级：软件4班</p>
            <p class="division">负责模块：PPT撰稿、演讲</p>
            <p><em>QQ： </em>416317444</p>
            <p><em>weChat： </em>rebirth0622</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  created() {
    document.documentElement.className = "js";
    var supportsCssVars = function () {
      var e,
        t = document.createElement("style");
      return (
        (t.innerHTML = "root: { --tmp-var: bold; }"),
        document.head.appendChild(t),
        (e = !!(
          window.CSS &&
          window.CSS.supports &&
          window.CSS.supports("font-weight", "var(--tmp-var)")
        )),
        t.parentNode.removeChild(t),
        e
      );
    };
    supportsCssVars() ||
      alert(
        "Please view this demo in a modern browser that supports CSS Variables."
      );
  },
  mounted() {
    const frame = document.querySelector(".frame");
    const frameDeco = frame.querySelector(".frame__deco");
    const contentTitle = document.querySelector(".content__title");
    const contentLocation = document.querySelector(".content__location");
    const contentDate = document.querySelector(".content__date");
    charming(contentTitle);
    contentTitle.style.opacity = 1;
    const titleLetters = [...contentTitle.querySelectorAll("span")];
    const contentDetailsCols = [
      ...document.querySelectorAll(".content__item--details > .content__inner"),
    ];
    const enterCtrl = document.querySelector(".content__button");

    let animation = new explosion.default("container", {
      surface: "5E6262",
      inside: "ef572d",
      background: "151616",
      onLoad: () => {
        document.body.classList.remove("loading");
      },
    });

    let targetMouseX = 0,
      mouseX = 0,
      targetMouseY = 0,
      mouseY = 0,
      ta = 0,
      taY = 0;
    const sign = (n) => (n === 0 ? 1 : n / Math.abs(n));
    document.addEventListener("mousemove", (e) => {
      targetMouseX = (2 * (e.clientX - animation.width / 2)) / animation.width;
      targetMouseY =
        (2 * (e.clientY - animation.height / 2)) / animation.height;
    });
    document.addEventListener("touchmove", (e) => {
      targetMouseX = (e.touches[0].clientX / animation.width) * 2 - 1;
      targetMouseY = (e.touches[0].clientY / animation.height) * 2 - 1;
    });

    const draw = () => {
      if (animation) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
        ta = Math.abs(mouseX);
        taY = Math.abs(mouseY);
        animation.scene.rotation.x =
          Math.PI / 2 - taY * (2 - taY) * Math.PI * sign(mouseY);
        animation.scene.rotation.y =
          Math.PI / 2 - ta * (2 - ta) * Math.PI * sign(mouseX);
        animation.scene.rotation.z =
          Math.PI / 2 - ta * (2 - ta) * Math.PI * sign(mouseX);
      }
      window.requestAnimationFrame(draw);
    };
    draw();

    let isOpen = false;
    enterCtrl.addEventListener("click", () => {
      isOpen = true;

      new TimelineMax()
        .to(enterCtrl, 0.3, {
          opacity: 0,
          ease: Expo.easeOut,
          complete: () => TweenMax.set(enterCtrl, { "pointer-events": "none" }),
        })
        .to(
          animation.camera.position,
          0.5,
          {
            z: 10,
            ease: Expo.easeIn,
          },
          0
        )
        .to(
          animation.settings,
          4,
          {
            progress: 2,
            ease: Expo.easeOut,
          },
          0.4
        )
        .to(
          frame,
          1,
          {
            opacity: 1,
            startAt: { scale: 0.9 },
            scale: 1,
            ease: Expo.easeOut,
          },
          0.4
        )
        .to(
          [contentDate, contentLocation],
          1,
          {
            opacity: 1,
            startAt: { scale: 0 },
            scale: 1,
            ease: Expo.easeOut,
          },
          0.4
        )
        .staggerTo(
          titleLetters.sort(() => Math.round(Math.random()) - 0.5),
          1,
          {
            opacity: 1,
            startAt: { scale: 0 },
            scale: 1,
            ease: Expo.easeOut,
          },
          0.04,
          0.4
        )
        .to(
          animation.settings,
          1,
          {
            progress: 0,
            ease: Quart.easeInOut,
          },
          4
        )
        .to(
          animation.camera.position,
          1,
          {
            z: 7,
            ease: Quart.easeInOut,
          },
          4
        )
        .staggerTo(
          [contentDate, contentLocation],
          1,
          {
            opacity: 0,
            scale: 0,
            ease: Expo.easeInOut,
          },
          0.06,
          4
        )
        .staggerTo(
          titleLetters,
          1,
          {
            opacity: 0,
            scale: 0,
            ease: Expo.easeInOut,
          },
          0.04,
          4
        )
        .staggerTo(
          contentDetailsCols,
          0.8,
          {
            opacity: 1,
            startAt: { scale: 1.3 },
            scale: 1,
            ease: Expo.easeOut,
          },
          0.08,
          4.4
        )
        .call(
          function () {
            frameDeco.classList.add("frame__deco--hide");
          },
          null,
          null,
          4.4
        );
    });

    enterCtrl.addEventListener("mouseenter", () => {
      if (isOpen) return;
      new TimelineMax().to(
        animation.camera.position,
        1,
        {
          z: 5.5,
          ease: Expo.easeOut,
        },
        0
      );
    });
    enterCtrl.addEventListener("mouseleave", () => {
      if (isOpen) return;
      new TimelineMax().to(
        animation.camera.position,
        1,
        {
          z: 7,
          ease: Expo.easeOut,
        },
        0
      );
    });
  },
};
</script>


<style scoped>
@import "~assets/css/exploding/exploding-base.css";

main {
  max-height: 100vh;
  overflow: hidden;
}

.title {
  margin-bottom: 40px;
}

.team {
  position: absolute;
  top: 0;
}
</style>