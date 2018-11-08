<template>
    <div>
        <div class="dropdown-report">
           <div style="margin-left:10px"><label class="lbl-report">Report:</label></div>
            <div>
                <select class="dropdown-income">
                    <option value="Action">- Select -</option>
                    <option value="TB" selected>Taxable Income Summary</option>
                     <option value="TB">EY Tax Report</option>
                </select>
            </div>
            <div style="margin-left:16px,margin-right:16px"><label class="lbl-report">Legal Entity:</label></div>
            <div style="margin-right:16px">
                <select class="dropdown-entity">
                    <option value="Action">- Select -</option>
                    <option value="TB">WEST 42 ACQUISITION </option>
                    <option value="TB">WEST 42 HOLDINGS</option>
                    <option value="TB" selected>11 WEST 42 LP</option>
                    <option value="TB">WEST 42 LIMITED </option>
                    <option value="TB">ASSOCIATES, L.P.</option>
                </select>
            </div>
            <div style="margin-left:10px"><label class="lbl-report">Tax Year:</label></div>
            <div>
                <select v-model="selectedyear" class="dropdown-year">
                    <option value="Action">2018</option>
                    <option value="TB">2017</option>
                    <option value="TB">2016</option>
                </select>
            </div>
            <div class="btn-report">
                <button class="generate-btn" @click="generateReport()"> Generate Report </button>
            </div>
            <div style="padding-right:23px">
                <button class="export-btn" @click="exportExcel()"><img class="excel-icon" src="../../assets/excel.png"  /><span>Export to Excel </span></button>
            </div>
        </div>
        <div class="report-grid">
            <kendo-datasource 
                ref="localDataSource"
                :schema-data="'result'"
                :page-size='5'
                :schema-total="'total'">
            </kendo-datasource>
            <kendo-grid id="reportsID"
                :pageable-always-visible="true"
                :data-source="localDataSource"
                :excel-file-name="'Kendo UI Grid Export.xlsx'"
                :page-size='5'
                :excel-filterable="true"
                :pageable-page-sizes="[5, 10, 20, 100]">
                <kendo-grid-column 
                    :field="'entityId'"
                    :title="'Account Number'"
                    width="150px"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'eyAccountDescription'"
                    :title="'Account Description'"
                    width="200px"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'book'"
                    :title="'Book Amount'"
                    width="150px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'autoAdjustment'"
                    :title="'Book Adjustment'"
                   width="150px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'manualAdjustment'"
                    :title="'Adjusted Book'"
                    width="150px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'cumulativetax'"
                    :title="'Cumulative Tax Adjustment'"
                    width="150px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'Currenttax'"
                    :title="'Current Tax Adjustment'"
                    width="200px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'taxReclass'"
                    :title="'Tax Reclass'"
                    width="150px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'taxIncome'"
                    :title="'Taxable Income'"
                    width="150px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
                <kendo-grid-column 
                    :field="'taxUSD'"
                    :title="'USD(or,converted currency)'"
                    width="150px"
                    :attributes='{"class":"report-grid"}'
                    :format="'{0:n2}'"></kendo-grid-column>
            </kendo-grid>
        </div>
    </div>
</template>

<script>
export default {
  name: 'template1',
  data() {
    return {
      selectedreport: 'Action',
      selectedentity: 'Action',
      selectedyear: 'Action',
      localDataSource: [
        {
          entityId: '670200',
          eyAccountDescription: 'Depreciation Exp - Building',
          book: '128,496',
          autoAdjustment: '0',
          manualAdjustment: '128,496',
          cumulativetax: '0',
          Currenttax: '-',
          taxReclass: '1000',
          taxIncome: '129,496',
          taxUSD: '129,496'
        },
        {
          entityId: '670221',
          eyAccountDescription: 'Depreciation Exp - Equipment',
          book: '1,901',
          autoAdjustment: '0',
          manualAdjustment: '1,901',
          cumulativetax: '0',
          Currenttax: '-',
          taxReclass: '0',
          taxIncome: '1,901',
          taxUSD: '1,901'
        },
        {
          entityId: '670230',
          eyAccountDescription: 'Depreciation Exp - Building Improvements',
          book: '1,107,330',
          autoAdjustment: '0',
          manualAdjustment: '1,107,330',
          cumulativetax: '0',
          Currenttax: '-',
          taxReclass: '-1000',
          taxIncome: '1,106,330',
          taxUSD: '1,106,330'
        },
        {
          entityId: '205200',
          eyAccountDescription: 'Prepaid Rental Income',
          book: '(1,230,737)',
          autoAdjustment: '0',
          manualAdjustment: '(1,230,737)',
          cumulativetax: '1,466,086',
          Currenttax: '235,348',
          taxReclass: '-',
          taxIncome: '(995,389)',
          taxUSD: '(995,389)'
        },
        {
          entityId: '400100',
          eyAccountDescription: 'Base Rental Income',
          book: '(46,384,809)',
          autoAdjustment: '0',
          manualAdjustment: '(46,384,809)',
          cumulativetax: '0',
          Currenttax: '(235,348)',
          taxReclass: '0',
          taxIncome: '(46,620,158)',
          taxUSD: '(46,620,158)'
        }
      ]
    };
  },
  methods: {
    generateReport() {},
    exportExcel() {
      var grid = this.$refs.grid.kendoWidget();
      grid.saveAsExcel();
    }
  }
};
</script>
<style lang="scss">
.vue-app_new {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 16px;
}

.k-grid-content {
  overflow-y: hidden;
}
.k-grid-header {
  padding-right: 0px !important;
}
tr:nth-child(odd) td {
  background: #ffffff;
}
tr:nth-child(even) td {
  background: #ffffff;
}
.k-grid td,
.k-grid th {
  border-bottom-width: 3px !important;
  border-style: solid !important;
  border-left-style: hidden !important;
}
.k-widget {
  border-style: hidden !important;
}
.k-grid-header-wrap {
  border-right-style: hidden !important;
}
.k-grid-header .k-header {
  text-align: center;
}
#reportsID td:nth-child(-n + 2) {
  text-align: left !important;
}
#reportsID td:nth-child(n + 3) {
  text-align: right !important;
}
.report-grid {
  text-align: right !important;
}
#reportsID.k-grid table[role='grid'] th.k-header {
  overflow-wrap: break-word;
  white-space: normal;
}
</style>
<style scoped lang="scss">
.dropdown-report {
  height: 100%;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  max-height: 100%;
  align-content: center;
  align-items: center;
  padding-top: 8px;
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: 40px;
}
.dropdown-income {
  background-color: #f0f0f0;
  color: #4a4a4a;
  width: 250px;
  float: left;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
  height: 40px !important;
}
.dropdown-entity {
  background-color: #f0f0f0;
  color: #4a4a4a;
  width: 250px;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
  height: 40px !important;
}
.dropdown-year {
  background-color: #f0f0f0;
  color: #4a4a4a;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
  height: 40px !important;
}
.export-btn,
.generate-btn {
  padding: 0px 20px;
  color: #000000;
  height: 40px;
  border: 1px solid #c0c0c0;
  min-width: 110px;
}
.report-grid {
  height: auto;
  margin-top: 16px;
  padding-right: 40px !important;
  margin-left: 40px !important;
  margin-bottom: 40px !important;
}
.lbl-report {
  font-weight: bold !important;
  margin-right: 16px;
  margin-left: 16px;
}
.k-grid-header {
  font-family: Noto Sans;
  font-size: 14px;
  padding-right: 0px !important;
}
.k-grid-header-wrap table {
  margin-bottom: -1px;
}
.k-widgetreport {
  font-family: Noto Sans;
  font-size: 12px;
}
.k-grid-header .k-header {
  font-weight: bold;
  font-size: 14px;
  font-family: Noto Sans Bold, sans-serif;
}
.excel-icon {
  height: 18px;
  position: relative;
  top: 3px;
  right: 3px;
}
.btn-report {
  margin-right: 16px;
  margin-left: auto;
}
</style>
