<template>
  <transition name="modal-fade">
      <div class="modal-backdrop">
          <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
            <header class="modal-header" id="modalTitle">
              <slot name="header">Legal Entity Details
                <button type="button" class="btn-close" @click="close" aria-label="Close modal">
                X
                </button>
              </slot>
            </header>
            <section class="modal-body" id="modalDescription">
              <slot name="body">
                <div class="popupDiv">
                  <div style="width: 80%; display: table; padding-top: 30px">
                    <div style="display: table-row">
                      <div style="display: table-cell; width:250px,padding-bottom=20px">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Entity ID:</strong></div>
                      </div>
                      <div style="display: table-cell">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px">939627</div>
                      </div>
                    </div>
                    <div style="display: table-row">
                      <div style="display: table-cell; width:250px">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Legal Entity Name:</strong></div>
                        </div>
                      <div style="display: table-cell">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px">
                          <input type="text" class="widetextbox" placeholder="West 42 Associates, L.P."/>
                      </div>
                    </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Name 2:</strong></div>
                    </div>
                    <div style="display: table-cell">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px">
                      <input type="text" class="widetextbox"/>
                    </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Display Name:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="text" class="widetextbox" placeholder="West 42 Associates"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Region:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <select class="dropdowndetials"><option selected>NY</option></select>
                      </div>
                    </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Entity Type:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <select class="dropdowndetials"><option selected>LLP</option></select>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Legal Entity Type:</strong></div>
                    </div>
                  <div style="display: table-cell">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px">
                      <select class="dropdowndetials"><option selected>Partnership</option></select>
                    </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Tax Residency - State:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <select class="dropdowndetials"><option selected>NY</option></select>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Tax Residency - Country:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <select class="dropdowndetials"><option selected>USA</option></select>
                      </div>
                    </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Tax ID (SSN / EIN / TIN):</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="text" placeholder="1234-567" class="widetextbox"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Disregarded Entity:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="checkbox"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Report Entity:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="checkbox"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Tax Year End:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="text" placeholder="12/31/2018" class="shorttextbox"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Fiscal Year End:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="text" placeholder="12/31/2018" class="shorttextbox"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Start Date:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="text" placeholder="01/01/2015" class="shorttextbox"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>End Date:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="text" placeholder="" class="shorttextbox"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Investment Type:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <select class="dropdowndetials"><option selected>Real Estate</option></select>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Investment Number:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <input type="text" class="shorttextbox" placeholder="246967"/>
                      </div>
                  </div>
                </div>
                <div style="display: table-row">
                  <div style="display: table-cell; width:250px">
                    <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Domestic / Foreign:</strong></div>
                    </div>
                    <div style="display: table-cell">
                      <div style="float: left; padding-left: 50px; padding-bottom:10px">
                        <select class="dropdowndetials"><option selected>Domestic</option></select>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border: 1px solid #a58b8b;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 10px;
  display: flex;
  height: 20px;
}

.modal-header {
  border-bottom: 1px solid #c0c0c0;
  color: #4a4a4a;
  justify-content: space-between;
  background: #d8d8d8;
  font-size: 16px;
  font-family: Noto sans Bold;
  font-weight: bold;
  padding-left: 32px;
  min-height: 48px;
}

.modal-footer {
  border-top: 1px solid #f0f0f0;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  color: #4a4a4a;
  background: #d8d8d8;
  padding-right: 32px;
  font-size: large;
}

.btn-green {
  color: white;
  background: #4a4a4a;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.widetextbox {
  background-color: #f0f0f0 !important;
  width: 400px !important;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
}
.shorttextbox {
  background-color: #f0f0f0 !important;
  width: 180px !important;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
}
.dropdowndetials {
  background-color: #f0f0f0;
  color: #4a4a4a;
  width: 400px;
  float: left;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
}
.popupDiv {
  height: 650px;
  width: 900px;
}
</style>
