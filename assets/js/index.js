const modalHTML = `
  <section class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <div class="modal__header">
        <div class="modal__header-title">Chi tiết tố cáo</div>
        <div class="modal__header-close">
          <img src="./assets/images/close-icon.svg" alt="close icon" />
        </div>
      </div>
      <div class="modal__body">
        <div class="modal__group">
          <div class="modal__profile">
            <div class="modal__profile-avatar">
              <img src="./assets/images/avatar-1.png" alt="avatar" />
            </div>
            <div class="modal__info">
              <h4 class="modal__info-name">Nguyễn Văn A</h4>
              <p class="modal__info-desc">#50 - Tố vào ngày 12/02/2024</p>
            </div>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Số điện thoại</span>
            <span class="modal__detail-text">0333990859</span>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Số tài khoản</span>
            <span class="modal__detail-text">342423443</span>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Ngân hàng</span>
            <span class="modal__detail-text">ACB</span>
          </div>
        </div>
        <div class="modal__group">
          <div class="modal__profile">
            <div class="modal__profile-avatar">
              <img src="./assets/images/avatar-2.png" alt="avatar" />
            </div>
            <div class="modal__info">
              <h4 class="modal__info-name">Nguyễn Văn B</h4>
              <p class="modal__info-desc">Người tố cáo</p>
            </div>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Trạng thái</span>
            <span class="modal__detail-text">Nạn nhân</span>
          </div>
          <div class="modal__detail">
            <span class="modal__detail-title">Liên hệ</span>
            <span class="modal__detail-text">0356655665</span>
          </div>
          <div class="modal__textarea">
            <span class="modal__detail-title">Nội dung tố cáo</span>
            <p class="modal__textarea-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eligendi distinctio pariatur quae
              maiores amet? Veniam minima praesentium eaque deleniti pariatur. Tempora, rerum deleniti! Voluptatum
              voluptas sed fuga enim quasi.
            </p>
          </div>
          <div class="modal__images">
            <span class="modal__detail-title">Hình ảnh liên quan</span>
            <div class="modal__preview-images">
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image scammer"
              />
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image scammer"
              />
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image scammer"
              />
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image scammer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const warningHeader = document.querySelectorAll('.warning__header');
const scammerItems = document.querySelectorAll('.scammer__item');
// Handle dropdown warning
warningHeader.forEach((item) => {
  item.addEventListener('click', handleShowDropdown);
});

function handleShowDropdown(e) {
  const warningContent = e.target.nextElementSibling;
  const warningContentAll = document.querySelectorAll('.warning__content');
  const warningIcon = e.target.querySelector('.warning__header-icon');
  const warningIconAll = document.querySelectorAll('.warning__header-icon');

  warningIconAll.forEach((item) => {
    if (item !== warningIcon) {
      item.classList.remove('active');
    }
  });

  warningContent.style.height = `${warningContent.scrollHeight}px`;
  warningContent.classList.toggle('active');
  warningIcon.classList.toggle('active');
  if (!warningContent.classList.contains('active')) {
    warningContent.style.height = 0;
  }
}

// end Handle dropdown warning

// Handle Show Modal
scammerItems.forEach((item) => item.addEventListener('click', handleShowModal));

function handleShowModal() {
  document.body.insertAdjacentHTML('afterbegin', modalHTML);
  document.body.style.overflow = 'hidden';
}

document.body.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  if (e.target.matches('.modal__header-close') || e.target.matches('.modal__overlay')) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
});
// end Handle Show Modal
