/* =====================================================
   site.js  —  ส่วนที่ใช้ร่วมกันทุกหน้า
   - แถบสีฟ้า (sub-nav): เลื่อนซ้าย-ขวา, เงาขอบ, ลากด้วยเมาส์
   - ใส่ class="active" ให้ลิงก์ของหน้าปัจจุบันในแถบสีฟ้าอัตโนมัติ
   วางไฟล์นี้ที่ assets/site.js แล้วเรียกก่อน </body> (หลังสคริปต์ Bootstrap)
   ===================================================== */
(function () {
  "use strict";

  var nav = document.querySelector(".sub-nav");
  var sc = document.getElementById("subScroll");
  if (!nav || !sc) return;

  /* ใส่ active ให้ลิงก์ในแถบสีฟ้าที่ตรงกับหน้าปัจจุบัน */
  var page = location.pathname.split("/").pop() || "index.html";
  sc.querySelectorAll("a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href && href === page) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });

  /* แสดงเงาขอบซ้าย/ขวา เมื่อยังเลื่อนต่อได้ */
  function updateEdges() {
    var max = sc.scrollWidth - sc.clientWidth;
    nav.classList.toggle("can-left", sc.scrollLeft > 4);
    nav.classList.toggle("can-right", sc.scrollLeft < max - 4);
  }
  sc.addEventListener("scroll", updateEdges, { passive: true });
  window.addEventListener("resize", updateEdges);

  /* ลากด้วยเมาส์บนคอมพิวเตอร์ (บนมือถือใช้การปัดนิ้วตามปกติ) */
  var down = false, moved = false, startX = 0, startLeft = 0;
  sc.addEventListener("mousedown", function (e) {
    down = true; moved = false; startX = e.pageX; startLeft = sc.scrollLeft;
  });
  window.addEventListener("mousemove", function (e) {
    if (!down) return;
    var dx = e.pageX - startX;
    if (Math.abs(dx) > 5) { moved = true; sc.classList.add("dragging"); }
    if (moved) sc.scrollLeft = startLeft - dx;
  });
  window.addEventListener("mouseup", function () {
    down = false;
    setTimeout(function () { sc.classList.remove("dragging"); }, 0);
  });
  sc.addEventListener("dragstart", function (e) { e.preventDefault(); });

  /* เลื่อนให้เห็นเมนูของหน้าปัจจุบัน (ถ้ามี class active) */
  var cur = sc.querySelector("a.active");
  if (cur) {
    var left = cur.getBoundingClientRect().left - sc.getBoundingClientRect().left + sc.scrollLeft;
    sc.scrollLeft = left - (sc.clientWidth - cur.offsetWidth) / 2;
  }

  updateEdges();
  window.addEventListener("load", updateEdges);
})();
