function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
               
    <div class="smodal">
    <div class="modalOverlay">
       <div class="modalWindow">

          <div class="modalHeader">
             <div class="modalHeaderImg">
                <span class="modalClose">&times</span>
             </div>
                <h1>Форма заявки</h1>
                <p>Уникальная технология для вашего бизнеса</p>
          </div>

          <div class="modalBody">
             <div class="wrap__form-contein-registration-name">
                <input type="text" placeholder="Полное Имя" required>
              </div>
              <div class="wrap__form-contein-registration-namberTel">
                <input type="number" class="raz" placeholder="Номер телефона" required>
              </div>
              <div class="wrap__form-contein-registration-email">
                <input type="email" class="raz" placeholder="E-mail" required>
              </div>
          
          </div>

          <div class="modalFooter">
             <div class="wrap__form-contein-registration-btn">
                <a href="#enter__up">Отправить</a>
              </div>
          </div>

       </div>
    </div>
 </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false

    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {}
    }
}