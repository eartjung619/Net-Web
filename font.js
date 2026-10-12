/* ===== โหลดฟอนต์ Prompt ด้วย JavaScript ===== */
(function () {
  var FONT_URL = 'https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap';

  /* เพิ่มลิงก์ฟอนต์เข้า <head> (ถ้ายังไม่มี) */
  if (!document.querySelector('link[href*="family=Prompt"]')) {
    var preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';

    var preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_URL;

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(link);
  }

  /* ตั้งฟอนต์ให้ทั้งหน้า */
  document.documentElement.style.setProperty('--font-main', "'Prompt', sans-serif");
  document.body.style.fontFamily = "var(--font-main)";

  /* เช็กว่าฟอนต์โหลดเสร็จ แล้วใส่คลาส font-loaded ที่ <html> */
  if (document.fonts && document.fonts.load) {
    Promise.all([
      document.fonts.load('400 1em Prompt'),
      document.fonts.load('600 1em Prompt')
    ]).then(function () {
      document.documentElement.classList.add('font-loaded');
    }).catch(function () {
      console.warn('โหลดฟอนต์ Prompt ไม่สำเร็จ ใช้ฟอนต์สำรองแทน');
    });
  }
})();