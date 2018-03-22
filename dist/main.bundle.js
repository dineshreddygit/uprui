webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_profile_customer_profile_component__ = __webpack_require__("./src/app/customer-profile/customer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_create_profile_customer_create_profile_component__ = __webpack_require__("./src/app/customer-create-profile/customer-create-profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'customerprofile', pathMatch: 'full' },
    { path: 'customerprofile', component: __WEBPACK_IMPORTED_MODULE_2__customer_profile_customer_profile_component__["a" /* CustomerProfileComponent */] },
    { path: 'customerprofile/createcustomer', component: __WEBPACK_IMPORTED_MODULE_3__customer_create_profile_customer_create_profile_component__["a" /* CustomerCreateProfileComponent */] },
    { path: 'editcustomer/:cId/:gId', component: __WEBPACK_IMPORTED_MODULE_3__customer_create_profile_customer_create_profile_component__["a" /* CustomerCreateProfileComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 20px;\">\r\n\t<nav class=\"navbar navbar-inverse\">\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<div class=\"navbar-header\">\r\n\t\t\t\t<img class=\"navbar-brand\" src=\"assets/images/UPSlogo.gif\">\r\n\t\t\t</div>\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t<a href=\"#\" >\r\n\t\t\t\t\t\t<strong>UPR Customer Profile</strong>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-11 text-center\">Existing Customers and Groups</div>\r\n\t\t\r\n\t  </div>\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_profile_customer_profile_component__ = __webpack_require__("./src/app/customer-profile/customer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_create_profile_customer_create_profile_component__ = __webpack_require__("./src/app/customer-create-profile/customer-create-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_customer_edit_customer_component__ = __webpack_require__("./src/app/edit-customer/edit-customer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__customer_profile_customer_profile_component__["a" /* CustomerProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__customer_create_profile_customer_create_profile_component__["a" /* CustomerCreateProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__edit_customer_edit_customer_component__["a" /* EditCustomerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/customer-create-profile/customer-create-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".striped {\r\n\tbackground-color: #e4e6e9;\r\n}\r\n.blue{\r\n\tcolor: #42a4f4;\r\n}\r\nbody.border{\r\n\tborder: 1px solid black;\r\n\theight: 600px;\r\n}\r\n\r\n.margin-top-35 {\r\n\tmargin-top: 35px\r\n}\r\n.margin-top-5 {\r\n\tmargin-top: 5px\r\n}\r\n.required:after {\r\n\tcontent:\"*\";\r\n\tcolor:red;\r\n  }\r\n.highlight{\r\n\tbackground-color: #42a4f4;\r\n}\r\n.table-overflow{\r\n\theight: 220px;\r\n\tborder:1px solid black;\r\n\toverflow-x: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/customer-create-profile/customer-create-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-1\">\n      <button class=\"btn btn-primary btn-xs\" routerLink=\"/customerprofile\">\n        <span class=\"glyphicon glyphicon-arrow-left\"></span>\n      </button>\n    </div>\n    <div class=\"col-md-11 text-center\">UPR Customer Account Setup</div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading text-center\">Account Numbers and Roles</div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <label class=\"required\">\n            Customer Name</label>\n          <input type=\"text\" class=\"form-control\" max=\"35\" [(ngModel)]=\"customer.customerName\" />\n\n          <label class=\"required\">\n            Group Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.groupName\" max=\"35\"/>\n          <label class=\"required\">Account Country</label>\n          <select class=\"form-control\" [(ngModel)]=\"customer.country\">\n            <option [ngValue]=\"country.key\" *ngFor=\"let country of countryList\">{{country.value}}</option>\n          </select>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label class=\"required\">\n                Account Numbers</label>\n              <textarea class=\"form-control\" [(ngModel)]=\"customer.accountNumbers\"></textarea>\n              <button class=\"btn btn-success btn-xs\" (click)=\"validate()\">\n                <span class=\"glyphicon glyphicon-ok\"></span> Validate\n              </button>\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"required\">\n                Roles</label>\n              <div class=\"form-group\">\n                <div class=\"form-check\" *ngFor=\"let role of roles\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\" [(ngModel)]=\"role.isCheck\" (click)=\"getRecord(role,'role')\">\n                  <span class=\"form-check-label\" for=\"gridCheck\">\n                    {{role.value}}\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"col-md-4\">\n            <label class=\"required\">Start Date</label>\n\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"customer.effectiveStartDate\" [min]=\"customer.effectiveStartDate\"/>\n            <label class=\"required\">Group Work Category</label>\n            <select class=\"form-control\" [(ngModel)]=\"customer.grpCategory\">\n              <option [ngValue]=\"category.key\" *ngFor=\"let category of groupWorkCategoryList\">{{category.value}}</option>\n            </select>\n          </div>\n          <div class=\"col-md-4\">\n            <label class=\"required\">End Date</label>\n            <input class=\"form-control alert-input date-input\" name=\"dob\" [min]=\"customer.effectiveStartDate\" type=\"date\" [ngModel]=\"customer.effectiveEndDate | date:'y-MM-dd'\"\n              (ngModelChange)=\"customer.effectiveEndDate = $event\" name=\"effectiveEndDate\">\n            <label class=\"required\">Group Type</label>\n            <select class=\"form-control\" [(ngModel)]=\"customer.grpType\">\n              <option [ngValue]=\"groupType.key\" *ngFor=\"let groupType of groupTypeList\">{{groupType.value}}</option>\n            </select>\n          </div>\n          <div class=\"col-md-4\">\n            <label class=\"required\">\n              Assign to Site</label>\n            <div class=\"form-group\">\n              <div class=\"form-check\" *ngFor=\"let site of assignToSite\">\n                <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"site.isCheck\" (click)=\"getRecord(site,'assignsite')\">\n                <span class=\"form-check-label\" for=\"gridCheck\">\n                  {{site.name}}\n                </span>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"accounts?.length > 0\">\n            <span class=\"text-center\">Valid Account Numbers</span>\n\n            <table class=\"table table-striped\">\n              <thead>\n                <th>Account Number</th>\n                <th>Country</th>\n                <th>Role</th>\n                <th>Par Type</th>\n                <th>Actions</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let account of accounts\">\n                  <td>{{account.accountNumber}}\n                    <span>\n                      <input type=\"checkbox\" [(ngModel)]=\"account.accountExist\" class=\"pull-right\" (click)=\"getAccountToRemove(account,account.accountExist)\">\n                    </span>\n                  </td>\n                  <td>United States</td>\n                  <td>{{account.roleCode}}</td>\n                  <td>{{account.parType}}</td>\n                  <td><span class=\"glyphicon glyphicon-trash\" (click)=\"deleteAccount(account)\"></span></td>\n                </tr>\n\n              </tbody>\n            </table>\n            <label>Select All\n              <input type=\"checkbox\" [(ngModel)]=\"toggleSelectAll\" (click)=\"getAllAccountsSelected(toggleSelectAll,accounts)\">\n            </label>\n            <button class=\"btn btn-danger btn-xs\" (click)=\"removeAccountNumberSelected(accounts)\">\n              <span class=\"glyphicon glyphicon-remove\"></span>Remove Selected</button>\n\n          </div>\n          <div class=\"row\" *ngIf=\"invalidaccounts?.length > 0\">\n            <span class=\"text-center\">Invalid Account Numbers</span>\n\n            <table class=\"table table-striped\">\n              <thead>\n                <th>Account Number</th>\n                <th>Country</th>\n                <th>Role</th>\n                <th>Par Type</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let account of invalidaccounts\">\n                  <td>{{account.accountNumber}}</td>\n                  <td>United States</td>\n                  <td>{{account.roleCode}}</td>\n                  <td>{{account.parType}}</td>\n                </tr>\n\n              </tbody>\n            </table>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer text-center\">Risk Monitoring Rules Setup</div>\n  </div>\n  <div class=\"panel panel-default\">\n\n    <div class=\"row text-center margin-top-35\">\n      <label>At Risk Monitoring Rules</label>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-offset-3 col-md-3\">\n          <div class=\"row text-center\">\n            <label>Not Monitored</label>\n          </div>\n          <div class=\"table-overflow\">\n            <table style=\"max-height:300px\">\n              <tr *ngFor=\"let monitor of riskNotMonitoredList,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(monitor)\"\n              [class.highlight]=\"monitor.selected\">\n                <td (click)=\"getRecordFromTable(monitor,'remove')\">{{monitor.value}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-md-1\">\n          <p>\n            <button class=\"btn btn-primary margin-top-35\" (click)=\"remove('monitoring',riskNotMonitoredList)\">\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            </button>\n          </p>\n          <p>\n            <button class=\"btn btn-primary margin-top-5\" (click)=\"removeAll('monitoring',riskNotMonitoredList)\">\n              <span class=\"glyphicon glyphicon-forward\"></span>\n            </button>\n          </p>\n          <p>\n            <button class=\"btn btn-primary margin-top-5\" (click)=\"add('monitoring',monitoringRules,riskNotMonitoredList)\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </button>\n          </p>\n          <p>\n            <button class=\"btn btn-primary margin-top-5\" (click)=\"addAll('monitoring',monitoringRules)\">\n              <span class=\"glyphicon glyphicon-backward\"></span>\n            </button>\n          </p>\n        </div>\n        <div class=\"col-md-3 \">\n          <div class=\"row text-center\">\n            <label>Monitored</label>\n          </div>\n\n          <div  class=\"table-overflow\">\n            <table style=\"max-height:300px\">\n              <tr *ngFor=\"let monitor of monitoringRules,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(monitor)\"\n                [class.highlight]=\"monitor.selected\">\n                <td (click)=\"getRecordFromTable(monitor,'remove')\">{{monitor.value}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row text-center margin-top-35\">\n        <label>At Risk Exceptions</label>\n      </div>\n      <div class=\"row text-center margin-top-5\">\n        <div class=\"col-md-offset-3 col-md-3\">\n          <label>Exception Category</label>\n          <select class=\"form-control\" [(ngModel)]=\"customer.exceptionCategoryCode\">\n            <option [ngValue]=\"category.dataCode\" *ngFor=\"let category of exceptionslist.exceptionCategoryCode\">\n              {{category.categoryDescription}}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-offset-3 col-md-3\">\n          <div class=\"row text-center\">\n            <label>Not Monitored</label>\n          </div>\n          <div  class=\"table-overflow\">\n              <table style=\"max-height:300px\">\n                  <tr *ngFor=\"let exception of notExceptionsMonitorlist,let i = index\" (click)=\"hightlightRiskMonitored(exception)\">\n                    <td (click)=\"getRecordFromTable(exception,'remove')\">{{exception.exceptionRsnCde}} {{exception.exceptionDecCode}}</td>\n                  </tr>\n                </table>\n          </div>\n        </div>\n        <div class=\"col-md-1\">\n          <p>\n            <button class=\"btn btn-primary margin-top-35\" (click)=\"add('riskException',notExceptionsMonitorlist)\">\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            </button>\n          </p>\n          <p>\n            <button class=\"btn btn-primary margin-top-5\" (click)=\"addAll('riskException',notExceptionsMonitorlist)\">\n              <span class=\"glyphicon glyphicon-forward\"></span>\n            </button>\n          </p>\n          <p>\n            <button class=\"btn btn-primary margin-top-5\" (click)=\"remove('riskException',exceptionMonitors,notExceptionsMonitorlist)\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </button>\n          </p>\n          <p>\n            <button class=\"btn btn-primary margin-top-5\" (click)=\"removeAll('riskException',exceptionMonitors)\">\n              <span class=\"glyphicon glyphicon-backward\"></span>\n            </button>\n          </p>\n        </div>\n        <div class=\"col-md-3 \">\n          <div class=\"row text-center\">\n            <label>Monitored</label>\n          </div>\n\n          <div  class=\"table-overflow\">\n              <table style=\"max-height:300px\">\n                  <tr *ngFor=\"let exception of exceptionMonitors,let i = index\" (click)=\"hightlightRiskMonitored(exception)\">\n                    <td (click)=\"getRecordFromTable(exception,'remove')\">{{exception.exceptionRsnCde}} {{exception.exceptionDecCode}}</td>\n                  </tr>\n                </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer text-center\">Group Details Setup</div>\n    <div class=\"panel-body\">\n      <section class=\"row margin-top-5\">\n        <section class=\"col-md-offset-1 col-md-2\">\n          <label>Package Movement Type</label>\n          <select class=\"form-control\" [(ngModel)]=\"customer.pkmgmvtType\">\n            <option *ngFor=\"let movement of packageMovementTypeList\" [ngValue]=\"movement.key\">{{movement.value}}</option>\n          </select>\n        </section>\n        <section class=\" col-md-2\">\n          <label>Hazmat</label>\n          <select class=\"form-control\" [(ngModel)]=\"customer.hazmat\">\n            <option [ngValue]=\"hazmat.key\" *ngFor=\"let hazmat of hazmatList\">{{hazmat.value}}</option>\n          </select>\n        </section>\n        <section class=\"col-md-3\">\n          <label>Declared Value Currency Code</label>\n          <select class=\"form-control\" [(ngModel)]=\"customer.dclcurr\" disabled>\n            <option [ngValue]=\"currency.key\" *ngFor=\"let currency of currencyList\">{{currency.value}}</option>\n          </select>\n        </section>\n        <section class=\"col-md-2\">\n          <label>Declared Value Amount</label>\n          <input class=\"form-control\" disabled [(ngModel)]=\"customer.dclval\">\n        </section>\n      </section>\n      <section class=\"row margin-top-5\">\n        <section class=\"col-md-6\">\n          <section class=\"row text-center\">\n            <label>UPS Service Types</label>\n          </section>\n          <div class=\"col-md-5\">\n            <div  class=\"table-overflow\">\n              <table style=\"max-height:300px\">\n                  <tr *ngFor=\"let service of services,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(service)\"\n                    [class.highlight]=\"service.selected\">\n                    <td (click)=\"getRecordFromTable(service,'remove')\">{{service.serviceType}}</td>\n                  </tr>\n                </table>\n            </div>\n          </div>\n          <div class=\"col-md-1\">\n              <p>\n                  <button class=\"btn btn-primary margin-top-35\" (click)=\"add('servicetype',services,notServices)\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"addAll('servicetype',services)\">\n                    <span class=\"glyphicon glyphicon-forward\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"remove('servicetype',notServices)\">\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"removeAll('servicetype',notServices)\">\n                    <span class=\"glyphicon glyphicon-backward\"></span>\n                  </button>\n                </p>\n          </div>\n          <div class=\"col-md-5\">\n              <div  class=\"table-overflow\">\n                  <table style=\"max-height:300px\">\n                      <tr *ngFor=\"let service of notServices,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(service)\"\n                        [class.highlight]=\"service.selected\">\n                        <td (click)=\"getRecordFromTable(service,'remove')\">{{service.serviceType}}</td>\n                      </tr>\n                    </table>\n                </div>\n          </div>\n        </section>\n        <section class=\"col-md-6\">\n          <section class=\"row text-center\">\n            <label>Manifest Day Of Week</label>\n          </section>\n          <div class=\"col-md-5\">\n              <div  class=\"table-overflow\">\n              <table style=\"max-height:300px\">\n                  <tr *ngFor=\"let day of daysList,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(day)\"\n                    [class.highlight]=\"day.selected\">\n                    <td (click)=\"getRecordFromTable(day,'remove')\">{{day.value}}</td>\n                  </tr>\n                </table>\n                </div>\n          </div>\n          <div class=\"col-md-1\">\n              <p>\n                  <button class=\"btn btn-primary margin-top-35\" (click)=\"add('daylist',daysList,notDaysList)\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"addAll('daylist',daysList)\">\n                    <span class=\"glyphicon glyphicon-forward\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"remove('daylist',notDaysList)\">\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"removeAll('daylist',notDaysList)\">\n                    <span class=\"glyphicon glyphicon-backward\"></span>\n                  </button>\n                </p>\n          </div>\n          <div class=\"col-md-5\">\n              <div  class=\"table-overflow\">\n                  <table style=\"max-height:300px\">\n                      <tr *ngFor=\"let day of notDaysList,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(day)\"\n                        [class.highlight]=\"day.selected\">\n                        <td (click)=\"getRecordFromTable(day,'remove')\">{{day.value}}</td>\n                      </tr>\n                    </table>\n                </div>\n          </div>\n        </section>\n      </section>\n      <section class=\"row margin-top-5\">\n        <section class=\"col-md-6\">\n          <section class=\"row text-center\">\n            <label>Accessorial vs Accessorial Spreadsheet</label>\n          </section>\n          <div class=\"col-md-5\">\n            <div  class=\"table-overflow\">\n                <table style=\"max-height:300px\">\n                    <tr *ngFor=\"let accesorial of accessorials,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(accesorial)\"\n                      [class.highlight]=\"accesorial.selected\">\n                      <td (click)=\"getRecordFromTable(accesorial,'remove')\">{{accesorial.accessorialType}}</td>\n                    </tr>\n                  </table>\n              </div>\n          </div>\n          <div class=\"col-md-1\">\n              <p>\n                  <button class=\"btn btn-primary margin-top-35\" (click)=\"add('accessorials',accessorials,notAccessorials)\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"addAll('accessorials',accessorials)\">\n                    <span class=\"glyphicon glyphicon-forward\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"remove('accessorials',notAccessorials)\">\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"removeAll('accessorials',notAccessorials)\">\n                    <span class=\"glyphicon glyphicon-backward\"></span>\n                  </button>\n                </p>\n          </div>\n          <div class=\"col-md-5\">\n              <div  class=\"table-overflow\">\n                  <table style=\"max-height:300px\">\n                      <tr *ngFor=\"let accesorial of notAccessorials,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(accesorial)\"\n                        [class.highlight]=\"accesorial.selected\">\n                        <td (click)=\"getRecordFromTable(accesorial,'remove')\">{{accesorial.accessorialType}}</td>\n                      </tr>\n                    </table>\n                </div>\n          </div>\n        </section>\n        <section class=\"col-md-6\">\n\n          <section class=\"row text-center\">\n            <label>Shipment Charge Type</label>\n          </section>\n          <div class=\"col-md-5\">\n            <div  class=\"table-overflow\">\n              <table style=\"max-height:300px\">\n                  <tr *ngFor=\"let shipment of shipmentCharges,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(shipment)\"\n                    [class.highlight]=\"shipment.selected\">\n                    <td (click)=\"getRecordFromTable(shipment,'remove')\">{{shipment.shipmentChargeType}}</td>\n                  </tr>\n                </table>\n            </div>\n          </div>\n          <div class=\"col-md-1\">\n              <p>\n                  <button class=\"btn btn-primary margin-top-35\" (click)=\"add('shipmentCharge',shipmentCharges,notShipmentCharges)\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"addAll('shipmentCharge',shipmentCharges)\">\n                    <span class=\"glyphicon glyphicon-forward\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"remove('shipmentCharge',notShipmentCharges)\">\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </button>\n                </p>\n                <p>\n                  <button class=\"btn btn-primary margin-top-5\" (click)=\"removeAll('shipmentCharge',notShipmentCharges)\">\n                    <span class=\"glyphicon glyphicon-backward\"></span>\n                  </button>\n                </p>\n          </div>\n          <div class=\"col-md-5\">\n            <div  class=\"table-overflow\">\n                <table style=\"max-height:300px\">\n                    <tr *ngFor=\"let shipment of notShipmentCharges,let i = index\" [attr.data-selected]=\"false\" (click)=\"hightlightRiskMonitored(shipment)\"\n                      [class.highlight]=\"shipment.selected\">\n                      <td (click)=\"getRecordFromTable(shipment,'remove')\">{{shipment.shipmentChargeType}}</td>\n                    </tr>\n                  </table>\n            </div>\n          </div>\n        </section>\n      </section>\n    </div>\n    <div class=\"panel-footer text-center\">Commit and End of Day Override Time</div>\n\n    <div class=\"panel-body\">\n      <div class=\"row text-center\">\n        <i class=\"text-danger\">Please Select both hours and minutes for the services that require override time</i>\n      </div>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th></th>\n            <th colspan=\"2\">Commit Override Time</th>\n            <th colspan=\"2\">End of Day Override Time</th>\n          </tr>\n          <tr>\n            <th class=\"text-center\">Service Type</th>\n            <th colspan=\"2\" class=\"text-center\">Hours:Minutes</th>\n            <th colspan=\"2\" class=\"text-center\">Hours:Minutes</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let service of notServices\">\n            <td>{{service.serviceType}}</td>\n            <td>\n              <select class=\"form-control\" [(ngModel)]=\"service.cHour\">\n                <option [ngValue]=\"hour\" *ngFor=\"let hour of hoursList\">{{hour}}</option>\n              </select>\n            </td>\n            <td>\n              <select class=\"form-control\" [(ngModel)]=\"service.cMin\">\n                <option [ngValue]=\"minute\" *ngFor=\"let minute of minutesList\">{{minute}}</option>\n              </select>\n            </td>\n            <td>\n              <select class=\"form-control\" [(ngModel)]=\"service.eHour\">\n                <option [ngValue]=\"hour\" *ngFor=\"let hour of hoursList\">{{hour}}</option>\n              </select>\n            </td>\n            <td>\n              <select class=\"form-control\" [(ngModel)]=\"service.eMin\">\n                <option [ngValue]=\"minute\" *ngFor=\"let minute of minutesList\">{{minute}}</option>\n              </select>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n    <div class=\"panel-footer text-center\">\n      Reference NUmber Setup\n    </div>\n    <div class=\"panel-body\">\n      <!-- Package Reference Number Starts -->\n\n      <section class=\"row\" *ngFor=\"let reference of packageReferenceList\">\n        <section class=\"col-md-offset-3 col-md-6\">\n          <div>\n            <label>{{reference.label}}</label>\n          </div>\n          <div class=\"row margin-top-5\" *ngFor=\"let ref of reference.inputs\">\n            <div class=\"col-md-4\">\n              <select class=\"form-control\" [(ngModel)]=\"ref.select\">\n                <option [ngValue]=\"package.key\" *ngFor=\"let package of packageShipmentReference\">{{package.value}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" [(ngModel)]=\"ref.input\" [attr.disabled] = \"ref.select != '' ? null : 'disabled'\"/>\n            </div>\n          </div>\n        </section>\n      </section>\n\n      <!-- Package Reference Number Ends -->\n\n      <div class=\"text-center margin-top-35\">\n        <button class=\"btn btn-danger btn-xs\">\n          <span class=\"glyphicon glyphicon-remove\"></span> Cancel</button>\n        <button class=\"btn btn-success btn-xs\" (click)=\"submit()\">\n          <span class=\"glyphicon glyphicon-ok\"></span> Submit</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer-create-profile/customer-create-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer__ = __webpack_require__("./src/app/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCreateProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerCreateProfileComponent = (function () {
    function CustomerCreateProfileComponent(http, dataService, router, route) {
        this.http = http;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.assignToSite = [{
                "isCheck": false,
                "name": "Clark"
            }, {
                "isCheck": false,
                "name": "Dublin"
            }, {
                "isCheck": false,
                "name": "Newport News"
            }, {
                "isCheck": false,
                "name": "Tampa"
            }, {
                "isCheck": false,
                "name": "Tucson"
            }, {
                "isCheck": false,
                "name": "Las Vegas"
            }];
        this.roles = [{
                "isCheck": false,
                "key": "15",
                "value": "FREIGHT COLLECTOR"
            }, {
                "isCheck": false,
                "key": "01",
                "value": "SHIPPER"
            }, {
                "isCheck": false,
                "key": "05",
                "value": "SHIPPER THIRD PARTY"
            }, {
                "isCheck": false,
                "key": "06",
                "value": "CONSIGNEE THIRD PARTY"
            }];
        this.groupWorkCategoryList = [{
                "key": "00",
                "value": "Select"
            }, {
                "key": "01",
                "value": "Entry Level"
            }, {
                "key": "02",
                "value": "Mid Level"
            }, {
                "key": "03",
                "value": "Complex Level"
            }];
        this.hazmatList = [{
                "key": "1",
                "value": "Yes"
            }, {
                "key": "0",
                "value": "No"
            }];
        this.packageMovementTypeList = [{
                "key": "0",
                "value": "Both"
            }, {
                "key": "1",
                "value": "Forward"
            }, {
                "key": "2",
                "value": "Return"
            }];
        this.packageShipmentReference = [{
                "key": "01",
                "value": "Anything"
            }, {
                "key": "02",
                "value": "Contains"
            }, {
                "key": "03",
                "value": "Starts With"
            }, {
                "key": "04",
                "value": "Is"
            }];
        this.customer = new __WEBPACK_IMPORTED_MODULE_3__customer__["a" /* Customer */]();
        this.accounts = [];
        this.services = [];
        this.accessorials = [];
        this.shipmentCharges = [];
        this.monitoringRules = [];
        this.riskExceptions = [];
        this.invalidaccounts = [];
        this.gId = "";
        this.cId = "";
        this.currencyList = [];
        this.groupTypeList = [];
        this.riskMonitoringList = [];
        this.daysList = [];
        this.accountNumbers = {};
        this.shipmentChargeType = [];
        this.rolesSelected = [];
        this.countryList = [];
        this.assignSitesSelected = [];
        this.riskNotMonitoredList = [];
        this.packageReferenceList = [];
        this.notServices = [];
        this.notDaysList = [];
        this.notAccessorials = [];
        this.notShipmentCharges = [];
        this.copyrecords = [];
        this.hoursList = [];
        this.minutesList = [];
        this.exceptionslist = [];
        this.tempRiskMonitored = [];
        this.notExceptionsMonitorlist = [];
        this.accountNumberText = "";
        this.rolesAccountsSelectedText = "";
        this.selectedMonitored = {};
        this.toggleSelectAll = false;
        this.accountNumbersSlected = [];
        this.today = new Date().toJSON().split('T')[0];
        this.exceptionMonitors = [];
    }
    CustomerCreateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getLocalJson('./assets/mock-data/currency.json').then(function (currency) { return _this.currencyList = currency; });
        this.dataService.getLocalJson('./assets/mock-data/groupType.json').then(function (groupType) { return _this.groupTypeList = groupType; });
        this.dataService.getLocalJson('./assets/mock-data/riskMonitoringRules.json').then(function (riskMonitoring) { return _this.monitoringRules = riskMonitoring; });
        this.dataService.getLocalJson('./assets/mock-data/minutes.json').then(function (minutes) { return _this.minutesList = minutes; });
        this.dataService.getLocalJson('./assets/mock-data/hours.json').then(function (hours) { return _this.hoursList = hours; });
        this.dataService.getLocalJson('./assets/mock-data/country.json').then(function (countries) { return _this.countryList = countries; });
        this.dataService.getLocalJson('./assets/mock-data/accessorialServiceType.json').then(function (accessorial) { return _this.accessorials = accessorial; });
        this.dataService.getLocalJson('./assets/mock-data/days.json').then(function (days) { return _this.daysList = days; });
        this.dataService.getLocalJson('./assets/mock-data/shipmentCharge.json').then(function (shipmentCharge) { return _this.shipmentCharges = shipmentCharge; });
        this.dataService.getLocalJson('./assets/mock-data/serviceType.json').then(function (services) { return _this.services = services; });
        this.dataService.getLocalJson('./assets/mock-data/package-reference.json').then(function (references) { return _this.packageReferenceList = references; });
        /* Params */
        this.route.params.subscribe(function (params) {
            _this.cId = params['cId'];
            _this.gId = params['gId'];
        });
        if (this.cId !== undefined && this.gId !== undefined) {
            this.dataService.getCustomersBycIdgId(this.cId, this.gId)
                .then(function (res) {
                //populate values default when edit
                _this.setEditMode(res);
            });
        }
        /** Exception Category */
        var tempJson = {
            "languageCode": "001"
        };
        this.dataService.postRequest(tempJson, 'exceptionslist')
            .then(function (res) {
            _this.exceptionslist = res;
            _this.setExceptionList(res);
        });
        this.setDefaultValues();
    };
    CustomerCreateProfileComponent.prototype.setExceptionList = function (exceptions) {
        this.exceptionMonitors = exceptions.exceptionReasonCode;
    };
    CustomerCreateProfileComponent.prototype.setDefaultValues = function () {
        this.customer.effectiveStartDate = new Date().toISOString().split('T')[0];
        this.customer.effectiveEndDate = new Date(2999, 11, 31).toISOString().split('T')[0];
        this.customer.grpType = "00";
        this.customer.grpCategory = "00";
        this.customer.exceptionCategoryCode = 0;
        this.customer.hazmat = "0";
        this.customer.pkmgmvtType = "1";
        this.customer.country = "US";
    };
    CustomerCreateProfileComponent.prototype.setEditMode = function (customer) {
        this.customer = customer.rS1[0];
        this.accounts = customer.rS2;
        this.services = customer.rS3;
        this.accessorials = customer.rS4;
        this.shipmentCharges = customer.rS5;
        this.monitoringRules = customer.rS7;
    };
    CustomerCreateProfileComponent.prototype.validate = function () {
        var _this = this;
        var listOfAccounts = [];
        var errorMessageString = "", errorMessageList = [];
        if (this.customer.customerName == null) {
            errorMessageList.push('Customer Name');
        }
        if (this.customer.groupName == null) {
            errorMessageList.push('Group Name');
        }
        if (this.customer.effectiveStartDate == null) {
            errorMessageList.push('Start Date');
        }
        if (this.customer.effectiveEndDate == null) {
            errorMessageList.push('End Date');
        }
        if (this.customer.country == null) {
            errorMessageList.push('Country');
        }
        if (this.customer.accountNumbers == null) {
            errorMessageList.push('Account Numbers');
        }
        /*if(!this.customer.assignToSite.length){
          errorMessageList.push('Assign To Site');
        }
        if(!this.customer.roles.length){
          errorMessageList.push('Roles');
        }*/
        if (this.customer.customerName != null && this.customer.groupName &&
            this.customer.effectiveStartDate != null && this.customer.effectiveEndDate &&
            this.customer.grpType != null && this.customer.grpCategory &&
            this.customer.country != null && this.customer.accountNumbers &&
            this.customer.assignToSite.length != 0 && this.customer.roles.length != 0) {
            var str = this.customer.accountNumbers;
            if (str.indexOf(',') > -1) {
                str = str.substring(0, str.length - 1);
                var str_array = str.split(',');
                listOfAccounts = this.SplitTheString(str);
            }
            else {
                listOfAccounts.push(str);
            }
            console.log(listOfAccounts);
            for (var i = 0; i < listOfAccounts.length; i++) {
                for (var j = 0; j < this.customer.roles.length; j++) {
                    this.accountNumberText += "" + listOfAccounts[i] + "" + this.customer.roles[j].key;
                }
            }
            var tempJson = {
                "accountsList": this.accountNumberText,
                "countryCode": this.customer.country
            };
            this.dataService.postRequest(tempJson, 'accountsvalidation')
                .then(function (res) {
                _this.setAccountTableList(res, listOfAccounts, _this.customer.roles);
                _this.toggleSelectAll = false;
                _this.customer.accountNumbers = "";
                _this.customer.roles = [];
                _this.rolesSelected = [];
                //this.roles = [];n
                for (var i = 0; i < _this.roles.length; i++) {
                    _this.roles[i].isCheck = false;
                }
            });
        }
        else {
            //this.accountNumbers = 0;
            for (var i = 0; i < errorMessageList.length; i++) {
                errorMessageString += errorMessageList[i] + ",";
            }
            alert("Please enter the " + errorMessageString + " fields");
        }
    };
    CustomerCreateProfileComponent.prototype.setAccountTableList = function (accountList, listOfAcc, roleSelected) {
        if (this.accounts.length != 0) {
            this.accounts = this.accounts.concat(accountList.validaccountDetails);
        }
        else {
            this.accounts = accountList.validaccountDetails;
        }
        var validAccountsList = this.accounts;
        this.invalidaccounts = accountList.invalidaccountDetails;
        //result,accntnum,roles
        for (var res = 0; res < this.accounts.length; res++) {
            for (var account = 0; account < listOfAcc.length; account++) {
                for (var role = 0; role < roleSelected.length; role++) {
                    this.rolesAccountsSelectedText += (listOfAcc[account] + roleSelected[role].key + this.accounts[res].parType + this.customer.country);
                }
            }
        }
    };
    CustomerCreateProfileComponent.prototype.SplitTheString = function (CommaSepStr) {
        var ResultArray = null;
        if (CommaSepStr != null) {
            var SplitChars = ',';
            if (CommaSepStr.indexOf(SplitChars) >= 0) {
                ResultArray = CommaSepStr.split(SplitChars);
            }
        }
        return ResultArray;
    };
    /*Remove Account Numbers Start*/
    CustomerCreateProfileComponent.prototype.getAccountToRemove = function (accountNum, selected) {
        if (!selected) {
            this.accountNumbersSlected.push(accountNum);
        }
        else {
            var index = this.accountNumbersSlected.indexOf(accountNum);
            this.accountNumbersSlected.splice(index, 1);
        }
    };
    CustomerCreateProfileComponent.prototype.getAllAccountsSelected = function (selected, list) {
        if (!selected) {
            this.accountNumbersSlected = list;
            for (var j = 0; j < list.length; j++) {
                list[j].accountExist = true;
            }
        }
        else {
            for (var j = 0; j < list.length; j++) {
                list[j].accountExist = false;
            }
        }
    };
    /** Delte individual account */
    CustomerCreateProfileComponent.prototype.deleteAccount = function (current_acc) {
        var index = this.accounts.indexOf(current_acc);
        this.accounts.splice(index, 1);
    };
    CustomerCreateProfileComponent.prototype.removeAccountNumberSelected = function (validAccountsList) {
        var uniqueKeys = [];
        if (validAccountsList.length !== 0) {
            for (var i = 0; i < validAccountsList.length; i++) {
                if (validAccountsList[i].accountExist) {
                    this.accounts = [];
                }
                /*for (var j = 0; j < this.accountNumbersSlected.length; j++) {
                  if (this.accountNumbersSlected[j].roleCode == validAccountsList[i].roleCode) {
                    let index = validAccountsList.indexOf(validAccountsList[i]); //0
                    validAccountsList.splice(index, 1);
                  }
                }*/
            }
        }
    };
    /*Remove Account Numbers Ended*/
    CustomerCreateProfileComponent.prototype.getRecord = function (site, type) {
        switch (type) {
            case 'role':
                this.setRecord(site, this.roles, this.rolesSelected);
                this.customer.roles = this.rolesSelected;
                break;
            case 'assignsite':
                this.setRecord(site, this.roles, this.assignSitesSelected);
                this.customer.assignToSite = this.assignSitesSelected;
                break;
        }
    };
    CustomerCreateProfileComponent.prototype.setRecord = function (current, totalList, model) {
        if (!current.isCheck) {
            model.push(current);
        }
        else {
            var index = totalList.indexOf(model);
            model.splice(index, 1);
        }
    };
    /*Highlight selected record*/
    CustomerCreateProfileComponent.prototype.hightlightRiskMonitored = function (current) {
        this.selectedMonitored = current;
    };
    /*Add,addall,remove,removeall functinality for table records*/
    CustomerCreateProfileComponent.prototype.add = function (type, records, copyrecords) {
        /*delete from parent*/
        for (var i = 0; i < records.length; i++) {
            if (records[i].selected) {
                records.splice(records[i], 1);
            }
        }
        /**Set to child */
        if (this.tempRiskMonitored.length != 0) {
            for (var i = 0; i < this.tempRiskMonitored.length; i++) {
                this.tempRiskMonitored[i].selected = false;
            }
            copyrecords = copyrecords.concat(this.tempRiskMonitored);
        }
        else {
            copyrecords = this.tempRiskMonitored;
        }
        if (type == "monitoring") {
            this.riskNotMonitoredList = copyrecords;
        }
        else if (type == "servicetype") {
            this.notServices = copyrecords;
        }
        else if (type == "daylist") {
            this.notDaysList = copyrecords;
        }
        else if (type == "accessorials") {
            this.notAccessorials = copyrecords;
        }
        else if (type == "riskException") {
            this.exceptionMonitors = copyrecords;
        }
        else if (type == "shipmentCharge") {
            this.notShipmentCharges = copyrecords;
        }
        this.tempRiskMonitored = [];
    };
    CustomerCreateProfileComponent.prototype.addAll = function (toPush, currentRecords) {
        if (toPush == "monitoring") {
            this.riskNotMonitoredList = currentRecords;
            this.monitoringRules = [];
        }
        else if (toPush == "servicetype") {
            this.notServices = currentRecords;
            this.services = [];
        }
        else if (toPush == "daylist") {
            this.notDaysList = currentRecords;
            this.daysList = [];
        }
        else if (toPush == "riskException") {
            this.exceptionMonitors = currentRecords;
            this.notExceptionsMonitorlist = [];
        }
        else if (toPush == "accessorials") {
            this.notAccessorials = currentRecords;
            this.accessorials = [];
        }
        else if (toPush == "shipmentCharge") {
            this.notShipmentCharges = currentRecords;
            this.shipmentCharges = [];
        }
    };
    CustomerCreateProfileComponent.prototype.remove = function (type, records) {
        for (var i = 0; i < records.length; i++) {
            if (records[i].selected) {
                records.splice(records[i], 1);
            }
        }
        if (this.tempRiskMonitored.length != 0) {
            for (var i = 0; i < this.tempRiskMonitored.length; i++) {
                this.tempRiskMonitored[i].selected = false;
            }
            this.copyrecords = this.copyrecords.concat(this.tempRiskMonitored);
        }
        else {
            this.copyrecords = this.tempRiskMonitored;
        }
        if (type == "monitoring") {
            this.monitoringRules = this.copyrecords;
        }
        else if (type == "servicetype") {
            this.services = this.copyrecords;
        }
        else if (type == "daylist") {
            this.daysList = this.copyrecords;
        }
        else if (type == "accessorials") {
            this.accessorials = this.copyrecords;
        }
        else if (type == "riskException") {
            this.notExceptionsMonitorlist = this.copyrecords;
        }
        else if (type == "shipmentCharge") {
            this.shipmentCharges = this.copyrecords;
        }
        this.tempRiskMonitored = [];
    };
    CustomerCreateProfileComponent.prototype.removeAll = function (toPush, currentRecords) {
        if (toPush == "monitoring") {
            this.monitoringRules = currentRecords;
            this.riskNotMonitoredList = [];
        }
        else if (toPush == "servicetype") {
            this.services = currentRecords;
            this.notServices = [];
        }
        else if (toPush == "daylist") {
            this.daysList = currentRecords;
            this.notDaysList = [];
        }
        else if (toPush == "accessorials") {
            this.accessorials = currentRecords;
            this.notAccessorials = [];
        }
        else if (toPush == "shipmentCharge") {
            this.shipmentCharges = currentRecords;
            this.notShipmentCharges = [];
        }
        else if (toPush == "riskException") {
            this.notExceptionsMonitorlist = currentRecords;
            this.exceptionMonitors = [];
        }
    };
    /*Risk Monitoring*/
    CustomerCreateProfileComponent.prototype.getRecordFromTable = function (current) {
        current.selected = true;
        //this.hightlightRiskMonitored("");
        this.tempRiskMonitored.push(current);
        console.log(this.tempRiskMonitored);
        //this.riskMonitoringList.splice(current,1);
    };
    CustomerCreateProfileComponent.prototype.bindObjectKeysIntoString = function (totalList) {
        var text = "";
        if (totalList != undefined) {
            for (var i = 0; i < totalList.length; i++) {
                text += totalList[i].value;
            }
        }
        return text;
    };
    /** Risk Exceptions Second table to string*/
    CustomerCreateProfileComponent.prototype.bindExceptionMonitorListToString = function (total_list) {
        var exception_monitors = "";
        if (total_list.length != 0) {
            for (var i = 0; i < total_list.length; i++) {
                exception_monitors += (total_list[i].exceptionRsnCde + total_list[i].exceptionEvtCode);
            }
        }
        else {
            exception_monitors = "";
        }
        return exception_monitors;
    };
    CustomerCreateProfileComponent.prototype.bindExceptionListToString = function (total_list) {
        var exception_list = "";
        if (total_list.length != 0) {
            for (var i = 0; i < total_list.length; i++) {
                exception_list += total_list[i].excRsnCode;
            }
        }
        else {
            exception_list = "";
        }
        return exception_list;
    };
    /*Submit Starts*/
    CustomerCreateProfileComponent.prototype.submit = function () {
        var _this = this;
        var pack_ref_num = "";
        var commit_end_day = "";
        var status_type = "";
        for (var i = 0; i < this.packageReferenceList.length; i++) {
            for (var j = 0; j < this.packageReferenceList[i].inputs.length; j++) {
                var referenceSelect = this.packageReferenceList[i].inputs[j].select;
                var referenceInput = this.packageReferenceList[i].inputs[j].input;
                var final_length = (35 - referenceInput.length);
                if (referenceInput.length < final_length) {
                    for (var INPUT = 0; INPUT < final_length; INPUT++) {
                        referenceInput += " ";
                    }
                }
                if (referenceSelect !== "" || referenceInput !== "") {
                    pack_ref_num += (referenceInput + referenceSelect + this.packageReferenceList[i].ref_count_num);
                }
            }
        }
        /** Commit over time to string */
        for (var i = 0; i < this.notServices.length; i++) {
            commit_end_day += (this.notServices[i].value + "E" + this.notServices[i].eHour + this.notServices[i].eMin + "C" + this.notServices[i].cHour + this.notServices[i].cMin);
        }
        /** Set statustype basd on date */
        if (this.customer.effectiveStartDate == this.today) {
            status_type = "01";
        }
        else {
            status_type = "02";
        }
        console.log(pack_ref_num);
        var json_to_send = {
            "customerId": this.customer.customerName,
            "groupName": this.customer.groupName,
            "roles": this.rolesAccountsSelectedText,
            "statusType": status_type,
            "hazmat": this.customer.hazmat,
            "dclValue": this.customer.dclval,
            "dclAmt": this.customer.dclcurr,
            "pckgeMvntTyp": this.customer.pkmgmvtType,
            "startDate": this.customer.effectiveStartDate,
            "endDate": this.customer.effectiveEndDate,
            "mnfSunday": "Y",
            "mnfMonday": "Y",
            "mnfTuesday": "Y",
            "mnfWednesday": "Y",
            "mnfThursday": "Y",
            "mnfFriday": "Y",
            "mnfSaturday": "N",
            "grpWrkCatageory": this.customer.grpCategory,
            "grpType": this.customer.grpType,
            "serviceTypeList": this.bindObjectKeysIntoString(this.notServices),
            "accessorialList": this.bindObjectKeysIntoString(this.notAccessorials),
            "shipmentChargeType": this.bindObjectKeysIntoString(this.notShipmentCharges),
            "exceptions": this.bindExceptionMonitorListToString(this.exceptionMonitors),
            "pckgeRefNum": pack_ref_num,
            "overRideTimes": commit_end_day,
            "mnrcnd": this.bindExceptionListToString(this.exceptionslist),
            "userId": "USER",
            "userName": "USERPD",
            "sites": this.bindObjectKeysIntoString(this.assignSitesSelected)
        };
        console.log(JSON.stringify(json_to_send));
        this.dataService.create(json_to_send).then(function (res) {
            if (res.sqlCode == "+00000") {
                alert("success");
                _this.router.navigate(['customerprofile']);
            }
            else {
                alert("error" + res.errorText);
            }
        });
    };
    return CustomerCreateProfileComponent;
}());
CustomerCreateProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-customer-create-profile',
        template: __webpack_require__("./src/app/customer-create-profile/customer-create-profile.component.html"),
        styles: [__webpack_require__("./src/app/customer-create-profile/customer-create-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], CustomerCreateProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=customer-create-profile.component.js.map

/***/ }),

/***/ "./src/app/customer-profile/customer-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/customer-profile/customer-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div>\n    <button class=\"btn btn-primary btn-xs\" routerLink=\"createcustomer\">Add New</button>\n  </div>\n  <div style=\"height: 650px;overflow-x: overlay;\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">Customer Name</th>\n          <th class=\"text-center\">Group Name</th>\n          <th class=\"text-center\">Profile Status</th>\n          <th class=\"text-center\">PAR Type</th>\n          <th class=\"text-center\">Start Date</th>\n          <th class=\"text-center\">End Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customersProfileList.resultSetOut\">\n          <td>{{customer.customerName}}\n            <span class=\"dropdown\">\n              <span class=\"glyphicon glyphicon-list blue pull-right dropdown-toggle\" data-toggle=\"dropdown\"></span>\n              <ul class=\"dropdown-menu\" style=\"float:right;\">\n                <li>\n                  <a href=\"#\" [routerLink]=\"['/editcustomer', customer.customerId]\">View</a>\n                </li>\n                <li>\n                  <a href=\"#\" [routerLink]=\"['/editcustomer', customer.customerId,customer.groupId]\">Edit</a>\n                </li>\n                <li>\n                  <a href=\"#\" data-toggle=\"modal\" (click)=\"getRecordToDelete(customer)\" data-target=\"#deleteCustomer\">Delete </a>\n                </li>\n                <li>\n                  <a href=\"#\"[routerLink]=\"['/editcustomer', customer.customerId]\">Archive</a>\n                </li>\n              </ul>\n            </span>\n          </td>\n          <td>{{customer.groupName}}</td>\n          <td>{{customer.profileStatus}}</td>\n          <td>{{customer.parType}}</td>\n          <td class=\"text-center\">{{customer.startDate}}</td>\n          <td class=\"text-center\">{{customer.endDate}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"deleteCustomer\" role=\"dialog\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Delete Record</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Are you sure you want to Delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"delete()\">Yes</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer-profile/customer-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer__ = __webpack_require__("./src/app/customer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerProfileComponent = (function () {
    function CustomerProfileComponent(dataService) {
        this.dataService = dataService;
        this.customersProfileList = [];
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__customer__["a" /* Customer */]();
    }
    CustomerProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCustomers('http://localhost:3012/UPS/customersprofile')
            .then(function (customersProfiles) {
            _this.customersProfileList = customersProfiles;
        });
    };
    CustomerProfileComponent.prototype.getRecordToDelete = function (customer) {
        this.recordToDel = customer;
    };
    CustomerProfileComponent.prototype.delete = function () {
        console.log(this.recordToDel);
    };
    return CustomerProfileComponent;
}());
CustomerProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-customer-profile',
        template: __webpack_require__("./src/app/customer-profile/customer-profile.component.html"),
        styles: [__webpack_require__("./src/app/customer-profile/customer-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], CustomerProfileComponent);

var _a;
//# sourceMappingURL=customer-profile.component.js.map

/***/ }),

/***/ "./src/app/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
/* unused harmony export Currency */
/* unused harmony export GroupType */
/* unused harmony export MonitoringRules */
/* unused harmony export Accounts */
/* unused harmony export Services */
/* unused harmony export Accessorials */
/* unused harmony export ShipmentCharges */
/* unused harmony export RiskExceptions */
var Customer = (function () {
    function Customer() {
        this.dclcurr = "USD";
        this.dclval = 0.00;
    }
    return Customer;
}());

var Currency = (function () {
    function Currency() {
    }
    return Currency;
}());

var GroupType = (function () {
    function GroupType() {
    }
    return GroupType;
}());

var MonitoringRules = (function () {
    function MonitoringRules() {
    }
    return MonitoringRules;
}());

var Accounts = (function () {
    function Accounts() {
    }
    return Accounts;
}());

var Services = (function () {
    function Services() {
    }
    return Services;
}());

var Accessorials = (function () {
    function Accessorials() {
    }
    return Accessorials;
}());

var ShipmentCharges = (function () {
    function ShipmentCharges() {
    }
    return ShipmentCharges;
}());

var RiskExceptions = (function () {
    function RiskExceptions() {
    }
    return RiskExceptions;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.customersUrl = 'customer'; // URL to web API
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.baseUrl = "http://localhost:3012/UPS/";
    }
    // Get all customers
    DataService.prototype.getCustomers = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getLocalJson = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.postRequest = function (accountnumber, domain) {
        return this.http
            .post(this.baseUrl + domain, accountnumber, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getCustomersBycIdgId = function (cId, gId) {
        var url = this.baseUrl + "customerView";
        var data = {
            "customerId": cId,
            "groupId": gId
        };
        return this.http.post(url, data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (customer) {
        var url = this.baseUrl + "customeradd";
        return this.http
            .post(url, JSON.stringify(customer), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (id) {
        var url = this.customersUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('Error', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditCustomerComponent = (function () {
    function EditCustomerComponent() {
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
    };
    return EditCustomerComponent;
}());
EditCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-customer',
        template: __webpack_require__("./src/app/edit-customer/edit-customer.component.html"),
        styles: [__webpack_require__("./src/app/edit-customer/edit-customer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditCustomerComponent);

//# sourceMappingURL=edit-customer.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map