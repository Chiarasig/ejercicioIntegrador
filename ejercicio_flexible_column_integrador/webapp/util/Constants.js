sap.ui.define([], function (){
    'use strict';
    return{
        model: {
            mock: "mock",
            module: "com.proy.ejercicioflexiblecolumnintegrador",
            moduleURL: "com/proy/ejercicioflexiblecolumnintegrador",
            northwind: "/northwind/northwind.svc/",
            orderRead: "/Order_Details_Extendeds",
            app: "appView",
            layout: "TwoColumnsMidExpanded",
            oneColumn: "OneColumn"
        },
        filter:{
            query: "query",
            productName: "ProductName",
            productsTable: "productsTable",
            items: "items",
            application: "Application"
        },
        language:{
            i18n: "i18n",
            bundleName: "com.proy.ejercicioflexiblecolumnintegrador.i18n.i18n",
            languageEn: "en",
            languageEs: "es",
        },
        succes:{
            orderMock: "orderMock",
            selectedOrderMock: "selectedOrderMock"
        },
        error:{
          error: "Error"  
        },
        formatter:{
            none: "None",
            success: "Success",
            maxQuantity: 10,
            minQuantity: 0
        }
    };
}, true)