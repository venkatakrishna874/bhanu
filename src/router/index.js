import Vue from 'vue';
import Router from 'vue-router';
import LegalEntity from '../components/Entity/LegalEntity.vue';
import Reports from '../components/Reports/Reports.vue';
import PartnerAllocations from '../components/PartnerAllocations/PartnerAllocations.vue';
import WorkbookUpload from '../components/WorkbookUpload.vue';
import Configuration from '../components/Configurations/Configuration.vue';
import LegalentityDetails from '../components/Entity/LegalEntityDetails.vue';
import AdminPage from '../components/Admin/Admin.vue';
import LoginPage from '../components/Login/Login.vue';
import Home from '../components/Home/Home.vue';
import PartnerDetails from '../components/PartnerAllocations/PartnerDetails.vue';
import EpCalculator from '../components/EpCalculator.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/PartnerDetails',
      name: 'PartnerDetails',
      component: PartnerDetails
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/EpCalculator',
      name: 'EpCalculator',
      component: EpCalculator
    },
    {
      path: '/PartnerAllocations',
      name: 'Partner Allocations',
      component: PartnerAllocations
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: Reports,
      children: [
        {
          path: '/EpCalculator',
          name: 'EpCalculator',
          component: EpCalculator
        }
      ]
    },
    {
      path: '/Configuration',
      name: 'Configuration',
      component: Configuration
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: AdminPage
    },
    {
      path: '/LegalentityDetails',
      name: 'LegalentityDetails',
      component: LegalentityDetails
    },
    {
      path: '/WorkbookUpload',
      name: 'WorkbookUpload',
      component: WorkbookUpload
    },
    {
      path: '/legalEntity',
      name: 'LegalEntity',
      component: LegalEntity
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
