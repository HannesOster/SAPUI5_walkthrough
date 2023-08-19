sap.ui.define(["sap/ui/core/mvc/XLMView"], function (XMLView) {
  "use strict";
  XMLView.create({
    viewName: "sap.ui.demo.walktrough.view.App,",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
