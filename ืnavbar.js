(function () {
  // CSS ของ navbar
  const style = document.createElement("style");
  style.textContent = `
    .navbar .nav-link {
      border-bottom: 3px solid transparent;
      transition: all .2s;
    }
    .navbar .nav-link:hover { color: #ffd966; }
    .navbar .nav-link.active {
      color: #ffd966 !important;
      font-weight: 600;
      border-bottom: 3px solid #ffd966;
    }
  `;
  document.head.appendChild(style);

  // HTML ของ navbar
  const html = `
<nav class="navbar navbar-expand-lg shadow-sm" data-bs-theme="dark" style="background-color: #800000;">
  <div class="container">

    <a class="navbar-brand d-flex align-items-center" href="firstpage.html">
      <img src="Logo-NET.png" alt="Logo" height="50" class="me-2">
      <span class="fw-semibold text-light">วิทยาลัยเทคโนโลยีภาคตะวันออกเฉียงเหนือ</span>
    </a>

    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
        <li class="nav-item"><a class="nav-link" href="register.html">สมัครเรียน</a></li>
        <li class="nav-item"><a class="nav-link" href="class.html">หลักสูตรที่เปิดสอน</a></li>
        <li class="nav-item"><a class="nav-link" href="sisa.html">Sisa</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">ติดต่อเรา</a></li>
      </ul>

      <form class="d-flex mx-lg-3 mb-2 mb-lg-0" role="search">
        <input class="form-control me-2" type="search" placeholder="ค้นหา..." aria-label="Search">
        <button class="btn btn-outline-light" type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>

      <div class="d-flex align-items-center gap-3 fs-5">
        <div class="dropdown">
          <button class="btn btn-link text-white p-0 fs-5" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false" title="เอกสารดาวน์โหลด">
            <i class="bi bi-file-earmark-text"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><h6 class="dropdown-header">เอกสารดาวน์โหลด</h6></li>
            <li><a class="dropdown-item" href="documents/file1.pdf" download>
              <i class="bi bi-file-earmark-pdf me-2"></i>ใบยื่นเรื่องราวบุคลากร</a></li>
            <li><a class="dropdown-item" href="documents/file2.pdf" download>
              <i class="bi bi-file-earmark-pdf me-2"></i>ใบลา</a></li>
            <li><a class="dropdown-item" href="documents/file3.pdf" download>
              <i class="bi bi-file-earmark-pdf me-2"></i>ใบช่วยเหลือเรียนบุตร</a></li>
          </ul>
        </div>
        <a href="#" class="text-white"><i class="bi bi-cart3"></i></a>
        <a href="#" class="text-white"><i class="bi bi-person-circle"></i></a>
      </div>

    </div>
  </div>
</nav>`;

  document.getElementById("navbar-placeholder").innerHTML = html;

  // ใส่ active ให้ลิงก์ของหน้าปัจจุบัน
  const currentPage = location.pathname.split("/").pop() || "firstpage.html";
  document.querySelectorAll("#mainNav .nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();