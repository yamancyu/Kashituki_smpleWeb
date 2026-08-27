document.addEventListener("DOMContentLoaded", () => {
  // 1. GSAP ScrollTrigger によるスクロール演出
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".js-fade-up").forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1, // アニメーション時間を少し長く
      ease: "power3.out", // よりスムーズなイージング
      scrollTrigger: {
        trigger: element,
        start: "top 85%", // 発火タイミングを少し遅く
        toggleActions: "play none none none"
      }
    });
  });

  // 2. インタラクティブなFAQアコーディオン機能
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      // 開閉状態をトグル
      item.classList.toggle("open");

      // アニメーション
      if (item.classList.contains("open")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }

      // 他のFAQを閉じる
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("open");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });
    });
  });
});
