"use strict";(self.webpackChunkhp_app=self.webpackChunkhp_app||[]).push([[7],{3007:(x,o,a)=>{a.r(o),a.d(o,{ListModule:()=>b});var i=a(6895),d=a(727),n=a(8256),p=a(1828),g=a(2536),s=a(22),l=a(7925);function h(t,r){if(1&t&&n._UZ(0,"div",10),2&t){const e=n.oxw().$implicit;n.Jzz("background-image:url('",e.image,"')")}}function m(t,r){1&t&&n._UZ(0,"div",11)}function u(t,r){1&t&&n._UZ(0,"div",12)}const f=function(t){return["/character",t]};function C(t,r){if(1&t&&(n.TgZ(0,"div",4)(1,"a",5),n.YNc(2,h,1,3,"div",6),n.YNc(3,m,1,0,"div",7),n.YNc(4,u,1,0,"div",8),n.TgZ(5,"div",9)(6,"span"),n._uU(7),n.qZA()()()()),2&t){const e=r.$implicit,c=n.oxw();n.xp6(1),n.Q6J("routerLink",n.VKq(5,f,c.base64EncodeName(e.name))),n.xp6(1),n.Q6J("ngIf",e.image),n.xp6(1),n.Q6J("ngIf",!e.image&&"male"==e.gender),n.xp6(1),n.Q6J("ngIf",!e.image&&"female"==e.gender),n.xp6(3),n.Oqu(e.name)}}let M=(()=>{class t{constructor(e,c,P){this.base64Service=e,this.charactersService=c,this.route=P,this.sub=new d.w0,this.name="",this.loaded=!1,this.breadcrumbPath=[{label:"Home",route:["/"]}]}ngOnInit(){this.charList=this.route.snapshot.data.characters,this.charactersService.setCharList=this.charList,this.route.params.subscribe(e=>{this.name=e.name,this.breadcrumbPath.push({label:this.name[0].toUpperCase()+this.name.slice(1),route:null})})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}base64EncodeName(e){return this.base64Service.encode(e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p.D),n.Y36(g.R),n.Y36(s.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-list-main"]],decls:9,vars:3,consts:[[3,"path"],[1,"capitalize"],[1,"cards-wrapper"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[3,"routerLink"],["class","char-img",3,"style",4,"ngIf"],["class","char-img","style","background-image:url('assets/img/placeholder-he.svg'); ",4,"ngIf"],["class","char-img","style","background-image:url('assets/img/placeholder-she.svg'); ",4,"ngIf"],[1,"char-name"],[1,"char-img"],[1,"char-img",2,"background-image","url('assets/img/placeholder-he.svg')"],[1,"char-img",2,"background-image","url('assets/img/placeholder-she.svg')"]],template:function(e,c){1&e&&(n.TgZ(0,"div"),n._UZ(1,"app-breadcrumb",0),n.qZA(),n.TgZ(2,"div")(3,"h2"),n._uU(4,"Characters from "),n.TgZ(5,"span",1),n._uU(6),n.qZA()(),n.TgZ(7,"div",2),n.YNc(8,C,8,7,"div",3),n.qZA()()),2&e&&(n.xp6(1),n.Q6J("path",c.breadcrumbPath),n.xp6(5),n.Oqu(c.name),n.xp6(2),n.Q6J("ngForOf",c.charList))},dependencies:[s.rH,i.sg,i.O5,l.L],styles:["h2[_ngcontent-%COMP%]{margin-left:30px}.cards-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 20px}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:5rem;display:inline-block;margin:10px;font-weight:600;padding:15px 0;font-size:1.3rem;background-color:#b2967d;width:100%}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{color:#b2967d;background-color:#ecf8f8}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#b2967d}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;color:#ecf8f8}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .char-img[_ngcontent-%COMP%]{margin-left:15px;display:inline-block;border-radius:50%;background-repeat:no-repeat;width:80px;height:80px;background-color:#ecf8f8;background-size:100% auto;background-position:top center}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .char-name[_ngcontent-%COMP%]{margin-left:15px;line-height:1;height:80px;display:flex;align-items:center}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .char-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:middle}@media (min-width: 800px){.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 20px)}}@media (min-width: 1000px){.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(33% - 20px)}}@media (min-width: 1200px){.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(25% - 20px)}}"]}),t})();var v=a(2856);const O=[{path:"",component:M}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(O),i.ez,v.N]}),t})()}}]);