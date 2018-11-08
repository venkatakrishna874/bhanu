<template>
  <tr class="k-master-row" role="row">
    <td class="k-hierarchy-cell" aria-expanded="false"><a class="k-icon k-i-expand" href="#" aria-label="Expand" tabindex="-1"></a></td>
    <td><a href="#" v-on:click="getLegalEntityDetails" class="lnklegalentityid">{{templateArgs.legalEntityId}}</a></td>
    <td>{{templateArgs.legalEntityName}}</td>
    <td>{{templateArgs.legalEntityRegion}}</td>
    <td>
      <a>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIKICAgICB2aWV3Qm94PSIwIDAgNDggNDgiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDsiPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggc3R5bGU9IiBmaWxsOiM0Q0FGNTA7IiBkPSJNIDQxIDEwIEwgMjUgMTAgTCAyNSAzOCBMIDQxIDM4IEMgNDEuNTU0Njg4IDM4IDQyIDM3LjU1NDY4OCA0MiAzNyBMIDQyIDExIEMgNDIgMTAuNDQ1MzEzIDQxLjU1NDY4OCAxMCA0MSAxMCBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAzMiAxNSBMIDM5IDE1IEwgMzkgMTggTCAzMiAxOCBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAzMiAyNSBMIDM5IDI1IEwgMzkgMjggTCAzMiAyOCBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAzMiAzMCBMIDM5IDMwIEwgMzkgMzMgTCAzMiAzMyBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAzMiAyMCBMIDM5IDIwIEwgMzkgMjMgTCAzMiAyMyBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNSAxNSBMIDMwIDE1IEwgMzAgMTggTCAyNSAxOCBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNSAyNSBMIDMwIDI1IEwgMzAgMjggTCAyNSAyOCBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNSAzMCBMIDMwIDMwIEwgMzAgMzMgTCAyNSAzMyBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNSAyMCBMIDMwIDIwIEwgMzAgMjMgTCAyNSAyMyBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojMkU3RDMyOyIgZD0iTSAyNyA0MiBMIDYgMzggTCA2IDEwIEwgMjcgNiBaICI+PC9wYXRoPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAxOS4xMjg5MDYgMzEgTCAxNi43MTg3NSAyNi40Mzc1IEMgMTYuNjI1IDI2LjI2OTUzMSAxNi41MzEyNSAyNS45NTcwMzEgMTYuNDMzNTk0IDI1LjUgTCAxNi4zOTg0MzggMjUuNSBDIDE2LjM1MTU2MyAyNS43MTQ4NDQgMTYuMjQyMTg4IDI2LjA0Mjk2OSAxNi4wNzQyMTkgMjYuNDgwNDY5IEwgMTMuNjUyMzQ0IDMxIEwgOS44OTQ1MzEgMzEgTCAxNC4zNTU0NjkgMjQgTCAxMC4yNzM0MzggMTcgTCAxNC4xMDkzNzUgMTcgTCAxNi4xMTMyODEgMjEuMTk1MzEzIEMgMTYuMjY5NTMxIDIxLjUyNzM0NCAxNi40MDYyNSAyMS45MjE4NzUgMTYuNTMxMjUgMjIuMzc1IEwgMTYuNTcwMzEzIDIyLjM3NSBDIDE2LjY0ODQzOCAyMi4xMDU0NjkgMTYuNzk2ODc1IDIxLjY5NTMxMyAxNy4wMTE3MTkgMjEuMTU2MjUgTCAxOS4yMzgyODEgMTcgTCAyMi43NTM5MDYgMTcgTCAxOC41NTQ2ODggMjMuOTM3NSBMIDIyLjg2NzE4OCAzMC45OTYwOTQgTCAxOS4xMjg5MDYgMzAuOTk2MDk0IFogIj48L3BhdGg+PC9nPjwvc3ZnPg=="/>
        </a>
        </td>
    <td>
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
    </td>
    <td>{{templateArgs.legalEntityDueDate | moment("MM/DD/YYYY")}}</td>
    <td>
      <select v-model="selected" @change="onChange()" class="dropdown">
        <option value="Action">- Actions -</option>
        <option value="UW">Upload WorkBook</option>
        <option value="STI">Save Taxable Income</option>
        <option value="ALC">Allocate</option>
        <option value="TR">Tier</option>
      </select>
    </td>
    <modal v-show="isModalVisible" @close="closeModal"/>
  </tr>
</template>
<script>
export default {
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
  methods: {
    getLegalEntityDetails() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    onChange() {
      const link = this.selected;
      if (link === 'TB') {
        window.location.replace('/UploadtrialBalance#/WorkbookUpload');
      } else if (link === 'Dep') {
        window.location.replace('/UploadtrialBalance#/WorkbookUpload');
      }
      switch (link) {
        case 'UW':
          window.location.replace('/UploadtrialBalance#/WorkbookUpload');
          break;
        case 'STI':
          break;
        case 'SW':
          break;
        case 'ALC':
          break;
        case 'TR':
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style>
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
</style>
