/* =========================================================
   main.js  |  สคริปต์ทั่วไปของทุกหน้า (ตอนนี้มีเฉพาะตรวจฟอร์ม)
   ========================================================= */

// ฟอร์มที่ใส่แอตทริบิวต์ data-demo-form จะถูกตรวจว่ากรอกครบหรือยัง
document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();                       // กันหน้าโหลดใหม่
    form.classList.add("was-validated");      // แสดงกรอบแดง/เขียวของ Bootstrap
    if (!form.checkValidity()) return;        // ถ้ายังกรอกไม่ครบ ให้หยุด

    // TODO: ส่งข้อมูลไปเซิร์ฟเวอร์ตรงนี้ (เช่น fetch ไปยัง API ของคุณ)
    alert("ส่งข้อมูลเรียบร้อย (ตัวอย่าง)");
    form.reset();
    form.classList.remove("was-validated");
  });
});
