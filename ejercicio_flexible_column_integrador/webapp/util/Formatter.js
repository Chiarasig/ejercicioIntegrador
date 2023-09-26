sap.ui.define([
	"com/proy/ejercicioflexiblecolumnintegrador/util/Constants",
],	
	function(Constants) {
	"use strict";

	var Formatter = {
		quantityState : function (iQuantity) {
			var iMaxQuantityWarning = Constants.formatter.maxQuantity;
			var iAdjustedQuantity = parseInt(iQuantity);

			if (isNaN(iAdjustedQuantity)) {
				return Constants.formatter.none;
			} else {
				if (iAdjustedQuantity < Constants.formatter.minQuantity) {
					return Constants.formatter.none;
				} else if (iAdjustedQuantity < iMaxQuantityWarning) {
					return Constants.formatter.success;
				} else {
					return Constants.error.error;
				}
			}
		}
	};
	return Formatter;
}, true);
