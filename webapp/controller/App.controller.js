sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onInit: function () {
        const oData = {
          input: { name: "UI5" },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onShowHello: function () {
        MessageToast.show("Hello there!");
      },
    });
  }
);
