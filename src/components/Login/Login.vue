<template>
    <div>
        <div style="width: 95%; display: table; padding-top: 50px; padding-bottom:-20px">
            <div>
                <div style="display: table-row">
                    <div style="display: table-cell; width:250px">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>User Name:</strong></div>
                    </div>
                </div>
                <div style="display: table-row">
                    <div style="display: table-cell; width:250px">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px"><input type="text" class="widetextbox" /></div>
                    </div>
                </div>
                <div style="display: table-row">
                    <div style="display: table-cell; width:250px">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px"><strong>Password:</strong></div>
                    </div>
                </div>
                <div style="display: table-row">
                    <div style="display: table-cell; width:250px">
                        <div style="float: left; padding-left: 50px; padding-bottom:10px"><input type="text" class="widetextbox" /></div>
                    </div>
                </div>
            </div>
            <div style="padding-left: 280px;">
                <div style="display: table-row;">
                    <div style="display: table-cell; width:250px">
                        <div style="padding-bottom:10px"><v-btn class="nav-link btn-primary" v-on:click.native="login">Login</v-btn></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  methods: {
    hideTemplate() {
      this.$parent.showTemplate = true;
    },
    login: function() {
      axios({
        method: 'post',
        url: 'http://localhost:63219/RECalc/API/api/Security/Login',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(response => {
        this.loginSuccessful(response.data.access_token);
      });
    },

    loginSuccessful(req) {
      localStorage.token = req;
      this.$parent.showTemplate = true;
      this.$router.push('/HomePage');
    }
  },
  beforeMount() {
    this.hideTemplate();
  }
};
</script>

<style>
.shorttextbox {
  background-color: #f0f0f0 !important;
  width: 180px !important;
  border: 1px solid #c0c0c0;
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

.btn-primary {
  height: 40px;
  border-radius: 0;
  border: none;
  box-shadow: none !important;
  transition: none;
  font-size: 14px;
  min-width: 110px;
  padding-left: 20px;
  padding-right: 20px;
  background: #ffe600 !important;
  color: #000000 !important;
  border: 1px solid #ffe600;
}
.btn-primary:hover {
  border-color: #007bff;
  background: #ffe600;
}

.one-line {
  height: 100%;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  max-height: 100%;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
}
</style>
