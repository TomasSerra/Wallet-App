(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1GDv":function(t,o,a){"use strict";a.r(o),a.d(o,"Tab4PageModule",(function(){return v}));var n=a("ofXK"),e=a("3Pt+"),i=a("TEn/"),b=a("tyNb"),r=a("mrSG"),l=a("fXoL");function s(t,o){if(1&t&&(l.Lb(0,"ion-label",19),l.gc(1),l.Kb()),2&t){const t=l.Vb();l.yb(1),l.ic("$ ",t.cambioTotal,"")}}function c(t,o){if(1&t&&(l.Lb(0,"ion-label",19),l.gc(1),l.Kb()),2&t){const t=l.Vb();l.yb(1),l.ic("USD ",t.cambioTotal,"")}}const g=function(){return{standalone:!0}};var p,m,d,u;const h=[{path:"",component:(()=>{class t{constructor(t){this.alertController=t,this.peso=!0,this.a="$",this.tipo="oficial",this.cambioTotal=0,this.compra_venta="compra",fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(t=>t.json()).then(t=>{p=parseFloat(t[0].casa.compra)+.65*parseFloat(t[0].casa.compra),m=parseFloat(t[0].casa.venta)+.65*parseFloat(t[0].casa.venta),d=parseFloat(t[1].casa.compra),u=parseFloat(t[1].casa.venta)})}ngOnInit(){}cambiar(){null==this.cantPlata||0==this.cantPlata?(this.alerta(),this.cambioTotal=0):(this.plataCambiar=this.cantPlata+1e-4,"$"==this.a?(this.peso=!0,this.cambioTotal="oficial"==this.tipo?"compra"==this.compra_venta?this.plataCambiar*p:this.plataCambiar*m:"compra"==this.compra_venta?this.plataCambiar*d:this.plataCambiar*u):(this.peso=!1,this.cambioTotal="oficial"==this.tipo?"compra"==this.compra_venta?this.plataCambiar/p:this.plataCambiar/m:"compra"==this.compra_venta?this.plataCambiar/d:this.plataCambiar/u),this.cambioTotal=parseFloat(this.cambioTotal.toFixed(2)))}alerta(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Error",message:"Por favor ingresa un monto",buttons:["OK"]});yield t.present()}))}}return t.\u0275fac=function(o){return new(o||t)(l.Ib(i.a))},t.\u0275cmp=l.Cb({type:t,selectors:[["app-tab4"]],decls:47,vars:18,consts:[[2,"text-align","center"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"ngSubmit"],[2,"font-size","200%","margin-top","5%","--background","var(--background)"],["type","number","required","true","placeholder","Monto",2,"text-align","center",3,"ngModel","ngModelOptions","ngModelChange"],["lines","none",2,"margin-top","5%","--background","var(--background)"],["mode","ios",1,"fondo_segmento",3,"value","ngModel","ngModelOptions","ngModelChange"],["value","$",1,"boton_segmento"],[1,"margenes_boton"],["value","USD",1,"boton_segmento"],["value","oficial",2,"font-size","75%","--indicator-color","rgba(24, 92, 48, 0.356)"],["value","blue",2,"font-size","75%","--indicator-color","rgba(24, 92, 48, 0.356)"],["value","compra",2,"font-size","75%","--indicator-color","rgba(24, 92, 48, 0.356)"],["value","venta",2,"font-size","75%","--indicator-color","rgba(24, 92, 48, 0.356)"],["lines","none",2,"font-size","250%","margin-top","5%","margin-bottom","5%","--background","var(--background)","text-align","center","font-size","200%"],["style","font-weight: bold;",4,"ngIf"],["expand","block","type","submit","color","primary",1,"boton_enviar",2,"font-weight","bold"],[2,"font-weight","bold"]],template:function(t,o){1&t&&(l.Lb(0,"ion-header"),l.Lb(1,"ion-toolbar"),l.Lb(2,"ion-title",0),l.gc(3,"Cambio divisa"),l.Kb(),l.Kb(),l.Kb(),l.Lb(4,"ion-content",1),l.Lb(5,"ion-header",2),l.Lb(6,"ion-toolbar"),l.Lb(7,"ion-title",3),l.gc(8,"Cambio divisa"),l.Kb(),l.Kb(),l.Kb(),l.Lb(9,"form",4),l.Tb("ngSubmit",(function(){return o.cambiar()})),l.Lb(10,"ion-item",5),l.Lb(11,"ion-input",6),l.Tb("ngModelChange",(function(t){return o.cantPlata=t})),l.Kb(),l.Kb(),l.Lb(12,"ion-item",7),l.Lb(13,"ion-label"),l.gc(14,"Cambiar a: "),l.Kb(),l.Kb(),l.Lb(15,"ion-segment",8),l.Tb("ngModelChange",(function(t){return o.a=t})),l.Lb(16,"ion-segment-button",9),l.Lb(17,"div",10),l.Lb(18,"ion-label"),l.gc(19,"$"),l.Kb(),l.Kb(),l.Kb(),l.Lb(20,"ion-segment-button",11),l.Lb(21,"div",10),l.Lb(22,"ion-label"),l.gc(23,"USD"),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Lb(24,"ion-segment",8),l.Tb("ngModelChange",(function(t){return o.tipo=t})),l.Lb(25,"ion-segment-button",12),l.Lb(26,"div",10),l.Lb(27,"ion-label"),l.gc(28,"Oficial"),l.Kb(),l.Kb(),l.Kb(),l.Lb(29,"ion-segment-button",13),l.Lb(30,"div",10),l.Lb(31,"ion-label"),l.gc(32,"Blue"),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Lb(33,"ion-segment",8),l.Tb("ngModelChange",(function(t){return o.compra_venta=t})),l.Lb(34,"ion-segment-button",14),l.Lb(35,"div",10),l.Lb(36,"ion-label"),l.gc(37,"Compra"),l.Kb(),l.Kb(),l.Kb(),l.Lb(38,"ion-segment-button",15),l.Lb(39,"div",10),l.Lb(40,"ion-label"),l.gc(41,"Venta"),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Lb(42,"ion-item",16),l.fc(43,s,2,1,"ion-label",17),l.fc(44,c,2,1,"ion-label",17),l.Kb(),l.Lb(45,"ion-button",18),l.gc(46,"Cambiar"),l.Kb(),l.Kb(),l.Kb()),2&t&&(l.yb(4),l.Yb("fullscreen",!0),l.yb(7),l.Yb("ngModel",o.cantPlata)("ngModelOptions",l.ac(14,g)),l.yb(4),l.Zb("value",o.a),l.Yb("ngModel",o.a)("ngModelOptions",l.ac(15,g)),l.yb(9),l.Zb("value",o.tipo),l.Yb("ngModel",o.tipo)("ngModelOptions",l.ac(16,g)),l.yb(9),l.Zb("value",o.compra_venta),l.Yb("ngModel",o.compra_venta)("ngModelOptions",l.ac(17,g)),l.yb(10),l.Yb("ngIf",o.peso),l.yb(1),l.Yb("ngIf",!o.peso))},directives:[i.m,i.E,i.D,i.j,e.i,e.e,e.f,i.p,i.o,i.H,e.h,e.d,e.g,i.t,i.y,i.J,i.z,n.i,i.e],styles:[".boton_segmento[_ngcontent-%COMP%]{--indicator-color:rgba(24,92,48,0.356);font-size:200%}.fondo_segmento[_ngcontent-%COMP%]{--background:var(--background);padding-left:10px;padding-right:10px;margin-top:5%}.margenes_boton[_ngcontent-%COMP%]{margin-top:10%;margin-bottom:10%}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(o){return new(o||t)},imports:[[b.i.forChild(h)],b.i]}),t})(),v=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(o){return new(o||t)},imports:[[n.b,e.a,i.F,f]]}),t})()}}]);