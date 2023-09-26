sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/proy/ejercicioflexiblecolumnintegrador/util/Constants"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Constants) {
        "use strict";

        return Controller.extend("com.proy.ejercicioflexiblecolumnintegrador.controller.Detail", {
            onInit: function () {

            },
            handleClose: function () {
              let oViewModel = new JSONModel({
                  layout: Constants.model.oneColumn
                });
  
                this.getOwnerComponent().setModel(oViewModel, Constants.model.app);
          },
          
        });
    });
