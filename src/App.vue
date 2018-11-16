<template>
    <div class="site">
        <header class="header">
            <div class="header-title-container">
                <img src='./assets/ey-logo.svg' alt="EY" height="42" width="42">
                TaxSpace - Real Estate | Tishman-Speyer 
            </div>
            <div v-if="showTemplate">
                <div  class="header-nav">
                    <nav>
                        <div id="navbarSupportedContent">
                            <ul class="ey-navbar-nav">
                                <li class="ey-nav-item">
                                    <router-link class="ey-nav-link" to="/Home" exact>Home</router-link>
                                </li>
                                <li class="ey-nav-item">
                                    <router-link class="ey-nav-link" to="/LegalEntity" exact>Entity</router-link>
                                </li>
                                <li class="ey-nav-item">
                                    <router-link class="ey-nav-link" to="/PartnerAllocations" exact>Partner Allocations</router-link>
                                </li>
                                <li class="ey-nav-item">
                                    <router-link class="ey-nav-link" to="/ReportsHome">Reports</router-link>
                                </li>
                                <li class="ey-nav-item">
                                    <router-link class="ey-nav-link" to="/Configuration" exact>Configuration</router-link>
                                </li>
                                <li class="ey-nav-item">
                                    <router-link class="ey-nav-link" to="/Admin" exact>Admin</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="user">
                        <span>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        Manish Boaddh | EY TTT
                        </span>
                    </div>
                </div>
                <sub-nav v-if="hasSubNav" :config="activeNavItem.subNav" ></sub-nav>
            </div>
        </header>
        <main class="site-content">
            <div id="app">
                <router-view />
            </div>
        </main>
        <footer class="footer">
            <span class="footer-logo"><img src='./assets/ey-logo.svg' alt="EY"></span>
            <div class="footer-text"><p>&#169;{{ new Date().getFullYear() }} Ernst & Young LLP | All Rights Reserved. | content within this application is confidential and meant for EY<br> staff and EY clients only. Please review the <a class="privacy-link" href="">Privacy statement</a> and<a href="" class="privacy-link"> Master Agreement</a> for Additional refernces</p></div>
        </footer>
    </div>
</template>
<script>
import SubNav from './components/Shared/SubNav.vue';
import { EyNavBarConfig } from './components/Shared/EYNavBarConfig';

export default {
  name: 'App',
  components: {
    SubNav
  },
  data() {
    return {
      isAddButtonDisabled: true,
      showTemplate: true,
      activeNavItem: [],
      navBarConfig: []
    };
  },
  created() {
    this.navBarConfig = this.getNavBarConfig();
    this.updateActiveNavItem();
  },
  computed: {
    disabledClass: () => (this.isAddButtonDisabled ? 'disabled' : ''),
    hasSubNav: function() {
      if (this.activeNavItem.subNav && this.activeNavItem) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    $route: 'updateActiveNavItem'
  },
  methods: {
    updateActiveNavItem() {
      this.activeNavItem = this.navBarConfig.find(item => {
        if (item.subNav && item.subNav.length) {
          return item.subNav.find(subItem => {
            return subItem.route === this.$route.fullPath;
          });
        } else {
          return item.route === this.$route.fullPath;
        }
      });
    },
    getNavBarConfig() {
      this.navBarConfig = [
        new EyNavBarConfig('/Home', 'Home'),
        new EyNavBarConfig('/LegalEntity', 'Entity'),
        new EyNavBarConfig('/PartnerAllocations', 'Partner Allocations'),
        new EyNavBarConfig('/ReportsHome', 'Reports', [
          new EyNavBarConfig('/ReportsHome/Reports', ''),
          new EyNavBarConfig('/ReportsHome/EpCalculator', 'E&P Calculator')
        ]),
        new EyNavBarConfig('/Configuration', 'Configuration'),
        new EyNavBarConfig('/Admin', 'Admin')
      ];
      return this.navBarConfig;
    }
  }
};
</script>
<style scoped lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
html,
body {
  font-family: 'Noto Sans';
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header.header {
  width: 100%;
  min-height: 150px;
  background: #343a40;
  color: #ffffff;
}

.header-nav {
  height: 100%;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  max-height: 100%;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-left: 40px;
  margin-top: 32px;
  font-weight: 400;
  width: 100%;
}

.header-title-container {
  font-size: 22px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  padding-top: 32px;
}

.ey-nav-link {
  text-decoration: none;
  color: inherit;
  font-size: 14px;
}
.ey-nav-link:hover {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  color: #ffe600;
  box-shadow: inset 0 -4px 0 #ffe600;
}

ul.ey-navbar-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #343a40;
}

li.ey-nav-item {
  float: left;
}

li a {
  display: block;
  text-align: center;
  padding: 0 20px 20px 20px;
  color: #ffffff;
  text-decoration: none;
}

.user {
  position: relative;
  cursor: default;
  margin-right: 48px;
  float: right;
}

.site-content {
  flex: 1;
  margin-bottom: 40px;
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

footer.footer {
  background: #333333;
  color: #ffffff;
  height: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  text-align: center;
}

.footer-text {
  padding-top: 32px;
}

.footer-logo {
  height: 42px;
  width: 42px;
}

.privacy-link {
  color: #ffe600;
}

.disabled {
  pointer-events: none;
  opacity: 0.6;
}

select {
  -webkit-appearance: menulist !important;
  -moz-appearance: menulist !important;
}
nav.navbar {
  float: left;
}
</style>
