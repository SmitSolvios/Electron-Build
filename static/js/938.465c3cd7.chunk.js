"use strict";(self.webpackChunkbotiga_frontend=self.webpackChunkbotiga_frontend||[]).push([[938],{4938:function(e,s,r){r.r(s),r.d(s,{default:function(){return z}});var a=r(4165),t=r(5861),c=r(4942),d=r(2982),l=r(1413),n=r(885),i=r(2791),o=r(5228),m=r(3896),h=r(4554),u=r(3805),x=r(978),p=r(184),j=function(e){var s=e.Vendorslist,r=e.PurchaseOrder,a=e.ChangeHandler;return(0,p.jsx)("div",{className:"margin-depart table-cm standard-purchase-order-page",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-8 standard-left",children:(0,p.jsxs)("div",{className:"row min-row",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:["Select Vendor",(0,p.jsx)("span",{className:"required",children:"*"})]}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)(u.JD,{options:s,name:"vendorId",value:s.filter((function(e){return e.value===r.vendorId})),onChange:function(e){a(e)}})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Instructions"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",value:r.note,name:"note",onChange:function(e){a(e)},type:"text",placeholder:"Instructions"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Ship Via"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipVia",value:r.shipVia,onChange:function(e){a(e)},placeholder:"Ship Via"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Reference #"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",type:"text",value:r.reference,onChange:function(e){a(e)},name:"reference",placeholder:"Reference #"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Terms"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",value:r.terms,onChange:function(e){a(e)},type:"text",name:"terms",placeholder:"Terms"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Due Date"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)(u.U7,{className:"data-picker-field data-picker-full",value:(0,x.sQ)(r.cancelDate),name:"cancelDate",onChange:function(e){console.log(e.target.name),console.log(e.target.value),a(e)}})})]})})]})}),(0,p.jsx)("div",{className:"col-md-4 standard-right",children:(0,p.jsx)("div",{className:"form-group col-md-12",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-12 col-form-label pt-0",children:"Ship To"}),(0,p.jsx)("div",{className:"col-md-12 mb-vw-08",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo1",value:r.shipTo1,onChange:function(e){a(e)},placeholder:""})}),(0,p.jsx)("div",{className:"col-md-12 mb-vw-08",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo2",value:r.shipTo2,onChange:function(e){a(e)},placeholder:""})}),(0,p.jsx)("div",{className:"col-md-12 mb-vw-08",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo3",value:r.shipTo3,onChange:function(e){a(e)},placeholder:""})}),(0,p.jsx)("div",{className:"col-md-12 mb-vw-08",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo4",value:r.shipTo4,onChange:function(e){a(e)},placeholder:""})}),(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo5",value:r.shipTo5,onChange:function(e){a(e)},placeholder:""})})]})})})]})})},v=r(8820),f=r(1281),N=r(6850),b=r(8573),y=r(3360),w=r(859),O=function(e){var s=e.Vendorslist,r=e.PurchaseOrder,a=(e.ChangeHandler,e.AddOrderList),t=e.AddNewProduct,c=(0,i.useState)([]),d=(0,n.Z)(c,2),l=d[0],o=d[1],m=(0,i.useState)(r.vendorId),h=(0,n.Z)(m,2),j=h[0],O=h[1],g=(0,i.useState)(""),C=(0,n.Z)(g,2),Z=C[0],Q=C[1],D=(0,i.useState)(!1),P=(0,n.Z)(D,2),S=P[0],T=P[1],R=(0,i.useCallback)((function(){return l.filter((function(e){return e.productCode.indexOf(Z)>-1||e.vendorPartNumber.indexOf(Z)>-1}))}),[Z,l]);return(0,i.useEffect)((function(){var e;e=j,f.xd(e).then((function(e){o(e.data.result)})).catch()}),[j]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"margin-depart table-cm standard-purchase-order-page mt-0",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-12 standard-left",children:(0,p.jsxs)("div",{className:"row min-row",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-2 col-form-label",children:"Select Vendor"}),(0,p.jsx)("div",{className:"col-md-5",children:(0,p.jsx)(u.JD,{options:s,name:"vendorId",value:s.filter((function(e){return e.value===j})),onChange:function(e){O(e.target.value)}})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"price-levels-top",children:(0,p.jsxs)("div",{className:"icons-list price-levels-btn-right",children:[(0,p.jsx)("button",{className:"levels-plus-icons icons-hd-cm",disabled:"c"===r.status,onClick:function(){T(!0)},children:"Search for Specific Item"}),(0,p.jsx)("div",{className:"rt-filter-bx",children:(0,p.jsx)("div",{className:"row searchbar-mainview",children:(0,p.jsx)("div",{className:"search-bx",children:(0,p.jsx)("input",{autoFocus:"autofocus",type:"text",className:"form-control br-0",placeholder:"Search",onChange:function(e){Q(e.target.value)},value:Z,disabled:"c"===r.status})})})})]})})})}),(0,p.jsx)("div",{className:"form-group col-md-2 mt-2 d-none",children:(0,p.jsx)("div",{className:"info-bx",children:(0,p.jsx)("div",{className:"form-check check-left mb-0",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{className:"form-check-input",name:"idProofRequired1",type:"checkbox"}),(0,p.jsx)("span",{children:"At Reorder Point"})]})})})}),(0,p.jsx)("div",{className:"form-group col-md-2 mt-2 d-none",children:(0,p.jsx)("div",{className:"info-bx",children:(0,p.jsx)("div",{className:"form-check check-left mb-0",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{className:"form-check-input",name:"idProofRequired1",type:"checkbox"}),(0,p.jsx)("span",{children:"With Open POs"})]})})})})]})}),(0,p.jsx)("div",{className:"table-sm table-cm mt-0 table-h-auto",children:(0,p.jsx)("div",{className:"react-bootstrap-table",children:(0,p.jsxs)("table",{className:"table m-0 table-sm",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{style:{width:"10%"},children:"Item Number"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Item Name"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Part#"}),(0,p.jsx)("th",{style:{width:"10%"},children:"IN Stock"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Reorder Level"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Reorder Qty"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Cost"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Cost Per"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Case Cost"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Per Case"})]})}),(0,p.jsx)("tbody",{children:R().length?R().map((function(e,s){return(0,p.jsxs)("tr",{onClick:function(){a(e)},children:[(0,p.jsx)("td",{style:{width:"10%"},children:e.productCode}),(0,p.jsx)("td",{style:{width:"10%"},children:e.productName}),(0,p.jsx)("td",{style:{width:"10%"},children:e.vendorPartNumber}),(0,p.jsx)("td",{style:{width:"10%"},children:e.instockQty}),(0,p.jsx)("td",{style:{width:"10%"},children:e.reOrderLevel}),(0,p.jsx)("td",{style:{width:"10%"},children:e.reOrderQty}),(0,p.jsx)("td",{style:{width:"10%"},children:(0,x.OH)(e.cost)}),(0,p.jsx)("td",{style:{width:"10%"},children:(0,x.OH)(e.perCase)}),(0,p.jsx)("td",{style:{width:"10%"},children:(0,x.OH)(e.caseCost)}),(0,p.jsx)("td",{style:{width:"10%"},children:e.perCase})]},s)})):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:"10",style:{textAlign:"center"},children:(0,p.jsx)(N.FB,{text:"No Item Found"})})})})})]})})})]})}),(0,p.jsxs)(b.Z,{show:S,className:"inventory-popup select-products-popup cm-popup modal-lg inventory-fix-popup",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{children:"Select Products To Add"}),(0,p.jsx)(y.Z,{variant:"closepopup",onClick:function(){T(!1)},children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)(b.Z.Body,{children:(0,p.jsx)("div",{className:"popup-main-view-row",children:(0,p.jsx)("div",{className:"depart-main-view table-cm",children:(0,p.jsx)(w.Z,{SelectedRow:function(e){t(e),T(!1)},PTypes:"1"})})})})]})]})},g=r(8622),C=r(6871),Z=r(3504),Q=r(6149),D={poId:0,storeId:0,vendorId:0,totalCost:0,totalCostReceived:0,terms:"",shipVia:"",shipTo1:"",shipTo2:"",shipTo3:"",shipTo4:"",shipTo5:"",status:"o",billableDepartment:"",shipToDestination:"",orderingMode:0,isFullyAuthorized:!0,isPrintNote:!0,cancelDate:new Date,totalCharges:0,isFullyPaid:!0,poType:1,orderReason:"",distributor:"",isActive:!0,note:"",reference:"",purchaseOrderDetailList:[]},P={index:0,ItemNumber:"",ProductbarCode:"",poDetailId:0,poId:0,productId:0,lineItemNumber:0,costPer:0,qtyOdered:0,qtyReceived:0,newReceivedQty:0,damagedQty:0,newDamageQty:0,vendorPartNumber:"",perCase:0,casesOrdered:0,caseCost:0,storeId:0,destinationStoreId:0,currentBatchQty:0,reason:"",isCommissionOverride:!0,productDescription:"",reOrderQty:0,extcost:0},S={index:0,newReceivedQty:0,reOrderQty:0,newDamageQty:0,costPer:0,casesOrdered:0,type:""},T={productCode:"",storeId:"",productDescription:"",qtyOdered:"",casesOrdered:"",perCase:"",costPer:"",extcost:"",qtyReceived:"",damaged:""},R={type:"Qty",value:0,index:0,perCase:0},k={ttlReceived:0,ttlOrdered:0},I=1,F=2,q="c",V=r(1830),A=r.n(V),H=r(2373),L=r(7020),E=r(763),B=r(4245),U=r(3422),z=function(){function e(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var s=(0,C.s0)(),r=B.parse((0,C.TH)().search),u=(0,C.UO)().id,w=(0,i.useState)(0),V=(0,n.Z)(w,2),z=V[0],G=V[1],_=(0,i.useState)((0,l.Z)((0,l.Z)({},D),{},{poType:r.poType?parseInt(r.poType):1})),J=(0,n.Z)(_,2),Y=J[0],K=J[1],W=(0,i.useState)([]),$=(0,n.Z)(W,2),M=$[0],X=$[1],ee=(0,i.useState)(k),se=(0,n.Z)(ee,2),re=se[0],ae=se[1],te=(0,i.useState)(R),ce=(0,n.Z)(te,2),de=ce[0],le=ce[1],ne=(0,i.useState)([]),ie=(0,n.Z)(ne,2),oe=ie[0],me=ie[1],he=(0,i.useState)(!1),ue=(0,n.Z)(he,2),xe=ue[0],pe=ue[1],je=(0,i.useState)(!1),ve=(0,n.Z)(je,2),fe=ve[0],Ne=ve[1],be=(0,i.useState)(!1),ye=(0,n.Z)(be,2),we=ye[0],Oe=ye[1],ge=(0,i.useState)(S),Ce=(0,n.Z)(ge,2),Ze=Ce[0],Qe=Ce[1],De=function(){var e=0,s=0;M.forEach((function(r){var a={};a=Y.poType===I?Pe(r):Se(r),e+=(0,x.mm)(r.qtyReceived,r.newReceivedQty)*r.costPer,s+=a.extcost})),ae({ttlReceived:(0,x.OH)(e),ttlOrdered:(0,x.OH)(s)})},Pe=function(e){var s={reOrderQty:0,casesOrdered:0,perCase:0,reOrderLevel:0,extcost:0};return s.reOrderQty=E.isNumber(e.reOrderQty)?e.reOrderQty:0,s.casesOrdered=E.isNumber(e.casesOrdered)?e.casesOrdered:0,s.perCase=E.isNumber(e.perCase)?e.perCase:0,s.reOrderLevel=E.isNumber(e.reOrderLevel)?e.reOrderLevel:0,e.qtyOdered>0?s.reOrderQty=e.qtyOdered:0===s.perCase&&0===s.reOrderQty?s.reOrderQty=1:0===s.reOrderQty&&s.perCase>0&&(s.reOrderQty=s.perCase),s.reOrderQty>0&&s.perCase>0&&0===s.casesOrdered&&(s.casesOrdered=s.reOrderQty/s.perCase),Y.poType===F&&(s.casesOrdered=0,s.reOrderQty=-1*e.reOrderQty),s.extcost=s.reOrderQty*e.costPer,s},Se=function(e){var s={reOrderQty:0,casesOrdered:0,perCase:0,reOrderLevel:0,extcost:0};return s.casesOrdered=0,s.reOrderQty=e.qtyOdered,s.extcost=s.reOrderQty*e.costPer,s},Te=(0,i.useCallback)((function(){var e=[];return M.forEach((function(s){var r={};r=Y.poType===I?Pe(s):Se(s);var a=Object.assign({},T);a.productCode=s.productCode,a.storeId="1001",a.productDescription=s.productDescription,a.qtyOdered=r.reOrderQty,a.casesOrdered=r.casesOrdered,a.perCase=s.perCase,a.costPer=(0,x.OH)(s.costPer),a.extCost=(0,x.OH)(r.extcost),a.qtyReceived=(0,x.mm)(s.qtyReceived,s.newReceivedQty),a.damaged=(0,x.mm)(s.damagedQty,s.newDamageQty),e.push(a)})),e}),[M]);(0,i.useEffect)((function(){De()}),[M]);var Re=function(){var e=M.map((function(e,s){var r=E.isNumber(e.qtyOdered)?e.qtyOdered:0;return e.newReceivedQty=r-e.qtyReceived,e}));X(e)},ke=function(e){var s=e.target.value;K((0,l.Z)((0,l.Z)({},Y),{},(0,c.Z)({},e.target.name,s)))},Ie=function(){return pe(!1)};return(0,i.useEffect)((function(){return(0,t.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.It().then((function(e){me(e)})).catch();case 2:if(void 0===u){e.next=5;break}return e.next=5,s=u,Q.zV(s).then((function(e){K(e.data.result),X(e.data.result.purchaseOrderDetailList)})).catch();case 5:case"end":return e.stop()}var s}),e)})))(),function(){}}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{id:"pos_view",children:(0,p.jsxs)("div",{className:"depart-main-view",children:[(0,p.jsxs)("div",{className:"top-filter-row",children:[(0,p.jsx)("div",{className:"lt-title-bx",children:(0,p.jsxs)("h2",{children:["Purchase Order  \xa0\xa0\xa0  ",u>0?"PO #".concat(u):""]})}),(0,p.jsx)("div",{className:"row align-items-center",children:(0,p.jsxs)("div",{className:"col-md-12 purchase-order-button-row",children:[(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:Y.status===q,onClick:function(){!function(){var e=Object.assign({},Y);(0,U.$J)().validate(e,{abortEarly:!1}).then((function(s){e.purchaseOrderDetailList=M.map((function(e,s){return e.qtyReceived+=null!==e.newReceivedQty?parseFloat(e.newReceivedQty):0,e.damagedQty+=null!==e.newDamageQty?parseFloat(e.newDamageQty):0,e})),e.status=Y.poType===F?q:e.status,void 0!==u?Q.KY(e).then((function(e){A().fire((0,l.Z)({title:"Purchase Order update successfully."},L.Z.SwalGlobal))})).catch():Q.OQ(e).then((function(e){A().fire((0,l.Z)({title:"Purchase Order Add successfully."},L.Z.SwalGlobal))})).catch()})).catch((function(e){e.inner.forEach((function(e){e.message})),A().fire((0,l.Z)({title:e.inner[0].message},L.Z.SwalGlobal))}))}()},children:"Save"}),(0,p.jsx)("div",{className:"ordering-btn",children:Y.status===q||Y.poType===F?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:!0,children:"+ Add New Item"})}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(Z.rU,{className:"add-now-btn",state:{prevPath:"StandardPurchaseOrder"},disabled:Y.status===q||Y.poType===F,to:"/standarditem/add",children:"Add New Item"})})}),Y.status===q?(0,p.jsx)(Z.rU,{className:"save-btn btn btn-save",to:"/PurchaseOrder",children:"OK"}):(0,p.jsx)(Z.rU,{className:"save-btn btn btn-save colorred",to:"/PurchaseOrder",children:"Cancel"})]})})]}),(0,p.jsx)("hr",{className:"full-width"}),(0,p.jsxs)("div",{className:"margin-depart table-cm coupan-page",children:[(0,p.jsxs)(h.Z,{className:"tabs-cm mt-0",sx:{width:"100%"},children:[(0,p.jsx)(h.Z,{className:"tab-view-row",children:(0,p.jsxs)(o.Z,{value:z,onChange:function(e,s){G(s)},"aria-label":"basic tabs example",children:[(0,p.jsx)(m.Z,(0,l.Z)({label:"General Information"},e(0))),(0,p.jsx)(m.Z,(0,l.Z)({label:"Add Items"},e(1)))]})}),(0,p.jsxs)(h.Z,{className:"tabs-panel",children:[0===z&&(0,p.jsx)(j,{Vendorslist:oe,PurchaseOrder:Y,ChangeHandler:ke}),1===z&&(0,p.jsx)(O,{Vendorslist:oe,PurchaseOrder:Y,ChangeHandler:ke,AddOrderList:function(e){var s=Pe(e),r=Object.assign({},P);r.productId=e.productId,r.productDescription=e.productName,r.storeId="1001",r.qtyOdered=s.reOrderQty,r.casesOrdered=s.casesOrdered,r.perCase=e.perCase,r.costPer=e.cost,r.qtyReceived=0,r.damagedQty=0,r.productCode=e.productCode,r.extcost=s.extcost,X([].concat((0,d.Z)(M),[r]))},AddNewProduct:function(e){var s=Object.assign({},P);E.isNumber(e.reOrderQty)?s.qtyOdered=e.reOrderQty>0?e.reOrderQty:1:s.qtyOdered=0,s.productId=e.productId,s.productDescription=e.productName,s.storeId="1001",s.casesOrdered=0,s.perCase=0,s.costPer=e.averageCost,s.qtyReceived=0,s.damagedQty=0,s.productCode=e.productCode,X([].concat((0,d.Z)(M),[s]))}})]})]}),(0,p.jsx)("div",{className:"margin-depart table-cm standard-purchase-order-page",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:"col-md-12 standard-left",children:[(0,p.jsxs)("div",{className:'row min-row align-items-center"',children:[(0,p.jsx)("div",{className:"form-group col-md-4",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Destination Store ID:"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)(g.ZP,{options:"",className:"product-depatment"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-2",children:(0,p.jsxs)("div",{className:"row d-none",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Amount"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"",placeholder:"0"})})]})}),(0,p.jsxs)("div",{className:"col-md-6 purchase-order-button-row mb-3",children:[(0,p.jsx)("button",{className:"save-btn btn btn-save d-none",disabled:Y.status===q,children:"Receive Out Of Date"}),(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:Y.status===q,onClick:function(){Re()},children:"Receive All"}),(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:Y.status===q||Y.poType===F,onClick:function(){A().fire({title:"Closed purchase order may not be reopened. Are you sure you would like to close this purchase order?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",focusConfirm:!1,showLoaderOnConfirm:!0,focusCancel:!0}).then((function(e){e.isConfirmed?Q.W_(u,{Status:q}).then((function(e){s("/PurchaseOrder")})).catch():e.isDenied&&A().close()}))},children:"Close"})]})]}),(0,p.jsx)("div",{className:"table-sm table-cm mt-0",children:(0,p.jsx)("div",{className:"react-bootstrap-table",children:(0,p.jsxs)("table",{className:"table m-0 table-sm",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"#"}),(0,p.jsx)("th",{children:"Item#"}),(0,p.jsx)("th",{children:"StoreID"}),(0,p.jsx)("th",{children:"Item Name"}),(0,p.jsx)("th",{children:"Qty Ordered"}),(0,p.jsx)("th",{children:"Cases Ordered"}),(0,p.jsx)("th",{children:"# Per Case"}),(0,p.jsx)("th",{children:"Cost"}),Y.poType===F?(0,p.jsx)("th",{children:"Reason"}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)("th",{children:"ExtCost"}),(0,p.jsx)("th",{children:"Qty Recived"}),(0,p.jsx)("th",{children:"Damaged"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Action"})]})}),(0,p.jsx)("tbody",{children:Te().length?Te().map((function(e,s){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:s+1}),(0,p.jsx)("td",{children:e.productCode}),(0,p.jsx)("td",{children:e.storeId}),(0,p.jsx)("td",{children:e.productDescription}),(0,p.jsx)("td",{children:e.qtyOdered}),(0,p.jsx)("td",{children:e.casesOrdered}),(0,p.jsx)("td",{children:e.perCase}),(0,p.jsx)("td",{children:e.costPer}),Y.poType===F?(0,p.jsx)("td",{children:e.reason}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)("td",{children:e.extCost}),(0,p.jsx)("td",{children:e.qtyReceived}),(0,p.jsx)("td",{children:e.damaged}),(0,p.jsx)("td",{children:Y.status!==q?(0,p.jsxs)("div",{className:"action-btn",children:[(0,p.jsx)("button",{className:"edit-icons",onClick:function(){var e;e=s,Qe((0,l.Z)((0,l.Z)({},S),{},{costPer:M[e].costPer,type:M[e].perCase>0?"casesOrdered":"",index:e})),pe(!0)},children:(0,p.jsx)("span",{})}),(0,p.jsx)("button",{className:"delete-icons",onClick:function(e){var r;r=s,A().fire({title:"Are you sure you want to delete?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(e){if(e.isConfirmed){var s=(0,d.Z)(M);s.splice(r,1),X(s)}else e.isDenied&&A().close()}))},children:(0,p.jsx)("span",{})}),(0,p.jsx)("button",{className:"receive-icons",onClick:function(r){le((0,l.Z)((0,l.Z)({},R),{},{index:s,perCase:e.perCase})),e.casesOrdered>0?Ne(!0):Oe(!0)},children:(0,p.jsx)("span",{})})]}):(0,p.jsx)(p.Fragment,{})})]},s)})):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:"12",style:{textAlign:"center"},children:(0,p.jsx)(N.FB,{})})})})]})})}),(0,p.jsxs)("div",{className:"row min-row total-cost-row mt-3 mb-3",children:[(0,p.jsx)("div",{className:"col-md-4"}),(0,p.jsx)("div",{className:"col-md-4 text-right",children:(0,p.jsx)("div",{className:"customer-dts",children:(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Total Cost Received:"})," ",re.ttlReceived]})})}),(0,p.jsx)("div",{className:"col-md-4 text-right",children:(0,p.jsx)("div",{className:"customer-dts",children:(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Total Cost Ordered:"}),re.ttlOrdered]})})})]}),(0,p.jsxs)("div",{className:"col-md-12 purchase-order-button-row mt-3 mb-3 d-none",children:[(0,p.jsx)("button",{className:"save-btn btn btn-save",children:"Receive Out Of Date"}),(0,p.jsx)("button",{className:"save-btn btn btn-save",onClick:function(){Re()},children:"Receive All"})]})]})})})]})]})}),(0,p.jsxs)(b.Z,{show:xe,className:"cm-popup table-cm modal-lg",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{children:"Edit Order"}),(0,p.jsx)(y.Z,{variant:"closepopup",onClick:Ie,children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)(b.Z.Body,{children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("div",{className:"margin-popup"}),Y.poType===I?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"row mb-4",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Case Per Order"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"casesOrdered",id:"casesOrdered","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ze.casesOrdered,disabled:"casesOrdered"!==Ze.type,defaultValue:0,placeholder:"",onValueChange:function(e){Qe((0,l.Z)((0,l.Z)({},Ze),{},{casesOrdered:e}))},allowDecimals:!0,decimalsLimit:"5"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Damaged"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"damagedQty",id:"damagedQty","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ze.newDamageQty,defaultValue:0,placeholder:"",onValueChange:function(e){Qe((0,l.Z)((0,l.Z)({},Ze),{},{newDamageQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})})]}),(0,p.jsxs)("div",{className:"row mb-0",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Cost"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",prefix:"$",name:"costPer",id:"costPer","data-number-to-fixed":"5","data-number-stepfactor":"100",disabled:"casesOrdered"===Ze.type,value:Ze.costPer,defaultValue:0,placeholder:"",onValueChange:function(e){Qe((0,l.Z)((0,l.Z)({},Ze),{},{costPer:e}))},allowDecimals:!0,decimalsLimit:"5"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6 d-none",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Qty Recived"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"newStock",id:"newStock","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ze.newReceivedQty,defaultValue:0,placeholder:"",onValueChange:function(e){Qe((0,l.Z)((0,l.Z)({},Ze),{},{newReceivedQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Order Qty"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"newStock",id:"newStock","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ze.reOrderQty,disabled:"casesOrdered"===Ze.type,defaultValue:0,placeholder:"",onValueChange:function(e){Qe((0,l.Z)((0,l.Z)({},Ze),{},{reOrderQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})})]})]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"row mb-0",children:(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Order Qty"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"newStock",id:"newStock","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ze.reOrderQty,defaultValue:0,placeholder:"",onValueChange:function(e){Qe((0,l.Z)((0,l.Z)({},Ze),{},{reOrderQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})})})}),(0,p.jsx)("div",{className:"margin-popup"})]})}),(0,p.jsx)(b.Z.Footer,{children:(0,p.jsx)(y.Z,{className:"save-btn",variant:"save",onClick:function(){!function(){var e=Object.assign({},Ze);Y.poType===I?(M[Ze.index].newReceivedQty+=parseFloat(e.newReceivedQty),M[Ze.index].newDamageQty+=parseFloat(e.newDamageQty),"casesOrdered"===e.type?(M[Ze.index].casesOrdered=parseFloat(e.casesOrdered),M[Ze.index].casesOrdered>0&&(M[Ze.index].reOrderQty=0,M[Ze.index].qtyOdered=parseFloat(e.casesOrdered)*parseFloat(M[Ze.index].perCase))):(M[Ze.index].costPer=e.costPer,e.reOrderQty>0&&(M[Ze.index].reOrderQty=0,M[Ze.index].qtyOdered=parseFloat(e.reOrderQty)))):M[Ze.index].qtyOdered=-1*parseFloat(e.reOrderQty),X(M),setTimeout((function(){De()}),1500),Ie()}()},children:"Update"})})]}),(0,p.jsxs)(b.Z,{show:fe,className:"inventory-popup buy-popup cm-popup modal-sm",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{children:"EACHES OR CASES?"}),(0,p.jsx)(y.Z,{variant:"closepopup",onClick:function(){Ne(!1)},children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)("div",{className:"popup-main-view-row",children:(0,p.jsxs)("div",{className:"btn-add",children:[(0,p.jsx)("button",{className:"btn-sm",onClick:function(){Ne(!1),Oe(!0)},children:"EACHES"}),(0,p.jsx)("button",{className:"btn-sm",onClick:function(){le((0,l.Z)((0,l.Z)({},de),{},{type:"Cases"})),Ne(!1),Oe(!0)},children:"CASES"})]})})]}),(0,p.jsxs)(b.Z,{show:we,className:"cm-popup table-cm modal-md",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{}),(0,p.jsx)(y.Z,{variant:"closepopup",onClick:function(){Oe(!1)},children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)(b.Z.Body,{children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("div",{className:"margin-popup"}),(0,p.jsx)("div",{className:"row mb-4",children:(0,p.jsx)("div",{className:"form-group col-md-12",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("label",{className:"col-sm-12 col-form-label",children:[" ",de.type]}),(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)(H.Z,{className:"form-control",name:"QtyReceived",id:"QtyReceived","data-number-to-fixed":"5","data-number-stepfactor":"100",value:de.value,defaultValue:0,placeholder:"",onValueChange:function(e){le((0,l.Z)((0,l.Z)({},de),{},{value:e}))},allowDecimals:!0,decimalsLimit:"5"})}),(0,p.jsx)("div",{className:"col-md-4 mt-3",children:(0,p.jsx)(y.Z,{className:"save-btn",variant:"save",onClick:function(){de.value>0?(Y.poType===F?M[de.index].newReceivedQty+=parseFloat(de.value):Y.poType===I&&("Qty"===de.type?M[de.index].newReceivedQty+=parseFloat(de.value):M[de.index].newReceivedQty+=parseFloat(de.value)*parseFloat(de.perCase)),X(M),Oe(!1),setTimeout((function(){De()}),1500)):A().fire((0,l.Z)({title:"Qty is required."},L.Z.SwalGlobal))},children:"Update"})})]})})}),(0,p.jsx)("div",{className:"margin-popup"})]})})]})]})}}}]);
//# sourceMappingURL=938.465c3cd7.chunk.js.map