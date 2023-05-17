"use strict";(self.webpackChunkbotiga_frontend=self.webpackChunkbotiga_frontend||[]).push([[687],{67687:function(e,s,r){r.r(s),r.d(s,{default:function(){return J}});var t=r(74165),a=r(15861),d=r(4942),c=r(42982),l=r(1413),n=r(70885),i=r(72791),o=r(25228),m=r(43896),h=r(64554),u=r(23805),x=r(10978),p=r(80184),j=function(e){var s=e.Vendorslist,r=e.PurchaseOrder,t=e.ChangeHandler;return(0,p.jsx)("div",{className:"margin-depart table-cm standard-purchase-order-page",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-8 standard-left",children:(0,p.jsxs)("div",{className:"row min-row",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:["Select Vendor",(0,p.jsx)("span",{className:"required",children:"*"})]}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)(u.JD,{options:s,name:"vendorId",value:s.filter((function(e){return e.value===r.vendorId})),onChange:function(e){t(e)}})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Instructions"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",value:r.note,name:"note",onChange:function(e){t(e)},type:"text",placeholder:"Instructions"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Ship Via"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipVia",value:r.shipVia,onChange:function(e){t(e)},placeholder:"Ship Via"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Reference #"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",type:"text",value:r.reference,onChange:function(e){t(e)},name:"reference",placeholder:"Reference #"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Terms"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",value:r.terms,onChange:function(e){t(e)},type:"text",name:"terms",placeholder:"Terms"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Due Date"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)(u.U7,{className:"data-picker-field data-picker-full",value:(0,x.sQ)(r.cancelDate),name:"cancelDate",onChange:function(e){console.log(e.target.name),console.log(e.target.value),t(e)}})})]})})]})}),(0,p.jsx)("div",{className:"col-md-4 standard-right",children:(0,p.jsx)("div",{className:"form-group col-md-12",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-12 col-form-label pt-0",children:"Ship To"}),(0,p.jsx)("div",{className:"col-md-12 mb-vw-08",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo1",value:r.shipTo1,onChange:function(e){t(e)},placeholder:""})}),(0,p.jsx)("div",{className:"col-md-12 mb-vw-08",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo2",value:r.shipTo2,onChange:function(e){t(e)},placeholder:""})}),(0,p.jsx)("div",{className:"col-md-12 mb-vw-08",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"shipTo3",value:r.shipTo3,onChange:function(e){t(e)},placeholder:""})})]})})})]})})},v=r(78820),f=r(21281),y=r(86850),b=r(31815),N=r(43360),w=r(80859),O=function(e){var s=e.Vendorslist,r=e.PurchaseOrder,t=(e.ChangeHandler,e.AddOrderList),a=e.AddNewProduct,d=(0,i.useState)([]),c=(0,n.Z)(d,2),l=c[0],o=c[1],m=(0,i.useState)(r.vendorId),h=(0,n.Z)(m,2),j=h[0],O=h[1],g=(0,i.useState)(""),C=(0,n.Z)(g,2),Z=C[0],Q=C[1],P=(0,i.useState)(!1),S=(0,n.Z)(P,2),D=S[0],k=S[1],T=(0,i.useCallback)((function(){return l.filter((function(e){return e.productCode.indexOf(Z)>-1||e.vendorPartNumber.indexOf(Z)>-1}))}),[Z,l]);return(0,i.useEffect)((function(){var e;e=j,f.xd(e).then((function(e){o(e.data.result)})).catch()}),[j]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"margin-depart table-cm standard-purchase-order-page mt-0",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-12 standard-left",children:(0,p.jsxs)("div",{className:"row min-row",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-2 col-form-label",children:"Select Vendor"}),(0,p.jsx)("div",{className:"col-md-5",children:(0,p.jsx)(u.JD,{options:s,name:"vendorId",value:s.filter((function(e){return e.value===j})),onChange:function(e){O(e.target.value)}})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"price-levels-top",children:(0,p.jsxs)("div",{className:"icons-list price-levels-btn-right",children:[(0,p.jsx)("button",{className:"levels-plus-icons icons-hd-cm",disabled:"c"===r.status,onClick:function(){k(!0)},children:"Search for Specific Item"}),(0,p.jsx)("div",{className:"rt-filter-bx",children:(0,p.jsx)("div",{className:"row searchbar-mainview",children:(0,p.jsx)("div",{className:"search-bx",children:(0,p.jsx)("input",{autoFocus:"autofocus",type:"text",className:"form-control br-0",placeholder:"Search",onChange:function(e){Q(e.target.value)},value:Z,disabled:"c"===r.status})})})})]})})})}),(0,p.jsx)("div",{className:"form-group col-md-2 mt-2 d-none",children:(0,p.jsx)("div",{className:"info-bx",children:(0,p.jsx)("div",{className:"form-check check-left mb-0",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{className:"form-check-input",name:"idProofRequired1",type:"checkbox"}),(0,p.jsx)("span",{children:"At Reorder Point"})]})})})}),(0,p.jsx)("div",{className:"form-group col-md-2 mt-2 d-none",children:(0,p.jsx)("div",{className:"info-bx",children:(0,p.jsx)("div",{className:"form-check check-left mb-0",children:(0,p.jsxs)("label",{className:"form-check-label",children:[(0,p.jsx)("input",{className:"form-check-input",name:"idProofRequired1",type:"checkbox"}),(0,p.jsx)("span",{children:"With Open POs"})]})})})})]})}),(0,p.jsx)("div",{className:"table-sm table-cm mt-0 table-h-auto",children:(0,p.jsx)("div",{className:"react-bootstrap-table",children:(0,p.jsxs)("table",{className:"table m-0 table-sm",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{style:{width:"12%"},children:"Product barcode"}),(0,p.jsx)("th",{style:{width:"12%"},children:"Item Name"}),(0,p.jsx)("th",{style:{width:"8%"},children:"Part#"}),(0,p.jsx)("th",{style:{width:"8%"},children:"IN Stock"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Reorder Level"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Reorder Qty"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Cost"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Cost Per"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Case Cost"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Per Case"})]})}),(0,p.jsx)("tbody",{children:T().length?T().map((function(e,s){return(0,p.jsxs)("tr",{onClick:function(){t(e)},children:[(0,p.jsx)("td",{style:{width:"12%"},children:e.productCode}),(0,p.jsx)("td",{style:{width:"12%"},children:e.productName}),(0,p.jsx)("td",{style:{width:"8%"},children:e.vendorPartNumber}),(0,p.jsx)("td",{style:{width:"8%"},children:e.instockQty}),(0,p.jsx)("td",{style:{width:"10%"},children:e.reOrderLevel}),(0,p.jsx)("td",{style:{width:"10%"},children:e.reOrderQty}),(0,p.jsx)("td",{style:{width:"10%"},children:(0,x.OH)(e.cost)}),(0,p.jsx)("td",{style:{width:"10%"},children:(0,x.OH)(e.perCase)}),(0,p.jsx)("td",{style:{width:"10%"},children:(0,x.OH)(e.caseCost)}),(0,p.jsx)("td",{style:{width:"10%"},children:e.perCase})]},s)})):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:"10",style:{textAlign:"center"},children:(0,p.jsx)(y.FB,{text:"No Item Found"})})})})})]})})})]})}),(0,p.jsxs)(b.Z,{show:D,className:"inventory-popup select-products-popup cm-popup modal-lg inventory-fix-popup",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{children:"Select Products To Add"}),(0,p.jsx)(N.Z,{variant:"closepopup",onClick:function(){k(!1)},children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)(b.Z.Body,{children:(0,p.jsx)("div",{className:"popup-main-view-row",children:(0,p.jsx)("div",{className:"depart-main-view table-cm",children:(0,p.jsx)(w.Z,{SelectedRow:function(e){a(e),k(!1)},PTypes:"1"})})})})]})]})},g=r(18622),C=r(16871),Z=r(43504),Q=r(36149),P={poId:0,storeId:0,vendorId:0,totalCost:0,totalCostReceived:0,terms:"",shipVia:"",shipTo1:"",shipTo2:"",shipTo3:"",shipTo4:"",shipTo5:"",status:"o",billableDepartment:"",shipToDestination:"",orderingMode:0,isFullyAuthorized:!0,isPrintNote:!0,cancelDate:new Date,totalCharges:0,isFullyPaid:!0,poType:1,orderReason:"",distributor:"",isActive:!0,note:"",reference:"",purchaseOrderDetailList:[]},S={index:0,ItemNumber:"",ProductbarCode:"",poDetailId:0,poId:0,productId:0,lineItemNumber:0,costPer:0,qtyOdered:0,qtyReceived:0,newReceivedQty:0,damagedQty:0,newDamageQty:0,vendorPartNumber:"",perCase:0,casesOrdered:0,caseCost:0,storeId:0,destinationStoreId:0,currentBatchQty:0,reason:"",isCommissionOverride:!0,productDescription:"",reOrderQty:0,extcost:0},D={index:0,newReceivedQty:0,reOrderQty:0,newDamageQty:0,costPer:0,casesOrdered:0,type:""},k={productCode:"",productId:0,storeId:"",productDescription:"",qtyOdered:"",casesOrdered:"",perCase:"",costPer:"",extcost:"",qtyReceived:"",damaged:""},T={type:"Qty",value:0,index:0,perCase:0},I={ttlReceived:0,ttlOrdered:0},R=1,F=2,q="c",A=r(21830),V=r.n(A),H=r(52373),L=r(77020),E=r(79972),B=function(e){var s=e.ProductId,r=(e.Class,(0,i.useState)([])),t=(0,n.Z)(r,2),a=t[0],d=t[1],c=(0,i.useState)(!1),l=(0,n.Z)(c,2),o=l[0],m=l[1];return(0,i.useEffect)((function(){m(!0),E.t0(s).then((function(e){m(!1),d(e.data.result.productSummaries)})).catch((function(e){m(!0)}))}),[]),(0,p.jsx)("div",{className:"row product-summary",children:(0,p.jsx)("div",{className:"form-group col-md-12 mb-3",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-md-12 close-bx",children:(0,p.jsx)("table",{className:"table m-0 popup-cart-table",children:a.length?a.map((function(e,s){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:e.key}),(0,p.jsx)("td",{children:e.value})]},s)})):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:2,style:{textAlign:"center"},children:o?(0,p.jsx)(y._Y,{}):(0,p.jsx)(y.FB,{})})})})})})})})})},_=r(763),G=r(4245),z=r(75934),U=r(1542),Y=r(43422),J=function(){function e(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var s=(0,C.s0)(),r=G.parse((0,C.TH)().search),u=(0,C.UO)().id,w=(0,i.useState)(0),A=(0,n.Z)(w,2),E=A[0],J=A[1],K=(0,i.useState)((0,l.Z)((0,l.Z)({},P),{},{poType:r.poType?parseInt(r.poType):1})),W=(0,n.Z)(K,2),$=W[0],M=W[1],X=(0,i.useState)(!0),ee=(0,n.Z)(X,2),se=ee[0],re=ee[1],te=(0,i.useState)(0),ae=(0,n.Z)(te,2),de=ae[0],ce=ae[1],le=(0,i.useState)([]),ne=(0,n.Z)(le,2),ie=ne[0],oe=ne[1],me=(0,i.useState)(I),he=(0,n.Z)(me,2),ue=he[0],xe=he[1],pe=(0,i.useState)(T),je=(0,n.Z)(pe,2),ve=je[0],fe=je[1],ye=(0,i.useState)([]),be=(0,n.Z)(ye,2),Ne=be[0],we=be[1],Oe=(0,i.useState)(!1),ge=(0,n.Z)(Oe,2),Ce=ge[0],Ze=ge[1],Qe=(0,i.useState)(!1),Pe=(0,n.Z)(Qe,2),Se=Pe[0],De=Pe[1],ke=(0,i.useState)(!1),Te=(0,n.Z)(ke,2),Ie=Te[0],Re=Te[1],Fe=(0,i.useState)(!1),qe=(0,n.Z)(Fe,2),Ae=qe[0],Ve=qe[1],He=(0,i.useState)(D),Le=(0,n.Z)(He,2),Ee=Le[0],Be=Le[1],_e=function(e){re(!0),Q.zV(e).then((function(e){re(!1),M(e.data.result),oe(e.data.result.purchaseOrderDetailList)})).catch()},Ge=function(){var e=0,s=0;ie.forEach((function(r){var t={};t=$.poType===R?ze(r):Ue(r),e+=(0,x.mm)(r.qtyReceived,r.newReceivedQty)*r.costPer,s+=t.extcost})),xe({ttlReceived:(0,x.OH)(e),ttlOrdered:(0,x.OH)(s)})},ze=function(e){var s={reOrderQty:0,casesOrdered:0,perCase:0,reOrderLevel:0,extcost:0};return s.reOrderQty=_.isNumber(e.reOrderQty)?e.reOrderQty:0,s.casesOrdered=_.isNumber(e.casesOrdered)?e.casesOrdered:0,s.perCase=_.isNumber(e.perCase)?e.perCase:0,s.reOrderLevel=_.isNumber(e.reOrderLevel)?e.reOrderLevel:0,e.qtyOdered>0?s.reOrderQty=e.qtyOdered:0===s.perCase&&0===s.reOrderQty?s.reOrderQty=1:0===s.reOrderQty&&s.perCase>0&&(s.reOrderQty=s.perCase),s.reOrderQty>0&&s.perCase>0&&0===s.casesOrdered&&(s.casesOrdered=s.reOrderQty/s.perCase),$.poType===F&&(s.casesOrdered=0,s.reOrderQty=-1*e.reOrderQty),s.extcost=s.reOrderQty*e.costPer,s},Ue=function(e){var s={reOrderQty:0,casesOrdered:0,perCase:0,reOrderLevel:0,extcost:0};return s.casesOrdered=0,s.reOrderQty=e.qtyOdered,s.extcost=s.reOrderQty*e.costPer,s},Ye=(0,i.useCallback)((function(){var e=[];return ie.forEach((function(s){var r={};r=$.poType===R?ze(s):Ue(s),console.log(s);var t=Object.assign({},k);t.productId=s.productId,t.productCode=s.productCode,t.storeId="1001",t.productDescription=s.productDescription,t.qtyOdered=r.reOrderQty,t.casesOrdered=r.casesOrdered,t.perCase=s.perCase,t.costPer=(0,x.OH)(s.costPer),t.extCost=(0,x.OH)(r.extcost),t.qtyReceived=(0,x.mm)(s.qtyReceived,s.newReceivedQty),t.damaged=(0,x.mm)(s.damagedQty,s.newDamageQty),e.push(t)})),e}),[ie]);(0,i.useEffect)((function(){Ge()}),[ie]);var Je=function(){var e=ie.map((function(e,s){var r=_.isNumber(e.qtyOdered)?e.qtyOdered:0;return e.newReceivedQty=r-e.qtyReceived,e}));oe(e)},Ke=function(e){var s=e.target.value;M((0,l.Z)((0,l.Z)({},$),{},(0,d.Z)({},e.target.name,s)))},We=function(){return Ze(!1)};return(0,i.useEffect)((function(){return(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.It().then((function(e){we(e)})).catch();case 2:if(void 0===u){e.next=7;break}return e.next=5,_e(u);case 5:e.next=8;break;case 7:re(!1);case 8:case"end":return e.stop()}}),e)})))(),function(){}}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{id:"pos_view",className:"purchase-order-page",children:(0,p.jsxs)("div",{className:"depart-main-view",children:[(0,p.jsxs)("div",{className:"top-filter-row",children:[(0,p.jsx)("div",{className:"lt-title-bx",children:(0,p.jsxs)("h2",{children:[" ",u>0?"Edit":"Add"," Purchase Order  \xa0\xa0\xa0  ",u>0?"PO #".concat(u):""]})}),(0,p.jsx)("div",{className:"row align-items-center",children:(0,p.jsxs)("div",{className:"col-md-12 purchase-order-button-row",children:[(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:$.status===q,onClick:function(){!function(){var e=Object.assign({},$);(0,Y.$J)().validate(e,{abortEarly:!1}).then((function(s){e.purchaseOrderDetailList=ie.map((function(e,s){return e.qtyReceived+=null!==e.newReceivedQty?parseFloat(e.newReceivedQty):0,e.damagedQty+=null!==e.newDamageQty?parseFloat(e.newDamageQty):0,e})),e.status=$.poType===F?q:e.status,void 0!==u||e.poId>0?(V().showLoading(),Q.KY(e).then((function(e){V().fire((0,l.Z)({title:"Purchase Order update successfully."},L.Z.SwalGlobal))})).catch((function(e){V().fire((0,l.Z)({title:"Error"},L.Z.SwalGlobal))}))):(V().showLoading(),Q.OQ(e).then((function(e){_e(e.data.result.poId),V().fire((0,l.Z)({title:"Purchase Order Add successfully."},L.Z.SwalGlobal))})).catch((function(){V().fire((0,l.Z)({title:"Error"},L.Z.SwalGlobal))})))})).catch((function(e){e.inner.forEach((function(e){e.message})),V().fire((0,l.Z)({title:e.inner[0].message},L.Z.SwalGlobal))}))}()},children:"Save"}),(0,p.jsx)("div",{className:"ordering-btn",children:$.status===q||$.poType===F?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:!0,children:"+ Add New Item"})}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(Z.rU,{className:"add-now-btn",state:{prevPath:"StandardPurchaseOrder"},disabled:$.status===q||$.poType===F,to:"/standarditem/add",children:"Add New Product"})})}),$.status===q?(0,p.jsx)(Z.rU,{className:"save-btn btn btn-save",to:"/PurchaseOrder",children:"OK"}):(0,p.jsx)(Z.rU,{className:"save-btn btn btn-save colorred",to:"/PurchaseOrder",children:"Cancel"})]})})]}),(0,p.jsx)("hr",{className:"full-width"}),(0,p.jsxs)("div",{className:"margin-depart table-cm coupan-page",children:[(0,p.jsxs)(h.Z,{className:"tabs-cm mt-0",sx:{width:"100%"},children:[(0,p.jsx)(h.Z,{className:"tab-view-row",children:(0,p.jsxs)(o.Z,{value:E,onChange:function(e,s){J(s)},"aria-label":"basic tabs example",children:[(0,p.jsx)(m.Z,(0,l.Z)({label:"General Information"},e(0))),(0,p.jsx)(m.Z,(0,l.Z)({label:"Add Items"},e(1)))]})}),(0,p.jsxs)(h.Z,{className:"tabs-panel",children:[0===E&&(0,p.jsx)(j,{Vendorslist:Ne,PurchaseOrder:$,ChangeHandler:Ke}),1===E&&(0,p.jsx)(O,{Vendorslist:Ne,PurchaseOrder:$,ChangeHandler:Ke,AddOrderList:function(e){var s=ze(e),r=Object.assign({},S);r.productId=e.productId,r.productDescription=e.productName,r.storeId="1001",r.qtyOdered=s.reOrderQty,r.casesOrdered=s.casesOrdered,r.perCase=e.perCase,r.costPer=e.cost,r.qtyReceived=0,r.damagedQty=0,r.productCode=e.productCode,r.extcost=s.extcost,oe([].concat((0,c.Z)(ie),[r]))},AddNewProduct:function(e){var s=Object.assign({},S);_.isNumber(e.reOrderQty)?s.qtyOdered=e.reOrderQty>0?e.reOrderQty:1:s.qtyOdered=0,s.productId=e.productId,s.productDescription=e.productName,s.storeId="1001",s.casesOrdered=0,s.perCase=0,s.costPer=e.averageCost,s.qtyReceived=0,s.damagedQty=0,s.productCode=e.productCode,oe([].concat((0,c.Z)(ie),[s]))}})]})]}),(0,p.jsx)("div",{className:"margin-depart table-cm standard-purchase-order-page",children:(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:"col-md-12 standard-left",children:[(0,p.jsxs)("div",{className:'row min-row align-items-center"',children:[(0,p.jsx)("div",{className:"form-group col-md-4",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Destination Store ID:"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)(g.ZP,{options:"",className:"product-depatment"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-2",children:(0,p.jsxs)("div",{className:"row d-none",children:[(0,p.jsx)("label",{htmlFor:"Department",className:"col-sm-4 col-form-label",children:"Amount"}),(0,p.jsx)("div",{className:"col-md-8",children:(0,p.jsx)("input",{className:"form-control",type:"text",name:"",placeholder:"0"})})]})}),(0,p.jsxs)("div",{className:"col-md-6 purchase-order-button-row mb-3",children:[(0,p.jsx)("button",{className:"save-btn btn btn-save d-none",disabled:$.status===q,children:"Receive Out Of Date"}),(0,p.jsx)(z.ZP,{to:[U.Z.inventory_poreceiveitems_yes],children:(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:$.status===q,onClick:function(){Je()},children:"Receive All"})}),(0,p.jsx)("button",{className:"save-btn btn btn-save",disabled:$.status===q||$.poType===F,onClick:function(){V().fire((0,l.Z)({title:"Closed purchase order may not be reopened.<br> Are you sure you would like to close this purchase order?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",focusConfirm:!1,showLoaderOnConfirm:!0,preConfirm:function(){return V().showLoading(),V().getTitle().hidden=!0,V().getCancelButton().hidden=!0,Q.W_(u,{Status:q}).then((function(e){s("/PurchaseOrder")})).catch()},focusCancel:!0},L.Z.SwalGlobalwithConfirm))},children:"Close"})]})]}),(0,p.jsx)("div",{className:"table-sm table-cm mt-0",children:(0,p.jsx)("div",{className:"react-bootstrap-table",children:(0,p.jsxs)("table",{className:"table m-0 table-sm scroll-table scroll-height-20",children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{style:{width:"3%"},children:"#"}),(0,p.jsx)("th",{style:{width:"10%"},children:"Product Barcode"}),(0,p.jsx)("th",{style:{width:"7%"},children:"StoreID"}),(0,p.jsx)("th",{style:{width:"12%"},children:"Product Name"}),(0,p.jsx)("th",{style:{width:"8.33%"},children:"Qty Ordered"}),(0,p.jsx)("th",{style:{width:"9%"},children:"Cases Ordered"}),(0,p.jsx)("th",{style:{width:"8.33%"},children:"Per Case"}),(0,p.jsx)("th",{style:{width:"7%"},children:"Cost"}),$.poType===F?(0,p.jsx)("th",{children:"Reason"}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)("th",{style:{width:"8.33%"},children:"ExtCost"}),(0,p.jsx)("th",{style:{width:"8%"},children:"Qty Recived"}),(0,p.jsx)("th",{style:{width:"7%"},children:"Damaged"}),(0,p.jsx)("th",{style:{width:"13%"},children:"Action"})]})}),(0,p.jsx)("tbody",{children:Ye().length?Ye().map((function(e,s){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{style:{width:"3%"},children:s+1}),(0,p.jsx)("td",{style:{width:"10%"},children:e.productCode}),(0,p.jsx)("td",{style:{width:"7%"},children:e.storeId}),(0,p.jsx)("td",{style:{width:"12%"},children:e.productDescription}),(0,p.jsx)("td",{style:{width:"8.33%"},children:e.qtyOdered}),(0,p.jsx)("td",{style:{width:"9%"},children:e.casesOrdered}),(0,p.jsx)("td",{style:{width:"8.33%"},children:e.perCase}),(0,p.jsx)("td",{style:{width:"7%"},children:e.costPer}),$.poType===F?(0,p.jsx)("td",{children:e.reason}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)("td",{style:{width:"8.33%"},children:e.extCost}),(0,p.jsx)("td",{style:{width:"8%"},children:e.qtyReceived}),(0,p.jsx)("td",{style:{width:"7%"},children:e.damaged}),(0,p.jsx)("td",{style:{width:"13%"},children:$.status!==q?(0,p.jsxs)("div",{className:"action-btn",children:[(0,p.jsx)("button",{className:"eye-icons-nw",onClick:function(){!function(e){console.log(e),ce(e),Ve(!0)}(e.productId)},children:(0,p.jsx)("span",{})}),(0,p.jsx)("button",{className:"edit-icons",onClick:function(){var e;e=s,Be((0,l.Z)((0,l.Z)({},D),{},{costPer:ie[e].costPer,type:ie[e].perCase>0?"casesOrdered":"",index:e})),Ze(!0)},children:(0,p.jsx)("span",{})}),(0,p.jsx)("button",{className:"delete-icons",onClick:function(e){var r;r=s,V().fire((0,l.Z)({title:"Are you sure you want to delete?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"},L.Z.SwalGlobalwithConfirm)).then((function(e){if(e.isConfirmed){var s=(0,c.Z)(ie);s.splice(r,1),oe(s)}else e.isDenied&&V().close()}))},children:(0,p.jsx)("span",{})}),(0,p.jsx)(z.ZP,{to:[U.Z.inventory_poreceiveitems_yes],children:(0,p.jsx)("button",{className:"receive-icons",onClick:function(r){fe((0,l.Z)((0,l.Z)({},T),{},{index:s,perCase:e.perCase})),e.casesOrdered>0?De(!0):Re(!0)},children:(0,p.jsx)("span",{})})})]}):(0,p.jsx)(p.Fragment,{})})]},s)})):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:"12",style:{textAlign:"center"},children:se?(0,p.jsx)(y._Y,{}):(0,p.jsx)(y.FB,{text:"No PurchaseOrder Found"})})})})]})})}),(0,p.jsxs)("div",{className:"row min-row total-cost-row mt-3 mb-3",children:[(0,p.jsx)("div",{className:"col-md-4"}),(0,p.jsx)("div",{className:"col-md-4 text-right",children:(0,p.jsx)("div",{className:"customer-dts",children:(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Total Cost Received:"})," ",ue.ttlReceived]})})}),(0,p.jsx)("div",{className:"col-md-4 text-right",children:(0,p.jsx)("div",{className:"customer-dts",children:(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Total Cost Ordered:"}),ue.ttlOrdered]})})})]}),(0,p.jsxs)("div",{className:"col-md-12 purchase-order-button-row mt-3 mb-3 d-none",children:[(0,p.jsx)("button",{className:"save-btn btn btn-save",children:"Receive Out Of Date"}),(0,p.jsx)(z.ZP,{to:[U.Z.inventory_poreceiveitems_yes],children:(0,p.jsx)("button",{className:"save-btn btn btn-save",onClick:function(){Je()},children:"Receive All"})})]})]})})})]})]})}),(0,p.jsxs)(b.Z,{show:Ce,className:"cm-popup table-cm modal-lg",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{children:"Edit Order"}),(0,p.jsx)(N.Z,{variant:"closepopup",onClick:We,children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)(b.Z.Body,{children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("div",{className:"margin-popup"}),$.poType===R?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"row mb-4",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Case Per Order"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"casesOrdered",id:"casesOrdered","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ee.casesOrdered,disabled:"casesOrdered"!==Ee.type,defaultValue:0,placeholder:"",onValueChange:function(e){Be((0,l.Z)((0,l.Z)({},Ee),{},{casesOrdered:e}))},allowDecimals:!0,decimalsLimit:"5"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Damaged"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"damagedQty",id:"damagedQty","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ee.newDamageQty,defaultValue:0,placeholder:"",onValueChange:function(e){Be((0,l.Z)((0,l.Z)({},Ee),{},{newDamageQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})})]}),(0,p.jsxs)("div",{className:"row mb-0",children:[(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Cost"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",prefix:"$",name:"costPer",id:"costPer","data-number-to-fixed":"5","data-number-stepfactor":"100",disabled:"casesOrdered"===Ee.type,value:Ee.costPer,defaultValue:0,placeholder:"",onValueChange:function(e){Be((0,l.Z)((0,l.Z)({},Ee),{},{costPer:e}))},allowDecimals:!0,decimalsLimit:"5"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6 d-none",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Qty Recived"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"newStock",id:"newStock","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ee.newReceivedQty,defaultValue:0,placeholder:"",onValueChange:function(e){Be((0,l.Z)((0,l.Z)({},Ee),{},{newReceivedQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})}),(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Order Qty"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"newStock",id:"newStock","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ee.reOrderQty,disabled:"casesOrdered"===Ee.type,defaultValue:0,placeholder:"",onValueChange:function(e){Be((0,l.Z)((0,l.Z)({},Ee),{},{reOrderQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})})]})]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"row mb-0",children:(0,p.jsx)("div",{className:"form-group col-md-6",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("label",{className:"col-sm-5 col-form-label",children:"Order Qty"}),(0,p.jsx)("div",{className:"col-md-7",children:(0,p.jsx)(H.Z,{className:"form-control",name:"newStock",id:"newStock","data-number-to-fixed":"5","data-number-stepfactor":"100",value:Ee.reOrderQty,defaultValue:0,placeholder:"",onValueChange:function(e){Be((0,l.Z)((0,l.Z)({},Ee),{},{reOrderQty:parseInt(e)}))},allowDecimals:!0,decimalsLimit:"5"})})]})})})}),(0,p.jsx)("div",{className:"margin-popup"})]})}),(0,p.jsx)(b.Z.Footer,{children:(0,p.jsx)(N.Z,{className:"save-btn",variant:"save",onClick:function(){!function(){var e=Object.assign({},Ee);$.poType===R?(ie[Ee.index].newReceivedQty+=parseFloat(e.newReceivedQty),ie[Ee.index].newDamageQty+=parseFloat(e.newDamageQty),"casesOrdered"===e.type?(ie[Ee.index].casesOrdered=parseFloat(e.casesOrdered),ie[Ee.index].casesOrdered>0&&(ie[Ee.index].reOrderQty=0,ie[Ee.index].qtyOdered=parseFloat(e.casesOrdered)*parseFloat(ie[Ee.index].perCase))):(ie[Ee.index].costPer=e.costPer,e.reOrderQty>0&&(ie[Ee.index].reOrderQty=0,ie[Ee.index].qtyOdered=parseFloat(e.reOrderQty)))):ie[Ee.index].qtyOdered=-1*parseFloat(e.reOrderQty),oe(ie),setTimeout((function(){Ge()}),1500),We()}()},children:"Update"})})]}),(0,p.jsxs)(b.Z,{show:Se,className:"inventory-popup buy-popup cm-popup modal-sm",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{children:"EACHES OR CASES?"}),(0,p.jsx)(N.Z,{variant:"closepopup",onClick:function(){De(!1)},children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)("div",{className:"popup-main-view-row",children:(0,p.jsxs)("div",{className:"btn-add",children:[(0,p.jsx)("button",{className:"btn-sm",onClick:function(){De(!1),Re(!0)},children:"EACHES"}),(0,p.jsx)("button",{className:"btn-sm",onClick:function(){fe((0,l.Z)((0,l.Z)({},ve),{},{type:"Cases"})),De(!1),Re(!0)},children:"CASES"})]})})]}),(0,p.jsxs)(b.Z,{show:Ie,className:"cm-popup table-cm modal-md",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{}),(0,p.jsx)(N.Z,{variant:"closepopup",onClick:function(){Re(!1)},children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)(b.Z.Body,{children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("div",{className:"margin-popup"}),(0,p.jsx)("div",{className:"row mb-4",children:(0,p.jsx)("div",{className:"form-group col-md-12",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("label",{className:"col-sm-12 col-form-label",children:[" ",ve.type]}),(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)(H.Z,{className:"form-control",name:"QtyReceived",id:"QtyReceived","data-number-to-fixed":"5","data-number-stepfactor":"100",value:ve.value,defaultValue:0,placeholder:"",onValueChange:function(e){fe((0,l.Z)((0,l.Z)({},ve),{},{value:e}))},allowDecimals:!0,decimalsLimit:"5"})}),(0,p.jsx)("div",{className:"col-md-4 mt-3",children:(0,p.jsx)(N.Z,{className:"save-btn",variant:"save",onClick:function(){ve.value>0?($.poType===F?ie[ve.index].newReceivedQty+=parseFloat(ve.value):$.poType===R&&("Qty"===ve.type?ie[ve.index].newReceivedQty+=parseFloat(ve.value):ie[ve.index].newReceivedQty+=parseFloat(ve.value)*parseFloat(ve.perCase)),oe(ie),Re(!1),setTimeout((function(){Ge()}),1500)):V().fire((0,l.Z)({title:"Qty is required."},L.Z.SwalGlobal))},children:"Update"})})]})})}),(0,p.jsx)("div",{className:"margin-popup"})]})})]}),(0,p.jsxs)(b.Z,{show:Ae,className:"cm-popup table-cm modal-md",children:[(0,p.jsx)(b.Z.Header,{children:(0,p.jsxs)(b.Z.Title,{children:[(0,p.jsx)("span",{children:"Product Summary"}),(0,p.jsx)(N.Z,{variant:"closepopup",onClick:function(){Ve(!1)},children:(0,p.jsx)(v.oHP,{style:{fontSize:"1.3020833333333333vw"}})})]})}),(0,p.jsx)(b.Z.Body,{children:(0,p.jsx)(B,{ProductId:de})})]})]})}}}]);
//# sourceMappingURL=687.8429f1ab.chunk.js.map