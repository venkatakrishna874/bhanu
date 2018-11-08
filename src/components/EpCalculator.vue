<template>
    <div>
        <div class="header-ep">
     <h1>E&P Calculation</h1>
        </div>
        <div class="menubar">
            <a href="" class="menubar-home">Home</a>
            <a href="" class="menubar-EP">E&P Calculator</a>
        </div>
        <div class="pageCenter">
            <button class="btn-refresh">Refresh</button>
            <button class="btn-refresh">Submit</button>
        </div>
        <div class="container-fluid">
            <div class="row first-row">
                <div class="col-4 clearfix">
                    <strong class="float-left">Entity</strong>
                    <div class="float-right pb-2">
                        <select class="EPdropdowndetials"><option></option></select>
                    </div>
                </div>
                <div class="col-3">
                    <input type="text" class="legend-textbox" />
                </div>
                <div class="col-4 clearfix">
                    <div class="float-left pb-2">
                        <input type="text" class="blue-alt-1-textbox" />
                    </div>
                     <strong class="float-right">Automatic flow from PERE</strong>
                </div>
            </div>
             <div class="row">
                <div class="col-4 clearfix">
                    <strong class="float-left">Tax Year</strong>
                    <div class="float-right pb-2">
                        <select class="EPdropdowndetials"><option></option></select>
                    </div>
                </div>
                <div class="col-4 offset-3 clearfix">
                    <div class="float-left pb-2">
                        <input type="text" class="light-yellow-textbox" />
                    </div>
                    <strong class="float-right">Manual Input</strong>
                </div>
            </div>
            <div class="row">
                <div class="col-4 clearfix">
                    <strong class="float-left">Is there a plan of liquidation?</strong>
                    <div class="float-right pb-2">
                        <select class="EPdropdowndetials"><option></option></select>
                    </div>
                </div>

                <div class="col-4  offset-3 clearfix">
                    <div class="float-left pb-2">
                        <input type="text" class="automatic-flow-textbox" />
                    </div>
                    <strong class="float-right">Automatic Calculation</strong>
                </div>
            </div>
            <div class="row first-row">
                <div class="col-12 clearfix">
                     <strong class="float-left">Accumulated Earnings & Profits 1/1/2017</strong>
                      <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 1 </span> Taxable Income</strong>
                   <input type="text" class=" float-right blue-alt-1-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 2 </span>Federal income taxes per books and tax return</strong>
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 3 </span>Excess of capital losses over capital gains</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 4 </span>Depreciation adjustment on earnings and profits (section 312(k))</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Add: Tax Depreciation per SAGE</strong>
                   <input type="text" class=" float-right blue-alt-1-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Subtract: E&P Depreciation per SAGE</strong>
                   <input type="text" class=" float-right blue-alt-1-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 5 </span>Depreciation adjustment on sale of property</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 6 </span>Total Itemized expenses from line 5, Schedule M-1</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Travel and entertainment</strong>
                   <input type="text" class=" float-right blue-alt-1-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Life insurance premium greater than cash surrender value (CVS)</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Nondeductible interest paid for tax-exempt bonds</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Contributions carryover</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Other</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 7 </span>Total itemized income from line, Schedule M-1</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Tax-exempt interest on municipal bonds</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-7 offset-3">
                   <strong class="float-left">Other</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 8 </span>Refund of prior year federal income taxes</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> <span class="number"> 9 </span>Additional Adjustments</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row first-row">
                <div class="col-8 offset-3">
                   <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                  <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                   <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                   <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                   <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                  <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                  <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                   <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-8 offset-3">
                   <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-8 offset-3">
                   <input type="text" class=" float-left yellow-textbox" />
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-12 clearfix">
                     <strong class="float-left">Current Earnings and Profits Available for Distributions</strong>
                      <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Preferred Distributions</strong>
                   <input type="text" class=" float-right blue-alt-1-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Preferred Dividends from Current E&P</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left"> Preferred Dividends from Accumulated E&P</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Preferred ROC</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-12 clearfix">
                     <strong class="float-left">Current E&P Remaining after Preferred Dividends</strong>
                      <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Common Distributions</strong>
                   <input type="text" class=" float-right blue-alt-1-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Adjustments to Distributions</strong>
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Consent Dividends</strong>
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Other Distributions</strong>
                   <input type="text" class=" float-right light-yellow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Total Common Distributions</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Common Dividends from current E&P</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Common Dividends from Accumulated E&P</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-10 offset-2">
                   <strong class="float-left">Common ROC</strong>
                   <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-12 clearfix">
                     <strong class="float-left">Accumulated Earnings & Profits 12/31/2017</strong>
                      <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="dividend">
               <div class="row mt-2">
                <div class="col-10 clearfix">
                     <strong class="float-left">Preferred Dividend</strong>
                      <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-10 clearfix">
                     <strong class="float-left">Common Dividend</strong>
                      <input type="text" class=" float-right automatic-flow-textbox" />
                </div>
            </div> 
            </div>
             <div class="row mt-2">
                <div class="col-4">
                     <strong class="float-left">BreakDown of Common Dividends passed upto shareholders</strong>
                </div>
                <div class="col-2">
                    <strong class="">% owned </strong>
                </div>
            </div>
             <div class="row">
                <div class="col-4">
                    <strong class="float-left">US Core office Holidings LP</strong>
                </div>
                <div class="col-3">
                    <input type="text" class="percentage-textbox" />
                    <span>%</span>
                </div>
                <div class="col-4">
                        <input type="text" class="automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-4">
                    <strong class="float-left">shareholder #2</strong>
                </div>
                <div class="col-3">
                    <input type="text" class="percentage-textbox" /><span>%</span>
                </div>
                <div class="col-4">
                        <input type="text" class="automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-4">
                    <strong class="float-left">shareholder #3</strong>
                </div>
                <div class="col-3">
                    <input type="text" class="percentage-textbox" /><span>%</span>
                </div>
                <div class="col-4">
                        <input type="text" class="automatic-flow-textbox" />
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-4">
                    <strong class="float-left">shareholder #4</strong>
                </div>
                <div class="col-3">
                    <input type="text" class="percentage-textbox" /><span>%</span>
                </div>
                <div class="col-4">
                        <input type="text" class="automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-4">
                    <strong class="float-left">shareholder #5</strong>
                </div>
                <div class="col-3">
                    <input type="text" class="percentage-textbox" /><span>%</span>
                </div>
                <div class="col-4">
                        <input type="text" class="automatic-flow-textbox" />
                </div>
            </div>
             <div class="row mt-1">
                <div class="col-4">
                    <strong class="float-left">shareholder #6</strong>
                </div>
                <div class="col-3">
                    <input type="text" class="percentage-textbox" /><span>%</span>
                </div>
                <div class="col-4">
                        <input type="text" class="automatic-flow-textbox" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pageCenter {
  margin: auto;
}
.pageLeft {
  margin-left: 200px;
  float: left;
}
.header-ep {
  box-sizing: border-box;
  display: flex;
  padding-top: 8px;
  padding-left: 40px;
  margin-bottom: 40px;
}
.shorttextbox {
  background-color: #f0f0f0 !important;
  width: 180px !important;
  border: 0;
  border-radius: 0;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 8px 16px;
}
.menubar {
  height: 100%;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  max-height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  margin-bottom: 40px;
  background-color: #ccc;
}
.EPdropdowndetials {
  background-color: #656565;
  color: #fff;
  width: 200px;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  outline: none !important;
  /* -webkit-box-shadow: none !important; */
  padding: 4px 0px;
}
.btn-refresh {
  margin-top: 8px;
  padding: 0px 20px;
  background-color: #f0f0f0;
  height: 40px;
  border: 1px solid #c0c0c0;
  margin-left: 61px;
}
.dividend {
  background-color: #ccc;
  padding: 20px;
  margin-top: 20px;
}
.menubar-home,
.menubar-EP {
  text-decoration: none;
  color: #007bff;
  margin-left: 10px;
}
.automatic-flow-textbox {
  background-color: #f0f0f0;
  width: 200px;
  border: 0;
  border-radius: 0;
  padding: 4px 0px;
}
.blue-alt-1-textbox {
  background-color: #8cbed6;
  width: 200px;
  border: 0;
  border-radius: 0;
  padding: 4px 0px;
}
.light-yellow-textbox {
  background-color: rgb(255, 242, 127);
  width: 200px;
  border: 0;
  border-radius: 0;
  padding: 4px 0px;
}
.yellow-textbox {
  background-color: rgb(255, 242, 127);
  width: 400px;
  border: 0;
  border-radius: 0;
  padding: 4px 0px;
}
.legend-textbox {
  background-color: #f0f0f0;
  width: 100px;
  border: 0;
  border-radius: 0;
  padding: 4px 0px;
  position: relative;
  right: -17px;
}
.first-row {
  margin-top: 45px;
}
.number {
  margin-right: 25px;
}
.percentage-textbox {
  background-color: #8cbed6;
  width: 70px;
  border: 0;
  border-radius: 0;
  padding: 8px 16px;
}
</style>
