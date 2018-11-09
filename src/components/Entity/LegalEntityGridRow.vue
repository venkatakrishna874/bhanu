<template>
  <tr class="k-master-row" role="row">
    <td class="k-hierarchy-cell" aria-expanded="false">
      <a class="k-icon k-i-expand" href="#" aria-label="Expand" tabindex="-1"></a>
    </td>
    <td>
      <a href="#" v-on:click="getLegalEntityDetails" class="lnklegalentityid">{{templateArgs.legalEntityId}}</a>
    </td>
    <td>{{templateArgs.locatorNumber}}</td>
    <td>{{templateArgs.legalEntityName}}</td>
    <td>{{templateArgs.regionCode}}</td>
    <td>
      <div class='checkmark_circle'></div>
    </td>
    <td>
      <div class='checkmark_circle'></div>
    </td>
    <td>
      <a>
        <img class="excel-img" src="../../assets/excel.png" />
      </a>
    </td>
    <td>
      <select class='dropDownStatusTemplate'>" +
        "<option value='Select'>-Select-</option>" +
        "<option value='NotStarted' selected>Not started</option>" +
        "<option value='InProcess'>In process</option>" +
        "<option value='Submitted'>Submitted</option>" +
        "<option value='Approved'>Approved</option>" +
        "</select>
    </td>
    <td>
      <img class="ey-summary" src="../../assets/ey-summary.jpg">
    </td>
    <td>{{templateArgs.lastAllocationDate}}</td>
    <td>
      <select class='dropDownActionTemplate' @change="onChange">
        <option value='UploadTaxWorkpaper'>Upload Tax Workpaper </option>
        <option value='AllocateOnly'>Allocate Only</option>
        <option value='AllocateAndTier' selected>Allocate and Tier</option>
      </select>
    </td>
    <!-- <td>
      <div v-if="templateArgs.legalEntityWorkFlowStatus == 'Completed'">
        <span class="checkmark" style="float:left;">
          <div class="checkmark_circle"></div>
          <div class="checkmark_stem"></div>
          <div class="checkmark_kick"></div>
        </span>
      </div>
      <div v-else-if="templateArgs.legalEntityWorkFlowStatus == 'Not Started'">
        <span class="dot" style="float:left;"></span>
      </div>
      <div v-else-if="templateArgs.legalEntityWorkFlowStatus == 'Error'">
        <span class="errordot" style="float:left;">X</span>
      </div>
      <span class="status"> {{templateArgs.legalEntityStatus}}</span>
    </td> -->
    <!-- <td>{{templateArgs.legalEntityDueDate | moment("MM/DD/YYYY")}}</td> -->
    <!-- <td>
      <select v-model="selected" @change="onChange()" class="dropdown">
        <option value="Action">- Actions -</option>
        <option value="UW">Upload WorkBook</option>
        <option value="STI">Save Taxable Income</option>
        <option value="ALC">Allocate</option>
        <option value="TR">Tier</option>
      </select>
    </td> -->
    <legal-entity-details v-show="isModalVisible" @close="closeModal" />
  </tr>
</template>
<script>
import LegalEntityDetails from './LegalEntityDetails.vue';

export default {
  name: 'legal-entity-grid-row',
  components: {
    LegalEntityDetails
  },
  data() {
    return {
      selected: 'Action',
      isModalVisible: false,
      templateArgs: {},
      items: [
        { text: 'Item 1', value: { foo: 'item', bar: 2 } },
        { text: 'Item 2', value: { foo: 'test', bar: 42 } },
        { text: 'Item 3', value: { foo: 'foobar', bar: 4 } }
      ]
    };
  },
  computed: {},
  methods: {
    getLegalEntityDetails() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    onChange(event) {
      if (event.target.value === 'UploadTaxWorkpaper') {
        this.templateArgs.parentComponent.$router.push('/WorkbookUpload');
      }
      // const link = this.selected;
      // if (link === 'TB') {
      //   window.location.replace('/UploadtrialBalance#/WorkbookUpload');
      // } else if (link === 'Dep') {
      //   window.location.replace('/UploadtrialBalance#/WorkbookUpload');
      // }
      // switch (link) {
      //   case 'UW':
      //     window.location.replace('/UploadtrialBalance#/WorkbookUpload');
      //     break;
      //   case 'STI':
      //     break;
      //   case 'SW':
      //     break;
      //   case 'ALC':
      //     break;
      //   case 'TR':
      //     break;
      //   default:
      //     break;
      // }
    }
  }
};
</script>
<style scoped lang="scss">
select.dropdown {
  background-color: #c0c0c0;
  color: #4a4a4a;
  width: 80%;
  float: left;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
}

.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.status {
  margin-left: 13px;
  vertical-align: -webkit-baseline-middle;
}
.excel-img {
  height: 20px;
  width: 20px;
}
.ey-summary {
  height: 30px;
  width: 30px;
}
.checkmark_circle {
  width: 18px;
  height: 18px;
  background-color: green;
  border-radius: 11px;
  position: relative;
  left: 44px;
}
.dropDownStatusTemplate {
  color: #4a4a4a;
  width: 100px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
</style>
