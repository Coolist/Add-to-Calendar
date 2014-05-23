(function($) {
	"use strict";

	$.fn.addToCalendar = function(method) {

		/* Blob.js - License: X11/MIT (Full license at https://github.com/eligrey/Blob.js)  */
		if(!(typeof Blob==="function"||typeof Blob==="object")||typeof URL==="undefined"){self.Blob=(function(a){a.URL=a.URL||a.webkitURL;var b=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder||(function(o){var f=function(x){return Object.prototype.toString.call(x).match(/^\[object\s(.*)\]$/)[1]},w=function l(){this.data=[]},v=function h(z,x,y){this.data=z;this.size=z.length;this.type=x;this.encoding=y},p=w.prototype,u=v.prototype,r=o.FileReaderSync,d=function(x){this.code=this[this.name=x]},q=("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),t=q.length,k=o.URL||o.webkitURL||o,s=k.createObjectURL,e=k.revokeObjectURL,j=k,n=o.btoa,i=o.atob,g=o.ArrayBuffer,m=o.Uint8Array;v.fake=u.fake=true;while(t--){d.prototype[q[t]]=t+1}if(!k.createObjectURL){j=o.URL={}}j.createObjectURL=function(y){var z=y.type,x;if(z===null){z="application/octet-stream"}if(y instanceof v){x="data:"+z;if(y.encoding==="base64"){return x+";base64,"+y.data}else{if(y.encoding==="URI"){return x+","+decodeURIComponent(y.data)}}if(n){return x+";base64,"+n(y.data)}else{return x+","+encodeURIComponent(y.data)}}else{if(s){return s.call(k,y)}}};j.revokeObjectURL=function(x){if(x.substring(0,5)!=="data:"&&e){e.call(k,x)}};p.append=function(B){var D=this.data;if(m&&(B instanceof g||B instanceof m)){var C="",y=new m(B),z=0,A=y.length;for(;z<A;z++){C+=String.fromCharCode(y[z])}D.push(C)}else{if(f(B)==="Blob"||f(B)==="File"){if(r){var x=new r;D.push(x.readAsBinaryString(B))}else{throw new d("NOT_READABLE_ERR")}}else{if(B instanceof v){if(B.encoding==="base64"&&i){D.push(i(B.data))}else{if(B.encoding==="URI"){D.push(decodeURIComponent(B.data))}else{if(B.encoding==="raw"){D.push(B.data)}}}}else{if(typeof B!=="string"){B+=""}D.push(unescape(encodeURIComponent(B)))}}}};p.getBlob=function(x){if(!arguments.length){x=null}return new v(this.data.join(""),x,"raw")};p.toString=function(){return"[object BlobBuilder]"};u.slice=function(A,x,z){var y=arguments.length;if(y<3){z=null}return new v(this.data.slice(A,y>1?x:this.data.length),z,this.encoding)};u.toString=function(){return"[object Blob]"};return w}(a));return function c(g,f){var j=f?(f.type||""):"";var e=new b();if(g){for(var h=0,d=g.length;h<d;h++){e.append(g[h])}}return e.getBlob(j)}}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content||this))};

		/* FileSaver.js - License: X11/MIT (Full license at https://github.com/eligrey/FileSaver.js) */
		var saveAs=saveAs||(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator))||(function(h){if(typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var r=h.document,l=function(){return h.URL||h.webkitURL||h},e=h.URL||h.webkitURL||h,n=r.createElementNS("http://www.w3.org/1999/xhtml","a"),g=!h.externalHost&&"download" in n,j=function(t){var s=r.createEvent("MouseEvents");s.initMouseEvent("click",true,false,h,0,0,0,0,0,false,false,false,false,0,null);t.dispatchEvent(s)},o=h.webkitRequestFileSystem,p=h.requestFileSystem||o||h.mozRequestFileSystem,m=function(s){(h.setImmediate||h.setTimeout)(function(){throw s},0)},c="application/octet-stream",k=0,b=[],i=function(){var t=b.length;while(t--){var s=b[t];if(typeof s==="string"){e.revokeObjectURL(s)}else{s.remove()}}b.length=0},q=function(t,s,w){s=[].concat(s);var v=s.length;while(v--){var x=t["on"+s[v]];if(typeof x==="function"){try{x.call(t,w||t)}catch(u){m(u)}}}},f=function(t,v){var w=this,C=t.type,F=false,y,x,s=function(){var G=l().createObjectURL(t);b.push(G);return G},B=function(){q(w,"writestart progress write writeend".split(" "))},E=function(){if(F||!y){y=s(t)}if(x){x.location.href=y}else{window.open(y,"_blank")}w.readyState=w.DONE;B()},A=function(G){return function(){if(w.readyState!==w.DONE){return G.apply(this,arguments)}}},z={create:true,exclusive:false},D;w.readyState=w.INIT;if(!v){v="download"}if(g){y=s(t);r=h.document;n=r.createElementNS("http://www.w3.org/1999/xhtml","a");n.href=y;n.download=v;var u=r.createEvent("MouseEvents");u.initMouseEvent("click",true,false,h,0,0,0,0,0,false,false,false,false,0,null);n.dispatchEvent(u);w.readyState=w.DONE;B();return}if(h.chrome&&C&&C!==c){D=t.slice||t.webkitSlice;t=D.call(t,0,t.size,c);F=true}if(o&&v!=="download"){v+=".download"}if(C===c||o){x=h}if(!p){E();return}k+=t.size;p(h.TEMPORARY,k,A(function(G){G.root.getDirectory("saved",z,A(function(H){var I=function(){H.getFile(v,z,A(function(J){J.createWriter(A(function(K){K.onwriteend=function(L){x.location.href=J.toURL();b.push(J);w.readyState=w.DONE;q(w,"writeend",L)};K.onerror=function(){var L=K.error;if(L.code!==L.ABORT_ERR){E()}};"writestart progress write abort".split(" ").forEach(function(L){K["on"+L]=w["on"+L]});K.write(t);w.abort=function(){K.abort();w.readyState=w.DONE};w.readyState=w.WRITING}),E)}),E)};H.getFile(v,{create:false},A(function(J){J.remove();I()}),A(function(J){if(J.code===J.NOT_FOUND_ERR){I()}else{E()}}))}),E)}),E)},d=f.prototype,a=function(s,t){return new f(s,t)};d.abort=function(){var s=this;s.readyState=s.DONE;q(s,"abort")};d.readyState=d.INIT=0;d.WRITING=1;d.DONE=2;d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null;h.addEventListener("unload",i,false);a.unload=function(){i();h.removeEventListener("unload",i,false)};return a}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content));if(typeof module!=="undefined"&&module!==null){module.exports=saveAs}else{if((typeof define!=="undefined"&&define!==null)&&(define.amd!=null)){define([],function(){return saveAs})}};

		var element = this;

		var options = $.extend({
			class_prefix: '',
			services: {
				google: {
					name: 'Google',
					type: 'link',
					template: 'http://www.google.com/calendar/event?action=TEMPLATE&text={name}&details={description}&dates={date_start}/{date_end}&location={location}'
				},
				yahoo: {
					name: 'Yahoo',
					type: 'link',
					template: 'http://calendar.yahoo.com/?v=60&TITLE={name}&DESC={description}&ST={date_start}&DUR=allday&in_loc={location}'
				},
				ical: {
					name: 'iCalendar',
					type: 'file',
					template: 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Add to Calendar\nBEGIN:VEVENT\nSUMMARY:{name}\nDTSTAMP:{time}\nDTSTART:{date_start_full}\nDTEND:{date_end_full}\nEND:VEVENT\nEND:VCALENDAR'
				}
			}
		}, options);

		var findInArrayPrefix = function(string, array, prefix) {
			for (var i in array) {
				if (string === prefix + array[i]) {
					return array[i];
				}
			}
		};

		element.init = function() {

			var values = [],
				vars = [
				'name',
				'description',
				'date_start',
				'date_end'
			];

			return this.each(function() {
				$(this).children('span').each(function() {
					var key = findInArrayPrefix($(this).attr('class'), vars, 'e_'),
						value = $(this).text();

					if (key) {
						if (key.indexOf('date') !== -1) {
							value = value.replace(/\//g, '');
						}

						values[key] = value;
					}
				});

				$(this).hide();

				console.log(values);
			});
		};

		/*			var blob = new Blob([options.services.ical.template], {type: "text/calendar;charset=utf-8"});
			saveAs(blob, "test.ics");*/

		element.init();

	};

}(jQuery))