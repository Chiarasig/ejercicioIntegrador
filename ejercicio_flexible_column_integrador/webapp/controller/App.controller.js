sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "com/proy/ejercicioflexiblecolumnintegrador/util/Constants"
    ],
    function(BaseController, JSONModel, Constants) {
      "use strict";
  
      return BaseController.extend("com.proy.ejercicioflexiblecolumnintegrador.controller.App", {
        onInit() {
          let oViewModel = new JSONModel({
            layout: Constants.model.oneColumn
          });
          this.getOwnerComponent().setModel(oViewModel, Constants.model.app);
        }
      });
    }
  );
  