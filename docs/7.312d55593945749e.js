"use strict";(self.webpackChunkhp_app=self.webpackChunkhp_app||[]).push([[7],{3007:(L,p,a)=>{a.r(p),a.d(p,{ListModule:()=>_});var i=a(6895),d=a(727),n=a(8256),g=a(1828),h=a(2536),o=a(8843),l=a(7925),m=a(4617),u=a(3883);function f(t,r){if(1&t&&n._UZ(0,"div",10),2&t){const e=n.oxw().$implicit;n.Jzz("background-image:url('",e.image,"')")}}function C(t,r){if(1&t&&(n._UZ(0,"div"),n.ALo(1,"toLowerCase")),2&t){const e=n.oxw(3);n.Gre("char-img ",n.lcZ(1,3,e.house),"")}}const M=function(t,r){return["/character",t,r]};function O(t,r){if(1&t&&(n.TgZ(0,"a",6),n.YNc(1,f,1,3,"div",7),n.YNc(2,C,2,5,"div",8),n.TgZ(3,"div",9)(4,"span"),n._uU(5),n.qZA()()()),2&t){const e=r.$implicit,c=n.oxw(2);n.Q6J("routerLink",n.WLB(4,M,c.house.toLowerCase(),c.base64EncodeName(e.name))),n.xp6(1),n.Q6J("ngIf",e.image),n.xp6(1),n.Q6J("ngIf",!e.image),n.xp6(3),n.Oqu(e.name)}}function v(t,r){if(1&t&&(n.TgZ(0,"div",4),n.YNc(1,O,6,7,"a",5),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.charList)}}function x(t,r){1&t&&n._UZ(0,"app-no-data",11),2&t&&n.Q6J("message","Oops... It looks like there's no one here.")}let P=(()=>{class t{constructor(e,c,s){this.base64Service=e,this.charactersService=c,this.route=s,this.sub=new d.w0,this.house="",this.loaded=!1,this.breadcrumbPath=[{label:"Home",route:["/"]}]}ngOnInit(){this.charList=this.route.snapshot.data.characters,this.charactersService.setCharList=this.charList,this.route.params.subscribe(e=>{this.house=e.house,this.breadcrumbPath.push({label:this.house[0].toUpperCase()+this.house.slice(1),route:null})})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}base64EncodeName(e){return this.base64Service.encode(e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(g.D),n.Y36(h.R),n.Y36(o.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-list-main"]],decls:10,vars:4,consts:[[3,"path"],[1,"capitalize"],["class","cards-wrapper",4,"ngIf","ngIfElse"],["noData",""],[1,"cards-wrapper"],["class","card",3,"routerLink",4,"ngFor","ngForOf"],[1,"card",3,"routerLink"],["class","char-img",3,"style",4,"ngIf"],[3,"class",4,"ngIf"],[1,"char-name"],[1,"char-img"],[3,"message"]],template:function(e,c){if(1&e&&(n.TgZ(0,"div"),n._UZ(1,"app-breadcrumb",0),n.qZA(),n.TgZ(2,"div")(3,"h2"),n._uU(4,"Characters from "),n.TgZ(5,"span",1),n._uU(6),n.qZA()(),n.YNc(7,v,2,1,"div",2),n.YNc(8,x,1,1,"ng-template",null,3,n.W1O),n.qZA()),2&e){const s=n.MAs(9);n.xp6(1),n.Q6J("path",c.breadcrumbPath),n.xp6(5),n.Oqu(c.house),n.xp6(1),n.Q6J("ngIf",c.charList&&c.charList.length)("ngIfElse",s)}},dependencies:[o.rH,i.sg,i.O5,l.L,m.d,u.H],styles:["h2[_ngcontent-%COMP%]{margin-left:30px}.cards-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 20px}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;margin:10px;font-weight:600;padding:15px 0;font-size:1.3rem;background-color:#242633;width:100%;flex-direction:row;position:relative}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{color:#ecf8f8;background-color:#393c51}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .char-img[_ngcontent-%COMP%]{position:relative;margin-left:15px;display:flex;border-radius:50%;background-repeat:no-repeat;width:80px;height:80px;min-width:80px;min-height:80px;background-size:100% auto;background-position:top center}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .char-img.gryffindor[_ngcontent-%COMP%]{background-image:url(/hp-webapp/gr-uniform.dfbf0ff0da225d07.png)}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .char-img.slytherin[_ngcontent-%COMP%]{background-image:url(/hp-webapp/sn-uniform.d61dbbf976c51a01.png)}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .char-img.ravenclaw[_ngcontent-%COMP%]{background-image:url(/hp-webapp/rw-uniform.a0be107a16ea6a71.png)}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .char-img.hufflepuff[_ngcontent-%COMP%]{background-image:url(/hp-webapp/hf-uniform.95a9176c22e9aa2d.png)}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .char-name[_ngcontent-%COMP%]{margin:0 10px;line-height:1;display:flex;height:80px;align-items:center}.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .char-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:middle}@media (min-width: 800px){.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 20px)}}@media (min-width: 1000px){.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(33% - 20px)}}@media (min-width: 1200px){.cards-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(25% - 20px)}}"]}),t})();var w=a(2856);const b=[{path:"",component:P}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[o.Bz.forChild(b),i.ez,w.N]}),t})()}}]);