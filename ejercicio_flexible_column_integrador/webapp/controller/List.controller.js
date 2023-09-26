sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/proy/ejercicioflexiblecolumnintegrador/util/Constants",
    "com/proy/ejercicioflexiblecolumnintegrador/util/Formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/model/Sorter'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Constants, Formatter, Filter,FilterOperator, Sorter) {
        "use strict";

        return Controller.extend("com.proy.ejercicioflexiblecolumnintegrador.controller.List", {
            Formatter: Formatter,
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                const url = sap.ui.require.toUrl(Constants.model.moduleURL) + Constants.model.northwind;
                this._model = new sap.ui.model.odata.v2.ODataModel(url, {
                    json: true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache"
                    },
                    useBatch: true
                });
                this._model.read(Constants.model.orderRead, {
                    async: true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                });
                var oResourceModel = this.getOwnerComponent().getModel(Constants.language.i18n);
            oResourceModel.enhance({ bundleName: Constants.language.bundleName });
            sap.ui.getCore().getConfiguration().setLanguage(Constants.language.languageEn);
            },
            success: function (oData) {
                const oModel = new JSONModel(oData.results);
                this.getView().setModel(oModel, Constants.succes.orderMock);
                console.log(oModel);
            },
            error: function () {
                alert(Constants.error.error);
            },
            onListItemPress: function (oEvent) {
                var oSelectedItem = oEvent.getSource().getSelectedItem();
                var oBindingContext = oSelectedItem.getBindingContext(Constants.succes.orderMock);
                var sPath = oBindingContext.getPath();
                var oItemSelect = this.getView().getModel(Constants.succes.orderMock).getProperty(sPath);
                var oModel = new JSONModel(oItemSelect);
                this.getOwnerComponent().setModel(oModel, Constants.succes.selectedOrderMock);
                console.log(oItemSelect);

                let oViewModel = new JSONModel({
                    layout: Constants.model.layout
                });
                this.getOwnerComponent().setModel(oViewModel, Constants.model.app);
            },
            onSearch: function (oEvent) {
                var oTableSearchState = [],
                    sQuery = oEvent.getParameter(Constants.filter.query);
            
                if (sQuery && sQuery.length > 0) {
                    oTableSearchState = new Filter(Constants.filter.productName, FilterOperator.Contains, sQuery);
                }
            
                var oTable = this.getView().byId(Constants.filter.productsTable);
                var oBinding = oTable.getBinding(Constants.filter.items);

                oBinding.filter(oTableSearchState, Constants.filter.application);
            },
            onSort: function (oEvent) {
                this._bDescendingSort = !this._bDescendingSort;
                var oView = this.getView(),
                    oTable = oView.byId(Constants.filter.productsTable),
                    oBinding = oTable.getBinding(Constants.filter.items),
                    oSorter = new Sorter(Constants.filter.productName, this._bDescendingSort);
    
                oBinding.sort(oSorter);
            },
            onChangeLanguage: function () {
                var sCurrentLanguage = sap.ui.getCore().getConfiguration().getLanguage();
                var sNewLanguage = sCurrentLanguage === Constants.language.languageEn ? Constants.language.languageEs : Constants.language.languageEn;
                sap.ui.getCore().getConfiguration().setLanguage(sNewLanguage);
                var oResourceModel = this.getOwnerComponent().getModel(Constants.language.i18n);
                oResourceModel.refresh();
            },
        });
    });
