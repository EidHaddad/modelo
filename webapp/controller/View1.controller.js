sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.modelos.controller.View1", {
		
		onInit: function(){
			
			//Fonte de dados
			var oPessoa = { 
				nome: "Eid",
				sobrenome: "Haddad",
				cidade: {
					nome: "Belo Horizonte",
					estado: "MG"
				},
				feliz: true,
				skills: ["UI5", 
				         "ABAP", 
				         "JavaScript"]
			};
			
			
			//encapsular a fonte em um modelo
			// new sap.ui.model.json.JSONModel(oPessoa);
			
			var oModeloPessoa = new JSONModel(oPessoa);
			
			// var oInputNome = this.byId("nome");
			// oInputNome.setModel(oModeloPessoa);
			
			// var oInputSobreNome = this.byId("sobrenome");
			// oInputSobreNome.setModel(oModeloPessoa);	
			
			
			this.getView().setModel(oModeloPessoa);
			
			
		}

	});
});