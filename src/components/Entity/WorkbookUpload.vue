<template>
  <div class="workbook-card">
    <div>
        <label class="entity-title" ><strong>11 WEST 42 ACQUISITION ASSOC (246967)</strong></label>
        <button class="back-btn" @click="gotoLegalEntity()"> Back</button>
    </div>
        <div class="wrapper">
          <strong>Upload WorkBook</strong>
          <div class="dropzone-and-upload">
            <vue-dropzone id="drop1" :options="dropOptions" class="drop-down"></vue-dropzone>
            <div id="vueapp" class="upload-folder">
            <kendo-upload ref="upload" name="file"
            :async-save-url="'http://localhost:63219/RECalc/API/TrialBalanceStage/UploadFile'"
            :validation-max-file-size="10485760">
            </kendo-upload>
            <div class="demo-hint">Maximum allowed file size is <strong>10MB</strong>.</div>
              </div>
          </div>
         </div>
  </div>
</template>
<script>
// import vueDropzone from 'vue2-dropzone';

export default {
  data: () => ({
    dropOptions: {
      url: 'http://localhost:63219/RECalc/API/TrialBalanceStage/UploadFile',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer${localStorage.token}`
      }
    },
    uploadLinksStatus: false
  }),
  components: {},
  methods: {
    onClickOutside() {
      this.uploadLinksStatus = false;
    },
    gotoLegalEntity() {
      this.$router.push({ path: '/legalEntity' });
    }
  }
};
</script>
<style scoped lang="scss">
.workbook-card {
  width: 1520px;
  margin-bottom: 20px;
}
.entity-title {
  float: left;
  margin-top: 8px;
  font-size: 14px;
  margin-left: 16px;
}
.back-btn {
  float: right;
  margin-top: 8px;
  padding: 0px 20px;
  background-color: #f0f0f0;
  height: 40px;
  border: 1px solid #c0c0c0;
  min-width: 110px;
  margin-right: 16px;
}
.button-click {
  border-radius: 5px;
  border: 2px solid #e5e5e5;
}
.wrapper {
  width: 100%;
  clear: both;
  margin-bottom: 40px;
  margin-top: 16px;
  float: center;
  box-sizing: border-box;
}
.dropzone-and-upload {
  margin: 10px;
  box-sizing: border-box;
  padding: 20px;
  border: 3px solid #c0c0c0;
}
.drop-down {
  margin-left: 10px;
  margin-right: 10px;
  border: 2px solid #e5e5e5;
  letter-spacing: 0.2px;
  color: #656565;
  font-family: NotoSans;
  font-size: 14px;
}
.dropzone.dz-clickable .dz-message {
  cursor: pointer;
  font-size: 14px;
  font-family: Noto Sans Bold;
}
.upload-folder {
  width: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
