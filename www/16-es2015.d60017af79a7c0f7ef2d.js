(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{TUkU:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab2PageModule",(function(){return f}));var a=n("TEn/"),o=n("ofXK"),i=n("3Pt+"),s=n("qtYk"),r=n("tyNb"),l=n("mrSG"),b=n("fXoL"),u=n("sSZD"),d=n("UbJi"),g=n("FHRc"),c=n("QQAA");const h=function(){return{standalone:!0}},p=[{path:"",component:(()=>{class t{constructor(t,e,n,a,o,i){this.afDB=t,this.alertController=e,this.AFauth=n,this.authService=a,this.router=o,this.toastController=i,this.divisa="$",this.cuenta="+",this.dolaresTotales="",this.pesosTotales="",this.AFauth.authState.subscribe(t=>{t&&(this.user_id=t.uid,this.afDB.list("/Users/"+this.user_id+"/plata").valueChanges().subscribe(t=>{this.dolaresTotales=t[0],this.pesosTotales=t[1]}))})}logForm(){return Object(l.a)(this,void 0,void 0,(function*(){if(null==this.titulo||null==this.divisa||null==this.cuenta||null==this.plata||null==this.dia){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Error",message:"Asegurate de haber completado todos los campos",buttons:["OK"]});yield t.present()}else this.afDB.list("/Users/"+this.user_id+"/historial").push({titulo:this.titulo,divisa:this.divisa,cuenta:this.cuenta,plata:this.plata,dia:this.dia.substring(0,10)}),"+"==this.cuenta?"$"==this.divisa?(this.plataTotal=parseInt(this.pesosTotales)+parseInt(this.plata),this.afDB.database.ref("/Users/"+this.user_id+"/plata/pesos/").set(this.plataTotal)):"USD"==this.divisa&&(this.plataTotal=parseInt(this.dolaresTotales)+parseInt(this.plata),this.afDB.database.ref("/Users/"+this.user_id+"/plata/dolares/").set(this.plataTotal)):"-"==this.cuenta&&("$"==this.divisa?(this.plataTotal=parseInt(this.pesosTotales)-parseInt(this.plata),this.afDB.database.ref("/Users/"+this.user_id+"/plata/pesos/").set(this.plataTotal)):"USD"==this.divisa&&(this.plataTotal=parseInt(this.dolaresTotales)-parseInt(this.plata),this.afDB.database.ref("/Users/"+this.user_id+"/plata/dolares/").set(this.plataTotal))),this.mensajeToast(),new Promise(t=>setTimeout(t,1e3)).then(()=>{this.router.navigate(["/tabs/tabs/tab1"]),this.plata="",this.titulo=""})}))}mensajeToast(){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:this.cuenta+this.divisa+this.plata+" fueron guardados en tu cuenta correctamente",duration:4e3})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(b.Ib(u.a),b.Ib(a.a),b.Ib(d.a),b.Ib(g.a),b.Ib(r.g),b.Ib(a.L))},t.\u0275cmp=b.Cb({type:t,selectors:[["app-tab2"]],decls:41,vars:21,consts:[[3,"translucent"],[2,"text-align","center"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"ngSubmit"],[2,"font-size","200%","margin-top","5%","--background","var(--background)"],["required","true","placeholder","Titulo aqui",2,"text-align","center",3,"value","ngModel","ngModelOptions","ngModelChange"],["mode","ios",1,"fondo_segmento",3,"value","ngModel","ngModelOptions","ngModelChange"],["value","+",1,"boton_segmento"],[1,"margenes_boton"],["value","-",1,"boton_segmento"],["value","$",1,"boton_segmento"],["value","USD",1,"boton_segmento"],["lines","none",2,"font-size","150%","--background","var(--background)"],["required","true","placeholder","Ingrese monto","type","number",2,"text-align","right","margin-top","5%",3,"value","ngModel","ngModelOptions","ngModelChange"],["lines","none",2,"font-size","150%","margin-top","5%","margin-bottom","5%","--background","var(--background)"],["required","true","displayformat","DD MMMM YY","placeholder","Ingrese fecha",2,"text-align","center",3,"ngModel","ngModelOptions","ngModelChange"],["expand","block","type","submit","color","primary",1,"boton_enviar",2,"font-weight","bold"],["name","Tab 2 page"]],template:function(t,e){1&t&&(b.Lb(0,"ion-header",0),b.Lb(1,"ion-toolbar"),b.Lb(2,"ion-title",1),b.gc(3," Agregar "),b.Kb(),b.Kb(),b.Kb(),b.Lb(4,"ion-content",2),b.Lb(5,"ion-header",3),b.Lb(6,"ion-toolbar"),b.Lb(7,"ion-title",4),b.gc(8,"Agregar"),b.Kb(),b.Kb(),b.Kb(),b.Lb(9,"form",5),b.Tb("ngSubmit",(function(){return e.logForm()})),b.Lb(10,"ion-item",6),b.Lb(11,"ion-input",7),b.Tb("ngModelChange",(function(t){return e.titulo=t})),b.Kb(),b.Kb(),b.Lb(12,"ion-segment",8),b.Tb("ngModelChange",(function(t){return e.cuenta=t})),b.Lb(13,"ion-segment-button",9),b.Lb(14,"div",10),b.Lb(15,"ion-label"),b.gc(16,"+"),b.Kb(),b.Kb(),b.Kb(),b.Lb(17,"ion-segment-button",11),b.Lb(18,"div",10),b.Lb(19,"ion-label"),b.gc(20,"-"),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Lb(21,"ion-segment",8),b.Tb("ngModelChange",(function(t){return e.divisa=t})),b.Lb(22,"ion-segment-button",12),b.Lb(23,"div",10),b.Lb(24,"ion-label"),b.gc(25,"$"),b.Kb(),b.Kb(),b.Kb(),b.Lb(26,"ion-segment-button",13),b.Lb(27,"div",10),b.Lb(28,"ion-label"),b.gc(29,"USD"),b.Kb(),b.Kb(),b.Kb(),b.Kb(),b.Lb(30,"ion-item",14),b.Lb(31,"ion-label"),b.gc(32,"Plata"),b.Kb(),b.Lb(33,"ion-input",15),b.Tb("ngModelChange",(function(t){return e.plata=t})),b.Kb(),b.Kb(),b.Lb(34,"ion-item",16),b.Lb(35,"ion-label"),b.gc(36,"Dia"),b.Kb(),b.Lb(37,"ion-datetime",17),b.Tb("ngModelChange",(function(t){return e.dia=t})),b.Kb(),b.Kb(),b.Lb(38,"ion-button",18),b.gc(39,"Agregar"),b.Kb(),b.Kb(),b.Jb(40,"app-explore-container",19),b.Kb()),2&t&&(b.Yb("translucent",!0),b.yb(4),b.Yb("fullscreen",!0),b.yb(7),b.Zb("value",e.titulo),b.Yb("ngModel",e.titulo)("ngModelOptions",b.ac(16,h)),b.yb(1),b.Zb("value",e.cuenta),b.Yb("ngModel",e.cuenta)("ngModelOptions",b.ac(17,h)),b.yb(9),b.Zb("value",e.divisa),b.Yb("ngModel",e.divisa)("ngModelOptions",b.ac(18,h)),b.yb(12),b.Zb("value",e.plata),b.Yb("ngModel",e.plata)("ngModelOptions",b.ac(19,h)),b.yb(4),b.Yb("ngModel",e.dia)("ngModelOptions",b.ac(20,h)))},directives:[a.m,a.E,a.D,a.j,i.i,i.e,i.f,a.p,a.o,a.K,i.h,i.d,i.g,a.y,a.J,a.z,a.t,a.H,a.k,a.e,c.a],styles:[".boton_segmento[_ngcontent-%COMP%]{--indicator-color:rgba(24,92,48,0.356);font-size:200%}.fondo_segmento[_ngcontent-%COMP%]{--background:var(--background);padding-left:10px;padding-right:10px;margin-top:5%}.margenes_boton[_ngcontent-%COMP%]{margin-top:10%;margin-bottom:10%}.card[_ngcontent-%COMP%]{top:15%}.boton_enviar[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(p)],r.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(e){return new(e||t)},imports:[[a.F,o.b,i.a,s.a,m]]}),t})()}}]);