<template>
    <div>
        <div>
            <v-form>
                <v-container :fluid="true">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3>
                            <v-text-field label="Search">
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form> 
            <div id="vueapp" class="vue-app">
                <kendo-datasource ref="localDataSource"
                    :page-size="5"
                    :schema-data="'result'"
                    :schema-total="'total'"
                    :transport="customtransport"
                    :sortable="true">
                </kendo-datasource>
                <kendo-grid ref="grid" id="entityGrid"
                    :data-source-ref="'localDataSource'"
                    :row-template="getLegalEntityGridRowTemplate"
                    :filterable-extra="false"
                    :sortable="true"
                    :pageable-always-visible="true"
                    :page-size='5'
                    :pageable-page-sizes="[5, 10, 20, 100]"
                    v-on:detailinit="detailInit"
                    >
                    <kendo-grid-column title="Entity ID" width="130px" :field="'legalEntityId'" ></kendo-grid-column>
                    <kendo-grid-column title="Locator Number" width="130px" :field="'locatorNumber'"></kendo-grid-column>
                    <kendo-grid-column title="Entity Name" width="300px" :field="'legalEntityName'" :attributes='{"class":"legalEntityName"}'></kendo-grid-column>
                    <kendo-grid-column title="Region" width="120px" :field="'regionCode'"></kendo-grid-column>
                    <kendo-grid-column title="Trial Balance" width="130px" :filterable="false" ></kendo-grid-column>
                    <kendo-grid-column title="Automatic Adjustments " width="125px" :filterable="false" ></kendo-grid-column>
                    <kendo-grid-column title="Manual Adjustments" width="125px" ></kendo-grid-column>
                    <kendo-grid-column title="Status" width="125px" ></kendo-grid-column>
                    <kendo-grid-column title="Taxable Income Summary" width="130px"  ></kendo-grid-column>
                    <kendo-grid-column title="Last Allocation" width="150px" :field="'lastAllocationDate'" :filterable="false" ></kendo-grid-column>
                    <kendo-grid-column title="Actions" width="250px" :filterable="false" ></kendo-grid-column>
                </kendo-grid>
            </div>
        </div>
        <modal v-show="isModalVisible" @close="closeModal" />
    </div>
</template>

<script>
import modal from './LegalEntityDetails.vue';
import Vue from 'vue';
import LegalEntityGridRow from './LegalEntityGridRow.vue';
import $ from 'jquery';
export default {
  data() {
    return {
      isModalVisible: false,
      linkTemplate: '',
      dropDownTemplate: '',
      customtransport: {
        read: {
          url: 'http://localhost:8080/legalEntityData.json'
        }
      }
    };
  },
  components: {
    modal
  },
  methods: {
    ShowWorkBook() {
      alert('OK Man');
    },
    closeModal() {
      this.isModalVisible = false;
    },
    getLinkTemplate: function() {
      var app = this;
      this.linkTemplate = "<a class='linkLegalEntity'>#:legalEntityId#</a>";
      $(document).on('click', '.linkLegalEntity', function() {
        app.isModalVisible = true;
      });

      return this.linkTemplate;
    },
    getStatusTemplate: function() {
      return (
        "<select class='dropDownStatusTemplate'>" +
        "<option value='Select'>-Select-</option>" +
        "<option value='NotStarted' selected >Not started</option>" +
        "<option value='InProcess'>In process</option>" +
        "<option value='Submitted'>Submitted</option>" +
        "<option value='Approved'>Approved</option>" +
        '</select>'
      );
    },
    getDropDownTemplate: function() {
      this.dropDownTemplate =
        "<select class='dropDownActionTemplate'>" +
        "<option value='UploadTaxWorkpaper'>Upload Tax Workpaper </option>" +
        "<option value='AllocateOnly'>Allocate Only</option>" +
        "<option value='AllocateAndTier' selected>Allocate and Tier</option>" +
        '</select>';
      $('.dropDownActionTemplate').on('change', function() {
        if (this.value == 'UploadTaxWorkpaper') {
          window.location = '/UploadtrialBalance#/WorkbookUpload';
        } else if (this.value != 'Action') {
          alert('Option Selected: ' + this.value);
        }
      });
      return this.dropDownTemplate;
    },
    getTaxWorkPaperTemplate() {
      return `<img class='excel-image' onclick="window.open('ms-excel:ofe|u|http://localhost/urlFiles/B01 - 2017_4Q_11W42 LP_Tax_Template_Workpaper_Domestic_EY RIA STEPUP 2.2....xlsm', '_blank')" src='../../assets/excel.png'/>`;
    },
    getCheckCircleTemplate() {
      return "<div class='checkmark_circle'></div>";
    },
    getTaxableIncomeSummaryTemplate() {
      return '<img src="../../assets/L_EBA9tmp.png">';
    },
    getLastAllocationTemplate() {
      return "#= kendo.toString(kendo.parseDate(lastAllocationDate, 'yyyy-MM-dd'), 'MM/dd/yyyy hh:mm') #";
    },
    getLegalEntityGridRowTemplate(value) {
      return {
        template: Vue.component(LegalEntityGridRow.name, LegalEntityGridRow),
        templateArgs: Object.assign({}, value, {
          parentComponent: this.$refs.grid
        })
      };
    },
    detailInit: function(e) {
      $(
        "<div class='child-grid' id='childgrid'>Lower Tier Entities</div>"
      ).appendTo(e.detailCell);
      $('<div />')
        .appendTo(e.detailCell)
        .kendoGrid({
          dataSource: {
            transport: {
              read: 'http://localhost:8080/legalEntityData.json'
            },
            filter: {
              field: 'parentLEID',
              operator: 'eq',
              value: e.data.legalEntityId
            },
            schema: {
              data: function(response) {
                return response.result;
              }
            }
          },
          scrollable: true,
          columns: [
            {
              field: 'legalEntityId',
              title: 'Entity ID',
              width: '130px',
              template: this.getLinkTemplate()
            },
            {
              title: 'Locator Number',
              width: '130px'
            },
            {
              field: 'legalEntityName',
              title: 'Entity Name',
              attributes: { class: 'entityname' },
              width: '300px'
            },
            {
              field: 'RegionCodeName',
              title: 'Region',
              width: '130px'
            },
            {
              title: 'Manual Adjustment',
              width: '130px'
            },
            {
              title: 'Taxable income Summary',
              width: '125px'
            },
            {
              title: 'Status',
              width: '125px'
            },
            {
              title: 'Tax Trial Balance',
              width: '125px'
            },
            {
              title: 'Automatic Adjustments',
              width: '130px'
            },
            {
              title: 'Time of Allocation',
              field: 'CreatedDate',
              width: '130px'
            },
            {
              title: 'Actions',
              width: '250px'
            }
          ]
        });
    }
  }
};
</script>

<style lang="scss">
.k-grid-header .k-header {
  font-weight: normal !important;
  font-size: 14px;
  font-family: Noto Sans Bold, sans-serif;
  background-color: #ffffff;
}

.k-header {
  text-align: center !important;
}

.k-block ::selection,
.k-panel ::selection,
.k-widget ::selection {
  background-color: #ffffff;
  color: #c0c0c0;
}

.k-detail-row .k-grid .k-header {
  display: none !important;
}

.k-grid td,
.k-grid th {
  border-style: none !important;
}

.child-grid {
  text-align: left;
}

.k-widget {
  border-style: none !important;
}

.k-grid-content {
  overflow-y: hidden !important;
}

.k-grid-header {
  padding-right: 0px !important;
}
.k-list .k-item.k-state-selected,
.k-list .k-item:hover.k-state-selected {
  color: #f0f0f0;
  background-color: #c0c0c0;
}

.k-grid td:focus,
.k-grid th:focus {
  background-color: #999999;
}

.k-pager-numbers .k-link,
.k-pager-numbers .k-link:link {
  color: #4a4a4a;
}

#entityGrid .entityname {
  text-align: left !important;
}

.k-pager-wrap .k-state-selected {
  color: #999999 !important;
  background-color: #f0f0f0 !important;
}

.k-pager-wrap .k-state-selected:hover {
  background-color: #f0f0f0 !important;
}
#entityGrid td:nth-child(4) {
  text-align: left !important;
}

#entityGrid td:nth-child(-n + 3) {
  text-align: center;
}

#entityGrid td:nth-child(n + 5) {
  text-align: center !important;
}

.checkmark_circle {
  width: 18px;
  height: 18px;
  background-color: green;
  border-radius: 11px;
  position: relative;
  left: 44px;
}

#entityGrid .k-grid-header-wrap.k-auto-scrollable {
  border-top: 3px solid #f0f0f0;
}

.k-detail-cell {
  padding-left: 0px !important;
}

#entityGrid html {
  overflow-y: hidden !important;
}
#entityGrid.k-grid table[role='grid'] th.k-header {
  overflow-wrap: break-word;
  white-space: normal;
}
</style>

<style scoped lang="scss">
.vue-app {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 16px;
  height: auto;
}

.v-input__slot {
  margin-left: 40px;
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

.dropDownActionTemplate {
  color: #4a4a4a;
  width: 150px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.linkLegalEntity {
  text-decoration: underline !important;
  color: blue !important;
  cursor: pointer;
  text-align: center;
}

img.excel-image {
  cursor: pointer;
  height: 21px;
  text-align: center !important;
}
</style>
