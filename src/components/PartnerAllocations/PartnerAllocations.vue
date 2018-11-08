<template>
 <div>
        <div>
            <v-form>
                <v-container :fluid="true">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3>
                            <v-text-field label="Search">
                            </v-text-field>
                            <button class="back-btn" @click="gotoPartnerDetails()"> partner details</button>
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
                <kendo-grid ref="grid" id="partnergrid"
                    :data-source-ref="'localDataSource'"
                    :filterable-extra="false"
                    :sortable="true"
                    :pageable-always-visible="true"
                    :page-size='5'
                    :pageable-page-sizes="[5, 10, 20, 100]">
                    <kendo-grid-column title="Entity ID" width="130px" :field="'legalEntityId'"></kendo-grid-column>
                    <kendo-grid-column title="Entity Name" width="300px" :field="'legalEntityName'"></kendo-grid-column>
                    <kendo-grid-column title="Entity Type" width="130px"></kendo-grid-column>
                    <kendo-grid-column title="Partner ID" width="130px" :filterable="false" ></kendo-grid-column>
                    <kendo-grid-column title="Partner Name " width="125px" :filterable="false"></kendo-grid-column>
                    <kendo-grid-column title="Partner Type " width="125px"></kendo-grid-column>
                    <kendo-grid-column title="county" width="125px"></kendo-grid-column>
                    <kendo-grid-column title="Residency" width="130px"></kendo-grid-column>
                </kendo-grid>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
      linkTemplate: '',
      dropDownTemplate: '',
      customtransport: {
        read: {
          url: 'http://localhost:63219/Recalc/API/LegalEntityView/GetAsync'
        }
      }
    };
  },
  methods: {
    gotoPartnerDetails() {
      this.$router.push({ path: '/EpCalculator' });
    }
  }
};
</script>

<style>
.Partner-app {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 16px;
  height: auto;
}
</style>
