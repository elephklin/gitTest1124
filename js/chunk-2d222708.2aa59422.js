(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222708"],{cf2a:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"container my-5 order"},[t("div",{staticClass:"row justify-content-center"},[e._m(0),t("div",{staticClass:"col-md-6 my-5"},[t("div",{staticClass:"form-wrap"},[t("h4",{staticClass:"text-center py-2"},[e._v("顧客資料")]),t("form",{staticClass:"my-4 mx-auto"},[t("div",{staticClass:"form-group"},[e._m(1),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:e.form.user.name},on:{input:function(a){a.target.composing||e.$set(e.form.user,"name",a.target.value)}}}),e.errors.has("name")?t("span",{staticClass:"text-danger"},[e._v(" 必須輸入姓名 ")]):e._e()]),t("div",{staticClass:"form-group"},[e._m(2),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:10",expression:"'required|digits:10'"},{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("tel")},attrs:{type:"tel",id:"usertel",name:"tel",placeholder:"請輸入手機號碼"},domProps:{value:e.form.user.tel},on:{input:function(a){a.target.composing||e.$set(e.form.user,"tel",a.target.value)}}}),e.errors.has("tel")?t("span",{staticClass:"text-danger"},[e._v(" 請輸入 10 位數手機號碼 ")]):e._e()]),t("div",{staticClass:"form-group"},[e._m(3),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("email")},attrs:{type:"email",name:"email",id:"userEmail",placeholder:"請輸入 Email"},domProps:{value:e.form.user.email},on:{input:function(a){a.target.composing||e.$set(e.form.user,"email",a.target.value)}}}),e.errors.has("email")?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),t("div",{staticClass:"form-group"},[e._m(4),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:e.form.user.address},on:{input:function(a){a.target.composing||e.$set(e.form.user,"address",a.target.value)}}}),e.errors.has("address")?t("span",{staticClass:"text-danger"},[e._v(" 地址欄位不得留空 ")]):e._e()]),t("div",{staticClass:"payments my-5"},[t("div",{staticClass:"h6"},[e._v(" 付款方式： "),t("span",{staticClass:"text-danger"},[e._v("(必填)")]),e.errors.has("payment")?t("span",{staticClass:"text-danger mt-2"},[e._v(" 尚未選擇付款方式 ")]):e._e()]),t("div",{staticClass:"form-check form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payment_method,expression:"form.payment_method"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-check-input",class:{"is-invalid":e.errors.has("payment")},attrs:{type:"radio",name:"payment",id:"shopPay",value:"shopPay"},domProps:{checked:e._q(e.form.payment_method,"shopPay")},on:{change:function(a){return e.$set(e.form,"payment_method","shopPay")}}}),t("label",{staticClass:"form-check-label",attrs:{for:"shopPay"}},[e._v(" 超商代碼繳費 ")])]),t("div",{staticClass:"form-check form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payment_method,expression:"form.payment_method"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-check-input",class:{"is-invalid":e.errors.has("payment")},attrs:{type:"radio",name:"payment",id:"cardPay",value:"cardPay"},domProps:{checked:e._q(e.form.payment_method,"cardPay")},on:{change:function(a){return e.$set(e.form,"payment_method","cardPay")}}}),t("label",{staticClass:"form-check-label",attrs:{for:"cardPay"}},[e._v(" 信用卡刷卡 ")])]),t("div",{staticClass:"form-check form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payment_method,expression:"form.payment_method"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-check-input",class:{"is-invalid":e.errors.has("payment")},attrs:{type:"radio",name:"payment",id:"cashPay",value:"cashPay"},domProps:{checked:e._q(e.form.payment_method,"cashPay")},on:{change:function(a){return e.$set(e.form,"payment_method","cashPay")}}}),t("label",{staticClass:"form-check-label",attrs:{for:"cashPay"}},[e._v(" 郵局貨到付款 ")])])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"comment"}},[e._v("留言")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:e.form.message},on:{input:function(a){a.target.composing||e.$set(e.form,"message",a.target.value)}}})]),t("div",{staticClass:"d-flex justify-content-between mt-5"},[t("router-link",{staticClass:"btn btn-outline-major",attrs:{to:"/cart"}},[e._v("上一步")]),t("button",{staticClass:"btn btn-other",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),e.creatOrder(a)}}},[e._v("送出訂單")])],1)])])])])])])},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-md-10"},[t("div",{staticClass:"row justify-content-around process_style"},[t("div",{staticClass:"col-md-3 p-2 rounded-pill process_undone text-center"},[e._v(" 1.購物車內容 ")]),t("div",{staticClass:"col-md-3 p-2 rounded-pill process_now text-center my-3 my-md-0"},[e._v(" 2.訂單填寫 ")]),t("div",{staticClass:"col-md-3 p-2 rounded-pill process_undone text-center"},[e._v(" 3.結帳 ")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{attrs:{for:"username"}},[e._v(" 收件人姓名 "),t("span",{staticClass:"text-danger"},[e._v("(必填)")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{attrs:{for:"usertel"}},[e._v(" 收件人手機號碼 "),t("span",{staticClass:"text-danger"},[e._v("(必填)")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{attrs:{for:"userEmail"}},[e._v(" Email "),t("span",{staticClass:"text-danger"},[e._v("(必填)")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("label",{attrs:{for:"useraddress"}},[e._v(" 收件人地址 "),t("span",{staticClass:"text-danger"},[e._v("(必填)")])])}],o=(t("99af"),{data:function(){return{isLoading:!1,cart:{carts:{}},form:{user:{name:"",email:"",tel:"",address:""},message:"",payment_method:""}}},methods:{getCart:function(){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("elephklin","/cart");e.isLoading=!0,e.$http.get(a).then((function(a){a.data.success&&(e.cart=a.data.data,e.isLoading=!1)}))},creatOrder:function(){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("elephklin","/order");e.$validator.validate().then((function(t){t&&e.$http.post(a,{data:e.form}).then((function(a){a.data.success?(e.$bus.$emit("change_cart"),e.$router.push("/checkout/".concat(a.data.orderId))):e.$bus.$emit("message:push","欄位不得為空","danger")}))}))}},created:function(){var e=this;e.getCart()}}),i=o,n=t("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d222708.2aa59422.js.map