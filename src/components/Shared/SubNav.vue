<template>
<nav class="navbar navbar-expand-lg navbar-dark subnavbar">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-subnav">
            <li class="ey-sub-nav-item" v-for="(subNavItem, index) in config" :key="index">
                 <router-link class="ey-sub-nav-link" :to="subNavItem.route" >{{subNavItem.label}}</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>
<script>
export default {
  props: ['config']
};
</script>
<style>
.subnavbar .collapse.navbar-collapse {
  padding-top: 20px;
}
.subnavbar {
  background: #4a4a4a;
  /* margin-right: -40px; */
  margin-left: -13px;
  padding: 0 40px !important;
  width: 100vw;
}
.navbar-subnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #4a4a4a;
}
</style>
