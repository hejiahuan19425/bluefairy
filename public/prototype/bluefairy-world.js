"use strict";(()=>{var uu=0,gc=1,du=2;var jl=1,zo=2,fn=3,Ln=0,De=1,Ze=2;var Cn=0,wi=1,_i=2,xc=3,yc=4,fu=5,Yn=100,pu=101,mu=102,vc=103,Mc=104,gu=200,xu=201,yu=202,vu=203,qa=204,Ya=205,Mu=206,Su=207,Eu=208,bu=209,wu=210,Tu=211,Au=212,_u=213,Ru=214,Cu=0,Pu=1,Iu=2,rr=3,Lu=4,Du=5,Uu=6,Nu=7,Ql=0,Fu=1,Ou=2,Pn=0,Bu=1,zu=2,Hu=3,Ho=4,Vu=5,ku=6;var $l=300,Ri=301,Ci=302,Ja=303,Za=304,kr=306,ns=1e3,Ke=1001,Ka=1002,Ce=1003,Sc=1004;var ha=1005;var He=1006,Gu=1007;var is=1008;var In=1009,Wu=1010,Xu=1011,Vo=1012,th=1013,_n=1014,Rn=1015,ss=1016,eh=1017,nh=1018,Zn=1020,qu=1021,je=1023,Yu=1024,Ju=1025,Kn=1026,Pi=1027,Zu=1028,ih=1029,Ku=1030,sh=1031,rh=1033,ua=33776,da=33777,fa=33778,pa=33779,Ec=35840,bc=35841,wc=35842,Tc=35843,ah=36196,Ac=37492,_c=37496,Rc=37808,Cc=37809,Pc=37810,Ic=37811,Lc=37812,Dc=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,Bc=37818,zc=37819,Hc=37820,Vc=37821,ma=36492,kc=36494,Gc=36495,ju=36283,Wc=36284,Xc=36285,qc=36286;var ar=2300,or=2301,ga=2302,Yc=2400,Jc=2401,Zc=2402;var oh=3e3,jn=3001,Qu=3200,$u=3201,ch=0,td=1,Ve="",de="srgb",gn="srgb-linear",ko="display-p3",Gr="display-p3-linear",cr="linear",ee="srgb",lr="rec709",hr="p3";var ii=7680;var Kc=519,ed=512,nd=513,id=514,lh=515,sd=516,rd=517,ad=518,od=519,jc=35044;var Qc="300 es",ja=1035,mn=2e3,ur=2001,Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xa=Math.PI/180,Qa=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function cd(i,t){return(i%t+t)%t}function ya(i,t,e){return(1-e)*i+e*t}function $c(i){return(i&i-1)===0&&i!==0}function $a(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],S=s[1],x=s[4],T=s[7],I=s[2],A=s[5],_=s[8];return r[0]=a*y+o*S+c*I,r[3]=a*m+o*x+c*A,r[6]=a*f+o*T+c*_,r[1]=l*y+h*S+u*I,r[4]=l*m+h*x+u*A,r[7]=l*f+h*T+u*_,r[2]=d*y+p*S+g*I,r[5]=d*m+p*x+g*A,r[8]=d*f+p*T+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},va=new Gt;function hh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){let i=rs("canvas");return i.style.display="block",i}var tl={};function ji(i){i in tl||(tl[i]=!0,console.warn(i))}var el=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nl=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ps={[gn]:{transfer:cr,primaries:lr,toReference:i=>i,fromReference:i=>i},[de]:{transfer:ee,primaries:lr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Gr]:{transfer:cr,primaries:hr,toReference:i=>i.applyMatrix3(nl),fromReference:i=>i.applyMatrix3(el)},[ko]:{transfer:ee,primaries:hr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(nl),fromReference:i=>i.applyMatrix3(el).convertLinearToSRGB()}},hd=new Set([gn,Gr]),Kt={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ps[t].toReference,s=Ps[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ps[i].primaries},getTransfer:function(i){return i===Ve?cr:Ps[i].transfer}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var si,dr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=rs("canvas")),si.width=t.width,si.height=t.height;let n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ud=0,fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sa(s[a].image)):r.push(Sa(s[a]))}else r=Sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dd=0,Ge=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ke,s=Ke,r=He,a=is,o=je,c=In,l=i.DEFAULT_ANISOTROPY,h=Ve){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Fi(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===jn?de:Ve),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===de?jn:oh}set encoding(t){ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===jn?de:Ve}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=$l;Ge.DEFAULT_ANISOTROPY=1;var ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,T=(p+1)/2,I=(f+1)/2,A=(h+d)/4,_=(u+y)/4,O=(g+m)/4;return x>T&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=_/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=O/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=_/r,s=O/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(d-h)/S,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},to=class extends Dn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jn?de:Ve),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends to{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pr=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*y,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let I=Math.sqrt(x),A=Math.atan2(I,f*S);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}let T=o*S;if(c=c*m+d*T,l=l*m+p*T,h=h*m+g*T,u=u*m+y*T,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ea=new R,il=new sn,yn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),Ls.subVectors(this.max,Wi),ri.subVectors(t.a,Wi),ai.subVectors(t.b,Wi),oi.subVectors(t.c,Wi),En.subVectors(ai,ri),bn.subVectors(oi,ai),kn.subVectors(ri,oi);let e=[0,-En.z,En.y,0,-bn.z,bn.y,0,-kn.z,kn.y,En.z,0,-En.x,bn.z,0,-bn.x,kn.z,0,-kn.x,-En.y,En.x,0,-bn.y,bn.x,0,-kn.y,kn.x,0];return!ba(e,ri,ai,oi,Ls)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ri,ai,oi,Ls))?!1:(Ds.crossVectors(En,bn),e=[Ds.x,Ds.y,Ds.z],ba(e,ri,ai,oi,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},cn=[new R,new R,new R,new R,new R,new R,new R,new R],qe=new R,Is=new yn,ri=new R,ai=new R,oi=new R,En=new R,bn=new R,kn=new R,Wi=new R,Ls=new R,Ds=new R,Gn=new R;function ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);let o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),c=t.dot(Gn),l=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var fd=new yn,Xi=new R,wa=new R,Un=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);let e=Xi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(wa)),this.expandByPoint(Xi.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new R,Ta=new R,Us=new R,wn=new R,Aa=new R,Ns=new R,_a=new R,as=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),Us.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Ta);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Us),o=wn.dot(this.direction),c=-wn.dot(Us),l=wn.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ta).addScaledVector(Us,d),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);let n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Aa.subVectors(e,t),Ns.subVectors(n,t),_a.crossVectors(Aa,Ns);let a=this.direction.dot(_a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,t);let c=o*this.direction.dot(Ns.crossVectors(wn,Ns));if(c<0)return null;let l=o*this.direction.dot(Aa.cross(wn));if(l<0||c+l>a)return null;let h=-o*wn.dot(_a);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,y,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,y=l*u;e[0]=d+y*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,y=l*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,y=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*c,p=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Tn.crossVectors(n,Ne),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Tn.crossVectors(n,Ne)),Tn.normalize(),Fs.crossVectors(Ne,Tn),s[0]=Tn.x,s[4]=Fs.x,s[8]=Ne.x,s[1]=Tn.y,s[5]=Fs.y,s[9]=Ne.y,s[2]=Tn.z,s[6]=Fs.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],S=n[3],x=n[7],T=n[11],I=n[15],A=s[0],_=s[4],O=s[8],M=s[12],w=s[1],N=s[5],G=s[9],nt=s[13],L=s[2],F=s[6],V=s[10],J=s[14],Y=s[3],W=s[7],$=s[11],tt=s[15];return r[0]=a*A+o*w+c*L+l*Y,r[4]=a*_+o*N+c*F+l*W,r[8]=a*O+o*G+c*V+l*$,r[12]=a*M+o*nt+c*J+l*tt,r[1]=h*A+u*w+d*L+p*Y,r[5]=h*_+u*N+d*F+p*W,r[9]=h*O+u*G+d*V+p*$,r[13]=h*M+u*nt+d*J+p*tt,r[2]=g*A+y*w+m*L+f*Y,r[6]=g*_+y*N+m*F+f*W,r[10]=g*O+y*G+m*V+f*$,r[14]=g*M+y*nt+m*J+f*tt,r[3]=S*A+x*w+T*L+I*Y,r[7]=S*_+x*N+T*F+I*W,r[11]=S*O+x*G+T*V+I*$,r[15]=S*M+x*nt+T*J+I*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+y*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],S=u*m*l-y*d*l+y*c*p-o*m*p-u*c*f+o*d*f,x=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,T=h*y*l-g*u*l+g*o*p-a*y*p-h*o*f+a*u*f,I=g*u*c-h*y*c-g*o*d+a*y*d+h*o*m-a*u*m,A=e*S+n*x+s*T+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/A;return t[0]=S*_,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*_,t[2]=(o*m*r-y*c*r+y*s*l-n*m*l-o*s*f+n*c*f)*_,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*_,t[4]=x*_,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*_,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*_,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*_,t[8]=T*_,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*_,t[10]=(a*y*r-g*o*r+g*n*l-e*y*l-a*n*f+e*o*f)*_,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*_,t[12]=I*_,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*_,t[14]=(g*o*s-a*y*s-g*n*c+e*y*c+a*n*m-e*o*m)*_,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*_,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,y=a*h,m=a*u,f=o*u,S=c*l,x=c*h,T=c*u,I=n.x,A=n.y,_=n.z;return s[0]=(1-(y+f))*I,s[1]=(p+T)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(d+f))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+x)*_,s[9]=(m-S)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ci.set(s[0],s[1],s[2]).length(),a=ci.set(s[4],s[5],s[6]).length(),o=ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);let l=1/r,h=1/a,u=1/o;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(o===mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ur)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h,g,y;if(o===mn)g=(a+r)*u,y=-2*u;else if(o===ur)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ci=new R,Ye=new se,pd=new R(0,0,0),md=new R(1,1,1),Tn=new R,Fs=new R,Ne=new R,sl=new se,rl=new sn,mr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mr.DEFAULT_ORDER="XYZ";var os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gd=0,al=new R,li=new sn,hn=new se,Os=new R,qi=new R,xd=new R,yd=new sn,ol=new R(1,0,0),cl=new R(0,1,0),ll=new R(0,0,1),vd={type:"added"},Md={type:"removed"},fe=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new mr,n=new sn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Gt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(cl,t)}rotateZ(t){return this.rotateOnAxis(ll,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(cl,t)}translateZ(t){return this.translateOnAxis(ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(qi,Os,this.up):hn.lookAt(Os,qi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(hn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};fe.DEFAULT_UP=new R(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Je=new R,un=new R,Ra=new R,dn=new R,hi=new R,ui=new R,hl=new R,Ca=new R,Pa=new R,Ia=new R,Bs=!1,Mi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),un.subVectors(n,e),Ra.subVectors(t,e);let a=Je.dot(Je),o=Je.dot(un),c=Je.dot(Ra),l=un.dot(un),h=un.dot(Ra),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bs=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),un.subVectors(t,e),Je.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Bs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bs=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;hi.subVectors(s,n),ui.subVectors(r,n),Ca.subVectors(t,n);let c=hi.dot(Ca),l=ui.dot(Ca);if(c<=0&&l<=0)return e.copy(n);Pa.subVectors(t,s);let h=hi.dot(Pa),u=ui.dot(Pa);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(hi,a);Ia.subVectors(t,r);let p=hi.dot(Ia),g=ui.dot(Ia);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ui,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return hl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(hl,o);let f=1/(m+y+d);return a=y*f,o=d*f,e.copy(n).addScaledVector(hi,a).addScaledVector(ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},zs={h:0,s:0,l:0};function La(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=cd(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=La(a,r,t+1/3),this.g=La(a,r,t),this.b=La(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return Kt.fromWorkingColorSpace(be.copy(this),t),Math.round(we(be.r*255,0,255))*65536+Math.round(we(be.g*255,0,255))*256+Math.round(we(be.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(be.copy(this),e);let n=be.r,s=be.g,r=be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=de){Kt.fromWorkingColorSpace(be.copy(this),t);let e=be.r,n=be.g,s=be.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(zs);let n=ya(An.h,zs.h,e),s=ya(An.s,zs.s,e),r=ya(An.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},be=new Ft;Ft.NAMES=uh;var Sd=0,Nn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=wi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vn=class extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ue=new R,Hs=new ot,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}};var gr=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xr=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Ed=0,ze=new se,Da=new fe,di=new R,Fe=new yn,Yi=new yn,ye=new R,ve=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hh(t)?xr:gr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Fe.min,Yi.min),Fe.expandByPoint(ye),ye.addVectors(Fe.max,Yi.max),Fe.expandByPoint(ye)):(Fe.expandByPoint(Yi.min),Fe.expandByPoint(Yi.max))}Fe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(di.fromBufferAttribute(t,l),ye.add(di)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new R,h[w]=new R;let u=new R,d=new R,p=new R,g=new ot,y=new ot,m=new ot,f=new R,S=new R;function x(w,N,G){u.fromArray(s,w*3),d.fromArray(s,N*3),p.fromArray(s,G*3),g.fromArray(a,w*2),y.fromArray(a,N*2),m.fromArray(a,G*2),d.sub(u),p.sub(u),y.sub(g),m.sub(g);let nt=1/(y.x*m.y-m.x*y.y);isFinite(nt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(nt),S.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(nt),l[w].add(f),l[N].add(f),l[G].add(f),h[w].add(S),h[N].add(S),h[G].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,N=T.length;w<N;++w){let G=T[w],nt=G.start,L=G.count;for(let F=nt,V=nt+L;F<V;F+=3)x(n[F+0],n[F+1],n[F+2])}let I=new R,A=new R,_=new R,O=new R;function M(w){_.fromArray(r,w*3),O.copy(_);let N=l[w];I.copy(N),I.sub(_.multiplyScalar(_.dot(N))).normalize(),A.crossVectors(O,N);let nt=A.dot(h[w])<0?-1:1;c[w*4]=I.x,c[w*4+1]=I.y,c[w*4+2]=I.z,c[w*4+3]=nt}for(let w=0,N=T.length;w<N;++w){let G=T[w],nt=G.start,L=G.count;for(let F=nt,V=nt+L;F<V;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ul=new se,Wn=new as,Vs=new Un,dl=new R,fi=new R,pi=new R,mi=new R,Ua=new R,ks=new R,Gs=new ot,Ws=new ot,Xs=new ot,fl=new R,pl=new R,ml=new R,qs=new R,Ys=new R,Ot=class extends fe{constructor(t=new ve,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ua.fromBufferAttribute(u,t),a?ks.addScaledVector(Ua,h):ks.addScaledVector(Ua.sub(e),h))}e.add(ks)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Vs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Vs,dl)===null||Wn.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(ul.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,I=x;T<I;T+=3){let A=o.getX(T),_=o.getX(T+1),O=o.getX(T+2);s=Js(this,f,t,n,l,h,u,A,_,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=o.getX(m),x=o.getX(m+1),T=o.getX(m+2);s=Js(this,a,t,n,l,h,u,S,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,I=x;T<I;T+=3){let A=T,_=T+1,O=T+2;s=Js(this,f,t,n,l,h,u,A,_,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=m,x=m+1,T=m+2;s=Js(this,a,t,n,l,h,u,S,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function bd(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Ln,o),c===null)return null;Ys.copy(o),Ys.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ys);return l<e.near||l>e.far?null:{distance:l,point:Ys.clone(),object:i}}function Js(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,fi),i.getVertexPosition(c,pi),i.getVertexPosition(l,mi);let h=bd(i,t,e,n,fi,pi,mi,qs);if(h){s&&(Gs.fromBufferAttribute(s,o),Ws.fromBufferAttribute(s,c),Xs.fromBufferAttribute(s,l),h.uv=Mi.getInterpolation(qs,fi,pi,mi,Gs,Ws,Xs,new ot)),r&&(Gs.fromBufferAttribute(r,o),Ws.fromBufferAttribute(r,c),Xs.fromBufferAttribute(r,l),h.uv1=Mi.getInterpolation(qs,fi,pi,mi,Gs,Ws,Xs,new ot),h.uv2=h.uv1),a&&(fl.fromBufferAttribute(a,o),pl.fromBufferAttribute(a,c),ml.fromBufferAttribute(a,l),h.normal=Mi.getInterpolation(qs,fi,pi,mi,fl,pl,ml,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new R,materialIndex:0};Mi.getNormal(fi,pi,mi,u.normal),h.face=u}return h}var Pe=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(y,m,f,S,x,T,I,A,_,O,M){let w=T/_,N=I/O,G=T/2,nt=I/2,L=A/2,F=_+1,V=O+1,J=0,Y=0,W=new R;for(let $=0;$<V;$++){let tt=$*N-nt;for(let ut=0;ut<F;ut++){let k=ut*w-G;W[y]=k*S,W[m]=tt*x,W[f]=L,l.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[f]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(ut/_),u.push(1-$/O),J+=1}}for(let $=0;$<O;$++)for(let tt=0;tt<_;tt++){let ut=d+tt+F*$,k=d+tt+F*($+1),K=d+(tt+1)+F*($+1),dt=d+(tt+1)+F*$;c.push(ut,k,dt),c.push(k,K,dt),Y+=6}o.addGroup(p,Y,M),p+=Y,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=Ii(i[e]);for(let s in n)t[s]=n[s]}return t}function wd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){return i.getRenderTarget()===null?i.outputColorSpace:Kt.workingColorSpace}var Td={clone:Ii,merge:Re},Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yr=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Te=class extends yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gi=-90,xi=1,no=class extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(gi,xi,t,e);s.layers=this.layers,this.add(s);let r=new Te(gi,xi,t,e);r.layers=this.layers,this.add(r);let a=new Te(gi,xi,t,e);a.layers=this.layers,this.add(a);let o=new Te(gi,xi,t,e);o.layers=this.layers,this.add(o);let c=new Te(gi,xi,t,e);c.layers=this.layers,this.add(c);let l=new Te(gi,xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vr=class extends Ge{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},io=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===jn?de:Ve),this.texture=new vr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pe(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Cn});r.uniforms.tEquirect.value=e;let a=new Ot(s,r),o=e.minFilter;return e.minFilter===is&&(e.minFilter=He),new no(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Na=new R,Rd=new R,Cd=new Gt,pn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Na.subVectors(n,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cd.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xn=new Un,Zs=new R,cs=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],S=s[13],x=s[14],T=s[15];if(n[0].setComponents(c-r,d-l,m-p,T-f).normalize(),n[1].setComponents(c+r,d+l,m+p,T+f).normalize(),n[2].setComponents(c+a,d+h,m+g,T+S).normalize(),n[3].setComponents(c-a,d-h,m-g,T-S).normalize(),n[4].setComponents(c-o,d-u,m-y,T-x).normalize(),e===mn)n[5].setComponents(c+o,d+u,m+y,T+x).normalize();else if(e===ur)n[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let f=g[y];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var Li=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let S=f*d-a;for(let x=0;x<l;x++){let T=x*u-r;g.push(T,-S,0),y.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){let x=S+l*f,T=S+l*(f+1),I=S+1+l*(f+1),A=S+1+l*f;p.push(x,T,A),p.push(T,I,A)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,If=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Id,alphahash_pars_fragment:Ld,alphamap_fragment:Dd,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:Hd,begin_vertex:Vd,beginnormal_vertex:kd,bsdfs:Gd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Zd,color_fragment:Kd,color_pars_fragment:jd,color_pars_vertex:Qd,color_vertex:$d,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:cf,colorspace_pars_fragment:lf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Tf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:xf,fog_pars_fragment:yf,gradientmap_pars_fragment:vf,lightmap_fragment:Mf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:bf,lights_pars_begin:wf,lights_toon_fragment:Af,lights_toon_pars_fragment:_f,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:If,lights_fragment_begin:Lf,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:zf,map_pars_fragment:Hf,map_particle_fragment:Vf,map_particle_pars_fragment:kf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Jf,normal_fragment_begin:Zf,normal_fragment_maps:Kf,normal_pars_fragment:jf,normal_pars_vertex:Qf,normal_vertex:$f,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:cp,dithering_fragment:lp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:xp,skinning_pars_vertex:yp,skinning_vertex:vp,skinnormal_vertex:Mp,specularmap_fragment:Sp,specularmap_pars_fragment:Ep,tonemapping_fragment:bp,tonemapping_pars_fragment:wp,transmission_fragment:Tp,transmission_pars_fragment:Ap,uv_pars_fragment:_p,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Ip,background_frag:Lp,backgroundCube_vert:Dp,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:Hp,equirect_vert:Vp,equirect_frag:kp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Jp,meshmatcap_vert:Zp,meshmatcap_frag:Kp,meshnormal_vert:jp,meshnormal_frag:Qp,meshphong_vert:$p,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:cm,sprite_vert:lm,sprite_frag:hm},at={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},nn={basic:{uniforms:Re([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([at.points,at.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([at.common,at.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([at.sprite,at.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([at.lights,at.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};nn.physical={uniforms:Re([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Ks={r:0,b:0,g:0};function um(i,t,e,n,s,r,a){let o=new Ft(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let S=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?y(o,c):x&&x.isColor&&(y(x,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===kr)?(h===void 0&&(h=new Ot(new Pe(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ii(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ee,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ot(new Li(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ii(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,f){m.getRGB(Ks,dh(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(o,c)},render:g}}function dm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(L,F,V,J,Y){let W=!1;if(a){let $=y(J,V,F);l!==$&&(l=$,p(l.object)),W=f(L,J,V,Y),W&&S(L,J,V,Y)}else{let $=F.wireframe===!0;(l.geometry!==J.id||l.program!==V.id||l.wireframe!==$)&&(l.geometry=J.id,l.program=V.id,l.wireframe=$,W=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,O(L,F,V,J),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function y(L,F,V){let J=V.wireframe===!0,Y=o[L.id];Y===void 0&&(Y={},o[L.id]=Y);let W=Y[F.id];W===void 0&&(W={},Y[F.id]=W);let $=W[J];return $===void 0&&($=m(d()),W[J]=$),$}function m(L){let F=[],V=[],J=[];for(let Y=0;Y<s;Y++)F[Y]=0,V[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:J,object:L,attributes:{},index:null}}function f(L,F,V,J){let Y=l.attributes,W=F.attributes,$=0,tt=V.getAttributes();for(let ut in tt)if(tt[ut].location>=0){let K=Y[ut],dt=W[ut];if(dt===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor)),K===void 0||K.attribute!==dt||dt&&K.data!==dt.data)return!0;$++}return l.attributesNum!==$||l.index!==J}function S(L,F,V,J){let Y={},W=F.attributes,$=0,tt=V.getAttributes();for(let ut in tt)if(tt[ut].location>=0){let K=W[ut];K===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let dt={};dt.attribute=K,K&&K.data&&(dt.data=K.data),Y[ut]=dt,$++}l.attributes=Y,l.attributesNum=$,l.index=J}function x(){let L=l.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function T(L){I(L,0)}function I(L,F){let V=l.newAttributes,J=l.enabledAttributes,Y=l.attributeDivisors;V[L]=1,J[L]===0&&(i.enableVertexAttribArray(L),J[L]=1),Y[L]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),Y[L]=F)}function A(){let L=l.newAttributes,F=l.enabledAttributes;for(let V=0,J=F.length;V<J;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function _(L,F,V,J,Y,W,$){$===!0?i.vertexAttribIPointer(L,F,V,Y,W):i.vertexAttribPointer(L,F,V,J,Y,W)}function O(L,F,V,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let Y=J.attributes,W=V.getAttributes(),$=F.defaultAttributeValues;for(let tt in W){let ut=W[tt];if(ut.location>=0){let k=Y[tt];if(k===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){let K=k.normalized,dt=k.itemSize,vt=e.get(k);if(vt===void 0)continue;let mt=vt.buffer,_t=vt.type,Lt=vt.bytesPerElement,Mt=n.isWebGL2===!0&&(_t===i.INT||_t===i.UNSIGNED_INT||k.gpuType===th);if(k.isInterleavedBufferAttribute){let Pt=k.data,C=Pt.stride,st=k.offset;if(Pt.isInstancedInterleavedBuffer){for(let q=0;q<ut.locationSize;q++)I(ut.location+q,Pt.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let q=0;q<ut.locationSize;q++)T(ut.location+q);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let q=0;q<ut.locationSize;q++)_(ut.location+q,dt/ut.locationSize,_t,K,C*Lt,(st+dt/ut.locationSize*q)*Lt,Mt)}else{if(k.isInstancedBufferAttribute){for(let Pt=0;Pt<ut.locationSize;Pt++)I(ut.location+Pt,k.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Pt=0;Pt<ut.locationSize;Pt++)T(ut.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Pt=0;Pt<ut.locationSize;Pt++)_(ut.location+Pt,dt/ut.locationSize,_t,K,dt*Lt,dt/ut.locationSize*Pt*Lt,Mt)}}else if($!==void 0){let K=$[tt];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(ut.location,K);break;case 3:i.vertexAttrib3fv(ut.location,K);break;case 4:i.vertexAttrib4fv(ut.location,K);break;default:i.vertexAttrib1fv(ut.location,K)}}}}A()}function M(){G();for(let L in o){let F=o[L];for(let V in F){let J=F[V];for(let Y in J)g(J[Y].object),delete J[Y];delete F[V]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let F=o[L.id];for(let V in F){let J=F[V];for(let Y in J)g(J[Y].object),delete J[Y];delete F[V]}delete o[L.id]}function N(L){for(let F in o){let V=o[F];if(V[L.id]===void 0)continue;let J=V[L.id];for(let Y in J)g(J[Y].object),delete J[Y];delete V[L.id]}}function G(){nt(),h=!0,l!==c&&(l=c,p(l.object))}function nt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:nt,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:T,disableUnusedAttributes:A}}function fm(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function pm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=a||t.has("OES_texture_float"),I=x&&T,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:I,maxSamples:A}}function mm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pn,o=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,x=S*4,T=f.clippingState||null;c.value=T,T=h(g,d,x,p);for(let I=0;I!==x;++I)T[I]=e[I];f.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let f=p+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,T=p;x!==y;++x,T+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function gm(i){let t=new WeakMap;function e(a,o){return o===Ja?a.mapping=Ri:o===Za&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ja||o===Za)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new io(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mr=class extends yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Si=4,gl=[.125,.215,.35,.446,.526,.582],Jn=20,Fa=new Mr,xl=new Ft,Oa=null,Ba=0,za=0,qn=(1+Math.sqrt(5))/2,yi=1/qn,yl=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,qn,yi),new R(0,qn,-yi),new R(yi,0,qn),new R(-yi,0,qn),new R(qn,yi,0),new R(-qn,yi,0)],Sr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,Ba,za),t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:ss,format:je,colorSpace:gn,depthBuffer:!1},s=vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(r)),this._blurMaterial=ym(r,t,e)}return s}_compileMaterial(t){let e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s){let o=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xl),h.toneMapping=Pn,h.autoClear=!1;let p=new vn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Ot(new Pe,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(xl),y=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):S===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let x=this._cubeSize;js(s,S*x,f>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ri||t.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;js(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Fa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yl[(s-1)%yl.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ot(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);let f=[],S=0;for(let _=0;_<Jn;++_){let O=_/y,M=Math.exp(-O*O/2);f.push(M),_===0?S+=M:_<m&&(S+=2*M)}for(let _=0;_<f.length;_++)f[_]=f[_]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let T=this._sizeLods[s],I=3*T*(s>x-Si?s-x+Si:0),A=4*(this._cubeSize-T);js(e,I,A,3*T,2*T),c.setRenderTarget(e),c.render(u,Fa)}};function xm(i){let t=[],e=[],n=[],s=i,r=i-Si+1+gl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Si?c=gl[a-i+Si-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,S=new Float32Array(y*g*p),x=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let A=0;A<p;A++){let _=A%3*2/3-1,O=A>2?0:-1,M=[_,O,0,_+2/3,O,0,_+2/3,O+1,0,_,O,0,_+2/3,O+1,0,_,O+1,0];S.set(M,y*g*A),x.set(d,m*g*A);let w=[A,A,A,A,A,A];T.set(w,f*g*A)}let I=new ve;I.setAttribute("position",new Oe(S,y)),I.setAttribute("uv",new Oe(x,m)),I.setAttribute("faceIndex",new Oe(T,f)),t.push(I),s>Si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vl(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ym(i,t,e){let n=new Float32Array(Jn),s=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ml(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Sl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ja||c===Za,h=c===Ri||c===Ci;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Sr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Sr(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let x=0,T=S.length;x<T;x+=3){let I=S[x+0],A=S[x+1],_=S[x+2];d.push(I,A,A,_,_,I)}}else if(g!==void 0){let S=g.array;y=g.version;for(let x=0,T=S.length/3-1;x<T;x+=3){let I=x+0,A=x+1,_=x+2;d.push(I,A,A,_,_,I)}}else return;let m=new(hh(d)?xr:gr)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Em(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,o,p*c),e.update(g,r,1)}function u(p,g,y){if(y===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*c,y),e.update(g,r,y)}function d(p,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,y);let f=0;for(let S=0;S<y;S++)f+=g[S];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wm(i,t){return i[0]-t[0]}function Tm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Am(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new ie,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(h);if(y===void 0||y.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let S=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],_=h.morphAttributes.color||[],O=0;S===!0&&(O=1),x===!0&&(O=2),T===!0&&(O=3);let M=h.attributes.position.count*O,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*w*4*g),G=new pr(N,M,w,g);G.type=Rn,G.needsUpdate=!0;let nt=O*4;for(let F=0;F<g;F++){let V=I[F],J=A[F],Y=_[F],W=M*w*4*F;for(let $=0;$<V.count;$++){let tt=$*nt;S===!0&&(a.fromBufferAttribute(V,$),N[W+tt+0]=a.x,N[W+tt+1]=a.y,N[W+tt+2]=a.z,N[W+tt+3]=0),x===!0&&(a.fromBufferAttribute(J,$),N[W+tt+4]=a.x,N[W+tt+5]=a.y,N[W+tt+6]=a.z,N[W+tt+7]=0),T===!0&&(a.fromBufferAttribute(Y,$),N[W+tt+8]=a.x,N[W+tt+9]=a.y,N[W+tt+10]=a.z,N[W+tt+11]=Y.itemSize===4?a.w:1)}}y={count:g,texture:G,size:new ot(M,w)},r.set(h,y),h.addEventListener("dispose",L)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){let T=g[x];T[0]=x,T[1]=d[x]}g.sort(Tm);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(wm);let y=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let T=o[x],I=T[0],A=T[1];I!==Number.MAX_SAFE_INTEGER&&A?(y&&h.getAttribute("morphTarget"+x)!==y[I]&&h.setAttribute("morphTarget"+x,y[I]),m&&h.getAttribute("morphNormal"+x)!==m[I]&&h.setAttribute("morphNormal"+x,m[I]),s[x]=A,f+=A):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function _m(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Er=class extends Ge{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Kn&&(n=_n),n===void 0&&h===Pi&&(n=Zn),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ce,this.minFilter=c!==void 0?c:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ph=new Ge,mh=new Er(1,1);mh.compareFunction=lh;var gh=new pr,xh=new eo,yh=new vr,El=[],bl=[],wl=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function Oi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=El[s];if(r===void 0&&(r=new Float32Array(s),El[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wr(i,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Al.set(n),i.uniformMatrix2fv(this.addr,!1,Al),me(e,n)}}function Dm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Tl.set(n),i.uniformMatrix3fv(this.addr,!1,Tl),me(e,n)}}function Um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),me(e,n)}}function Nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function zm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?mh:ph;e.setTexture2D(t||r,s)}function Wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xh,s)}function Xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yh,s)}function qm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gh,s)}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Im;case 35674:return Lm;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return Vm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Jm(i,t){i.uniform1fv(this.addr,t)}function Zm(i,t){let e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Km(i,t){let e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function jm(i,t){let e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Qm(i,t){let e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){let e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tg(i,t){let e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function eg(i,t){i.uniform1iv(this.addr,t)}function ng(i,t){i.uniform2iv(this.addr,t)}function ig(i,t){i.uniform3iv(this.addr,t)}function sg(i,t){i.uniform4iv(this.addr,t)}function rg(i,t){i.uniform1uiv(this.addr,t)}function ag(i,t){i.uniform2uiv(this.addr,t)}function og(i,t){i.uniform3uiv(this.addr,t)}function cg(i,t){i.uniform4uiv(this.addr,t)}function lg(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ph,r[a])}function hg(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xh,r[a])}function ug(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yh,r[a])}function dg(i,t,e){let n=this.cache,s=t.length,r=Wr(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gh,r[a])}function fg(i){switch(i){case 5126:return Jm;case 35664:return Zm;case 35665:return Km;case 35666:return jm;case 35674:return Qm;case 35675:return $m;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}var so=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}},ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fg(e.type)}},ao=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ha=/(\w+)(\])?(\[|\.)?/g;function _l(i,t){i.seq.push(t),i.map[t.id]=t}function pg(i,t,e){let n=i.name,s=n.length;for(Ha.lastIndex=0;;){let r=Ha.exec(n),a=Ha.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_l(e,l===void 0?new so(o,i,t):new ro(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ao(o),_l(e,u)),e=u}}}var Ai=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);pg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var mg=37297,gg=0;function xg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function yg(i){let t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i),n;switch(t===e?n="":t===hr&&e===lr?n="LinearDisplayP3ToLinearSRGB":t===lr&&e===hr&&(n="LinearSRGBToLinearDisplayP3"),i){case gn:case Gr:return[n,"LinearTransferOETF"];case de:case ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+xg(i.getShaderSource(t),a)}else return s}function vg(i,t){let e=yg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mg(i,t){let e;switch(t){case Bu:e="Linear";break;case zu:e="Reinhard";break;case Hu:e="OptimizedCineon";break;case Ho:e="ACESFilmic";break;case ku:e="AgX";break;case Vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Sg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ei).join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ei).join(`
`)}function bg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ei(i){return i!==""}function Pl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(Tg,_g)}var Ag=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _g(i,t){let e=zt[t];if(e===void 0){let n=Ag.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}var Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(i){return i.replace(Rg,Cg)}function Cg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ci:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ci&&(t="ENVMAP_MODE_REFRACTION"),t}function Dg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ql:t="ENVMAP_BLENDING_MULTIPLY";break;case Fu:t="ENVMAP_BLENDING_MIX";break;case Ou:t="ENVMAP_BLENDING_ADD";break}return t}function Ug(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ng(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Pg(e),l=Ig(e),h=Lg(e),u=Dg(e),d=Ug(e),p=e.isWebGL2?"":Sg(e),g=Eg(e),y=bg(r),m=s.createProgram(),f,S,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ei).join(`
`),f.length>0&&(f+=`
`),S=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ei).join(`
`),S.length>0&&(S+=`
`)):(f=[Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),S=[p,Dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ei).join(`
`)),a=oo(a),a=Pl(a,e),a=Il(a,e),o=oo(o),o=Pl(o,e),o=Il(o,e),a=Ll(a),o=Ll(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=x+f+a,I=x+S+o,A=Rl(s,s.VERTEX_SHADER,T),_=Rl(s,s.FRAGMENT_SHADER,I);s.attachShader(m,A),s.attachShader(m,_),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function O(G){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(_).trim(),V=!0,J=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,_);else{let Y=Cl(s,A,"vertex"),W=Cl(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+Y+`
`+W)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(L===""||F==="")&&(J=!1);J&&(G.diagnostics={runnable:V,programLog:nt,vertexShader:{log:L,prefix:f},fragmentShader:{log:F,prefix:S}})}s.deleteShader(A),s.deleteShader(_),M=new Ai(s,m),w=wg(s,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,mg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=_,this}var Fg=0,co=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lo(t),e.set(t,n)),n}},lo=class{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}};function Og(i,t,e,n,s,r,a){let o=new os,c=new co,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,w,N,G,nt){let L=G.fog,F=nt.geometry,V=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),Y=J&&J.mapping===kr?J.image.height:null,W=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=$!==void 0?$.length:0,ut=0;F.morphAttributes.position!==void 0&&(ut=1),F.morphAttributes.normal!==void 0&&(ut=2),F.morphAttributes.color!==void 0&&(ut=3);let k,K,dt,vt;if(W){let Ae=nn[W];k=Ae.vertexShader,K=Ae.fragmentShader}else k=M.vertexShader,K=M.fragmentShader,c.update(M),dt=c.getVertexShaderID(M),vt=c.getFragmentShaderID(M);let mt=i.getRenderTarget(),_t=nt.isInstancedMesh===!0,Lt=nt.isBatchedMesh===!0,Mt=!!M.map,Pt=!!M.matcap,C=!!J,st=!!M.aoMap,q=!!M.lightMap,it=!!M.bumpMap,X=!!M.normalMap,Et=!!M.displacementMap,ft=!!M.emissiveMap,E=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,et=M.clearcoat>0,j=M.iridescence>0,Z=M.sheen>0,yt=M.transmission>0,ct=U&&!!M.anisotropyMap,gt=et&&!!M.clearcoatMap,wt=et&&!!M.clearcoatNormalMap,Ut=et&&!!M.clearcoatRoughnessMap,Q=j&&!!M.iridescenceMap,Xt=j&&!!M.iridescenceThicknessMap,Wt=Z&&!!M.sheenColorMap,It=Z&&!!M.sheenRoughnessMap,bt=!!M.specularMap,xt=!!M.specularColorMap,Bt=!!M.specularIntensityMap,Zt=yt&&!!M.transmissionMap,ce=yt&&!!M.thicknessMap,Vt=!!M.gradientMap,rt=!!M.alphaMap,P=M.alphaTest>0,lt=!!M.alphaHash,ht=!!M.extensions,Rt=!!F.attributes.uv1,Tt=!!F.attributes.uv2,Qt=!!F.attributes.uv3,$t=Pn;return M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&($t=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:K,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Lt,instancing:_t,instancingColor:_t&&nt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:gn,map:Mt,matcap:Pt,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:Y,aoMap:st,lightMap:q,bumpMap:it,normalMap:X,displacementMap:d&&Et,emissiveMap:ft,normalMapObjectSpace:X&&M.normalMapType===td,normalMapTangentSpace:X&&M.normalMapType===ch,metalnessMap:E,roughnessMap:v,anisotropy:U,anisotropyMap:ct,clearcoat:et,clearcoatMap:gt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Ut,iridescence:j,iridescenceMap:Q,iridescenceThicknessMap:Xt,sheen:Z,sheenColorMap:Wt,sheenRoughnessMap:It,specularMap:bt,specularColorMap:xt,specularIntensityMap:Bt,transmission:yt,transmissionMap:Zt,thicknessMap:ce,gradientMap:Vt,opaque:M.transparent===!1&&M.blending===wi,alphaMap:rt,alphaTest:P,alphaHash:lt,combine:M.combine,mapUv:Mt&&y(M.map.channel),aoMapUv:st&&y(M.aoMap.channel),lightMapUv:q&&y(M.lightMap.channel),bumpMapUv:it&&y(M.bumpMap.channel),normalMapUv:X&&y(M.normalMap.channel),displacementMapUv:Et&&y(M.displacementMap.channel),emissiveMapUv:ft&&y(M.emissiveMap.channel),metalnessMapUv:E&&y(M.metalnessMap.channel),roughnessMapUv:v&&y(M.roughnessMap.channel),anisotropyMapUv:ct&&y(M.anisotropyMap.channel),clearcoatMapUv:gt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(M.sheenRoughnessMap.channel),specularMapUv:bt&&y(M.specularMap.channel),specularColorMapUv:xt&&y(M.specularColorMap.channel),specularIntensityMapUv:Bt&&y(M.specularIntensityMap.channel),transmissionMapUv:Zt&&y(M.transmissionMap.channel),thicknessMapUv:ce&&y(M.thicknessMap.channel),alphaMapUv:rt&&y(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(X||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:Tt,vertexUv3s:Qt,pointsUvs:nt.isPoints===!0&&!!F.attributes.uv&&(Mt||rt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ht&&M.extensions.derivatives===!0,extensionFragDepth:ht&&M.extensions.fragDepth===!0,extensionDrawBuffers:ht&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(S(w,M),x(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function T(M){let w=g[M.type],N;if(w){let G=nn[w];N=Td.clone(G.uniforms)}else N=M.uniforms;return N}function I(M,w){let N;for(let G=0,nt=l.length;G<nt;G++){let L=l[G];if(L.cacheKey===w){N=L,++N.usedTimes;break}}return N===void 0&&(N=new Ng(i,w,M,r),l.push(N)),N}function A(M){if(--M.usedTimes===0){let w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function _(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:I,releaseProgram:A,releaseShaderCache:_,programs:l,dispose:O}}function Bg(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function o(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,y,m){let f=a(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||zg),n.length>1&&n.sort(d||Ul),s.length>1&&s.sort(d||Ul)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Hg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Nl,i.set(n,[a])):s>=r.length?(a=new Nl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ft};break;case"SpotLight":e={position:new R,direction:new R,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gg=0;function Wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xg(i,t){let e=new Vg,n=kg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,a=new se,o=new se;function c(h,u){let d=0,p=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let y=0,m=0,f=0,S=0,x=0,T=0,I=0,A=0,_=0,O=0,M=0;h.sort(Wg);let w=u===!0?Math.PI:1;for(let G=0,nt=h.length;G<nt;G++){let L=h[G],F=L.color,V=L.intensity,J=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*V*w,p+=F.g*V*w,g+=F.b*V*w;else if(L.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(L.sh.coefficients[W],V);M++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let $=L.shadow,tt=n.get(L);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.directionalShadow[y]=tt,s.directionalShadowMap[y]=Y,s.directionalShadowMatrix[y]=L.shadow.matrix,T++}s.directional[y]=W,y++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(V*w),W.distance=J,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,s.spot[f]=W;let $=L.shadow;if(L.map&&(s.spotLightMap[_]=L.map,_++,$.updateMatrices(L),L.castShadow&&O++),s.spotLightMatrix[f]=$.matrix,L.castShadow){let tt=n.get(L);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.spotShadow[f]=tt,s.spotShadowMap[f]=Y,A++}f++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=W,S++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*w),W.distance=L.distance,W.decay=L.decay,L.castShadow){let $=L.shadow,tt=n.get(L);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=L.shadow.matrix,I++}s.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(V*w),W.groundColor.copy(L.groundColor).multiplyScalar(V*w),s.hemi[x]=W,x++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==y||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==S||N.hemiLength!==x||N.numDirectionalShadows!==T||N.numPointShadows!==I||N.numSpotShadows!==A||N.numSpotMaps!==_||N.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=S,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=A+_-O,s.spotLightMap.length=_,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=M,N.directionalLength=y,N.pointLength=m,N.spotLength=f,N.rectAreaLength=S,N.hemiLength=x,N.numDirectionalShadows=T,N.numPointShadows=I,N.numSpotShadows=A,N.numSpotMaps=_,N.numLightProbes=M,s.version=Gg++)}function l(h,u){let d=0,p=0,g=0,y=0,m=0,f=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){let T=h[S];if(T.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),d++}else if(T.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),g++}else if(T.isRectAreaLight){let I=s.rectArea[y];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(f),o.identity(),a.copy(T.matrixWorld),a.premultiply(f),o.extractRotation(a),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),y++}else if(T.isPointLight){let I=s.point[p];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function Fl(i,t){let e=new Xg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function qg(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new Fl(i,t),e.set(r,[c])):a>=o.length?(c=new Fl(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var ho=class extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zg(i,t,e){let n=new cs,s=new ot,r=new ot,a=new ie,o=new ho({depthPacking:$u}),c=new uo,l={},h=e.maxTextureSize,u={[Ln]:De,[De]:Ln,[Ze]:Ze},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Yg,fragmentShader:Jg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ve;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let f=this.type;this.render=function(A,_,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Cn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let nt=f!==fn&&this.type===fn,L=f===fn&&this.type!==fn;for(let F=0,V=A.length;F<V;F++){let J=A[F],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let W=Y.getFrameExtents();if(s.multiply(W),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,Y.mapSize.y=r.y)),Y.map===null||nt===!0||L===!0){let tt=this.type!==fn?{minFilter:Ce,magFilter:Ce}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xn(s.x,s.y,tt),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let $=Y.getViewportCount();for(let tt=0;tt<$;tt++){let ut=Y.getViewport(tt);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),G.viewport(a),Y.updateMatrices(J,tt),n=Y.getFrustum(),T(_,O,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===fn&&S(Y,O),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,N)};function S(A,_){let O=t.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,O,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,O,p,y,null)}function x(A,_,O,M){let w=null,N=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)w=N;else if(w=O.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let G=w.uuid,nt=_.uuid,L=l[G];L===void 0&&(L={},l[G]=L);let F=L[nt];F===void 0&&(F=w.clone(),L[nt]=F,_.addEventListener("dispose",I)),w=F}if(w.visible=_.visible,w.wireframe=_.wireframe,M===fn?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=i.properties.get(w);G.light=O}return w}function T(A,_,O,M,w){if(A.visible===!1)return;if(A.layers.test(_.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let nt=t.update(A),L=A.material;if(Array.isArray(L)){let F=nt.groups;for(let V=0,J=F.length;V<J;V++){let Y=F[V],W=L[Y.materialIndex];if(W&&W.visible){let $=x(A,W,M,w);A.onBeforeShadow(i,A,_,O,nt,$,Y),i.renderBufferDirect(O,null,nt,$,A,Y),A.onAfterShadow(i,A,_,O,nt,$,Y)}}}else if(L.visible){let F=x(A,L,M,w);A.onBeforeShadow(i,A,_,O,nt,F,null),i.renderBufferDirect(O,null,nt,F,A,null),A.onAfterShadow(i,A,_,O,nt,F,null)}}let G=A.children;for(let nt=0,L=G.length;nt<L;nt++)T(G[nt],_,O,M,w)}function I(A){A.target.removeEventListener("dispose",I);for(let O in l){let M=l[O],w=A.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Kg(i,t,e){let n=e.isWebGL2;function s(){let P=!1,lt=new ie,ht=null,Rt=new ie(0,0,0,0);return{setMask:function(Tt){ht!==Tt&&!P&&(i.colorMask(Tt,Tt,Tt,Tt),ht=Tt)},setLocked:function(Tt){P=Tt},setClear:function(Tt,Qt,$t,ge,Ae){Ae===!0&&(Tt*=ge,Qt*=ge,$t*=ge),lt.set(Tt,Qt,$t,ge),Rt.equals(lt)===!1&&(i.clearColor(Tt,Qt,$t,ge),Rt.copy(lt))},reset:function(){P=!1,ht=null,Rt.set(-1,0,0,0)}}}function r(){let P=!1,lt=null,ht=null,Rt=null;return{setTest:function(Tt){Tt?Lt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Tt){lt!==Tt&&!P&&(i.depthMask(Tt),lt=Tt)},setFunc:function(Tt){if(ht!==Tt){switch(Tt){case Cu:i.depthFunc(i.NEVER);break;case Pu:i.depthFunc(i.ALWAYS);break;case Iu:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Lu:i.depthFunc(i.EQUAL);break;case Du:i.depthFunc(i.GEQUAL);break;case Uu:i.depthFunc(i.GREATER);break;case Nu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Tt}},setLocked:function(Tt){P=Tt},setClear:function(Tt){Rt!==Tt&&(i.clearDepth(Tt),Rt=Tt)},reset:function(){P=!1,lt=null,ht=null,Rt=null}}}function a(){let P=!1,lt=null,ht=null,Rt=null,Tt=null,Qt=null,$t=null,ge=null,Ae=null;return{setTest:function(te){P||(te?Lt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(te){lt!==te&&!P&&(i.stencilMask(te),lt=te)},setFunc:function(te,_e,en){(ht!==te||Rt!==_e||Tt!==en)&&(i.stencilFunc(te,_e,en),ht=te,Rt=_e,Tt=en)},setOp:function(te,_e,en){(Qt!==te||$t!==_e||ge!==en)&&(i.stencilOp(te,_e,en),Qt=te,$t=_e,ge=en)},setLocked:function(te){P=te},setClear:function(te){Ae!==te&&(i.clearStencil(te),Ae=te)},reset:function(){P=!1,lt=null,ht=null,Rt=null,Tt=null,Qt=null,$t=null,ge=null,Ae=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,y=[],m=null,f=!1,S=null,x=null,T=null,I=null,A=null,_=null,O=null,M=new Ft(0,0,0),w=0,N=!1,G=null,nt=null,L=null,F=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,W=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=W>=2);let tt=null,ut={},k=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),dt=new ie().fromArray(k),vt=new ie().fromArray(K);function mt(P,lt,ht,Rt){let Tt=new Uint8Array(4),Qt=i.createTexture();i.bindTexture(P,Qt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ht;$t++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(lt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(lt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Qt}let _t={};_t[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(i.DEPTH_TEST),c.setFunc(rr),ft(!1),E(gc),Lt(i.CULL_FACE),X(Cn);function Lt(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Mt(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Pt(P,lt){return p[P]!==lt?(i.bindFramebuffer(P,lt),p[P]=lt,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=lt),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=lt)),!0):!1}function C(P,lt){let ht=y,Rt=!1;if(P)if(ht=g.get(lt),ht===void 0&&(ht=[],g.set(lt,ht)),P.isWebGLMultipleRenderTargets){let Tt=P.texture;if(ht.length!==Tt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Qt=0,$t=Tt.length;Qt<$t;Qt++)ht[Qt]=i.COLOR_ATTACHMENT0+Qt;ht.length=Tt.length,Rt=!0}}else ht[0]!==i.COLOR_ATTACHMENT0&&(ht[0]=i.COLOR_ATTACHMENT0,Rt=!0);else ht[0]!==i.BACK&&(ht[0]=i.BACK,Rt=!0);Rt&&(e.isWebGL2?i.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function st(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let q={[Yn]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};if(n)q[vc]=i.MIN,q[Mc]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(q[vc]=P.MIN_EXT,q[Mc]=P.MAX_EXT)}let it={[gu]:i.ZERO,[xu]:i.ONE,[yu]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[_u]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function X(P,lt,ht,Rt,Tt,Qt,$t,ge,Ae,te){if(P===Cn){f===!0&&(Mt(i.BLEND),f=!1);return}if(f===!1&&(Lt(i.BLEND),f=!0),P!==fu){if(P!==S||te!==N){if((x!==Yn||A!==Yn)&&(i.blendEquation(i.FUNC_ADD),x=Yn,A=Yn),te)switch(P){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,I=null,_=null,O=null,M.set(0,0,0),w=0,S=P,N=te}return}Tt=Tt||lt,Qt=Qt||ht,$t=$t||Rt,(lt!==x||Tt!==A)&&(i.blendEquationSeparate(q[lt],q[Tt]),x=lt,A=Tt),(ht!==T||Rt!==I||Qt!==_||$t!==O)&&(i.blendFuncSeparate(it[ht],it[Rt],it[Qt],it[$t]),T=ht,I=Rt,_=Qt,O=$t),(ge.equals(M)===!1||Ae!==w)&&(i.blendColor(ge.r,ge.g,ge.b,Ae),M.copy(ge),w=Ae),S=P,N=!1}function Et(P,lt){P.side===Ze?Mt(i.CULL_FACE):Lt(i.CULL_FACE);let ht=P.side===De;lt&&(ht=!ht),ft(ht),P.blending===wi&&P.transparent===!1?X(Cn):X(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);let Rt=P.stencilWrite;l.setTest(Rt),Rt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),U(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Lt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(P){G!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),G=P)}function E(P){P!==uu?(Lt(i.CULL_FACE),P!==nt&&(P===gc?i.cullFace(i.BACK):P===du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),nt=P}function v(P){P!==L&&(Y&&i.lineWidth(P),L=P)}function U(P,lt,ht){P?(Lt(i.POLYGON_OFFSET_FILL),(F!==lt||V!==ht)&&(i.polygonOffset(lt,ht),F=lt,V=ht)):Mt(i.POLYGON_OFFSET_FILL)}function et(P){P?Lt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function j(P){P===void 0&&(P=i.TEXTURE0+J-1),tt!==P&&(i.activeTexture(P),tt=P)}function Z(P,lt,ht){ht===void 0&&(tt===null?ht=i.TEXTURE0+J-1:ht=tt);let Rt=ut[ht];Rt===void 0&&(Rt={type:void 0,texture:void 0},ut[ht]=Rt),(Rt.type!==P||Rt.texture!==lt)&&(tt!==ht&&(i.activeTexture(ht),tt=ht),i.bindTexture(P,lt||_t[P]),Rt.type=P,Rt.texture=lt)}function yt(){let P=ut[tt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(P){dt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),dt.copy(P))}function Zt(P){vt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),vt.copy(P))}function ce(P,lt){let ht=u.get(lt);ht===void 0&&(ht=new WeakMap,u.set(lt,ht));let Rt=ht.get(P);Rt===void 0&&(Rt=i.getUniformBlockIndex(lt,P.name),ht.set(P,Rt))}function Vt(P,lt){let Rt=u.get(lt).get(P);h.get(lt)!==Rt&&(i.uniformBlockBinding(lt,Rt,P.__bindingPointIndex),h.set(lt,Rt))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,ut={},p={},g=new WeakMap,y=[],m=null,f=!1,S=null,x=null,T=null,I=null,A=null,_=null,O=null,M=new Ft(0,0,0),w=0,N=!1,G=null,nt=null,L=null,F=null,V=null,dt.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Lt,disable:Mt,bindFramebuffer:Pt,drawBuffers:C,useProgram:st,setBlending:X,setMaterial:Et,setFlipSided:ft,setCullFace:E,setLineWidth:v,setPolygonOffset:U,setScissorTest:et,activeTexture:j,bindTexture:Z,unbindTexture:yt,compressedTexImage2D:ct,compressedTexImage3D:gt,texImage2D:bt,texImage3D:xt,updateUBOMapping:ce,uniformBlockBinding:Vt,texStorage2D:Wt,texStorage3D:It,texSubImage2D:wt,texSubImage3D:Ut,compressedTexSubImage2D:Q,compressedTexSubImage3D:Xt,scissor:Bt,viewport:Zt,reset:rt}}function jg(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):rs("canvas")}function y(E,v,U,et){let j=1;if((E.width>et||E.height>et)&&(j=et/Math.max(E.width,E.height)),j<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let Z=v?$a:Math.floor,yt=Z(j*E.width),ct=Z(j*E.height);u===void 0&&(u=g(yt,ct));let gt=U?g(yt,ct):u;return gt.width=yt,gt.height=ct,gt.getContext("2d").drawImage(E,0,0,yt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+yt+"x"+ct+")."),gt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return $c(E.width)&&$c(E.height)}function f(E){return o?!1:E.wrapS!==Ke||E.wrapT!==Ke||E.minFilter!==Ce&&E.minFilter!==He}function S(E,v){return E.generateMipmaps&&v&&E.minFilter!==Ce&&E.minFilter!==He}function x(E){i.generateMipmap(E)}function T(E,v,U,et,j=!1){if(o===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=v;if(v===i.RED&&(U===i.FLOAT&&(Z=i.R32F),U===i.HALF_FLOAT&&(Z=i.R16F),U===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.R8UI),U===i.UNSIGNED_SHORT&&(Z=i.R16UI),U===i.UNSIGNED_INT&&(Z=i.R32UI),U===i.BYTE&&(Z=i.R8I),U===i.SHORT&&(Z=i.R16I),U===i.INT&&(Z=i.R32I)),v===i.RG&&(U===i.FLOAT&&(Z=i.RG32F),U===i.HALF_FLOAT&&(Z=i.RG16F),U===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RGBA){let yt=j?cr:Kt.getTransfer(et);U===i.FLOAT&&(Z=i.RGBA32F),U===i.HALF_FLOAT&&(Z=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Z=yt===ee?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function I(E,v,U){return S(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Ce&&E.minFilter!==He?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){return E===Ce||E===Sc||E===ha?i.NEAREST:i.LINEAR}function _(E){let v=E.target;v.removeEventListener("dispose",_),M(v),v.isVideoTexture&&h.delete(v)}function O(E){let v=E.target;v.removeEventListener("dispose",O),N(v)}function M(E){let v=n.get(E);if(v.__webglInit===void 0)return;let U=E.source,et=d.get(U);if(et){let j=et[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(E),Object.keys(et).length===0&&d.delete(U)}n.remove(E)}function w(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let U=E.source,et=d.get(U);delete et[v.__cacheKey],a.memory.textures--}function N(E){let v=E.texture,U=n.get(E),et=n.get(v);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(U.__webglFramebuffer[j]))for(let Z=0;Z<U.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(U.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(U.__webglFramebuffer[j]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[j])}else{if(Array.isArray(U.__webglFramebuffer))for(let j=0;j<U.__webglFramebuffer.length;j++)i.deleteFramebuffer(U.__webglFramebuffer[j]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let j=0;j<U.__webglColorRenderbuffer.length;j++)U.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[j]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let j=0,Z=v.length;j<Z;j++){let yt=n.get(v[j]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(v[j])}n.remove(v),n.remove(E)}let G=0;function nt(){G=0}function L(){let E=G;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),G+=1,E}function F(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function V(E,v){let U=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){let et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(U,E,v);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function J(E,v){let U=n.get(E);if(E.version>0&&U.__version!==E.version){dt(U,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function Y(E,v){let U=n.get(E);if(E.version>0&&U.__version!==E.version){dt(U,E,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function W(E,v){let U=n.get(E);if(E.version>0&&U.__version!==E.version){vt(U,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}let $={[ns]:i.REPEAT,[Ke]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},tt={[Ce]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Gu]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},ut={[ed]:i.NEVER,[od]:i.ALWAYS,[nd]:i.LESS,[lh]:i.LEQUAL,[id]:i.EQUAL,[ad]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function k(E,v,U){if(U?(i.texParameteri(E,i.TEXTURE_WRAP_S,$[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,$[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,$[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,tt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,tt[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Ke||v.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Ce&&v.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ce||v.minFilter!==ha&&v.minFilter!==is||v.type===Rn&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===ss&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function K(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",_));let et=v.source,j=d.get(et);j===void 0&&(j={},d.set(et,j));let Z=F(v);if(Z!==E.__cacheKey){j[Z]===void 0&&(j[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[Z].usedTimes++;let yt=j[E.__cacheKey];yt!==void 0&&(j[E.__cacheKey].usedTimes--,yt.usedTimes===0&&w(v)),E.__cacheKey=Z,E.__webglTexture=j[Z].texture}return U}function dt(E,v,U){let et=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=i.TEXTURE_3D);let j=K(E,v),Z=v.source;e.bindTexture(et,E.__webglTexture,i.TEXTURE0+U);let yt=n.get(Z);if(Z.version!==yt.__version||j===!0){e.activeTexture(i.TEXTURE0+U);let ct=Kt.getPrimaries(Kt.workingColorSpace),gt=v.colorSpace===Ve?null:Kt.getPrimaries(v.colorSpace),wt=v.colorSpace===Ve||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Ut=f(v)&&m(v.image)===!1,Q=y(v.image,Ut,!1,s.maxTextureSize);Q=ft(v,Q);let Xt=m(Q)||o,Wt=r.convert(v.format,v.colorSpace),It=r.convert(v.type),bt=T(v.internalFormat,Wt,It,v.colorSpace,v.isVideoTexture);k(et,v,Xt);let xt,Bt=v.mipmaps,Zt=o&&v.isVideoTexture!==!0&&bt!==ah,ce=yt.__version===void 0||j===!0,Vt=I(v,Q,Xt);if(v.isDepthTexture)bt=i.DEPTH_COMPONENT,o?v.type===Rn?bt=i.DEPTH_COMPONENT32F:v.type===_n?bt=i.DEPTH_COMPONENT24:v.type===Zn?bt=i.DEPTH24_STENCIL8:bt=i.DEPTH_COMPONENT16:v.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Kn&&bt===i.DEPTH_COMPONENT&&v.type!==Vo&&v.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=_n,It=r.convert(v.type)),v.format===Pi&&bt===i.DEPTH_COMPONENT&&(bt=i.DEPTH_STENCIL,v.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Zn,It=r.convert(v.type))),ce&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,Wt,It,null));else if(v.isDataTexture)if(Bt.length>0&&Xt){Zt&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,bt,Bt[0].width,Bt[0].height);for(let rt=0,P=Bt.length;rt<P;rt++)xt=Bt[rt],Zt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,Wt,It,xt.data):e.texImage2D(i.TEXTURE_2D,rt,bt,xt.width,xt.height,0,Wt,It,xt.data);v.generateMipmaps=!1}else Zt?(ce&&e.texStorage2D(i.TEXTURE_2D,Vt,bt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Wt,It,Q.data)):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,Wt,It,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Zt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,bt,Bt[0].width,Bt[0].height,Q.depth);for(let rt=0,P=Bt.length;rt<P;rt++)xt=Bt[rt],v.format!==je?Wt!==null?Zt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,Q.depth,Wt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,bt,xt.width,xt.height,Q.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,Q.depth,Wt,It,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,bt,xt.width,xt.height,Q.depth,0,Wt,It,xt.data)}else{Zt&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,bt,Bt[0].width,Bt[0].height);for(let rt=0,P=Bt.length;rt<P;rt++)xt=Bt[rt],v.format!==je?Wt!==null?Zt?e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,Wt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,bt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt.width,xt.height,Wt,It,xt.data):e.texImage2D(i.TEXTURE_2D,rt,bt,xt.width,xt.height,0,Wt,It,xt.data)}else if(v.isDataArrayTexture)Zt?(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,bt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Wt,It,Q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,Wt,It,Q.data);else if(v.isData3DTexture)Zt?(ce&&e.texStorage3D(i.TEXTURE_3D,Vt,bt,Q.width,Q.height,Q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Wt,It,Q.data)):e.texImage3D(i.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,Wt,It,Q.data);else if(v.isFramebufferTexture){if(ce)if(Zt)e.texStorage2D(i.TEXTURE_2D,Vt,bt,Q.width,Q.height);else{let rt=Q.width,P=Q.height;for(let lt=0;lt<Vt;lt++)e.texImage2D(i.TEXTURE_2D,lt,bt,rt,P,0,Wt,It,null),rt>>=1,P>>=1}}else if(Bt.length>0&&Xt){Zt&&ce&&e.texStorage2D(i.TEXTURE_2D,Vt,bt,Bt[0].width,Bt[0].height);for(let rt=0,P=Bt.length;rt<P;rt++)xt=Bt[rt],Zt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Wt,It,xt):e.texImage2D(i.TEXTURE_2D,rt,bt,Wt,It,xt);v.generateMipmaps=!1}else Zt?(ce&&e.texStorage2D(i.TEXTURE_2D,Vt,bt,Q.width,Q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,It,Q)):e.texImage2D(i.TEXTURE_2D,0,bt,Wt,It,Q);S(v,Xt)&&x(et),yt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function vt(E,v,U){if(v.image.length!==6)return;let et=K(E,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);let Z=n.get(j);if(j.version!==Z.__version||et===!0){e.activeTexture(i.TEXTURE0+U);let yt=Kt.getPrimaries(Kt.workingColorSpace),ct=v.colorSpace===Ve?null:Kt.getPrimaries(v.colorSpace),gt=v.colorSpace===Ve||yt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let wt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ut=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let rt=0;rt<6;rt++)!wt&&!Ut?Q[rt]=y(v.image[rt],!1,!0,s.maxCubemapSize):Q[rt]=Ut?v.image[rt].image:v.image[rt],Q[rt]=ft(v,Q[rt]);let Xt=Q[0],Wt=m(Xt)||o,It=r.convert(v.format,v.colorSpace),bt=r.convert(v.type),xt=T(v.internalFormat,It,bt,v.colorSpace),Bt=o&&v.isVideoTexture!==!0,Zt=Z.__version===void 0||et===!0,ce=I(v,Xt,Wt);k(i.TEXTURE_CUBE_MAP,v,Wt);let Vt;if(wt){Bt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,xt,Xt.width,Xt.height);for(let rt=0;rt<6;rt++){Vt=Q[rt].mipmaps;for(let P=0;P<Vt.length;P++){let lt=Vt[P];v.format!==je?It!==null?Bt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,0,0,lt.width,lt.height,It,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,xt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,0,0,lt.width,lt.height,It,bt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,xt,lt.width,lt.height,0,It,bt,lt.data)}}}else{Vt=v.mipmaps,Bt&&Zt&&(Vt.length>0&&ce++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,xt,Q[0].width,Q[0].height));for(let rt=0;rt<6;rt++)if(Ut){Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Q[rt].width,Q[rt].height,It,bt,Q[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,Q[rt].width,Q[rt].height,0,It,bt,Q[rt].data);for(let P=0;P<Vt.length;P++){let ht=Vt[P].image[rt].image;Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,0,0,ht.width,ht.height,It,bt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,xt,ht.width,ht.height,0,It,bt,ht.data)}}else{Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,It,bt,Q[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,It,bt,Q[rt]);for(let P=0;P<Vt.length;P++){let lt=Vt[P];Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,0,0,It,bt,lt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,xt,It,bt,lt.image[rt])}}}S(v,Wt)&&x(i.TEXTURE_CUBE_MAP),Z.__version=j.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function mt(E,v,U,et,j,Z){let yt=r.convert(U.format,U.colorSpace),ct=r.convert(U.type),gt=T(U.internalFormat,yt,ct,U.colorSpace);if(!n.get(v).__hasExternalTextures){let Ut=Math.max(1,v.width>>Z),Q=Math.max(1,v.height>>Z);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,gt,Ut,Q,v.depth,0,yt,ct,null):e.texImage2D(j,Z,gt,Ut,Q,0,yt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),X(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,j,n.get(U).__webglTexture,0,it(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,j,n.get(U).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(E,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let et=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||X(v)){let j=v.depthTexture;j&&j.isDepthTexture&&(j.type===Rn?et=i.DEPTH_COMPONENT32F:j.type===_n&&(et=i.DEPTH_COMPONENT24));let Z=it(v);X(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,et,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,et,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){let et=it(v);U&&X(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,v.width,v.height):X(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let j=0;j<et.length;j++){let Z=et[j],yt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),gt=T(Z.internalFormat,yt,ct,Z.colorSpace),wt=it(v);U&&X(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,gt,v.width,v.height):X(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let et=n.get(v.depthTexture).__webglTexture,j=it(v);if(v.depthTexture.format===Kn)X(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(v.depthTexture.format===Pi)X(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Mt(E){let v=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Lt(v.__webglFramebuffer,E)}else if(U){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=i.createRenderbuffer(),_t(v.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),_t(v.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(E,v,U){let et=n.get(E);v!==void 0&&mt(et.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Mt(E)}function C(E){let v=E.texture,U=n.get(E),et=n.get(v);E.addEventListener("dispose",O),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=v.version,a.memory.textures++);let j=E.isWebGLCubeRenderTarget===!0,Z=E.isWebGLMultipleRenderTargets===!0,yt=m(E)||o;if(j){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let gt=0;gt<v.mipmaps.length;gt++)U.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else U.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)U.__webglFramebuffer[ct]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Z)if(s.drawBuffers){let ct=E.texture;for(let gt=0,wt=ct.length;gt<wt;gt++){let Ut=n.get(ct[gt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&X(E)===!1){let ct=Z?v:[v];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let gt=0;gt<ct.length;gt++){let wt=ct[gt];U.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[gt]);let Ut=r.convert(wt.format,wt.colorSpace),Q=r.convert(wt.type),Xt=T(wt.internalFormat,Ut,Q,wt.colorSpace,E.isXRRenderTarget===!0),Wt=it(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,U.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),k(i.TEXTURE_CUBE_MAP,v,yt);for(let ct=0;ct<6;ct++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)mt(U.__webglFramebuffer[ct][gt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else mt(U.__webglFramebuffer[ct],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(v,yt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){let ct=E.texture;for(let gt=0,wt=ct.length;gt<wt;gt++){let Ut=ct[gt],Q=n.get(Ut);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),k(i.TEXTURE_2D,Ut,yt),mt(U.__webglFramebuffer,E,Ut,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),S(Ut,yt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,et.__webglTexture),k(ct,v,yt),o&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)mt(U.__webglFramebuffer[gt],E,v,i.COLOR_ATTACHMENT0,ct,gt);else mt(U.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ct,0);S(v,yt)&&x(ct),e.unbindTexture()}E.depthBuffer&&Mt(E)}function st(E){let v=m(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,j=U.length;et<j;et++){let Z=U[et];if(S(Z,v)){let yt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(Z).__webglTexture;e.bindTexture(yt,ct),x(yt),e.unbindTexture()}}}function q(E){if(o&&E.samples>0&&X(E)===!1){let v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,et=E.height,j=i.COLOR_BUFFER_BIT,Z=[],yt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(E),gt=E.isWebGLMultipleRenderTargets===!0;if(gt)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){Z.push(i.COLOR_ATTACHMENT0+wt),E.depthBuffer&&Z.push(yt);let Ut=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ut===!1&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[wt]),Ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[yt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[yt])),gt){let Q=n.get(v[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,et,0,0,U,et,j,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[wt]);let Ut=n.get(v[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function it(E){return Math.min(s.maxSamples,E.samples)}function X(E){let v=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function ft(E,v){let U=E.colorSpace,et=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ja||U!==gn&&U!==Ve&&(Kt.getTransfer(U)===ee?o===!1?t.has("EXT_sRGB")===!0&&et===je?(E.format=ja,E.minFilter=He,E.generateMipmaps=!1):v=dr.sRGBToLinear(v):(et!==je||j!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=L,this.resetTextureUnits=nt,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=X}function Qg(i,t,e){let n=e.isWebGL2;function s(r,a=Ve){let o,c=Kt.getTransfer(a);if(r===In)return i.UNSIGNED_BYTE;if(r===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Wu)return i.BYTE;if(r===Xu)return i.SHORT;if(r===Vo)return i.UNSIGNED_SHORT;if(r===th)return i.INT;if(r===_n)return i.UNSIGNED_INT;if(r===Rn)return i.FLOAT;if(r===ss)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===qu)return i.ALPHA;if(r===je)return i.RGBA;if(r===Yu)return i.LUMINANCE;if(r===Ju)return i.LUMINANCE_ALPHA;if(r===Kn)return i.DEPTH_COMPONENT;if(r===Pi)return i.DEPTH_STENCIL;if(r===ja)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zu)return i.RED;if(r===ih)return i.RED_INTEGER;if(r===Ku)return i.RG;if(r===sh)return i.RG_INTEGER;if(r===rh)return i.RGBA_INTEGER;if(r===ua||r===da||r===fa||r===pa)if(c===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ec||r===bc||r===wc||r===Tc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ec)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ah)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ac||r===_c)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ac)return c===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===_c)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rc||r===Cc||r===Pc||r===Ic||r===Lc||r===Dc||r===Uc||r===Nc||r===Fc||r===Oc||r===Bc||r===zc||r===Hc||r===Vc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Rc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ic)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vc)return c===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ma||r===kc||r===Gc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ma)return c===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ju||r===Wc||r===Xc||r===qc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ma)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Wc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var fo=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ke=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},$g={type:"move"},Qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($g)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},po=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,y=e.getContextAttributes(),m=null,f=null,S=[],x=[],T=new ot,I=null,A=new Te;A.layers.enable(1),A.viewport=new ie;let _=new Te;_.layers.enable(2),_.viewport=new ie;let O=[A,_],M=new fo;M.layers.enable(1),M.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=S[k];return K===void 0&&(K=new Qi,S[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=S[k];return K===void 0&&(K=new Qi,S[k]=K),K.getGripSpace()},this.getHand=function(k){let K=S[k];return K===void 0&&(K=new Qi,S[k]=K),K.getHandSpace()};function G(k){let K=x.indexOf(k.inputSource);if(K===-1)return;let dt=S[K];dt!==void 0&&(dt.update(k.inputSource,k.frame,l||a),dt.dispatchEvent({type:k.type,data:k.inputSource}))}function nt(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",L);for(let k=0;k<S.length;k++){let K=x[k];K!==null&&(x[k]=null,S[k].disconnect(K))}w=null,N=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new xn(p.framebufferWidth,p.framebufferHeight,{format:je,type:In,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,dt=null,vt=null;y.depth&&(vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=y.stencil?Pi:Kn,dt=y.stencil?Zn:_n);let mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new xn(d.textureWidth,d.textureHeight,{format:je,type:In,depthTexture:new Er(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let _t=t.properties.get(f);_t.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(k){for(let K=0;K<k.removed.length;K++){let dt=k.removed[K],vt=x.indexOf(dt);vt>=0&&(x[vt]=null,S[vt].disconnect(dt))}for(let K=0;K<k.added.length;K++){let dt=k.added[K],vt=x.indexOf(dt);if(vt===-1){for(let _t=0;_t<S.length;_t++)if(_t>=x.length){x.push(dt),vt=_t;break}else if(x[_t]===null){x[_t]=dt,vt=_t;break}if(vt===-1)break}let mt=S[vt];mt&&mt.connect(dt)}}let F=new R,V=new R;function J(k,K,dt){F.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(dt.matrixWorld);let vt=F.distanceTo(V),mt=K.projectionMatrix.elements,_t=dt.projectionMatrix.elements,Lt=mt[14]/(mt[10]-1),Mt=mt[14]/(mt[10]+1),Pt=(mt[9]+1)/mt[5],C=(mt[9]-1)/mt[5],st=(mt[8]-1)/mt[0],q=(_t[8]+1)/_t[0],it=Lt*st,X=Lt*q,Et=vt/(-st+q),ft=Et*-st;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ft),k.translateZ(Et),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let E=Lt+Et,v=Mt+Et,U=it-ft,et=X+(vt-ft),j=Pt*Mt/v*E,Z=C*Mt/v*E;k.projectionMatrix.makePerspective(U,et,j,Z,E,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;M.near=_.near=A.near=k.near,M.far=_.far=A.far=k.far,(w!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,N=M.far);let K=k.parent,dt=M.cameras;Y(M,K);for(let vt=0;vt<dt.length;vt++)Y(dt[vt],K);dt.length===2?J(M,A,_):M.projectionMatrix.copy(A.projectionMatrix),W(k,M,K)};function W(k,K,dt){dt===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(dt.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Qa*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let $=null;function tt(k,K){if(h=K.getViewerPose(l||a),g=K,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let vt=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let mt=0;mt<dt.length;mt++){let _t=dt[mt],Lt=null;if(p!==null)Lt=p.getViewport(_t);else{let Pt=u.getViewSubImage(d,_t);Lt=Pt.viewport,mt===0&&(t.setRenderTargetTextures(f,Pt.colorTexture,d.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(f))}let Mt=O[mt];Mt===void 0&&(Mt=new Te,Mt.layers.enable(mt),Mt.viewport=new ie,O[mt]=Mt),Mt.matrix.fromArray(_t.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(_t.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),mt===0&&(M.matrix.copy(Mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Mt)}}for(let dt=0;dt<S.length;dt++){let vt=x[dt],mt=S[dt];vt!==null&&mt!==void 0&&mt.update(vt,K,l||a)}$&&$(k,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ut=new fh;ut.setAnimationLoop(tt),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}};function t0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,dh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,x,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){let T=x.program;n.uniformBlockBinding(S,T)}function l(S,x){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",m));let I=x.program;n.updateUBOMapping(S,I);let A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){let x=u();S.__bindingPointIndex=x;let T=i.createBuffer(),I=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let x=s[S.id],T=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,_=T.length;A<_;A++){let O=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,w=O.length;M<w;M++){let N=O[M];if(p(N,A,M,I)===!0){let G=N.__offset,nt=Array.isArray(N.value)?N.value:[N.value],L=0;for(let F=0;F<nt.length;F++){let V=nt[F],J=y(V);typeof V=="number"||typeof V=="boolean"?(N.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+L,N.__data)):V.isMatrix3?(N.__data[0]=V.elements[0],N.__data[1]=V.elements[1],N.__data[2]=V.elements[2],N.__data[3]=0,N.__data[4]=V.elements[3],N.__data[5]=V.elements[4],N.__data[6]=V.elements[5],N.__data[7]=0,N.__data[8]=V.elements[6],N.__data[9]=V.elements[7],N.__data[10]=V.elements[8],N.__data[11]=0):(V.toArray(N.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,x,T,I){let A=S.value,_=x+"_"+T;if(I[_]===void 0)return typeof A=="number"||typeof A=="boolean"?I[_]=A:I[_]=A.clone(),!0;{let O=I[_];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return I[_]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(S){let x=S.uniforms,T=0,I=16;for(let _=0,O=x.length;_<O;_++){let M=Array.isArray(x[_])?x[_]:[x[_]];for(let w=0,N=M.length;w<N;w++){let G=M[w],nt=Array.isArray(G.value)?G.value:[G.value];for(let L=0,F=nt.length;L<F;L++){let V=nt[L],J=y(V),Y=T%I;Y!==0&&I-Y<J.boundary&&(T+=I-Y),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=J.storage}}}let A=T%I;return A>0&&(T+=I-A),S.__size=T,S.__cache={},this}function y(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ls=class{constructor(t={}){let{canvas:e=ld(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;let x=this,T=!1,I=0,A=0,_=null,O=-1,M=null,w=new ie,N=new ie,G=null,nt=new Ft(0),L=0,F=e.width,V=e.height,J=1,Y=null,W=null,$=new ie(0,0,F,V),tt=new ie(0,0,F,V),ut=!1,k=new cs,K=!1,dt=!1,vt=null,mt=new se,_t=new ot,Lt=new R,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return _===null?J:1}let C=n;function st(b,D){for(let z=0;z<b.length;z++){let H=b[z],B=e.getContext(H,D);if(B!==null)return B}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",lt,!1),C===null){let D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),C=st(D,b),C===null)throw st(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let q,it,X,Et,ft,E,v,U,et,j,Z,yt,ct,gt,wt,Ut,Q,Xt,Wt,It,bt,xt,Bt,Zt;function ce(){q=new Mm(C),it=new pm(C,q,t),q.init(it),xt=new Qg(C,q,it),X=new Kg(C,q,it),Et=new bm(C),ft=new Bg,E=new jg(C,q,X,ft,it,xt,Et),v=new gm(x),U=new vm(x),et=new Pd(C,it),Bt=new dm(C,q,et,it),j=new Sm(C,et,Et,Bt),Z=new _m(C,j,et,Et),Wt=new Am(C,it,E),Ut=new mm(ft),yt=new Og(x,v,U,q,it,Bt,Ut),ct=new t0(x,ft),gt=new Hg,wt=new qg(q,it),Xt=new um(x,v,U,X,Z,d,c),Q=new Zg(x,Z,it),Zt=new e0(C,Et,it,X),It=new fm(C,q,Et,it),bt=new Em(C,q,Et,it),Et.programs=yt.programs,x.capabilities=it,x.extensions=q,x.properties=ft,x.renderLists=gt,x.shadowMap=Q,x.state=X,x.info=Et}ce();let Vt=new po(x,C);this.xr=Vt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(F,V,!1))},this.getSize=function(b){return b.set(F,V)},this.setSize=function(b,D,z=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,V=D,e.width=Math.floor(b*J),e.height=Math.floor(D*J),z===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(F*J,V*J).floor()},this.setDrawingBufferSize=function(b,D,z){F=b,V=D,J=z,e.width=Math.floor(b*z),e.height=Math.floor(D*z),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,D,z,H){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,D,z,H),X.viewport(w.copy($).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,D,z,H){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,D,z,H),X.scissor(N.copy(tt).multiplyScalar(J).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){X.setScissorTest(ut=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(b=!0,D=!0,z=!0){let H=0;if(b){let B=!1;if(_!==null){let pt=_.texture.format;B=pt===rh||pt===sh||pt===ih}if(B){let pt=_.texture.type,St=pt===In||pt===_n||pt===Vo||pt===Zn||pt===eh||pt===nh,At=Xt.getClearColor(),Ct=Xt.getClearAlpha(),Ht=At.r,Dt=At.g,Nt=At.b;St?(p[0]=Ht,p[1]=Dt,p[2]=Nt,p[3]=Ct,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Ht,g[1]=Dt,g[2]=Nt,g[3]=Ct,C.clearBufferiv(C.COLOR,0,g))}else H|=C.COLOR_BUFFER_BIT}D&&(H|=C.DEPTH_BUFFER_BIT),z&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),gt.dispose(),wt.dispose(),ft.dispose(),v.dispose(),U.dispose(),Z.dispose(),Bt.dispose(),Zt.dispose(),yt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ae),Vt.removeEventListener("sessionend",te),vt&&(vt.dispose(),vt=null),_e.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=Et.autoReset,D=Q.enabled,z=Q.autoUpdate,H=Q.needsUpdate,B=Q.type;ce(),Et.autoReset=b,Q.enabled=D,Q.autoUpdate=z,Q.needsUpdate=H,Q.type=B}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let D=b.target;D.removeEventListener("dispose",ht),Rt(D)}function Rt(b){Tt(b),ft.remove(b)}function Tt(b){let D=ft.get(b).programs;D!==void 0&&(D.forEach(function(z){yt.releaseProgram(z)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,z,H,B,pt){D===null&&(D=Mt);let St=B.isMesh&&B.matrixWorld.determinant()<0,At=ou(b,D,z,H,B);X.setMaterial(H,St);let Ct=z.index,Ht=1;if(H.wireframe===!0){if(Ct=j.getWireframeAttribute(z),Ct===void 0)return;Ht=2}let Dt=z.drawRange,Nt=z.attributes.position,he=Dt.start*Ht,Ue=(Dt.start+Dt.count)*Ht;pt!==null&&(he=Math.max(he,pt.start*Ht),Ue=Math.min(Ue,(pt.start+pt.count)*Ht)),Ct!==null?(he=Math.max(he,0),Ue=Math.min(Ue,Ct.count)):Nt!=null&&(he=Math.max(he,0),Ue=Math.min(Ue,Nt.count));let xe=Ue-he;if(xe<0||xe===1/0)return;Bt.setup(B,H,At,z,Ct);let on,ae=It;if(Ct!==null&&(on=et.get(Ct),ae=bt,ae.setIndex(on)),B.isMesh)H.wireframe===!0?(X.setLineWidth(H.wireframeLinewidth*Pt()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(B.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),X.setLineWidth(kt*Pt()),B.isLineSegments?ae.setMode(C.LINES):B.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else B.isPoints?ae.setMode(C.POINTS):B.isSprite&&ae.setMode(C.TRIANGLES);if(B.isBatchedMesh)ae.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ae.renderInstances(he,xe,B.count);else if(z.isInstancedBufferGeometry){let kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,aa=Math.min(z.instanceCount,kt);ae.renderInstances(he,xe,aa)}else ae.render(he,xe)};function Qt(b,D,z){b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=De,b.needsUpdate=!0,Cs(b,D,z),b.side=Ln,b.needsUpdate=!0,Cs(b,D,z),b.side=Ze):Cs(b,D,z)}this.compile=function(b,D,z=null){z===null&&(z=b),m=wt.get(z),m.init(),S.push(m),z.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==z&&b.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);let H=new Set;return b.traverse(function(B){let pt=B.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){let At=pt[St];Qt(At,z,B),H.add(At)}else Qt(pt,z,B),H.add(pt)}),S.pop(),m=null,H},this.compileAsync=function(b,D,z=null){let H=this.compile(b,D,z);return new Promise(B=>{function pt(){if(H.forEach(function(St){ft.get(St).currentProgram.isReady()&&H.delete(St)}),H.size===0){B(b);return}setTimeout(pt,10)}q.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let $t=null;function ge(b){$t&&$t(b)}function Ae(){_e.stop()}function te(){_e.start()}let _e=new fh;_e.setAnimationLoop(ge),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(b){$t=b,Vt.setAnimationLoop(b),b===null?_e.stop():_e.start()},Vt.addEventListener("sessionstart",Ae),Vt.addEventListener("sessionend",te),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(D),D=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,D,_),m=wt.get(b,S.length),m.init(),S.push(m),mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),k.setFromProjectionMatrix(mt),dt=this.localClippingEnabled,K=Ut.init(this.clippingPlanes,dt),y=gt.get(b,f.length),y.init(),f.push(y),en(b,D,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(Y,W),this.info.render.frame++,K===!0&&Ut.beginShadows();let z=m.state.shadowsArray;if(Q.render(z,b,D),K===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(y,b),m.setupLights(x._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let B=0,pt=H.length;B<pt;B++){let St=H[B];hc(y,b,St,St.viewport)}}else hc(y,b,D);_!==null&&(E.updateMultisampleRenderTarget(_),E.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(x,b,D),Bt.resetDefaultState(),O=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function en(b,D,z,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){H&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(mt);let St=Z.update(b),At=b.material;At.visible&&y.push(b,St,At,z,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||k.intersectsObject(b))){let St=Z.update(b),At=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Lt.copy(St.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(mt)),Array.isArray(At)){let Ct=St.groups;for(let Ht=0,Dt=Ct.length;Ht<Dt;Ht++){let Nt=Ct[Ht],he=At[Nt.materialIndex];he&&he.visible&&y.push(b,St,he,z,Lt.z,Nt)}}else At.visible&&y.push(b,St,At,z,Lt.z,null)}}let pt=b.children;for(let St=0,At=pt.length;St<At;St++)en(pt[St],D,z,H)}function hc(b,D,z,H){let B=b.opaque,pt=b.transmissive,St=b.transparent;m.setupLightsView(z),K===!0&&Ut.setGlobalState(x.clippingPlanes,z),pt.length>0&&au(B,pt,D,z),H&&X.viewport(w.copy(H)),B.length>0&&Rs(B,D,z),pt.length>0&&Rs(pt,D,z),St.length>0&&Rs(St,D,z),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function au(b,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let pt=it.isWebGL2;vt===null&&(vt=new xn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?ss:In,minFilter:is,samples:pt?4:0})),x.getDrawingBufferSize(_t),pt?vt.setSize(_t.x,_t.y):vt.setSize($a(_t.x),$a(_t.y));let St=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(nt),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let At=x.toneMapping;x.toneMapping=Pn,Rs(b,z,H),E.updateMultisampleRenderTarget(vt),E.updateRenderTargetMipmap(vt);let Ct=!1;for(let Ht=0,Dt=D.length;Ht<Dt;Ht++){let Nt=D[Ht],he=Nt.object,Ue=Nt.geometry,xe=Nt.material,on=Nt.group;if(xe.side===Ze&&he.layers.test(H.layers)){let ae=xe.side;xe.side=De,xe.needsUpdate=!0,uc(he,z,H,Ue,xe,on),xe.side=ae,xe.needsUpdate=!0,Ct=!0}}Ct===!0&&(E.updateMultisampleRenderTarget(vt),E.updateRenderTargetMipmap(vt)),x.setRenderTarget(St),x.setClearColor(nt,L),x.toneMapping=At}function Rs(b,D,z){let H=D.isScene===!0?D.overrideMaterial:null;for(let B=0,pt=b.length;B<pt;B++){let St=b[B],At=St.object,Ct=St.geometry,Ht=H===null?St.material:H,Dt=St.group;At.layers.test(z.layers)&&uc(At,D,z,Ct,Ht,Dt)}}function uc(b,D,z,H,B,pt){b.onBeforeRender(x,D,z,H,B,pt),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,D,z,H,b,pt),B.transparent===!0&&B.side===Ze&&B.forceSinglePass===!1?(B.side=De,B.needsUpdate=!0,x.renderBufferDirect(z,D,H,B,b,pt),B.side=Ln,B.needsUpdate=!0,x.renderBufferDirect(z,D,H,B,b,pt),B.side=Ze):x.renderBufferDirect(z,D,H,B,b,pt),b.onAfterRender(x,D,z,H,B,pt)}function Cs(b,D,z){D.isScene!==!0&&(D=Mt);let H=ft.get(b),B=m.state.lights,pt=m.state.shadowsArray,St=B.state.version,At=yt.getParameters(b,B.state,pt,D,z),Ct=yt.getProgramCacheKey(At),Ht=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?U:v).get(b.envMap||H.environment),Ht===void 0&&(b.addEventListener("dispose",ht),Ht=new Map,H.programs=Ht);let Dt=Ht.get(Ct);if(Dt!==void 0){if(H.currentProgram===Dt&&H.lightsStateVersion===St)return fc(b,At),Dt}else At.uniforms=yt.getUniforms(b),b.onBuild(z,At,x),b.onBeforeCompile(At,x),Dt=yt.acquireProgram(At,Ct),Ht.set(Ct,Dt),H.uniforms=At.uniforms;let Nt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=Ut.uniform),fc(b,At),H.needsLights=lu(b),H.lightsStateVersion=St,H.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Dt,H.uniformsList=null,Dt}function dc(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Ai.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function fc(b,D){let z=ft.get(b);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function ou(b,D,z,H,B){D.isScene!==!0&&(D=Mt),E.resetTextureUnits();let pt=D.fog,St=H.isMeshStandardMaterial?D.environment:null,At=_===null?x.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:gn,Ct=(H.isMeshStandardMaterial?U:v).get(H.envMap||St),Ht=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!z.morphAttributes.position,he=!!z.morphAttributes.normal,Ue=!!z.morphAttributes.color,xe=Pn;H.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(xe=x.toneMapping);let on=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=on!==void 0?on.length:0,kt=ft.get(H),aa=m.state.lights;if(K===!0&&(dt===!0||b!==M)){let Be=b===M&&H.id===O;Ut.setState(H,b,Be)}let le=!1;H.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==aa.state.version||kt.outputColorSpace!==At||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||kt.envMap!==Ct||H.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ut.numPlanes||kt.numIntersection!==Ut.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Dt||kt.morphTargets!==Nt||kt.morphNormals!==he||kt.morphColors!==Ue||kt.toneMapping!==xe||it.isWebGL2===!0&&kt.morphTargetsCount!==ae)&&(le=!0):(le=!0,kt.__version=H.version);let Hn=kt.currentProgram;le===!0&&(Hn=Cs(H,D,B));let pc=!1,ki=!1,oa=!1,Se=Hn.getUniforms(),Vn=kt.uniforms;if(X.useProgram(Hn.program)&&(pc=!0,ki=!0,oa=!0),H.id!==O&&(O=H.id,ki=!0),pc||M!==b){Se.setValue(C,"projectionMatrix",b.projectionMatrix),Se.setValue(C,"viewMatrix",b.matrixWorldInverse);let Be=Se.map.cameraPosition;Be!==void 0&&Be.setValue(C,Lt.setFromMatrixPosition(b.matrixWorld)),it.logarithmicDepthBuffer&&Se.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,ki=!0,oa=!0)}if(B.isSkinnedMesh){Se.setOptional(C,B,"bindMatrix"),Se.setOptional(C,B,"bindMatrixInverse");let Be=B.skeleton;Be&&(it.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Se.setValue(C,"boneTexture",Be.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Se.setOptional(C,B,"batchingTexture"),Se.setValue(C,"batchingTexture",B._matricesTexture,E));let ca=z.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&it.isWebGL2===!0)&&Wt.update(B,z,Hn),(ki||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,Se.setValue(C,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Vn.envMap.value=Ct,Vn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),ki&&(Se.setValue(C,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&cu(Vn,oa),pt&&H.fog===!0&&ct.refreshFogUniforms(Vn,pt),ct.refreshMaterialUniforms(Vn,H,J,V,vt),Ai.upload(C,dc(kt),Vn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ai.upload(C,dc(kt),Vn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(C,"center",B.center),Se.setValue(C,"modelViewMatrix",B.modelViewMatrix),Se.setValue(C,"normalMatrix",B.normalMatrix),Se.setValue(C,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Be=H.uniformsGroups;for(let la=0,hu=Be.length;la<hu;la++)if(it.isWebGL2){let mc=Be[la];Zt.update(mc,Hn),Zt.bind(mc,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function cu(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function lu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,D,z){ft.get(b.texture).__webglTexture=D,ft.get(b.depthTexture).__webglTexture=z;let H=ft.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let z=ft.get(b);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,z=0){_=b,I=D,A=z;let H=!0,B=null,pt=!1,St=!1;if(b){let Ct=ft.get(b);Ct.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(C.FRAMEBUFFER,null),H=!1):Ct.__webglFramebuffer===void 0?E.setupRenderTarget(b):Ct.__hasExternalTextures&&E.rebindTextures(b,ft.get(b.texture).__webglTexture,ft.get(b.depthTexture).__webglTexture);let Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(St=!0);let Dt=ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?B=Dt[D][z]:B=Dt[D],pt=!0):it.isWebGL2&&b.samples>0&&E.useMultisampledRTT(b)===!1?B=ft.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?B=Dt[z]:B=Dt,w.copy(b.viewport),N.copy(b.scissor),G=b.scissorTest}else w.copy($).multiplyScalar(J).floor(),N.copy(tt).multiplyScalar(J).floor(),G=ut;if(X.bindFramebuffer(C.FRAMEBUFFER,B)&&it.drawBuffers&&H&&X.drawBuffers(b,B),X.viewport(w),X.scissor(N),X.setScissorTest(G),pt){let Ct=ft.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ct.__webglTexture,z)}else if(St){let Ct=ft.get(b.texture),Ht=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,z||0,Ht)}O=-1},this.readRenderTargetPixels=function(b,D,z,H,B,pt,St){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){X.bindFramebuffer(C.FRAMEBUFFER,At);try{let Ct=b.texture,Ht=Ct.format,Dt=Ct.type;if(Ht!==je&&xt.convert(Ht)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Nt=Dt===ss&&(q.has("EXT_color_buffer_half_float")||it.isWebGL2&&q.has("EXT_color_buffer_float"));if(Dt!==In&&xt.convert(Dt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===Rn&&(it.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&z>=0&&z<=b.height-B&&C.readPixels(D,z,H,B,xt.convert(Ht),xt.convert(Dt),pt)}finally{let Ct=_!==null?ft.get(_).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(b,D,z=0){let H=Math.pow(2,-z),B=Math.floor(D.image.width*H),pt=Math.floor(D.image.height*H);E.setTexture2D(D,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,b.x,b.y,B,pt),X.unbindTexture()},this.copyTextureToTexture=function(b,D,z,H=0){let B=D.image.width,pt=D.image.height,St=xt.convert(z.format),At=xt.convert(z.type);E.setTexture2D(z,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,H,b.x,b.y,B,pt,St,At,D.image.data):D.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,H,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,St,D.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,H,b.x,b.y,St,At,D.image),H===0&&z.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(b,D,z,H,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=b.max.x-b.min.x+1,St=b.max.y-b.min.y+1,At=b.max.z-b.min.z+1,Ct=xt.convert(H.format),Ht=xt.convert(H.type),Dt;if(H.isData3DTexture)E.setTexture3D(H,0),Dt=C.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Dt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let Nt=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ue=C.getParameter(C.UNPACK_SKIP_PIXELS),xe=C.getParameter(C.UNPACK_SKIP_ROWS),on=C.getParameter(C.UNPACK_SKIP_IMAGES),ae=z.isCompressedTexture?z.mipmaps[B]:z.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,b.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,b.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,b.min.z),z.isDataTexture||z.isData3DTexture?C.texSubImage3D(Dt,B,D.x,D.y,D.z,pt,St,At,Ct,Ht,ae.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Dt,B,D.x,D.y,D.z,pt,St,At,Ct,ae.data)):C.texSubImage3D(Dt,B,D.x,D.y,D.z,pt,St,At,Ct,Ht,ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,on),B===0&&H.generateMipmaps&&C.generateMipmap(Dt),X.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),X.unbindTexture()},this.resetState=function(){I=0,A=0,_=null,X.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ko?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Gr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===de?jn:oh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===jn?de:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},mo=class extends ls{};mo.prototype.isWebGL1Renderer=!0;var br=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wr=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Tr=class extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vi=new se,Ol=new se,Qs=[],Bl=new yn,n0=new se,Ji=new Ot,Zi=new Un,Fn=class extends Ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,n0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Bl.copy(t.boundingBox).applyMatrix4(vi),this.boundingBox.union(Bl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Zi.copy(t.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),t.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vi),Ol.multiplyMatrices(n,vi),Ji.matrixWorld=Ol,Ji.raycast(t,Qs);for(let a=0,o=Qs.length;a<o;a++){let c=Qs[a];c.instanceId=r,c.object=this,e.push(c)}Qs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var hs=class extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zl=new se,go=new as,$s=new Un,tr=new R,Ar=class extends fe{constructor(t=new ve,e=new hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;zl.copy(s).invert(),go.copy(t.ray).applyMatrix4(zl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,y=p;g<y;g++){let m=l.getX(g);tr.fromBufferAttribute(u,m),Hl(tr,m,c,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,y=p;g<y;g++)tr.fromBufferAttribute(u,g),Hl(tr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hl(i,t,e,n,s,r,a){let o=go.distanceSqToPoint(i);if(o<e){let c=new R;go.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var We=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ot:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],a=[],o=new R,c=new se;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(we(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},us=class extends We{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let n=e||new ot,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xo=class extends us{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var er=new R,Va=new Wo,ka=new Wo,Ga=new Wo,ds=class extends We{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),l=er);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=er),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Va.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),ka.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),Ga.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ka.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ga.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(c),ka.calc(c),Ga.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vl(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function i0(i,t){let e=1-i;return e*e*t}function s0(i,t){return 2*(1-i)*i*t}function r0(i,t){return i*i*t}function $i(i,t,e,n){return i0(i,t)+s0(i,e)+r0(i,n)}function a0(i,t){let e=1-i;return e*e*e*t}function o0(i,t){let e=1-i;return 3*e*e*i*t}function c0(i,t){return 3*(1-i)*i*i*t}function l0(i,t){return i*i*i*t}function ts(i,t,e,n,s){return a0(i,t)+o0(i,e)+c0(i,n)+l0(i,s)}var _r=class extends We{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,s.x,r.x,a.x,o.x),ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends We{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,s.x,r.x,a.x,o.x),ts(t,s.y,r.y,a.y,o.y),ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rr=class extends We{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends We{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends We{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($i(t,s.x,r.x,a.x),$i(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends We{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($i(t,s.x,r.x,a.x),$i(t,s.y,r.y,a.y),$i(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Vl(o,c.x,l.x,h.x,u.x),Vl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},So=Object.freeze({__proto__:null,ArcCurve:xo,CatmullRomCurve3:ds,CubicBezierCurve:_r,CubicBezierCurve3:yo,EllipseCurve:us,LineCurve:Rr,LineCurve3:vo,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:Mo,SplineCurve:Pr}),Eo=class extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new So[s.type]().fromJSON(s))}return this}},Ir=class extends Eo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Rr(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new _r(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new us(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Sn=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=n/2,f=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function S(){let T=new R,I=new R,A=0,_=(e-t)/n;for(let O=0;O<=r;O++){let M=[],w=O/r,N=w*(e-t)+t;for(let G=0;G<=s;G++){let nt=G/s,L=nt*c+o,F=Math.sin(L),V=Math.cos(L);I.x=N*F,I.y=-w*n+m,I.z=N*V,u.push(I.x,I.y,I.z),T.set(F,_,V).normalize(),d.push(T.x,T.y,T.z),p.push(nt,1-w),M.push(g++)}y.push(M)}for(let O=0;O<s;O++)for(let M=0;M<r;M++){let w=y[M][O],N=y[M+1][O],G=y[M+1][O+1],nt=y[M][O+1];h.push(w,N,nt),h.push(N,G,nt),A+=6}l.addGroup(f,A,0),f+=A}function x(T){let I=g,A=new ot,_=new R,O=0,M=T===!0?t:e,w=T===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let L=G/s*c+o,F=Math.cos(L),V=Math.sin(L);_.x=M*V,_.y=m*w,_.z=M*F,u.push(_.x,_.y,_.z),d.push(0,w,0),A.x=F*.5+.5,A.y=V*.5*w+.5,p.push(A.x,A.y),g++}for(let G=0;G<s;G++){let nt=I+G,L=N+G;T===!0?h.push(L,L+1,nt):h.push(L+1,L,nt),O+=3}l.addGroup(f,O,T===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rn=class i extends Sn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bo=class i extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let x=new R,T=new R,I=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],T),p(e[A+2],I),c(x,T,I,S)}function c(S,x,T,I){let A=I+1,_=[];for(let O=0;O<=A;O++){_[O]=[];let M=S.clone().lerp(T,O/A),w=x.clone().lerp(T,O/A),N=A-O;for(let G=0;G<=N;G++)G===0&&O===A?_[O][G]=M:_[O][G]=M.clone().lerp(w,G/N)}for(let O=0;O<A;O++)for(let M=0;M<2*(A-O)-1;M++){let w=Math.floor(M/2);M%2===0?(d(_[O][w+1]),d(_[O+1][w]),d(_[O][w])):(d(_[O][w+1]),d(_[O+1][w+1]),d(_[O+1][w]))}}function l(S){let x=new R;for(let T=0;T<r.length;T+=3)x.x=r[T+0],x.y=r[T+1],x.z=r[T+2],x.normalize().multiplyScalar(S),r[T+0]=x.x,r[T+1]=x.y,r[T+2]=x.z}function h(){let S=new R;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];let T=m(S)/2/Math.PI+.5,I=f(S)/Math.PI+.5;a.push(T,1-I)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let x=a[S+0],T=a[S+2],I=a[S+4],A=Math.max(x,T,I),_=Math.min(x,T,I);A>.9&&_<.1&&(x<.2&&(a[S+0]+=1),T<.2&&(a[S+2]+=1),I<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,x){let T=S*3;x.x=t[T+0],x.y=t[T+1],x.z=t[T+2]}function g(){let S=new R,x=new R,T=new R,I=new R,A=new ot,_=new ot,O=new ot;for(let M=0,w=0;M<r.length;M+=9,w+=6){S.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),T.set(r[M+6],r[M+7],r[M+8]),A.set(a[w+0],a[w+1]),_.set(a[w+2],a[w+3]),O.set(a[w+4],a[w+5]),I.copy(S).add(x).add(T).divideScalar(3);let N=m(I);y(A,w+0,S,N),y(_,w+2,x,N),y(O,w+4,T,N)}}function y(S,x,T,I){I<0&&S.x===1&&(a[x]=S.x-1),T.x===0&&T.z===0&&(a[x]=I/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Lr=class i extends bo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var fs=class extends Ir{constructor(t){super(t),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}},h0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=m0(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return ps(r,a,e,o,c,p,0),a}};function vh(i,t,e,n,s){let r,a;if(s===A0(i,t,e,n)>0)for(r=t;r<e;r+=n)a=kl(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=kl(r,i[r],i[r+1],a);return a&&Xr(a,a.next)&&(gs(a),a=a.next),a}function Qn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xr(e,e.next)||oe(e.prev,e,e.next)===0)){if(gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ps(i,t,e,n,s,r,a){if(!i)return;!a&&r&&M0(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?d0(i,n,s,r):u0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),gs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=f0(Qn(i),t,e),ps(i,t,e,n,s,r,2)):a===2&&p0(i,t,e,n,s,r):ps(Qn(i),t,e,n,s,r,1);break}}}function u0(i){let t=i.prev,e=i,n=i.next;if(oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&bi(s,o,r,c,a,l,g.x,g.y)&&oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function d0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(oe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=wo(p,g,t,e,n),S=wo(y,m,t,e,n),x=i.prevZ,T=i.nextZ;for(;x&&x.z>=f&&T&&T.z<=S;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&bi(o,h,c,u,l,d,x.x,x.y)&&oe(x.prev,x,x.next)>=0||(x=x.prevZ,T.x>=p&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&bi(o,h,c,u,l,d,T.x,T.y)&&oe(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&bi(o,h,c,u,l,d,x.x,x.y)&&oe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;T&&T.z<=S;){if(T.x>=p&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&bi(o,h,c,u,l,d,T.x,T.y)&&oe(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function f0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Xr(s,r)&&Mh(s,n,n.next,r)&&ms(s,r)&&ms(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),gs(n),gs(n.next),n=i=r),n=n.next}while(n!==i);return Qn(n)}function p0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&b0(a,o)){let c=Sh(a,o);a=Qn(a,a.next),c=Qn(c,c.next),ps(a,t,e,n,s,r,0),ps(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function m0(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=vh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(E0(l));for(s.sort(g0),r=0;r<s.length;r++)e=x0(s[r],e);return e}function g0(i,t){return i.x-t.x}function x0(i,t){let e=y0(i,t);if(!e)return t;let n=Sh(e,i);return Qn(n,n.next),Qn(e,e.next)}function y0(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&bi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ms(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&v0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function v0(i,t){return oe(i.prev,i,t.prev)<0&&oe(t.next,i,i.next)<0}function M0(i,t,e,n){let s=i;do s.z===0&&(s.z=wo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S0(s)}function S0(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function wo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function E0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function b0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!w0(i,t)&&(ms(i,t)&&ms(t,i)&&T0(i,t)&&(oe(i.prev,i,t.prev)||oe(i,t.prev,t))||Xr(i,t)&&oe(i.prev,i,i.next)>0&&oe(t.prev,t,t.next)>0)}function oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xr(i,t){return i.x===t.x&&i.y===t.y}function Mh(i,t,e,n){let s=ir(oe(i,t,e)),r=ir(oe(i,t,n)),a=ir(oe(e,n,i)),o=ir(oe(e,n,t));return!!(s!==r&&a!==o||s===0&&nr(i,e,t)||r===0&&nr(i,n,t)||a===0&&nr(e,i,n)||o===0&&nr(e,t,n))}function nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ir(i){return i>0?1:i<0?-1:0}function w0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ms(i,t){return oe(i.prev,i,i.next)<0?oe(i,t,i.next)>=0&&oe(i,i.prev,t)>=0:oe(i,t,i.prev)<0||oe(i,i.next,t)<0}function T0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sh(i,t){let e=new To(i.i,i.x,i.y),n=new To(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kl(i,t,e,n){let s=new To(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function To(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var es=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Gl(t),Wl(n,t);let a=t.length;e.forEach(Gl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Wl(n,e[c]);let o=h0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Gl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Dr=class i extends ve{constructor(t=new fs([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:_0,x,T=!1,I,A,_,O;f&&(x=f.getSpacedPoints(h),T=!0,d=!1,I=f.computeFrenetFrames(h,!1),A=new R,_=new R,O=new R),d||(m=0,p=0,g=0,y=0);let M=o.extractPoints(l),w=M.shape,N=M.holes;if(!es.isClockWise(w)){w=w.reverse();for(let C=0,st=N.length;C<st;C++){let q=N[C];es.isClockWise(q)&&(N[C]=q.reverse())}}let nt=es.triangulateShape(w,N),L=w;for(let C=0,st=N.length;C<st;C++){let q=N[C];w=w.concat(q)}function F(C,st,q){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(st,q)}let V=w.length,J=nt.length;function Y(C,st,q){let it,X,Et,ft=C.x-st.x,E=C.y-st.y,v=q.x-C.x,U=q.y-C.y,et=ft*ft+E*E,j=ft*U-E*v;if(Math.abs(j)>Number.EPSILON){let Z=Math.sqrt(et),yt=Math.sqrt(v*v+U*U),ct=st.x-E/Z,gt=st.y+ft/Z,wt=q.x-U/yt,Ut=q.y+v/yt,Q=((wt-ct)*U-(Ut-gt)*v)/(ft*U-E*v);it=ct+ft*Q-C.x,X=gt+E*Q-C.y;let Xt=it*it+X*X;if(Xt<=2)return new ot(it,X);Et=Math.sqrt(Xt/2)}else{let Z=!1;ft>Number.EPSILON?v>Number.EPSILON&&(Z=!0):ft<-Number.EPSILON?v<-Number.EPSILON&&(Z=!0):Math.sign(E)===Math.sign(U)&&(Z=!0),Z?(it=-E,X=ft,Et=Math.sqrt(et)):(it=ft,X=E,Et=Math.sqrt(et/2))}return new ot(it/Et,X/Et)}let W=[];for(let C=0,st=L.length,q=st-1,it=C+1;C<st;C++,q++,it++)q===st&&(q=0),it===st&&(it=0),W[C]=Y(L[C],L[q],L[it]);let $=[],tt,ut=W.concat();for(let C=0,st=N.length;C<st;C++){let q=N[C];tt=[];for(let it=0,X=q.length,Et=X-1,ft=it+1;it<X;it++,Et++,ft++)Et===X&&(Et=0),ft===X&&(ft=0),tt[it]=Y(q[it],q[Et],q[ft]);$.push(tt),ut=ut.concat(tt)}for(let C=0;C<m;C++){let st=C/m,q=p*Math.cos(st*Math.PI/2),it=g*Math.sin(st*Math.PI/2)+y;for(let X=0,Et=L.length;X<Et;X++){let ft=F(L[X],W[X],it);mt(ft.x,ft.y,-q)}for(let X=0,Et=N.length;X<Et;X++){let ft=N[X];tt=$[X];for(let E=0,v=ft.length;E<v;E++){let U=F(ft[E],tt[E],it);mt(U.x,U.y,-q)}}}let k=g+y;for(let C=0;C<V;C++){let st=d?F(w[C],ut[C],k):w[C];T?(_.copy(I.normals[0]).multiplyScalar(st.x),A.copy(I.binormals[0]).multiplyScalar(st.y),O.copy(x[0]).add(_).add(A),mt(O.x,O.y,O.z)):mt(st.x,st.y,0)}for(let C=1;C<=h;C++)for(let st=0;st<V;st++){let q=d?F(w[st],ut[st],k):w[st];T?(_.copy(I.normals[C]).multiplyScalar(q.x),A.copy(I.binormals[C]).multiplyScalar(q.y),O.copy(x[C]).add(_).add(A),mt(O.x,O.y,O.z)):mt(q.x,q.y,u/h*C)}for(let C=m-1;C>=0;C--){let st=C/m,q=p*Math.cos(st*Math.PI/2),it=g*Math.sin(st*Math.PI/2)+y;for(let X=0,Et=L.length;X<Et;X++){let ft=F(L[X],W[X],it);mt(ft.x,ft.y,u+q)}for(let X=0,Et=N.length;X<Et;X++){let ft=N[X];tt=$[X];for(let E=0,v=ft.length;E<v;E++){let U=F(ft[E],tt[E],it);T?mt(U.x,U.y+x[h-1].y,x[h-1].x+q):mt(U.x,U.y,u+q)}}}K(),dt();function K(){let C=s.length/3;if(d){let st=0,q=V*st;for(let it=0;it<J;it++){let X=nt[it];_t(X[2]+q,X[1]+q,X[0]+q)}st=h+m*2,q=V*st;for(let it=0;it<J;it++){let X=nt[it];_t(X[0]+q,X[1]+q,X[2]+q)}}else{for(let st=0;st<J;st++){let q=nt[st];_t(q[2],q[1],q[0])}for(let st=0;st<J;st++){let q=nt[st];_t(q[0]+V*h,q[1]+V*h,q[2]+V*h)}}n.addGroup(C,s.length/3-C,0)}function dt(){let C=s.length/3,st=0;vt(L,st),st+=L.length;for(let q=0,it=N.length;q<it;q++){let X=N[q];vt(X,st),st+=X.length}n.addGroup(C,s.length/3-C,1)}function vt(C,st){let q=C.length;for(;--q>=0;){let it=q,X=q-1;X<0&&(X=C.length-1);for(let Et=0,ft=h+m*2;Et<ft;Et++){let E=V*Et,v=V*(Et+1),U=st+it+E,et=st+X+E,j=st+X+v,Z=st+it+v;Lt(U,et,j,Z)}}}function mt(C,st,q){c.push(C),c.push(st),c.push(q)}function _t(C,st,q){Mt(C),Mt(st),Mt(q);let it=s.length/3,X=S.generateTopUV(n,s,it-3,it-2,it-1);Pt(X[0]),Pt(X[1]),Pt(X[2])}function Lt(C,st,q,it){Mt(C),Mt(st),Mt(it),Mt(st),Mt(q),Mt(it);let X=s.length/3,Et=S.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);Pt(Et[0]),Pt(Et[1]),Pt(Et[3]),Pt(Et[1]),Pt(Et[2]),Pt(Et[3])}function Mt(C){s.push(c[C*3+0]),s.push(c[C*3+1]),s.push(c[C*3+2])}function Pt(C){r.push(C.x),r.push(C.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return R0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new So[s.type]().fromJSON(s)),new i(n,t.options)}},_0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,c),new ot(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ot(a,1-c),new ot(l,1-u),new ot(d,1-g),new ot(y,1-f)]:[new ot(o,1-c),new ot(h,1-u),new ot(p,1-g),new ot(m,1-f)]}};function R0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ur=class i extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new R,g=new ot;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let f=0;f<n;f++){let S=f+m,x=S,T=S+n+1,I=S+n+2,A=S+1;o.push(x,T,A),o.push(T,I,A)}}this.setIndex(o),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Di=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let S=[],x=f/n,T=0;f===0&&a===0?T=.5/e:f===n&&c===Math.PI&&(T=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(A+T,1-x),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let x=h[f][S+1],T=h[f][S],I=h[f+1][S],A=h[f+1][S+1];(f!==0||a>0)&&p.push(x,T,A),(f!==n-1||c<Math.PI)&&p.push(T,I,A)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xs=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(y,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var jt=class extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function sr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function C0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,o=2*e-n;break;case Zc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jc:a=t,c=2*n-e;break;case Zc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,S=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,T=p*m-p*y;for(let I=0;I!==o;++I)r[I]=f*a[h+I]+S*a[l+I]+x*a[c+I]+T*a[u+I];return r}},_o=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ro=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sr(e,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sr(t.times,Array),values:sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case or:e=this.InterpolantFactoryMethodLinear;break;case ga:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&C0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=or;var $n=class extends Qe{};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=ar;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends Qe{};Co.prototype.ValueTypeName="color";var Po=class extends Qe{};Po.prototype.ValueTypeName="number";var Io=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ys=class extends Qe{InterpolantFactoryMethodLinear(t){return new Io(this.times,this.values,this.getValueSize(),t)}};ys.prototype.ValueTypeName="quaternion";ys.prototype.DefaultInterpolation=or;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Qe{};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ar;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends Qe{};Lo.prototype.ValueTypeName="vector";var Xl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Do=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},P0=new Do,vs=class{constructor(t){this.manager=t!==void 0?t:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo=class extends vs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Xl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=rs("img");function c(){h(),Xl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var Nr=class extends vs{constructor(t){super(t)}load(t,e,n,s){let r=new Ge,a=new Uo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ni=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Fr=class extends Ni{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wa=new se,ql=new R,Yl=new R,Or=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(ql),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jl=new se,Ki=new R,Xa=new R,No=class extends Or{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ki),Xa.copy(n.position),Xa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xa),n.updateMatrixWorld(),s.makeTranslation(-Ki.x,-Ki.y,-Ki.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}},On=class extends Ni{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new No}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fo=class extends Or{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends Ni{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Fo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zr=class extends Ni{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Hr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Zl(){return(typeof performance>"u"?Date:performance).now()}var Xo="\\[\\]\\.:\\/",I0=new RegExp("["+Xo+"]","g"),qo="[^"+Xo+"]",L0="[^"+Xo.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",qo),U0=/(WCOD+)?/.source.replace("WCOD",L0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),O0=new RegExp("^"+D0+U0+N0+F0+"$"),B0=["material","materials","bones","map"],Oo=class{constructor(t,e,n){let s=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(t){let e=O0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);B0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ne.Composite=Oo;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hx=new Float32Array(1);var Vr=class{constructor(t,e,n=0,s=1/0){this.ray=new as(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Bo(t,this,n,e),n.sort(Kl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bo(t[s],this,n,e);return n.sort(Kl),n}};function Kl(i,t){return i.distance-t.distance}function Bo(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Bo(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var qt=i=>document.getElementById(i),Ph=matchMedia("(pointer:coarse)").matches;Ph&&(qt("help").textContent="\u5DE6\u4FA7\u6447\u6746\u8D70\u52A8 \xB7 \u53F3\u4FA7\u62D6\u52A8\u8F6C\u89C6\u89D2");var tn=new ls({antialias:!0});tn.setPixelRatio(Math.min(devicePixelRatio,2));tn.setSize(innerWidth,innerHeight);tn.outputColorSpace=de;tn.toneMapping=Ho;tn.toneMappingExposure=1.42;tn.shadowMap.enabled=!0;tn.shadowMap.type=zo;document.body.appendChild(tn.domElement);var Jt=new wr,Es=new Te(55,innerWidth/innerHeight,.1,400),H0=new Nr;function ta(i,t,e){let n=H0.load(i);return n.wrapS=n.wrapT=ns,n.repeat.set(t,e),n.colorSpace=de,n}var V0=ta("data:image/webp;base64,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",46,46),k0=ta("data:image/webp;base64,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",1,30),$o=ta("data:image/webp;base64,UklGRsJwAABXRUJQVlA4ILZwAAAQNgKdASoAAgACPlEmjkUjoiEiptUbKHAKCWdpGgM3CF1sNYl2RAhwgtgSoDmbM8Zs41+wevVpWZavP+df8B/5ecH1AbjfnivOf38TdksbT+d+P76T2N/pX5j/0/1X5y8333rwf/rn8S/++tTt3/Zf9L0Hf2D/Tf/vx3d8LfD0I/JPnRT5vp3/ZsG377ojP/f97fWN/Af+397QNOumty7nPzozp90fq+gqBPUw4ez1xfpoorB8zpkB1KLJLX1QBGS9w0HBMql9Gbw+VI+yDGdoWTDS82XCx9vTIfFuHxYL6Kuqaf+eQcX4PO7nueZEjMq8UGme8DepJiAAgXl83Bgx/Ehe/XTJZt7Eji/858yPke9NwD0vKK2bdA1E27UUZIur2K/AjYEAnQJYoiaLDXPX3dPctGy27pQ9HI5kq8jdx0+3zV8N1FbP4/o8IwhDtsULul593PrSR+wkhZn6xod66zA5KKA+UbqxOz0PCUieGxvpMTmRG5IyHpm6ePleWntaALbxop0i18mDiNNaga3PTT5kkrKRQCdvFPhqpxtw86zcbT036lm9zRaT6th5p65iKpozycm0BtHaZVXh/E8gKg8Zi5vJ71jHUA6NfdKYW2SjG8GME5gH5Z8qZCQHPCf3vmmv+nf7hzHRc/iHYMhEKkBt5Nrd7KcCqf3gO138/lqF0C58z0azpptUpdIgynBDa7ylN5zb+on/GkUKkJu3tHoK34tESaL6629/22C/vrY53ZpUgW4hsiU6iUxPNGxiLlZm+ba40mY0KMwgs3hs3MtEiMIFBFzmJRTvVHcFT1M/qCHVyoqyMezJM6aN1nVMWYEkHsBuJIQW3PeuUZ3wZ+KFIn5Ao8SJkPsHSQ8Y1MO2EVKgA9JVf7Syj+akyqJflubudAXmGO/oc44Ft0TDT0xgqeKzjLECLrUiIhnXvpfoAB31avCyMwLSweygLdF5P1P1UaACw2bZRZnBin5Pv/XRWEF+DBdAbhnKUEAOKUZr2DawCNiNOBBd3TskEr8XOkrKzkx7/LiBSr/45cNG3PqR1pEhX2KMmRGL6nBUFsM6c7JFuKNbtnzEETMcU2NgLHKb4DJkR1jnBG6j7/hVq1iCoGcbQxRJXLhYe44NM7KX4PmMCdPBPwTiVr3ttJCUhuOtLoXlFRgzy3VdDIqQ+8bK1K3xR2NU7MHtwC8zzqInHuJ9zktt5CdkTATub1jd0KgXT8ai7aEUo64jrUOuUkZ18YvT2KHeEtn0qrh3f2cOFoz4AS+cB5w6TgOzeUNAYFktA3jOIqSzAeh9BvXuqfu1J1Nc33hs/5z995PIALblqSgMeXLm9EgSa+4YNx0SCppeK0ZG2Cs/EZBfvphM+vGsdiZ6ePomxoMsnqKjhUPfMXu1ywFq8q2uq4DtlTxiCgx8GJ253UShtBFMcYaxr5MOs09gZx71aPJW1bcYHiiSeLVNrpZE0d7QmuUg7LDpXnlHUc9bfp3uCJBpN53PAq0ct8iGzqMof0Uyc9bJiNi3mef+kTk90cHnxy3uQvXWqQwfhuejW/cqhaVogyHFo5u5PjuHp8iyl0NS1KTqec6j+tcByOseoBbCQxVQ1cqx0ykeegrZQPPdC5nvHWXooXqXMmNhqSenQr8I6b7Fa+9J6L04o4CIoiZAz5+uBP8cwX0dZZedeo7M5Ckh+WcXxHzaNHH/hQDB/lwnVNtJ7JdfoI0K8DYghlkQMfiuzp27d6+kQR1ZNOQrnsWN6skfY7HFa29/3Cf15QkL17Mnhu1FiZ8BE+r/UbLA3Gex4X9DHCHbieJqGJxw2RVI7ElgVzj+1L/esVqU4zdv4KDJ7SO8S3ksXC8MGJc9rSY8N3UYNFAjnAa8ucmJ9iZSaWFqZc6+OXZrDJJFUpFmtFiPVDMxb8NjqIRZ4WzqFstR5ull7+qPW78cyHFvm0evXgZGfQxCGQL53TWxOiIwN8pbwcXnZL9RKrR/S9dI1AMZAXSx1Czj9iYvTOMkGCNNFz5jJSxEJd/kKjm1c7/Y4Ab0tjDwkng74ZAP1Dx+RDIunwo1ALXbrE3z3vMw4rVIq26W0baTNtQrzv6xlxUpPYzp0YDy+nIL1rlOHUr5yhFw1V0dLY+Uf2yDVuAmhrTt+yifxoQLXqifHlVsQWc/yu7tf3/UqNf9jt65iTqGQ02oga0miIul7WT0vb/G/BJQgBxmAW+51Vwlo7mYnl9v6ctLyCqj3DSBxrv64y8pbwl+Etg1scqw7a4yZCDuWcOxkHP6t0aS5OlKK6lKRNmlJkBdh/e+wMV2AyDc7sqUOhrQ+M1o2HiwgT0Ir0mLURwnaNeRT2Hmxn5UUJ/Nl1CYrOObRShnaS99vu6qclqd8JIx25spT1WLfWRmhfl5OvjjmLDu0lNOI4VnHuKE/HHRGzLic8k9Cuw205XR3T0FIRmsKQNtmwVnJuoahudFfhTaB67Rl4qVo/gF59ENfg23NcEf8YAPzALCsgd3WVBReFVGyNA8UfuuETr+Ec8x7b6zuPgeS6TjKqD+oQcz6hARJMXjnoGj3hTlGa7uPdTFXoeeQjfjHYAyxXqH/HGwDPpzhh314JvKKTCJb5Eniu8CEZHMBhkuPWYSa6FWfcyNkeZmOFcZuZTvEyrPPvKum/kmQ+HfP6Gu94kAhIRSlQLikrI0FIgO23OapJyQtHf4BjWjPxzkSlmSUi+V0TPAvqHUA5Rll8lesi7NT9FcRAMUh6I00mtBphEXhQeKVzgQkbcGZJ0qEi9YfyiexwWziwd+z0puQgEWdHXEts923uk5o1ZINUwmXjzoYhBXQnPIGUywJ9BTJQzOThepuHG/mjE2Bikrd+dA+SsyA3HO79ZvTKwl1pakxfqPVDtq4PQfO5TPUNP2nk1XaG08ztHYJ4tPfSrd9r2r6HQRmrQXnFa/SfobNGU7VwUXE9V4LC7LLAoXnPSKvq5pd4kKP/R3vqbiUyRKSEFnUrKTdLwuPmKeSOd2HWfJVf9wKkZ6Rd+An2mHpxhmggU5jy+w93NbvFuQO1ZRt/In/3PTBQfpCBKKO6rwIQK6PY22AUJROP7lQpgFKwdPyIn7W1UYJ0lI5oa5tqa0bHLiPCDSxxT9gXb4Dia8maiy9fBkmxgRndwTXllCWiFxwu+rXSuwMNpVjcsOJ7CiUI6VoRNL08UNLgyvyK+eh4NRcfZ739bI20dTBC75666h+xNxkv/WtqiW/xXNToeGFqVHGwQpnA9uhj2gdSbtIdQF+9ftdSJ9Qdwtzi9tCjQCvB8syHApavVPyafAU8cMUQ5T0WY7xuoY9Ew0I3+AlAkXtlPabrYMXbNJgdazzXKBBklj6nc5GWFMuSNxWILrlKnbRCWpg/yoSBgYnv4qQZIAlGQFezpOgJ15HxgZTAVfakgoBpWEYF0Jc6tBfIRjJs20ZMwRr14u9f1VGP3/e43GejtmmLMy13Gcz9PuZmeUz/IjIYWsmnZOF4Dn1gF7UXn2xuaVlioaC+WlGzZct4i1EmhCp52y43q2DiGGmnx6hEFl8IjLKZ/3VHiecZJqxUskcS15on2sdn402C6lEzKKOuGYQUkEzf9L+T4UkQcsgUhQF3EU3dog0Y3MBdsFiRd5vKnEKtf1VAcV6gUAzDDIHCS/Q8OfONMGASeOgufiFoU2ToOwgvWhal4o4B/+8dOgcefxQh1F+G/R6ma3kMY5SOVGvMMeGmSOiW1vMMWtvIFLDqPBFC46NyTNc9EyT12CYI4aJ6YQ/biZh3mZotEUCuCQ6Qjo1xs96NH/xUMt90idZX3nIUmld9UAcLca9QiHLmcC6PnGh1+1q5LBhaqiHF0AIHg2MfYvymUC3ysM4mzXYvZgK2Xm7jH8Qb7pZDe1z5SLxef3eUsLzH4G8ttfxH3c4KbE0P3NGVztSPc4mpeBdhbZfAhB28da8yY6XSKwR0yj4mGe3fFzlJHx196BINn02/PyNvpFkxT9ncnj5c4NK3Kmm98dpND80/sqNYWbnYG6MkPDVl138efyzWb7C1tgoPqRpDPN0ac/gQVeBgUvHEO9HQl9vvalnXRPVT4cLYDSJ9/imwObhA18mfCLWAVWcf5igWOZV2epHpuiyuGQZGAWSuGjprUJd9C4+gateV7b/6Fi6BxqsOzmMDWZulaxuEQYaqBSzzJIPfdsLcQ3jPZnICTmgfnDhHrFipXIQzWfM3BE8bBmBmdmKpU7scRrIOpAWn2P9KvJ7vbgaHSyqqB14bApcQCj61kG+lZj4zuPv7WXwZSMS+zuBALACRzinwCgavEgKcVMW6QpiitKdKX98eeFfFlRtscDBLjQDYIWYkcJ/CQ/p63/EvoYH1rBwBm0gCiKqEgu9Ty9COiRZWSe2U9+j4yIY0VdKwswHsePtCBOQdAJ0Ph5RCb6gY/1gTsKlWxUKA6CBRg3PtpmKR29q9ddWQqAq8trt409DRJAywiWtuYRDSVHh5E3f+cK6+8AETIr1ylUa2Ovy6DDm+3d7Gjp3EBQDMVMwIb5R2Vu+Froe/485ibOKjqWReX+gRL1KtvdNvixEQS7qukQcSf8PNHSozJdFeh2PClxJycLQIXxUkwRECvFQkyRet8ZdZKNWjhSG79jEDHBDMGxJ+vxyi+MUKtO/HQL5wF2zJbllWumdKeAyEwOtGNz9gdVibp8SPUNZ0+cKTZJu2VUeJmmPSu8ZnupiVOMAzTrsB1xAd7bS0BXFFg5511E7tafu5HmMfjliuB1An9ekMOFHDFGoN6XIbzn9EMFopWv5GK7B5NW2dTOuUlPVj20Em1ru+y1vrKJ3f1RMbbSq2no1A6jBC7lZ5vSTV/MDM2QRS0TbDbHVWFuBpJjd6FKqRo770MDUWO8TA2qDQiLpEOdtN2l32wcFWYOe++M89XJ1S5zWa1OimRVG3fU/iHeb5ZuP9YOc7qdHzR6mpRpuLY5JKb8eqYzlRJ3XGYTZH2t8D/tXDUzvPWjnPl1F7DFyWAldHdclzfQBcNneSUdlZN94Rwxt6BTQEJ5XcSlPTnAskiv2zemYJoonSkfgBsQPrOkzIpVbVyYk2n8LUsrSToyej9rFDvdy7O5xBkjNW/Xse09a4wqwKylTG1H0GO1GEakLUtqHjTO8QodPLy3FZWug1TtBL6umXqqfoxPmhpn+nxG902k5OUSHaLJDgs/6dS0mYCWxc1QgkCEP5xHN1pcXUvLzLYGblJHw61EqyvFSpLA+K9QOkU7yX3q9q4cNxkodmptMYUQfuMKX/5/3O22RKeWNF7rZ80NYsNPpe+g3mmivy7XRqh25EhnHUkoKV5/NrPqRmZtHwKXUQScnHDFh2QRmxzi0/7LOXpFSNesei2Z7wH69H/40HU4USQElcJEYzTAREExfemhS6LAqe04chCyLbdc8dnbOKE+sPcCXnFE16KDy5TkP2MkONJ8kG8q086KMSAKx9s/aS8VLhWoj13hDELAjBRHRqI3tDZbnxDvOtCJuRq1u4ZIJPkV6kUtWWIuVepuLPa6+zqcVmIONEjd6WvSxSUkEDo/jPFoy2IpKaPa/Z8OLUmnYYcvpo/1MWk3MqmXbMWBGQ46+ceQJBLr3z6YyX1O+v5ajY94a6zm0WqGtJY4aWSodEI9u4CJTwIJdNndDwnNyKsV8FyLyfqQ+kqYUCM3b+kN9d23D6qtvbZe4Wf4G3m2CMr81V+yEWk+qK8iqsMp+Le5c7SLqtdZ9fOCBD5v84+2v0ZR9qIBD/y54uKxRk+VM4C93x3AEZZ3G57Lwc9rycKxSLlVScdWxg7La6PxJuYAUxiapp7RCSNLotkrHspOIA5UtnQxr/N348Y0ZOMwU5G9F9GTtXUcKCG8lhO2xHgkXPYCNoJ3KhIR7F5lGSqfL0u8yRbpdVzIJ8XoE1ySbkRAQHBXy3cOhZuVbtCw1BsAVTI6Fuh5sT+U2sMyOykXsmZKLhHmzy3wBy8jLquvOjM7UkJtXA3o/FvUVYJmHwsaqHc9wTtXiowIeTfx3AaV5wVrDFuZUUBCPF0Fdv05lq+sjQ9A+fIwPiSFLGmUC6H3zY+b1ge/9hZAAP7aMzFpFg/CDoZDTnEClbJ8EBIjjo2FWuBq12i48WzH/XJdSvKuHXMH06pS2dkY/Gi1kbUBYB4NULwoYF88kFKjAXn9G6dm9IP2MMoLEmMU5wwzGpn3b3fqVfv8w9/Qf9cPXR9RiUFEuZ63/AccKVDGucSIrBMp6Lnc/cmCGoVaqit7ApURSsUtHQn8kINDZ4T2t+3m4mm/P7YARbzqItwJ8uQA2bn/SLOji5jT2v9LXxRegRHi/tvWf6rQ3e2dW6pcwpkZFvo2c7PJ+SApVN2Uu0qcchF2tvl9aJ7oq2PJ4+5Pa8ENr5EjbQ9vqp5kF2g5r4GcN0DKb4r1tSbkws5WYXAncAVKuwSeuwTCnzggbSALGu3T5mC1LGF7l/Kusz4td/qHIz27kZi/82nz4gY97gYHsdkU3SqAzdj3fAkhPKyid1tY2jTejmW+GsUds/nWLcmpaReIfJKPll/1K+iR5DTyi2M0vxPtlgl1Q9QkHCgdMPPs/EkwJ7JrdsHt4zciNziHki82IVeV0qy9nPDg7FBR4Jsxd1y5xPNVGi2yyfEgu62vIQ1ro+Acj41FYW28Q0TrFBdqUZ8iwZ4Lq4jOC2PJQ2pUPUk5lPx0fFYVb/1M2gnOfBMLzPUvVcXI3jGJwucAsRP/xTYBA0eXz/9nlCYGB0QfEVY5hYM7AhWZBbKspBvEh+dc/kUDcsu4/srtk718Pi8q/Sh0Y0M0Q/9ON+eRB4FejWka0MLgG5htekOwSqK+CIDmgY60XZJI2UdIYeYr2zSDyDASiMQtwF4xq9nnSRBjmbHV+d3wAsVmWXfaifPoFlbjgTTQx7ryikzviIS+jUolkazpkGY5i8R6jIHGjVn8WYwI7H2546mcoaOJeSTaSxRxMzZLNk2INVN8ttJaS5IMlTAWKTlodzP71qlOY0Y7Osc8r6zOquo0KCuhlJsy0suLRChlH3G9zWSNSr/F4gYTo9pRt/ptZnMkL7/0YXe3ax9/JoQ/QMpt2hK2y5EBSogpeOLqgBdUHfCydPeF+cTrVQNscCt3NGNqP6aeeiZh6mnN2LPJ0afj6E2658nCO9S0GOn3AbjMUUVFdOe+f9iz8pmeOxUKUIEweZYl7vUOIORxSTVdojrJX4MUxJmgIuYr/9nxZYB2rYkRGhdYovp+5WO9RBaepa3iULX0w87h5NSsCPHJCXyeuOn9IkrIkes0xozz6Y72y6xH7WcMA/h5Jsha530FN3vwewd5mEQ1BIhRS2A18BjvRGngU9R7UIObt4SZgzWODVz0qADAcaBLTT0xVRjj2bALDk/iuBBcuiIzvIOlQXGim14JBe6YwjkxcVaXd36sPwbGbobgorTVPF7z8SyOQs+rulBdA1uk21gXxgnCZaW/VTv0UaydCmsCibUtXRW3Fqfm7v+5BUynp7CeRUPKLbzS249sk4B6PJOa/Nj+sTfWPSDpSZpllKm+2MVwme4BoMtb0rHyAWYIU3vGWDXoUk+T88lvUyxOokr742w6ZWASlxCJPwRWtkThF8ckmGo+pzLNohuHmDN1bVquS95RK9wLRvFvqxdKB91u4KGz82W4tRs40GPJmp+fiGOz2g9Y8edXJaRcifTL3NAzfZxE51XewHKJo0zC+cmz3NXYTXMrjqWQmWQci0wsh8j6ous4g5Snk5RbGnE7RC28v7oaIHJeutHZA3iwkhvm8rf84R8UaFwfDYxReE/xIn1R0UhqaZrnllYxD8Z3F8QJGodTJsARZZaFcNkTVQdJsUKiheYyrwZzh0MMIkQZOkDsJEuSGNdr7OIZKpWsiVKO45awGc73x2FQJtN7Nmc4++GEeF2vpDeVVB0Xkh+9/nIJEBbaIi1J6ICYXEuFlfsAHmdaSOUXB9qFUSZw9xsf7SrKVZPXXtwvdRDEi9g8qBjqovH7CGuoA3Afcpw65T3RkWwnk8IqxOpErNUl6w9Zvc4xlhIQis0GemnVWHiIVNBAHCqoeWmt9oQVd3RhCelRndMD5w3KhGdMhiYjJ4GNJaeBfd1IIZ3TcsP5brJ0jgGrjUG5jo3Na3UgiEuwWE5DnVhRtsbkezzBS59leLJjmFZ9SvXDpdXTM6JzpAc3p1ipKDqMnEhiPAKGXDVlcfdNdtSFdGnxxeYDnsC9s1kFcam693ZfkA7FK2HbzBIieTbynu/jJWm6/phJxmejBsSr8v8nsUmoXxtvT7wU5GuY5FTUssbiQ9ZKsiFF2NTQIjkZRj4WXS4PDnKjkUuinKKobFLK54lONcpqyK+93+fBmtmsmJTwaXOeNgErAeofkndYr9K/eSOBV0+vlR6y3mJbG8Mys1zfxf/OjQ3ksXGNeqnAaha3EcpePgmOi5CzqenbXTxsMn3mnpYHuolalAEjEmhnCeoItBx42tKySrlzj2MjtLH1opoB1QsydPUJDQaf0FM5r4xBwUXVIk0WA4Mzu6dfx+UHC4X4qKaYUMGztQ+8auf5UZq96fmBqL9xZVizho6TcrW0AxHGoGcEPClEyGZ9awfeujUZ8M51n+8UQEIC8i3XQeK2fmOcntPaNyrTPvw/0Ok5ubb/iaTqfwgVkQC25E1kOzU3bmCyWHi0haKozMXAzRTMGFUE8D2DUZvFag5znXHQNVwDj7HH3NipwZk3RrSYHf6nMzbql63Bzgg2hMCKW156Fc9CHl71Wum9eR+p59zWYBPlXrsYgzXokCX9mJOgcvUnOfn+zICJ4GU5CZvYTz1Ou54JiJ9+d9L6TKATquuuGYkcqxc4sWUyo0I6zEyBQg3E8lgQ1YfS40dIpR5/WLOm1f0DXhqyebjQWu7dPcnp6W/LzIz8gzyxkSlg6Vu3yjl7MEnGNfrYmPPO8cJ5gSQ2TkE+huy8gwIcQSHp9zbItvhLwKbPA7Bts2zjZHHVD8ZBNCXOaFWskVJDZKzC1C1qmV4ECVsJ0UyLjzQQsODfkDE72TR2isfKkkkA6VNUmGFd3a5Wn1UA9LDNKVUHvmUMiAX4/rd0EPwU/H9sESrFTm/yxf8nX+MX+wr5ECuqG28++CFqWh2eP7zcDiVR7hHCxO55fxlS78Q+zvdytJxTgiWD7gnC5OetMbLffiF8/eXsKhZw/tMaba0B7vyiQ7HD3NOPFIOyw6AEsfTDU9m5hLjpfSy24/9KmdFusFKqd7GMTt37z93mAiKJVWXKEsdCd+TiIy0VZcBh3p40oJyPzpZYUcx5fwqFaTyqu4YUm8TsUAFUbW0CltXxcENqW1L4/QRkF2JcyYsKTyvACiTlOe/5koUsK7XqEelewaR+7L7LqaAx/Bi6o49RXXfULjvkWFhXLt1SJ4nCuDu+2C2W3/wfWB763J725iD1Rk5CTWRkOl/9hssnW3dqxSNhXQd3zgSM9QPfBE/lgyV9O6JciA/FNb7mIzEDwGUODvH8y1gC4pvdiEqe58KLoMG1xxYwQ8jOoAcngb60A4UIiI5pB88A+KVIlq/H9qG4E2urRd+kthUkwykbfKQrUTZ013pzpraSmbOl+xlhnoSwS8H/M4nZxNFNGJ836Kw1N0aUssPFflKVDE22cY+dYzJ3phVBVZ8UkpTEQZDdVXSAnEbKLTX5mclPtZys/f4GNb/2BA5wkMKLF4na3pWdwE9kc3OSSIw10gP6r0ydzweJzpFA+XabFV1zpci07VgYe2Cp3GQVSQax+Hzq7fuDCnw3w5Ar5X68hVOj/Zg6A0hjA8TfNrThe24omRmFbUyBR9AtJybcxvQHpqsBL+5HIRRmNDyVQUvfg4wpjI3J53divU/8flK1tTUrrVIrpNQuW5N6TZyPDWr9TslRBlaewMZHKPgr152pLj+YH2qYGygSuswqW6UztLLlLBbUbrXkgB63U6bj+m3onzt77XVDQkvxj4dcyIwnuN1uZZ9/2GUlnu1yvXQIB9EuBvdeX89vFr+Ddi2L9g4yKlsDpc1j1ro1TeLcanCYg6bV9lYfrxvOxG05MqC7VLvQQJrLn/sMoaqg6kobLufqGkLRhVqKMnnEIvbNRIdX6Vjo6mE3/ZXD3Q85Fdl/VvSHqvsPvjfgEjnx/BEozhSUWbWwVNsl16B4aprk3dclQUN8QIRbYA9C5spogdV3yAaAfbjT5Gbz7L1WyLgQH9+GCJ50lxAxhmtUk4zxysGo4PKI7TqVivOsEzquw5RaiCiCBuHVZT1zoRA30eT09ibT6P7Jq9Co0SaihNRyXljPA6qxBJSgtoUdsNTHGwyJWnrvSwCgZg9sFH/cO8bYD7W7yyHuJ4HIwiw8H986LKWx2V55M9iVjBlF78ja3yrLphGCgw02UDvpQUMyeNghvSjyt1TR6XxuHgZyBR4YWVoEUCl+lkqTvQnhCg2uH7Z1Ut38PR1OI4H4aL/HCmfXLTlkDt13dYX37luKfEuciXK+5MnZPmGjLTwRdGusvfn40D7M9HGYpbqgc2MQ5ujsF8W1qjuw8F/NRfz/RK1lZF92PjC+KMmHict2gdJzbf+TVFiCpmVW2NRPscmUYLHL7Ugc6k3dQHjAeDgu5abzOBj6tN5yIsWxRDsJLHe0JDJTqsH26eqFhzZnO7bnxBpXgZsmc6yKtVrAVbCSv6A9rE+QLnha+HL8AzyffEL9J8bj4V9V7zWnMTxznbw4zAbyRQERhNWtauv0/460hQmmwHi690n3jXTP6UxMXq8U7BfVUlhdhHMenXAkU8x9xKAm70mpYtZ2CFNjGp/usT91t9Bxw6wSa7mj7L0y5XVC6KJ/0sA4RMsvpmgI8tcq1lM4Fr4aceOzXFwPT30FM/CJTF8JLi0hQYh96PALK/svHqnQNTP0hCmQOD2Dlhm2A5/rZQMYj+E9Gxh4sfOglelh/385N9xjiU8+dIEQPYkEKV4ILTxX22N7/OtCHuw0qB6isikEl8zcZ5AIPYEDurSpAlD0qYSlkwS/+XnptGZ8/E/80ocKBIuNgbwI/Qid8Ru6auMdVsmGofs/lu9AwWgOmdiwRHkbZD2Ldben/pdCvNyjrZQjhV1xRSUGv/U9TRoYdWkT8Jy9Q+QcjMmdzK7+VRk/RCy+H/bh4jAjL5czS3yj4GGpTr0VmMRl6Oa2OmYXCuhYNhNjRcpVZcEMRaGJHh2ErdC+aTTCr9ymzDf2DQcHKqrjwD9+FM74bLQ8Q5dYEkfYt3zgLd/U+JTF8+TVwMXJGzy2g1f0EYN/NAtwZ3SMtPl4WpUgEk2Bk79EXeszW3SpNvzwmNlCnUTEVsFbfPxmLXSzSzec8vOsu0tbuGMH8aF5aRXeAllLAiRK44yJ7uKuLdrEHRPjFZZ/RLppyHDGTgXnV4rQSDoVl3zhEr7fxxnYUpB4ew/DroZgmPL0Vqd3RYjilvYDgMyhi5n8fnzLl8L2Q1hznx5xZUhB0RWF34xE12l7j8RFzO4WdIh3WKCUgFHEyr6UahxxRYuRsVujIzBm3ztEDAzV5hoV/lAKGKrvF1rKY5HkyHHXZET/aXT1Qqj5Kq7uY6xJKeMRgLm7QugFwik91qSNS48UJqpHwZZM55I2uysecwvilX0TFhUlxtu+qfsU6ItNzajQHGDSa73RDU+PpCei4FnaliEMkW6JesFc9lY7NlziMMFTMXfqmh7J7Ibq4DHzJ7LDCQYligPqB8CEJWgtc3FvrxrxK0q1dAczRv0Wf8WK6K3jGeoTJ0MvMN/Ky+ICNxKt/D7XMi0jNFRG3pMENEhViggMvFalV8Ik5YPF8vp5gPp7M7niKBq35GDZ9d+stxQYvu2TaWHu78du3TV2LGuNXutYI9VF/aYS06it0zzgU2nW1I2+AVD4UL7XCvuxEyF+ApOLAYlDIZi7MyOxKYZRn1YIFlLBjR0ZSBPqzY7baMDxhG2fiF/gD3boypMfbyae4imiQQQRdfQVFjlmc8D1R0yLEMKfPAWoHi0fza8RfMgxiRpGmwmmBPfMahT7TLs3DCCVQYZqoeN36+/tsCYSC0Cojw1Ryke43fT+I9jLQ7AIbz0lV+KgxRXuqU5Ej6mwL5Od88XYyWYaIke9duF/kCo6k+0TjlTHIUUdsD4ZxmIpQ179+oTxJMGwSNimnm8d9uKyIP99piCAOjabe922Q0Ck3kj5uF/oR0JAnfN/gAtsDaRj1XxAJjnzMDvHkeu0YYM7HUxdgGF42VAlUng3jgcVfK33RHfv1uuzFVRwVJEVuC1hl/p12kDGoN49WbJmq8A0ReLVdKhwADpVZCJaYuRoqFIXcw4rvWkPphpt21n6M9BzMhg5h10J3xpN/7y5cNMpWgPttlQWWoAb5cUREMB5khiofKYA443KSuJ/PUS0LeB1G9U5HqGilZaoSAol1vutkS4kMj8kuSOenv1i6gr2KFGTaMZDcA0J3PZQ/uva1SCy4c+i/nEiYuhdI7BRDCxAICO6z5dvS9cA4DTR/iGIilFxz+f2ol0mcJQBgss6QDzBbFiy0KqbgPW6msN2e7/W9wu3k6hxa9B1EN+MUR4lIa6MRgq7Ht1N2HW8hupOU2UdQmpafgjmYh+pBGAEjOCwtMhQUBYFC1bqxnefONRMx2LQV64OOfV10fp4KibGktL6Wv6qv5SE08AhR98ZCdhiHNZUnsZFxVUnjwnLlXr2B+fKLWSBN0kj3bI9/J++UmrTuDRkUiJCl2fYWdGumLmCRCTAAClAJ3EfJyYIWqogJKxKUKggEz4yw3HaLF32Jt7PcqzbDNmpkNz2V8S5SusTKAhNIdm3ULKxeHfwL9aolh0kroiwC+vrUKihA/MAlOIp7a3e9JbprzxQQYaN6jTdhS1dXYghZfve9OqeXHyuEquAHw0C0e7kXIFj4gIYs8NLMXLEOvmDCQWqg5ToZsM4uMktdbl/1x7j1CZYo/vqakxW/4LpqK8jbP+wlP4ewC2eMiugdF+FxzGMjlGx32Etd2/1pRvgwAXLpimnIwiYXzYhbzxG788sVRJXrD9wcSg/OY6Gs9QeuJd0xxdsrMNhbcJGo+K5GkTE/yzvWIKaJz6RPHDa4caKsbde+gU83IIQtiiKglriDf0nAr6r05mwwHrOD2XBrOeDgahcJRRGL6EJhccN/K9yhjz3DYd8KX9bgFGmukr4vT6qrj/KWkbyVi6fBHFfhCtaIsYi9FKmjC0v3VvU/tXOdqix6g6ZAxIUsjKm3DgdsGPc3O5JtkvpAVBvkSL7u+feNw4lMOUKUVgeN6X339YHsILUWFzH41z5jFAIiO/LNxUIDwb9jB2xNNThQXKCcJ7f82OkgALGJUFLhfauk22ZnAF1vh374zs66lSX/TGvNWrQqaOqURhiUF6Mz6MNFdP0avTSelzWgRcad5UL23uQDrcZ9LDzHETmRbeok1dW8FZHXQU6j5MTsBtNPkNk5Kc1R8j696Li6XNxTG8BB/1SVf61rqLOHM+TlAYP9dStWCTcr2uhYkVxoxJC4eDhSk6b83FN2WZvvRWyN+P86FVTHbeEzxg1Grb1+wmMVbaOR8h5ZzUVsTewEQMbYqHwQ2wgzaskVk3tOtoVXldYFAbxLxEd2AT7FAXh0OwS0U2UiNokST0nJsrRvlbjb09V5zm+9Cn7TrEdnCPeDksEF64cH4dARIIe70tBLceAkGSbTE/nGNyyxrAwByBfwAzIu7LDntavVnWOpeLA5xAdoYop6asHhBLse4mRRa4oTVEYrLMfCHZ8sCeE/M0wUA5ArU28EkFzh1KA3bX6Tod1/39a0rkaBolrkeuaK+LV5zJbsR7lW78je5u9GcN8anKGFFwJ1LvcNbuy3S9ghYqOnwPS5NuIz7nCrHh1bUgL4R77GYKociu9SRkuFHmEU+UwadTjFYL+Xg1Jt2Oi7YqJoXkRsNG5XaFWxqh4jquukIp63l467DJ+4jKHKAVZUQ0xJEmjW7zyErD8S/0B0qA71Xj28cIK+rWpuAG08zNawAhImmysHWD76d7g201loDgZxxLGpbRBBuvCN/ywgXo+Lym4X7HrIzvpx0MOMYnA8wk6t2L+ZKfp4bbdn7rKxO9HvBT2Vmx+TlHq0IaJloMHiLBc4dLq1IAEDDp0J/MwJe1IhHdU1+cgSMIVnFtT36nwIi0Pv29V/vW5xpHmBCPER/k0ACo3XI3mrnTeQ03X2rPs7auToFujrq+IOEOcJHyFm+IEKhb+TZZo5crnYpZl5t3JlKBLD5vx5QTIaUlrFJWT5GWLEvy9R4yDOf7wgsKXXuuoOHXztuuwQ856/00vNaGVWnWPXcQVxtusbnrMDvLwsA/iFNBwofi5Ht2OS0yeJECnTAFRNZui6rx4JU8y1pzPL7NJIX/g9e4loS3ZgQC1cVQgwygNnMXSP7lN5VkQtkuRlbwmGjNA4RPK6+9yj58EQSPjIrDv4ckpXLRoh+zedEilAEvuZWctdrWfKTZGWf6ZWCT+/HNqGedXykROxoQf6HFdxS0feZXKqjNogSi3sn/Uv5Wn4QczCa+pxmk7z1L7zcrjg3YgfwzuWZcw3UBCBobopGoeBTgym4408nZJo0PFmk4j7HE0FTuTbX3h8fE0205CEsxKTsvvSlYQndmdCQNzFYZjKOvGqZU8YzuA/ufndZNkOIAQy2DsfBw+evvpeP0U4uVFpBFk8mevyst/fGchLJs9Zkjd7vvT7og98mRxriCDHNooPNR2lg/ckyG1ur0gAkVHAaanDAkhs0K3CF652/HDZvPLiwZkpWvMSSJ85jxHNiLqK4WkpEyhc0ZMgghJTlBcRTTbi2zRDl27gsPJIJX+OcdM6orid4y7rOFnqqPqaq78WAaMW7k1HqaFCHe8f6aiyCRng+PpVCGRHvdkQOo2QTv8zEkpWsDjxPTvFOfLwiT+auy4P+z82dQyfG6k8eRo+Te7WnUs8ZWIZ7zB6AT2/xTx9rImgjvCGYd+3LCFnPxlMz2/0q2HoEFRJZVdhfr7bk6tZLftoZJ+cF55zU/Vf3r8PGPZAR/0FtfIAcHmuZz3VO4lnrY4VicmyVCsW2LBk8Xi4u4rvmpkERP4FuCVEUSHT7nHkcRtfQuMtW4KBJLcyUkfH/2nHMWjPt1KoLu3d8TMaex8P4GvqUytBYW8Y//PpOjD10WPGe3KB/wWyiDmypWwX6EutO8U9PJs5ZRAsnL4GTfMiVAOQf6dl91YmmKQZ+0UawSggghmF48N6cR1qwkPGXFhn7WIsYFcIev3rYoPptzLKoS2zmW6vxgS0sR6oxodbEhRbVrNMoEbToNIb38vgxuARZu/mmrRiHIl+OvWyep7a6PmJWOUtFiGFNOITrAhnRFA31/eaPzXIHN4oP1286NGBjmr6s+fY6MhOU7VJaysWCOpyi7wdjHD5R/urtYfIPRfOdMLRG4jfVXpctXvPilCx3pMp8yau9gUozLwNVlsN7HtkmcZ9uYPoZnkrz73wTm4BAjJpGvwmL3z7/p7TULpuR3dZXI++ahVhOjVkkkjaPYMAIf27zwVZpLpMi128585tinWUxQ0AfJps7fECWCOXlsX4ymUyOc8Oy2qnxnl81K7mx8N06H83C9UyUYoKpuyroBsJqoXEdXTJmlpTGX8D8sb1bU4LSGODFTbmhKrRrhZ0KgtNnv9Qmhrj32axkrdD3IJZ+6JHKbQfFikemFmMJJUTOmtvWaX2DEOXc0Lpwy/ZsK2d5AEev4VryMC36RULjAGWSwcw1Yo0vvbUkaJ8XkqA45Cr4Ggu9KLBlNCrc6f5AmvpSR+8fjyhOTtQO61DX8hq1MlXSR5N/S2RUHq8mSXXmSm9AsmRdtwzj3qgn3blRxMqivPscaSh9sw2rIgxzSJwYzg48Chnb5C/TMtFNmQ624moF1ZRzDNfO/fpWm86/PbZnEg1Uff0MIsAGEr/eI+g7yJsJMvuXtER/tyPDxPiuS9cFRp6Bz/1h7cf5hqVwg+vLN8v4VzFRWfQFdJLWfUkTNSwB1SF5qUgf65gDGgj+Dx6VXRigDdjVXzQnc0rNcrnlZ8fEtxzHVGxJMxjgHspkZoVXxqoMlRHwIWN2uKzFzVSjpO4C5aSkWdj9UxB1alwPH/kqtx5R9cyiZl0pedfbHJA7BdUbRed3xukEsXiYu+0lJrSLBxH4rgD3Wu6ZqT1PZ4TcvZ2Bt103ddWZKHQYkhrtH+2FhqfPY9sY1AVPM0YW2vflFjJRCAdT1Mjtix73KjV4nHX7LMBOiGTGzEAwRj+CIdIsHdvl2CBRO4tr4drU0JyK2dU0uRVwek9fPMeMznmUjwtZDpGK1RowCo0nuf047DRCs/lLujLKRyL4D0RGZUfvpjTK1iTQmdy3quD9WkIq2JQR6G+abbcmylEk0UZmJsl6vE4rndjQj35hUDLxCE9zKjtjWFpqjp2GSsUZUbReNlqpGIFdNuZ2KDoN6V4p6q+S4MNYIt/ovUE+U3Jv2l4B6XAlldSSTH6PWrIyh1PPb+vkFSCukNudl63W9cfafnWQndIJFzU06iLEgLoCEVpk4vGohXvYWgZB83uJBs4c7JrllneH+v0mUFDamjVw87cKlDFkS4qBMwslJRuej8IzQ3f3QNyWdJzbWbzkHZ214nTPJOPnjJi6gfA9IhnIT9o8CdlsAUQlqqOamO9P/7OsRDNPUZ9birPkXogJggo/Yi7AwazoC2FQGRQK3EATN9+xfVKyJNZE7K/AAvqYA385brqTlnAb1l7clCLnGYN84LdFocOfRT9jMF0ZtRv3+lNebzC5g0qQe7+4tE/eSfq4d6Vhg1qy0+VKf2GqGdBi5cjdNvqJj0yo/bbgq3IuP/yHRAy9jk4czMbY2DXATB9N35PrKSmoAKTswyos1tolKr9KUwaUoXpTGNq5qh2aqYSrO3CA357ymRQiz4o/uX3Hnaei56UbQuJt4ZpsYBK2iS65pLFCYig9zvq3QAijv6FJRaQc7HOOQ6+T2Lr2fjJslwFz5Dk2ldwkr+msury+tbepV0qvJZznLt+PC1kspM7qZMP20LRrVNoUhNaHXAseW4ZtByS6jriebBVPFtz6C55gE0xMPdUwcjuHOjaVQ1hphaTCVNvmoYHV54PHShJmWuTbbUI+xS/ZuqNUY9MzB0RICC0xnPQir/qm5u2Ze40aWjZ/nJjviFkukZGGDvkPMuLhEwOrwta1UYddNT8XDrnkd8K08VUkXrPJZGcwY3/fg74WwhPcvJJqSZTkOPNfqjay3hPgi9r2HCuXLfgs8uJE0316I4GeUD5kY/DJsS+XJ0fhmezbqivOaTNHAYJ4ENjTgeHyGe7trZOqrPx6z+c2s27wo0U98/tATDY1xdS51ovpcdyieHs36YolSLBg/O8Nc+4lsR/M1WANEaUbeIQJ9jQu28/CD59z0O4K8U7RwqUdxyl0zH2Zh/49bJIXBgKmY5IJIbzA2llBSiUumOjuixesjp3/PCdDNyjGPS5dU01KV/zwxf21VE9Q/TIQ0YRNrw5obLvwaHxnERsOwEdg7LAInkQLtSABjmNje8EDjXE37y3Pec/hbkEEufp1f2HsUtf6p0J3rzUXKBCETsLMmwA4w6G5M1Yhbq+Fd2PqC8VbXa6V8bvJK3Ac2rBCpYqEHen5M1XpmENrT+jwd+TomDIfeGrp2RoGjrb27M34j7ronbimkve6SoggCLSAC31Y7Ly2lBXEDGUj2vqog7fDG0nY/KMZEPMG3+8huasHRTaHVYH0PcqfohTKb1BCCDUTRFZbG8jKtnqh6SPh/8IPChfLY+2KoXCAg2wFpYFgdYv61y/bFvzLEBZ2ropNMLFWQ0O8YAcpfxT6qvaj3NTn+zc8k8vNfqMvJTOxUfZBCSCYnbWPIm6uQOSYT9uUyWOgi9AWki6cWDbyQqTF1BGvcJWHrN/zVkOpIHZdQhqUqHQaaNeA1MnYvHcdF2efVZAl7ZPgoIdnqxX0NhVmJzjaIkc2+WF3bsHQk25RS+C7aw6uhdIVMmbg7g/qJJ+7Q1W0V0rToqhuSqqniMjoQKyauza8Bwzgt5N/1cbQi2mdYYqC/zKbdulxvaL33q1M+ajP2Kt7ev3kEuGJQiu8PTFb2Xv6jJshBWDxM9x3A+mZVL1Li1qvbiVGAGe1ujNw/kPJvR3BjfZGm3qMN+TY0V5EfR13kWVXyivCOQtOjYDRE07iOao0k1mWqU1lJd5RZPxqRJi90urVsTFkpZB4kcfyxA/xffsw9Woo31/vP8xCXxo47cokDEWn77zQtQtAsROTjKnEdQTCdJUhkuWYK/1hkU30mRRcQCMTfZ1qvdMv77sbcP7QVjNdh5PFx1xiykf/UfRbIYBVDYNrZ65tDlJ7XgOP6jaoaDe0AIi3iB+HbgX/UvZM0iCoxwL/1949OoBU3awUj2u0q84X+iHGXNaUkpLPyPyrCCwh/yNhUPqbv5hshAyDHLwELl8JJsp0TWmXOYGEnd7U/Vc5qwNzPTIjfAqlvf3JTAIb6HestDDLp8t4M0Se4yninIXV4jWZWAKMz4iEyxX+Cr8NveY98A+mvK+rmODURul/iO6mSfn5eV4UOzbYAqHNLWtpLoYiVf2q7RM+D+P/o4DK6O2SRuvv9/E50bvM7XmH1n7HUzgV+NJN6nMGYH76H0w2J+5HZHKdRV1FxjbEgN7gZ8vzRbzZYNRWo4NawtuSh4kkhR58BeAUhiMLv/oF9hOKQW/fsn0Dg+hQUlIO/zo0v2ZxC9XwSoh2shTlM0TaXy2okY7y06bkcbSSC+A044R4WvPcJXkt9ijop3NPgV9QqiYlVo54LJdkVGz2IodxFP1btBlF/PxcGBYIvFTj1pjVwtpXsmDMWrk2T8P1TbhVtfd0oRDlNEtB9gBktsTR7RjzHSzxeGMFbR8N32T9PtXsLXZM4QNDWXXlXFF1RwV4xwqYxv7Lc2PllnKeu8sivDbZI1CAJnF8M+2igESFy0vHcNuTyk6Yk1c7DGKiYvNdkHYin3n+63tWSRQ5woGFUEAk1QBhsm5uuFAPhZWuClwa5G/PG+Fd6de4yk5G95EbHOfoVNZn3fwxSi0r6AnkJYSPq9Vmt51bzsYly4kIv85auyYnBBtXIOhbocwWIIavM4whCUxgiqcxHNI842011V5C0mFAjIkLyOdWnwP3hUPlQVbLSm3PKjbfEoLAloCC3jG5tDUpWMPJauuZ/D2wQ8QMchI0m45mNbEDKe/xS9uWcEla0n/hZtsLaTPjV5Zs7JXE04kMkpFf8rJs9XuVPWDb82PccMEZbzZ5UwVqr/2WNr6V/aokqZCWVQRpRPefLnsQYp9FfifCGRlpm6n3HMnAajS4nNoIQEi79/jhsuMPs/jsECHWxIPMl5EQlLwvn/Gyno/bBx+av3Kln7L/zyfUJ4G6pSpoGpKP67inWU0qsxD5ajrt/iaXK/jmq3Dej1+kgXOAivJ7TEbWinWptM8bFIrkMiFQ/E94moA1kh5G+05Xa2SrycAqK+UXZmm9PgbdCFi7b4id2U0lpN0WgsnWysYIuu4DYSgk5cX4DTcr7EJpNZXRJd8DtHD1hTBDg1PawlOg2+frZsWEtKyRnAE6LakHf8rnFz70R49euuixm03K0FFfOoM6UuEQ3fYgPLf7yxo9l7YPQuJQ0Xbr93zm/2n8zBU/ZqCcD7mmlvoKroi7mcg/HdXLcJQyhlic0qiuBIAbDocRY/1N3uLphIpCSI3HlI7TKpiwlibO3AKb51m3iw4H9ILiy294t0qz+qlYJdXdTM7CVEda2CSoAI6eRIUupdPC+DAX07/17J3tBTGOF4MeoY8u9AThQA0z3p3IMFN5vSzGxoeLEl4XEPaLHKcAuTKBVBC1X7KE+UOFxII6s7mdEO67ifsiL4u166lQ/hGxCzPccMNVY0RHlzeWbdTeTMwgyVEcfebP9TGLEz+clrCCGJhG32FCLZ0TWF2xYkUag4J7qidUEtwbf1H/alJiTistmaTOds9tn1dFQuUpB5dSKaNseWBRhLhJTu1NMOTc0Tq3LsiwxBv9p57d4XASnXs9A/CeGCMRCarDdRLSIK8Dr3QHSUTN5HFTwRkn66YyHN3x/m2MjHWhAE73Rx7HsEhpu3GHjeiI4Exa8R8ZLfKUk4RKXjL/yu00TFcVWfs93mE4XudKYlsXXG990mw7coYwu4cKTIwK0IDsqgbzmaXX9qYHZIqL+Z1FlRuU+C6+IQdZlMzlzAn+/NpWL5o5nTEVBicim+45Kdhb72pKENruaXMV0X1UKk+9P27DrW74+GFkcJUoyNaMX83GPMXOKj6zhpEeYiaDx00Mzsrr7fqr8VcFpCNN+O6h9DEySfUNV5uD1kAxMaW/BaTu7jSnNm7eSizZju02mw7j53vJ7SeaAd1Py84XM9Vkb48NM/dGmGeowY3HxUEOX6L2GMmq9mN1Q7O19nueiGPbUQfca5qp7h6RtYO4E8voJzvF4YCBOuP3nX8HFhqzYKXPjxJ/lAPo82e8ksXM4oilrwfF83iK4+kliOPa76LzrLws37IMMVxxXvbUA9g9QGHrLqpTtiRjER//zsXO6B4PwzmCOXc2kN9nURJTdtFDLeFH7gt7WDDIRz2zdbZq8hMkB2iZoXkAcTiOKwn56jPv9DFkoYkgBo60dAsuFHwjmRDOo/Q7FEOnEU5ZxHDMtVuIGoAISzbczQ8bTbqCBnyJVVTF8jdk8EdIYAqMOIr2RqHtJrK3pdKeHyZpluB79uVl3iLIWH0SDeyv0W/8HeAfL4LH/d09cZkIihnhQ91hnrMO23p8CemtAQSSQdfH/q0lzTLEFcynLx0UFCeH+4tKlJOObDvMlp5bowUdQTggXbbvbofIMFcEa/4DNsMzIOAkJdUlMt6xS+yawvKRJSOupOiPWAEaspxUwhg1yC5ydHQl6iO/MylXce3URjY2M0idlXyHaP6DX9xc4dGOFZ1hJM6AhP+QVPQOaawG/zZqpzwe0kdIu/rMU+C6xosm65/ABLrMWkLyekpCU6HEmMM+P0/DnyODlSAIqca7/7JSuJJSpqhZMwhVB3+b13Y6uDRK7Admx9xMlroiuJ5I+LOG5Q5fWPKqgSGzC2r+S+vavzqsvtOwJ15VXmnGasurazXsYyAsgxpowN2W6cG9O4m5AJtnVYP/7AEYL1pyKeF8U2oJjEqTsJgpfXFo4xyXKIqjkmLtY9TyfGbRfcXZ2gKEcrmKLGpCqhdpRqwHzVAwhqw/qXSnh6GhMmlgZSF28+n7qkbTB+Lle1M4fgWoas7LsgE+anGV6sl7iniU47/l4Ec7fjIASzRoh2GPLYyFv+xAQOVywfPeBxsBTASNtdfAhM6UGujj87sSGFVYLoXmwTGVF3dF705i7sYD+vTatUXLKAM6ZfpgXdMpe2EkfR6I58juOwpq9sXt9g54c3BJCbtb91o3fmLp5UyDp9uSPPV+NQXCpPnqCcuOHCAYCx9I7olR3vupDqCrgqf34nV/uMUhinRibKR4BdCG/exMOGS/XpBjLnhEfnk4h79JAg1bhVRzRlbpCioy6VoDRLBrmrDnAI8Q9i5TydvlZjFPe6FmJDUc4UW8Qd+s8A83pmrGTBpDRXHSOm9kwcXxcUXhZygzeVCC/DyJfW5XuNrqGa4bnzCXPGVCZp69BxBo5u5azasrM3mn9zG3S8aHkf6qWt6jCpiVIUHJZvum0ZNy91CaS0dXq5SJ2wHRDjuglogKQ7z6w7T9EJfXm2ZBc0aOm4uI0pCQ9qwcdz0Gq977cxaJHWSyoA0SC1yR7EVH86A00zP67LQKgBZwQg2mivCR0Y33yi+4odgXckEiAaTDvnNkoqNJ46WBkccxBNA4iyva6/L4cPjpbNy0in0jnVKqIj3PF/rk4msB10eakUlau83CkG5dSNIZ+kX/mily9kRxLZIDygQWgnbFBt+X4Jd3Lq3SLsGeC1QDR7CzTBp59bjjuRI1PyQAETL1useTRbJ3mc+qZE5Mlk7CPJGbc0oGtmG0Af5YQPzUDHvTtd4oHX69vvtppZeqXgbVPfWQxy05REpEFcwTHTKLZOinU9t6Vn3wQRr3pTiQ+6RKXpTV2yOk9qYPNIs6uGj2wlV2ZMgNrK1GKRGN+xCekg8DgNx9GPsVPBi/NHDjjoM+xJSqMmJDA/9oKy1UkFNcRCbP27ehx6+/E8E93/QKVIyW9ddb0Qk0ZFe3JA7Uc4Tp0kBtH0amVEuvnipdZzk9g5oliVhkbR+gZluuL4ifVNg/jPAWB5tYHyABm7QDhU3P5LDspKt8QRJhVajS6+telrt9Gq25NUJ1PMvOtdjcGAvFFtZGh//Ox9iR5uaaLPtNc4RNqaxFWX7osJFOyGC8Tk/C8nLROlFEMnnmZ7FlYuh6HqvjKa5SNAtalOK+3GNNPdeo+AJNoBBBiH0uq5Wnn19sWrG1VRvMxj/C8yC5J8Lya9iJoQCTjfG6hhD2JsuI3b0WS2jX2T7VLPcIwOzl6YR7Vr7fVEggAyJ/S5VR7wBsvgx4afi0w4EPIKyqOlzkLhmoku6b6z54O2HhyH4VBhp8itIVCNSaqcLrDYzDYQZQSaUIENQfCYGvhs/0k86bPMETSddWF/Kud4kA/L3UH/pooT+y+lmt20NECatyW9oF8NrseOXd4J4gIY78MWTQUEjtLCvjFlIi98KNerXAWdyd/+S9KeAO5GrPYCmBThQH1Em/+p7Q8/2fl09M9zFtVyhDGgNPxXUGMIb5zrqruIpmjskk3YREjbttymsnz8XLLTAOJCiQYVydAWLRBN493arQql8VcOWnjKsXgeStjbPNMsN900TIjShwvnD3s/BuCMCv5dQIDxCQnb7Sn2RMc7wDF5GXZwoEBN0JqxrJvEudKg/4MSMsSxG5Jn8Sab4e6Odss8Uqi8hog9XuB3fScHmt9rEmiRF1ueu13oas+fv+52iwO8Sh5Wo0CoWcUU/1yEzQBrEPTpwPmKfCh5r7M86YIW8T4B7fLYPn4I4DeKEbMAH8l0hd8ZVpGaPcw31b6l8bkMyqizWJe1E5yik5GgiRKMEDxrAOggV8l8TlPRs0Bgy7Xc6zSfGXGhPQbjmr5DGMeZxJ53arpsB/LDXnx1rW5Hb+5+CqwqTfnaELRhC0+vyhnUfw0gyWKeDckL5u9cHkkMHltjco4WUTtyc+xlC/EeXaHAEPNlD2OHEzGf948D0/uQGqY7qDRAZL2+twkF2nCph46U+ijAO8MficqDLTtE/Ci2qGTV1DndkAaoy2/bzpv2nGEfitNojAYXPLV8Q1ebaNKGjubNpbf+1hs1iJi1WHmgK4VExhJXDGBivA+FDAN4TlyYuJsRn1mBLOkqFDQlyegZQ2tp1BozLAoKUOewpG3ECzmF+z5lySkEYv+h1IuoB1jKo8VHLG42xbmKeoyS4eb7SJhz1GbSbEXRXQ7Bu8EVUmsG0gqNWEKpKoAkuTIxe3xhbG2SBhVDM/Sf8Hgc7foPUH6rcIfwP3RnuWIWF/Y4WiLw6iN5npCAsKDqMKpy+A8vkdDyiqzlwondGsmEm1DvKcrIyFawNN88cEn+D2XeN6B2RkRmvzKwRAxdW0kLB76vovarAjGIECudPCk4zs6TvJvl83KaxkdgaQA1X2z6HlnmzI9GJzFk2+2SuHbqctZGIIHH3BP4HBWHmlX63fpEgk0yA+i5j3YTH9EVYdj2mcAq5802P7kuxM34aUVlS3AH5d50I3wY639pA1+hV+ql0C/e5troBw+jmqpqxvDisbxv5jMcvpEcIwCJ762a4dh41p6aKAwZPTyPT/cMd75CeKrR7DoNracLHQWdUg82NsNlLRmhevWJ0enxyvf+V8lgMkq+RQV5qwEIFqCrSxj3f5RDHHq//tmNVYksrzDxk71pl6H9HqlZdQG6a18b8Rw5e5EUqRYUi6ZIwekdGi1muJWPBk7DXTY1l7pfSvrYFgseMtLiXoYupzWHVAVIAwmdNnYdsk1+/qSxRn6i7Elyk2lAT+aazUkmVSqP+Mm1IIVMXg1llD2xX36YJ3VVXeQZo72Oi8MMotO0dvqpw5DQGVUdAnB9lOHOE4t/ETMw2ygm+IoZ2zc/qmwbU1OQ6Jv7zJd5znRe9d15r811ZbqATfTEZWX9VObfACRT4+mEUjD4NhuzYOIyJIkMZLJdS2SBEG4+SjlPqVMEOSt8PnvYuUzUqGJikz+1BSgI4+hpNpAi6mL2aoCzeYFZBDu6u9pUErblxmNQpZY8/pX1Q5EVD6/wlzf0N2SO65vazkkbpUNJ0B2Z8keCUUK0EDklJ6pAxB7Okrl45NS0aaDkpb6unEjemZ508F7CVYvFXL5E7d8TW57OjeH2RfIsqFwWf51rkXLxvmZwnsXjtTmBBj/EhMI1cNaTET+i7vQ5Cc/Sb7l15hCVjvAuzGSlgGAWLtAd/uTBva65gBtlYc4BXJOe7bt2sqFeBNy9nPIt5JiOuDLeseVYetHqRmC4KIYrHN4BDsSTjYATDTsl/FiZGQBWDP4vII+fuTYzEb2DvT+hff5GsEE7uXr4NpOoP+XxaF4DtwYu41N2I7Tz5yjOM91OYoSIodSVCTitdYWd/zDXP8AIV6HeUeX/4xjUWr5lJ6ECJGJWoASuSMZLH119ohFlGbPAjYEx0nQ0NExj/IdCFtqH6LdkdGp3IedHuOyPh0S/543UMIJDle1oJI1cLTMXyKkklnhshE+ldSmxCUXIENbywkjHoXkDDZO01wjyhlLcP2KApNZqBTOnXxcte/Gz8Ode5J511To4Dl49K17cyXHNUZXBT/ntRZuzaRho1NsiI+Zg6o0FT+tdSZklTvaRh0H27gaxOcR4KyoygQzaDvZOKwiUj0FMnfv+UCNKw70uf0avRIPbNlMZ0ueV2xciKhlfnQAgb8ePhIjRkAACaFCBUrEEDLYcyx/OyW8ilxE2R92qfefneQSZZUtodpcCnjl4L3vWQgWp6wFsCinLOTqh6zx7R61xFo4lXpV6VTfpFZg/+i+Mq6ZBXGXwFwkRggtqhBfZYWjHL00BDrSH3z/D/a4eIxwOGyhAPFlCMQFiisXqmhdgKGRERQRTJ+EssbDRcifpr/KqZVwswe9XqxjYdPtRJJO0znkSlO1gdH5bewKaIbEVaR7gimW9ZmIf6vU9JSo5Dt/Az1WtitxglGG6DonjDHu1YYgOgd48BSmEYNwf/abTzsbORdgSwdMQoCqZwGkrrL6H6JHn8rmJayo8ihv9COlo8VJDW4QF2Wc8XIOqiAVxQBg+G8yfQW7b3I3xzA5HcELuAGiSVUwtkE2b3n6qMY1PSuknkxVgGeyo4kSXJS9PEg5hLhlA+v8vH1mJRWbXmtrgoPAhDd0xL9by57WWq/ASueLXX3ELDCziXSuK6CXu6PMrspAu6ev2FYqs8jMPE1Ccje4suNyh45f95S/Iyh2SCOEppADkaV/RIWUAQ/wTdo09lEEc7EKT4EaD0xwELqUAqEXTlumHWjxoqAA0/qpiqSTPfcbBNw77A6YJ0F4VwMMMP+YnlfvFACOKH+ccoxlmOPwUWVHbsnxITOHYYBjcQUtWa1aONVAQgUJvI5YnOWREuO7z+KvJbhyrWMEUG6bKV56Aw48cVltbJ7WTSh/i9ZSdyt5rpy2CP7qcf2q8Ucghp5I3YJVF4W75TPwGptuhYYo4T3Ap+k8VGDgw/3YtEaqndFapOBr+Rutux+40Dgn50wbvgvUUXV82Iwa024agfp8EUNDD/PAQEW1lB62W+q5y2IS0vpTgRKaZTjNMrxRHvGgkX6IrPllD2v9PIDIOUy1QFdD5fYqyu7APgB0n11N11onjR3OG9VO9Uyc6XDHeKIdD9KU7fwzDSE2nWRW1PAwdr7UbdbIIzS18E8mHfQoYjdXbXcuOfhMgCBs7RA+jFa00ZIMmaTKYJ51XUf/bF8/M34S6vIAwPM9grhkNHqWvp5f2W5YBaig+gvzN+PZlKIHTrw9EUwCHJvU69yA0bjzU8DNcv+k+a1aJfDEzMWbvQtn+f0ZkvdIBvyx668sMI8rmesjE1aGobKf/ca7mqHgfX0Gwrv39dF/FHRHGjpZID2OznUfCT2qWk34AiIiB2ua2idZYdh97Nd/j7pnCNTr8OAHjVyw4TsHP6ilk5i1QrXwnoQPekQaaYBtGPnzDh4SOXR3SqcJnlY1VMMUHDgNG9f6To0hlQ5p5/eL3dIShcPaO5fa6hgLIcJmRZrWYacOFmmpSDtfLjm8w2el5o7Vw5uiYdyhWsoY2+a0kJ5t5Ujo7eFIxgrvBHJBECWcwFlFzrZO0YKBvrsFo/WzCiWFJG4WTryXugOVwo4xGATNImv2sW9ThVeCtjGzuTwnyLbmkozHg0InfZmB3aQdVX53VpOAKhCBF8groHTC0yL9gL6bB/BAcOuJChnjIdJcod/0zDW5oRBySSGGmpp6f2lGcqnperhCre1m7okiA5X2zon+pT8TU6O7D3OALP3/ZRb66XMzv1MRb4g6sRnlAhzVrHNGEmhwEtGt9TZiixOYa1t03jmskd5MfjH1Wc/pZh31Y4i7ZyO4XlYmsPIScuewtxoD8fNiREF86GmUKwMVlPoCK9UG/+MsslTky4b7jhdEzCBtoCjL7cn3Y56iVU3AHycibPCH+i8NJumdnn0Y1HN6QuyTx6LESkvrVaExwLkxZw4dNgXRZ+1ARTjZKNzaaQcRgysj7iV1mSAUs52tF/9oHWmsq1T/o5AaEokfrqAN7NQfiDOBhi/XBGzGY83mO3i5RnYFJqFVah+7aqvvzdgmTlt053vz5eJqDAinAeLkS31V2eHaWannUNCnY5aoRmCHvZslnVs0Laayh+vGABKASSGerDhw7/I05mP6ozcT1QCedPjyOzo0sC/9pgj/1nz35aFTJuikiJ/hRoZOEpC1ozrARb+BEECPl6kzwEXBAwStdVVv/rl/BpQEpDfMrmLm6r+yvqkAWXJLh2h4Y/Yf5j1RaAthjXEbt6XPYXZrw7cwFlZhCzCmaYVuM3T0B8Q8WhvJJ7qKog6rHvcififo1E779QhXmLb3M9wN/0HVBHPzYLM/KUoTEM7slJ8bsl7H4gOQPvweAVqLBExsD/jgrkyzTNPr2Up5INYfS+4SdsnPXGk08ydxGz9kWBEAA1bRwt9eSmXYPXc8x+mfFN9jXEDCsT8/S0doVh4DHhotlH2QQCwp5aVLGJfxgnlVfo7guND8Tt1IFP9ZiMJ//SCI52r1uwqD2/63UzHkEsepkwfAju7GsImdKY8HcPR5y9ZMdYNQDLiatHSjCSQ0bfZAI6y1xof/5tINjXh2MT+7lrDmCmKkJy3HivOZ5Ocgc56fa3UEVFmeEA4sMmHuZav0S4kfLUIFZgZtJVpKysH1+KEdGIMx3LzHcH6HDWCr2cL1SX/Z10PnhdPVG0VztyDT9hJkDhSiaKBXhMQpo5Fu8pe4CpaxkCN75jmByEY0m2MSmTvTkIY1gLpgAY18tKo775da63eoS0qKbPH8BqxdVDRbwnmqLYhafZvSE+zUKJScZ9j++VfFQySboPia8zLA82kei4tgytJSBEcE4vlFXJeIY9IBePOpmDwAtyMiWIW2UwsJqOweaW0pr043E3nIgnCMzMx7aIZqluSwSAVkqsTEco2YAvTUl5xjiMHAmsTXr9cFZJ9REeLKk0it3FQh2Dvykubh52/H+0iTMcKDmsY3337ZX0FSTI04BQCqm6pIm4ZirgFi6vfoZK4PSZheLa5TOO5AZ2IIkk1QvXOc2rkXiDGI/XY9tQPMvZdBdKf9pMUt7KAa3gxbeUoBNK3r41eNNttNhgaWguwm3v0pSc55yYPq4mH4WRVMT0cu50XbcG8r4jbs7YCyO5vn75+E9nHuV+2I8BTM9WChR0OwQbzSKStk5YzPRlbLplqURUT0cT46M6IPRk259Ez1vg1d7HMEO6U3y35NkrBYK5F00e5xe4/MnqxyHH+RftrB+Mud9mHw+p2Ccv+f5yiNUKqunth2fgBJ8IHmLiEurUQ4tLJbR6A2q1P//ZCgcdUvWXD1fWiNDWp0OWw6dwoG30l7GUbwY4R0D3HfYNHUgTamNmMsCsRn0a4PKXGDzruZ6X39FqciG3xd30BD0vB1zc6mRBAzqA717KnXCM49In4dyh84Faym/9CRzuLCsuSAY+xyEq3pjfI+5Otr3DTXvuKzbHems/xPdDw+OTEhXkRchFvyMS+bG2JV/JX/nEp3M5wCwPFlB9j2yhKhZHfZ1OnEMJDjyogn1EJ6Oa0Xu7hRurxAYbE2s4i/OqIiF4xJFMW6qEkq8xdEd680sCbpTBBvEGGVaja880doeJWp7reRnQDpXR68SdIA+RLJuMmQNB3Elc7eGMPLIPwZaAeQh6X1ct65RPNV3wnYQ1VZkiXJWI5fEpgsBh8Zor8Gi4EyhVOu9uXGp5kWCxgxOaSyMEH7PI3V30gwWVRximG8qNBi7u4oxlYdN3xvPOou4EJhpiGT9aCMOoh8NeJQFLtwl9JPWDSIUueyJYnHa/lkyeHy6p5kE74HW9f8xNXdgVrt4dXViJDzGF1oBvh+1o6Xrm0GLsBeWBGuHcn+CGEF4Yrb+lsODwZ92hUkThXHiX8zeCPyZRmwJ+uaakbNC3nJdPwpIvyGfGqwJ5xy9Ll2xLgU8u77Ch4C/YuO1rAbzJRBZidwAmIerb8F2tCWKuqbxANbwIg6mYDSIor+/9d9DUolIAkYnOgQ8+Ev9whrcvkMuLOmH0Z5pHghHNnF8HxisCwl1Xci0PqiOdAht8WTt7OY6NhY4VQi60ZAxz8JkCbJnYi6FbwOF/0UwQVaqyY4e12Zvhw1z0lFql1u//kv/LYfRiRMWyXcLLO/SNJxvRAEo90xlpNXMI8+ZeCpu1OyWDjae58ZC+CKigjMkJQer8Cgm57R9Ty1zcQRR381MSaPO+RcytOHTrtsFLOz5V1TsE6L1s4ca/HtupGf1gNSy+dsr3NnGghZWlNr89PTIgY1bi5kBDxmcR8r0SDGNuiudapiU3Mekhex0+C2ugsq7eODTxl61g097ek0O+faYlzLve4ZKIw/TOP5Dimn49I/sO1Fx4mgyiYFeixtnt6XUxyQAdQRtGOR8gtYibsN2Nb5jz361KpQ7P8BjPf1zsE3S/Pc91+biGrA9KGKzutyCaLFOGUKLVKNnWFLR0NWVbfmda63Pz7oXUUsC5MC/nidWiAMOAk+6uEFm3fxGfwgltSMSXjkMgOKHveMWmDCdVx+hrD16fy697gRHQURYknrVwcjxSHs66685CPrBQ0ZuRUsXjXlh5P4pvlaEig6Tf1REEikB4Eqt5K0h64RGvG8L/jKA5Renyem9r0g+obRkBSh9CCGFGMTMjr6rw9+vpjRoEtz5J6/1zOloj14PhRTgN3iGJZj4jEJKXeX13kRaRvkWh8GuR9oV+Z5haQoFf28LkWXN691J85ujSP5aMIMutD8XcS/gbYI5TmUK49nh2p42Stg6H+u0oiIW/JjSySVlhYBgd6D7FRxlZTJZ8m8s4ERA8X1SvyxjPxUWLc/CzXH5bYVJr7h3sbD84o4DM4qfj/NhPH5tl3d/D/VCF4hctxA56ErBwCRrE9cPA9kRjXUSAuEkILcTY9r7/7/5nCnQlUAaRjxOkd5UNSR/11l6LqS7024ZjIIsRuF1mx3kXiJKWUJuqZpvoTL1LdmhhkVdoMJ/G7JJjmBEKXDhKMe34Fxlnhp4hSSOboX00bGMwaNRaVG4FwafIBvu9ctDUOd8cqXhbOcexKsbJXKjbowH95maI/zq1ete8N8UPS5hZYyF8r2PgbQypoIs+8o5hWhf6+gqG2hqyTfR9h+ys5QtJlWKYmQ7eePdqQ1kOlT9YHv+fSQfApd7G5vlqoH96n/ilgnvtCK+0shG5zH/MA/AQ5y0gy9Up0y1sJ9LRGH0qfQUbs88Pu3yxCozlEY6YyrSHnsZ18lUhE+GGrUocwXqVXlOToH79gHKmWqcqOfOkNnReUY1umdV5E7GZMoE77k5Pq7uPdw1eZJMC2gCej/mJrO9wtVBzw8PbjGaeLBzThmZED+ViJoq30s1c+mpaBvVbDlaW2SraY9L67/Xq9tKorMYJOAFhaCVUJWl38GE6OAsXIi9qnjHmlo5dUJQ8Jll5Oo4oOtp1VJ+UXnbMjp8BRn0Lxdy9D4Q0D8j61T8mcy2GwCFoMznFEDdwA/aRZm68raTLJh+8AtQvUg4gtrDp13+8SsaU9ff92FZrYJoXgjlI3k+ZzXapNdBspOyIGh+q1IfFmd4x2bRrI0C2I0qW2WeTP/PpHHtIX2aRWXi2Wtrn4dYK05uRMl7ZkTtdskWv+QX5+ZwuDAGMGn6PLl/t0U2x8qSyzgg7Mid2hBsQHVIS3gTIDo4QGwdVftU2gys/zrL3Ctg0q2IraZw1bNqkuxJIUvukW2MDdW8ex663IVhZcXilfod2oyjGxV/zhXeHAu1ccGeo8tvlQu3O+KiFG7QXG5vd6v7e05tPsvqD4PPxBt9lZcnZWuEL8wa8vDx5hsafOVx34Sp3ORMN1OajdsLq75ZXLvGK02lfvm3jrADaPXtcIySYEA2+HA2tro6YOpGHDSw4CPQNXxbXqFQvuTtXpmSB7XJhyce6sfum3DlN0nfc0I5qosALkbKdxbzqcUX8bdMtJxOOP7H0onn8kJAlpG752BCqHTgktt41g7YUSuq6v8w3I1FyACe0BZstr9KHHOSrb+yvkNuDpn2wGbJsSSBvf1b6OdxDZmmt0v8MwopPFOa5gHv3i/3Bb8SbPpkXIkLia7hVUa8Sqcpo8jOTR3qyXhy2LeAozCwCczDj7M+Co3nWJazmx0LOMAibcxbkNOITwrNvA7g0bNW+57Dbkwnr2lhGRuxpemhTNhEyarLXcrCZnJPfEaitxacBqIlw/jnWqnrzFljvpJT8492oLpHBa3KS0RdxH+pHTIeBSGkcIclZr0ebROE3PFnOGT1QpJf/ZIsSEUfSnhR2XqXtqSXKaIdJDYwpSP9vXVql6MZsvasVB6vQnUVCTvYDhy6oG+sJvF0bemeBIJ+tKsQcAczZXjKH3OHylChmnL5Gsu0/oPoBwVchBMAkAq9WJutDuzug8bBVJzWK3nMA/AnuoGeic7mXephjcEqI4wKuOdU5Asi46a81lRa+uoNgFwJl9MXlA3DgATUizN0XyFom6iDkxYkt3YUptIG6Tgewouw0QxYbFl4ftZ2WgttQcvqFAvUuvtfJH4F7tWHpibXxJx0Zaj2AgplGf7SX5zQTwaFsY2FLCO4FBUpXtR1dSZwWLbPKkZ1Btw9ndVvhcDnxdjBwxUC1AaZop9R/Ab1MlJrt+4dy+b1DFLjD+GdSjyr+wK8lvPXPayjPjBiZFa95/q7/wmiCn/KWJwmvtKMTKr9PcB/kX9ivAVdoxKMWjYuG+mHh7CrXuAVxka8Ly9BWDrXlwC+4ksa0n22v49vkSAkofpaM1yGehY1sjHw/JxsDWFmyOcwifqeqjgcMVBcDCVfQYqUmJe/ELq0tn619qSWpwzV4Nk5XhZk8+rPcVnV1l8NiCzomMxN+Ysi2ygygIFMNbEjH5Y2QVPIo3uvjJTZrQd2bwdFZ7LRrmX0cnjIbgNiUXnFn27e5GjOMT55bHeyke+bJHziqBrbCg4o8ABM1Jca8/LSraXg/iTZxVlelhqkEjef5VA2PnAGrF4DbmjuB43wfQbZR+53SnVyPYlNMbXqnGU+qVUAJKFqM7Gc9Om6ixJ0J3FaQpRjNJVW5NQ19mR3FkLjW00jqiuFpF0dxgV72lgico+od+WE4KG4FHfUqteyqWMgA/pWxufFOv3GK9mBBuxTMsyR6vAX3CQGYnHfCOSgNXzsa0vGRY1c0QX9WCFbo7OUIyzhCgDDAQx6JdUUwkHkAgylLVI5xvtLbszgAcdJfF4zPC6M0SJ/xhA/nErhawrqEfYUEJ4tuYQF3zECpRWcxJFGzQ3Iby74IhMyShtlZyj6hc1O4q7yzoaxdMODAoBawefRxvbOIoD7hNHNBTy+2okfv/fIa5+rIRjwvpJSdEr/+vnVPhbOamddH4xDNTfHqdxDLbZqDPYfBC9lXLoDA09liavEFTrjAd+xG3cdn8lk4kPxBri5uTtf5w/4kIBnWOpXng83FFQWoauK89+yASztUeJWHk0wF6DKioLcs0GTMEWT0fc7q1yDBsViHP9CejtUhsfJ7V8GVpkuR4mqYtIHzBbqauiEgcZ581kk+mtCdgQPmPMaM6r8EEoxqSwWlPThgiFSBandO/Xwe+Qe3zxjO27lsvo8dKTzo5SBMiBz4TeIjDX4Cfc4nATcWsNXuJkC0EHnhN3vbyujC7ciutuJKl3Luso1Bgtrl1fRqB+8L2IAuMJdM48LspkjssOfFloX9zU8xI8Rs+2VrpD4SCakoQWd42wfVCbor79u9wZvijONUGojWwUiz8dNDmjXE0ucKEvzr6wMoMZTb1npEcsR96wTYR4OtF/HybntKoOXzIjpmOrZ7TxK1qgF//L9mEEPpdOqLKg95URxWurG4VMqyyq7qJoMID/yxiIIksO6Bs8sy1/wtnnOuhacyE+DRANh6AKeTDkVmtXQ13//JdJtwbmRKQ6pq0oOH4bgbEBqa8zixMhs6Dqrl1ZAyytClI+LDpHOr3EWNDGe3ZHda3zhU71bA966pZkJPJqp4NEvBaT4pvSTIWQMBEVCjDzgwSD0ncTr6vOUhTGJInz5UwwD03gZwqrzDaSO/6Ov9sPPQo+emRq6mLo4pHpBpvv3Z+H8b+BKs4VsX1qqbOUR8J21pVX00D61H4DISmpKmKmDfgwU1T4JC6geMuGqlNwoZGZPYFpF3z+K584nkacppoT9HBzwWFd2bf5yUalVXov8FEnr/im1iZNr/JXufB0DWcBUuDO0mYMaWBojfD3DF0LvxeJR7NttQfxm7ARiaBlRMLWdeWbq8LQxKj4m/JCHD2KAi4YLD435JU2CqK6RGSsdKC8qNiRL4wluDdw3Srr+sDreKh7VDwv3xGCQZF1ZS/0lmR0CpF3mvE8Rdpv9GCPbEfsbghOgMcGyPhCNHcHT/fL7s62jkgxbSmVAReA8y+SJJ8LOxKSDlcgG8X8tB9S04q71Vo04h54c/weC0XWeESZqjkyO4f8wrUVazrwcmeduvVEOo9piZYUu0H4F29wtxCQp6iF1CgqizKQbrymxiKVTSVeRfYpRowo+xYr58D10nVR1bCHXlrf8WrhgF+lin34XlalahUlzJiuJ+smPXAuwNrFyDEp4ht2ug/SnX/46TgMXwdIhiurJBQis0DxnwgTq9ezl7TXfPq1uDACDETZMPcE56pMzkdI9TQH8mxqlglkqJU6zlKznSzSdhf2xP6dyK1JK242b5kyw2rMbvAnB8V+PBQSkvNBIBQmVP6VYuD9sblc2ewH+hT9dVDJszE5rZEmbEqFptWvl9Hq06II/5yOtV2s/akDkz5wn7aEMXAUzuyB/UA4XgFoTvd1m8ow07OzRFsdnLpCuN5HFUrSqIRsT/sMYkepVde3gaDpd5KIw50iaL3T09SnPVwFPmep5CKC2/XM/SSXVFwsL3Gf7m6ReYKvW2N3jLyziA3zF7r8fdDzDSbXWu8+Z/NUWgV6cTXLMtANw/rPdRYjXHHoQZoCNTCONE0IrdymEqooXOU7MAWQKlNL1cv5VbHu/dJ4OS5EMwM5gPwidntGhB3rX2Sn/MbPgcc6HKapi+gBkKb1AtIM8byt589MedvRdo30KYFV357s3LO5Y613uegmCcwzexxyOwogrPRn/ti0EAl76oeW9ZWrglkqU7Pw3yTxQouoe9luVK7suAaStIKTY8TSabRf6pvhavyWLjko8/x8cOPXB7mtXQaOiHDSwkdcqKW5990WTwmW94gx86TEnPzPemifDsjj9oyrMO9U/f9DLBrIJrw3A5TyZlvtIOSYhth6tuNeIrVAnVN7MvnkWfttp7ldftdDE1RiHGbOURpOapvuRiGub7w1Fnem+ANseNHKZZdjMhqze343HWoRUPWojexM1tkeRFitSM1DTXDeur4+BHOIO3DbvE47ckl1yZBNvnHUt5FlvxRh6VNLlUt/8yCT0F3eF9McAU4YpyxpPaBBHqGd2ho2f/1aWoThrFlaHMIdi9nL+c0R6NPwSl6/lkRXyE3kgH+/kFDouMZNoDKAbv4jVBYXeBN3+W47qP3KABcYc7gb8EIspnlO6bQuduXrib8MvwlDJ37HsStHVd15C7VjPHmeefYlFgcM/gHNOjzjwWd/F3HD4AXfdunQO6NnTQf8aWUb8I44R3YOYaLFsdYjTDaNhzcm15tn4msnbwpUsGSFW5IN6YQWoxACyE0713a5dopRPQb5PH1jWrD5vs7x8+WPqVIh5Y+BkFHUF/sI2gh8P9teLuEhUHAbgF69GUKnLVy6GSM+k38/mDq7atDQ/DVJ2qtqSiLHcvrZFnKj0dPXOgl/e+9IN9EJg14DnZQu+5et/ZvWPpexocQ/cwEY24Tqc+0QhPjfF9Y54TtId342YeD/Avu9QEBqTp5JuEEQzo9I+0lD0t92tewi9/+Wf9kOLr9QLPpUdW4L0wM+k+5TyFrhKrqWYsAkSeFYKaqQAEH0xkkuDEP/8gAJx4x77zTFy+4sP0NI5q8f4AFJBu8QAD5kPKFo0vKVqjTq6Rzy2r0BWWmcK6Ppc8Q2Y2i240rBjumQ/4Ii7XOUwGHUT1ObPf6i0kVPpzLZzA+xCcoHVL6S/IYNsxrbnezAF3Tcc7b0DshmqTLLErjA3qBa5wo1v6FkubiDfqjTdFyPnTFaq/N6zGWlIK31CeizT3dB5ZFJP9t0DjSypqCgX1+yFJj8/CZNYHnbAmPEb5OFosTbhK4rZ2sBdf1LFauDabxjB95mi46mf1lgBi12nBaTURmWxQ7c7eJK6evjDteoC+GiBAj8N8FHT5hzt2euEuw5S5hKnSjUCM4qvqJO5NeOha2FjsxpEVgN/VLECCZDNFidGi/RNsBan6rNBf9EtJAuzIFrhPtasIs/IHWATqA0EwEMPScwPxuy2CG3M/p+zD9gt0fI++LVKa4X7o9ZeNZQUYO0WiWLjciUMCPdSd6MLc+WZWaNMj8K6A7OHZhWS3Nbf3up1UCH9ZVVpRyN1Xl+T3m5YA2kSPLLPSR6g8OUuZBBX9aDkZhGkXhKRYiRiM9wjdFwWA4z+T0nspmLwpnEpzjGJ8OdwzUPebToQU8vkKTW4ns+F4w906BnZ8QF4+KRE92MRRgjo7wK1iQc1qSRgB/gMau+o8cwzixhsM+6i3gTB+78LPS/FOdacZ87KxCFplk8x17aVx9jpOicijWsH5/6OPIz0JMcL6G5wJ3CIv297S2LC39WE1hQ+2SG8Jp6u1N3ylLK+ob6zEl+pMGA3ehJQZdg4n+oEVLCYf003oemLOjJ/7x6acJIlw+4OjTDk2KMRTc/iOTP0f+6jmDsd7BBjaANNOY2QQ5el41OEkc72RQnpvJCh+JwH65cS9oTa/pGWvos6r/0ZlA2KOY0z8lan9zZn5KOCBSvImHb0k5eW9Mr+BrqZ7lA9ejivX0E7GLJwJVFAJkbYTSl9neyhneT64P5SPOaNU5jZ0RsIntj/OZPTdMrM60a9huHAekHdpWX/cX9L2+QP5xB5uMor2I/OMzY7CuvhjfN4CMQ0xQItC4gHXGxLd8CjHk/wBnCp1TSnHORtkN4oFJHfnE3umZIq/Q18cVFiD5NdxWFXzjIGz/Q/S/oMw54arFjJd7lKAKP07FUqCGAu775gnRph5Qvw6Sxu0ol4WyLHLJnFfp4pnT9imQg1NknYKmBFLKAxN9kdw/nlTfQfoP02xIZGzJYmeuCFTJpbsmvp/gLMOfB4YiuSPwnSvcYPilk1CRO9lgVQPdmL1aam+VPsmZtG2VQdqKhTRuMVEQusC8x9l3UjhbSGcCs3o+NiaCzxOQ0RUIWWx6KAfTbNVdW8d6LdUJNzV3/YRaAsioZpBsIba25jYyPWWsWiBpgFsvDJPTmyY8Io0HV+964qa2BSsjfOQjfyHbiTblrNtpFuD+MAXUOyn2LRP7K0pM8tMuPhT3fQN8NyM/E+Xs9x5cSTGbRzkLtjFbWU9LfynYGKd5zvoDtkDSBinirmwH8V12KuXDtQzMpP/Etfi6vJ9sIPCODZYJkm2vHT3QHzSslw1wcPjkM30OvLUQI8CTlxaevDgSpIyePCu8I2aThrojY2QhZi4Sw05yAFcbZ58likE2Owh+uOP5hok/hiRCR8o1PgC+zlmv0WNbMv+2wFV4RUMrpq/NDZ7JF3fDdM7DDiaOC+n58XNoM4Z2gS8v204ZTgcsZxRkjqPJ3mOANxoKqhS1S5vGL/zve+/we3SSqs8h42sfK6u0Rn+0fuPVc7tg5pnkCjI0F6LNREgoDfewu5/V45uOm4vLwHKCvcxdL8jKvkzRLCxm3mG0QvTsg/q2F9pkMFuJmtF3sWcWzgZfS5GHohTpMhVtu1mPu9q14K4yCQ4bjDNtHJjPnGbHN8qrrmKVjysihFnJEjkoCzIcbbWCZ8huEBug2VRLG6CakH4pRLDHz9SgScciQkJqMu7XjFcp4JF5HDw3MUdUelOT7YjHpvIkeds2KQFi78db/0eE0v13qdOD5CCKfTa5K++fSAxF4BXlGGGqs6hkV5i6fTxqpD2Es8zGgxoG6cZfZMy5r/cLeCAhT7ZmdDUS7vIPp8rZefVZwfhA2gRkQ333+SQ3hCAKHNuWm+gUjJ2oD5wQl2MVOch+AoI6ZwRmAqJdUw3c8hnOqBlGu2YX3eQYcSGDCLYhMY0XoZYf6Q8Uq1uiBF1YD5BU0BzdDU2U857MryCW0Rrj22fZbe3siZwfE2dXk8bKuILcxRqtMQ9fICFGZnedcoBennJF3pECAdXEdEmYMGrLo7PRe4PDbJq9BKsM4RZ4WUBD6B0yiR/dGkaKa3/juSZ4SM4NqsmV7rl61qWsxMVumAgg7yczhiMkFfQW9SO2AKE+4BF2m70Ceb+fGgGpykuqV5ku/HD5JlpCnJ54Umwa/oHL2/bUDwLqIFMbjE+tyxoiLBVQz5gKbBCK66obCJHkTz0qGius6P1vEqpQYdnh1vCiLPqXC6lHDUJoQ3uJMz0z81kdLFvZMY5NdMgZXjhmbUvU7dsU/oZGBV8ByiJTMVK6u/wrjBOWXfCiLuBI0soHwJOmMnVE2dwUHUF6+lxGUMm9sVtMyWxbCuX7flPhyJUMcbT3GcGYdJOD0CNGe1L2C+pP0WGlwCGKupIW72GnMaK4P0W/tr6EJ126apd/HkglWkjjOFEJjgp6HC8fm4nRPdjoZetVcXNj1K3G1kvBbtSgsw4y7L4878FYGO1An0uuVWB+CjTF7EvbXv0wc416iUvYzc6SFOZzy0lY2zc6ksSTSnfi8j2vHYEpNE8c9QQ8eHOLCN3EQut2drEUuPydj2mcKTlnb+8rFKvg2f/DEMW/P/GNDPzwxo/vwIuqvQva0B+Mm5WrvhcLV8O9FI3CjabMsHOH+2CNAAJZaWiijpSuoBmvstnfjaDJqnxa1b2CTyDFrkn+1U9wLXqhfyB2S6zeEjrF08aTikydhFZ/7iijMSEPhLGxHDhGU0q1WaiLk3iX6KnNZCwZgshqMqBnfmjgRiiVx68qqCOA9Y3F4kiPpJTJL7p+5m6lExN4q+kly5lqJXAxtnbbb3DU46Id/qhHdiLEz9IiYvrQ3xTHh4d6KDOBv9KOC5nqJWUg7WoRykKDexwnmRVuyoBnL9/shXxldE9WYsL5c1zw2CvBSpomzk4sP+YE88VYejKFPvI+pauY+OivAEuiGpgHxCLvoDlmELST8/FTmHbMrY7Eiokqv7/p2a1sKWrar2KHDz0pLD46ldBU8ihLl2OhblcZqwzl5YpsZWPSS/G2KnKiAKz2JfEcB6lmxzLbXSPTWxWm/P0Je1eaqTCbqv6rd26+rEyRQweu0vKgrABsIibJhiX30A9TAZ0qfFwU2wlwaKC08EyAHCll+ElpV2tOv7SBq3+GryeniE68WFpz0UVzOjwuhmA6UFABIJ3wCkvJd3p/NNtHpwdSENZc4szULrJquaVdOCrYQoo2md9vbqUZNcCZuyaBQ4aVrA2Iga1m2YpsoElVWEBjlIFlCTv4pL+qDkBYrNRr0bXqoeBijZP9Piip6R85daWcT5ysd/yjHFFS2n+oSNHEK183/ty5uE+VLowQp9WAS+isLDO06TszqY/QxOrE0iCkqCOIcdkgy4dNDSzpYWOg2IFikh8FV1jh/Y/mttwE884uv+rmn9Dlxv+xQ+MMiln4N9g1OgiNbt9/zeJcZZRorytb6neQm496Gj12tUKng+CysgnjygF0vJ+KkvvL2cHQRkXjqTeXtw4N/JRhGvTiBtYqVeVN0N53cphpmQt3zIr888qU368yibSvbCSy2oGblTaXG/Rq5tcGAxYwSSMQcbmjINVRYn8ZN3YdBO4dVpOf9jeAA=",1,1),G0=ta("data:image/webp;base64,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",1,2),tc=new Ot(new Li(320,320),new jt({map:V0,color:6647898,roughness:.98}));tc.rotation.x=-Math.PI/2;tc.receiveShadow=!0;Jt.add(tc);var W0=[new R(0,0,54),new R(-7,0,36),new R(6,0,18),new R(-8,0,-2),new R(4,0,-22),new R(0,0,-40)],Ie=new ds(W0),X0=new jt({map:k0,color:8617328,roughness:.95}),Eh=new jt({color:10919565,roughness:.96,flatShading:!0}),q0=new jt({color:7107446,roughness:.98,flatShading:!0});(function(){let n=[],s=[],r=[];for(let c=0;c<=120;c++){let l=c/120,h=Ie.getPoint(l),u=Ie.getTangent(l),d=new R(-u.z,0,u.x).normalize();if(n.push(h.x+d.x*1.5,.03,h.z+d.z*1.5,h.x-d.x*1.5,.03,h.z-d.z*1.5),s.push(0,l*30,1,l*30),c<120){let p=c*2;r.push(p,p+1,p+2,p+1,p+3,p+2)}}let a=new ve;a.setAttribute("position",new Yt(n,3)),a.setAttribute("uv",new Yt(s,2)),a.setIndex(r),a.computeVertexNormals();let o=new Ot(a,X0);o.receiveShadow=!0,Jt.add(o)})();(function(){for(let t=0;t<54;t++){let e=.018+t*.0178,n=Ie.getPoint(Math.min(.985,e)),s=Ie.getTangent(Math.min(.985,e)),r=new R(-s.z,0,s.x).normalize(),a=new Ot(new Sn(.55+Math.random()*.16,.6+Math.random()*.14,.055,7),t%3?Eh:q0);a.position.set(n.x+r.x*(Math.random()-.5)*.3,.065,n.z+r.z*(Math.random()-.5)*.3),a.scale.set(1.25+Math.random()*.45,1,.72+Math.random()*.28),a.rotation.y=Math.atan2(s.x,s.z)+(Math.random()-.5)*.35,a.receiveShadow=a.castShadow=!0,Jt.add(a)}for(let t=0;t<9;t++){let e=new Ot(new Pe(2.5-t*.08,.12,.72),Eh);e.position.set(0,3.15+t*.18,-43.2-t*1.05),e.rotation.x=-.18,e.receiveShadow=e.castShadow=!0,Jt.add(e)}})();var ws=new Ot(new rn(15,5,9),new jt({color:6911063,flatShading:!0}));ws.position.set(0,2.2,-52);ws.receiveShadow=ws.castShadow=!0;Jt.add(ws);var ec=new ke,Ih=new Ot(new Pe(2.2,.7,2.2),new jt({map:$o})),nc=new Ot(new Sn(.28,.55,3.4,4),new jt({map:$o,flatShading:!0}));nc.position.y=2;Ih.castShadow=nc.castShadow=!0;ec.add(Ih,nc);ec.position.set(0,4.9,-52);Jt.add(ec);var Y0=new jt({map:G0,color:9206370}),J0=new jt({color:5402698,flatShading:!0}),Z0=new jt({color:4218683,flatShading:!0}),ea=[],Yr=[];function Lh(i,t,e){Yr.push({x:i,z:t,s:e,r:Math.random()*6.28}),ea.push({x:i,z:t,r:.48*e})}function K0(i,t){let e=1e9;for(let n=0;n<=40;n++){let s=Ie.getPoint(n/40);e=Math.min(e,Math.hypot(s.x-i,s.z-t))}return e}var bh=7,an=()=>(bh=bh*16807%2147483647)/2147483647,wh=0;for(;wh<90;){let i=(an()-.5)*220,t=(an()-.5)*220;K0(i,t)<5||Math.hypot(i,t+52)<18||(Lh(i,t,.8+an()*.9),wh++)}for(let i=0;i<34;i++){let t=.04+i*.027,e=Ie.getPoint(Math.min(.96,t)),n=Ie.getTangent(Math.min(.96,t)),s=new R(-n.z,0,n.x).normalize(),r=i%2?1:-1,a=6.2+an()*4.2,o=e.x+s.x*a*r,c=e.z+s.z*a*r;Math.hypot(o,c+52)>19&&Lh(o,c,.95+an()*.55)}function j0(){let i=new Sn(.22,.34,4.4,6);i.translate(0,2.2,0);let t=[0,1,2].map(r=>{let a=new rn(2.1-r*.5,2.6,6);return a.translate(0,4.4+r*1.7,0),a}),e=new Fn(i,Y0,Yr.length),n=t.map((r,a)=>new Fn(r,a%2?Z0:J0,Yr.length)),s=new fe;Yr.forEach((r,a)=>{s.position.set(r.x,0,r.z),s.rotation.set(0,r.r,0),s.scale.setScalar(r.s),s.updateMatrix(),e.setMatrixAt(a,s.matrix),n.forEach((o,c)=>{s.rotation.set(0,r.r+c*.5,0),s.updateMatrix(),o.setMatrixAt(a,s.matrix)})}),[e,...n].forEach(r=>{r.castShadow=!0,Jt.add(r)})}j0();var Dh=new jt({map:$o,color:12103840,roughness:.92}),Uh=new jt({color:7369588,roughness:.95,flatShading:!0}),Ko=new jt({color:2962488,roughness:1,flatShading:!0}),Q0=new jt({color:1525610,emissive:928067,emissiveIntensity:.34,roughness:.85,flatShading:!0}),jo=[],Ms=[];function $0(i,t,e,n=1){let s=new Ot(new Lr(.095*n,0),Q0);return s.position.set(i,t,e),s.scale.set(1.15+Math.random()*.35,.42+Math.random()*.18,.85+Math.random()*.3),s.rotation.set(Math.random()*.35,Math.random()*6.28,Math.random()*.35),s.castShadow=!0,Jt.add(s),s}function Nh(i,t,e){let n=new fs;n.moveTo(-i/2,0),n.lineTo(-i/2,t*.72),n.quadraticCurveTo(-i*.42,t*.98,0,t),n.quadraticCurveTo(i*.42,t*.98,i/2,t*.72),n.lineTo(i/2,0),n.lineTo(-i/2,0);let s=new Dr(n,{depth:e,bevelEnabled:!0,bevelSize:.025,bevelThickness:.018,bevelSegments:1});return s.translate(0,0,-e/2),s}function Fh(i,t,e,n=null){let s=e?1.62:.85+Math.random()*.42,r=e?.92:.7+Math.random()*.16,a=.3,o=(n??0)+(Math.random()-.5)*.18,c=(Math.random()-.5)*.035;if(ea.push({x:i,z:t,r:e?1.05:.78}),!e){let g=new fe;return g.position.set(i,0,t),g.rotation.y=o,Ms.push({x:i,z:t,h:s,w:r,d:a,yaw:o,lean:c}),g}let l=new ke,h=new Ot(new Pe(r+.22,.16,a+.18),Uh);h.position.y=.08,h.castShadow=h.receiveShadow=!0,l.add(h);let u=new Ot(Nh(r,s,a),Dh);u.position.y=.16,u.castShadow=u.receiveShadow=!0,l.add(u);let d=new Ot(new Pe(.018,s*.54,.012),Ko),p=d.clone();d.position.set(-r*.32,.16+s*.38,a/2+.012),p.position.set(r*.32,.16+s*.38,a/2+.012),l.add(d,p);for(let g=0;g<3;g++){let y=new Ot(new Pe(r*(e?.5:.38),.018,.012),Ko);y.position.set(0,.16+s*(.52-g*.11),a/2+.012),l.add(y)}if(l.position.set(i,0,t),l.rotation.y=o,l.rotation.z=c,Jt.add(l),e)for(let g=0;g<7;g++)$0(i+(Math.random()-.5)*.72,.055,t+.34+Math.random()*.24,.88);return l}function tx(){let i=Nh(1,1,.3),t=new Pe(1,.16,1),e=new Pe(1,1,1),n=new Fn(i,Dh,Ms.length),s=new Fn(t,Uh,Ms.length),r=new Fn(e,Ko,Ms.length*5),a=new fe,o=new sn,c=0;Ms.forEach((l,h)=>{a.rotation.set(0,l.yaw,l.lean),o.copy(a.quaternion),a.position.set(l.x,.16,l.z),a.scale.set(l.w,l.h,1),a.updateMatrix(),n.setMatrixAt(h,a.matrix),a.position.set(l.x,.08,l.z),a.scale.set(l.w+.22,1,l.d+.18),a.updateMatrix(),s.setMatrixAt(h,a.matrix),[{x:-l.w*.32,y:.16+l.h*.38,z:l.d/2+.012,sx:.018,sy:l.h*.54,sz:.012},{x:l.w*.32,y:.16+l.h*.38,z:l.d/2+.012,sx:.018,sy:l.h*.54,sz:.012},{x:0,y:.16+l.h*.52,z:l.d/2+.012,sx:l.w*.38,sy:.018,sz:.012},{x:0,y:.16+l.h*.41,z:l.d/2+.012,sx:l.w*.38,sy:.018,sz:.012},{x:0,y:.16+l.h*.3,z:l.d/2+.012,sx:l.w*.38,sy:.018,sz:.012}].forEach(d=>{let p=new R(d.x,d.y,d.z).applyQuaternion(o);a.position.set(l.x+p.x,p.y,l.z+p.z),a.rotation.set(0,l.yaw,l.lean),a.scale.set(d.sx,d.sy,d.sz),a.updateMatrix(),r.setMatrixAt(c++,a.matrix)})}),[n,s,r].forEach(l=>{l.castShadow=l.receiveShadow=!0,Jt.add(l)})}var Th=0;for(;jo.length<14&&Th<90;){Th++;let i=.1+.78*an(),t=Ie.getPoint(i),e=Ie.getTangent(i),n=new R(-e.z,0,e.x).normalize(),s=an()>.5?1:-1,r=3.8+an()*(4.6+i*4.8)+(an()<i*.35?4+an()*3.8:0),a=t.x+n.x*r*s,o=t.z+n.z*r*s;if(Math.hypot(a,o+52)<20)continue;let c=Math.atan2(t.x-a,t.z-o);jo.push(Fh(a,o,!1,c))}tx();var Yo=(()=>{let i=Ie.getPoint(.45),t=Ie.getTangent(.45);return{x:i.x-t.z*2.1,z:i.z+t.x*2.1,yaw:Math.atan2(t.z,-t.x)}})(),Me=Fh(Yo.x,Yo.z,!0,Yo.yaw),Oh=new vn({color:16111759,transparent:!0,opacity:0,depthWrite:!1,blending:_i}),ic=new Ot(new Li(.68,1.04),Oh);ic.position.set(0,.98,.166);Me.add(ic);var sc=new On(3042216,0,8,1.6);sc.position.set(Me.position.x,1.3,Me.position.z);Jt.add(sc);var bs=new On(15778165,0,7,1.7);bs.position.set(Me.position.x,1.05,Me.position.z+.18);Jt.add(bs);var Bh=new vn({color:15713658,transparent:!0,opacity:0,depthWrite:!1,side:Ze,blending:_i}),Vi=new Ot(new Ur(.55,1.65,36),Bh);Vi.rotation.x=-Math.PI/2;Vi.position.set(Me.position.x,.055,Me.position.z+.26);Jt.add(Vi);var zn=new ke;zn.position.set(Me.position.x,.15,Me.position.z);zn.rotation.y=Me.rotation.y;Jt.add(zn);var ex=new Di(.018,8,8),zh=new vn({color:16773288,transparent:!0,opacity:0,depthWrite:!1,blending:_i});for(let i=0;i<22;i++){let t=new Ot(ex,zh),e=i%2?1:-1;t.userData={side:e,x:e*(.55+i%5*.16),z:-.15+i%4*.16,h:.68+i%5*.18,s:.75+i%4*.14,speed:.45+i%7*.07,seed:i*1.91},zn.add(t)}var Hh=[],Ah=new jt({color:2696479,roughness:.8,flatShading:!0}),nx=new jt({color:14793846,emissive:14793846,emissiveIntensity:0,transparent:!0,opacity:.94});[.08,.18,.29,.4,.52,.64,.76,.88].forEach((i,t)=>{let e=Ie.getPoint(i),n=Ie.getTangent(i),s=t%2?1:-1,r=e.x+-n.z*(1.85+Math.random()*.55)*s,a=e.z+n.x*(1.85+Math.random()*.55)*s,o=new Ot(new Sn(.22,.28,.12,6),Ah);o.position.set(r,.08,a),o.castShadow=!0,Jt.add(o);let c=new Ot(new Pe(.34,.5,.34),nx.clone());c.position.set(r,.45,a),c.rotation.y=Math.PI/4,Jt.add(c);let l=new Ot(new rn(.34,.18,4),Ah);l.position.set(r,.8,a),l.rotation.y=Math.PI/4,l.castShadow=!0,Jt.add(l);let h=new On(15778165,0,10,1.85);h.position.set(r,.62,a),Jt.add(h),Hh.push({head:c,light:h})});var re=new ke,Ts=new Ot(new rn(.34,.95,7),new jt({color:4082268,flatShading:!0}));Ts.position.y=.48;Ts.castShadow=!0;var na=new Ot(new rn(.2,.38,7),new jt({color:3489871,flatShading:!0}));na.position.y=1.06;na.castShadow=!0;var ia=new Ot(new xs(.2,.022,5,10),new jt({color:13214302,flatShading:!0}));ia.rotation.x=Math.PI/2;ia.position.y=.88;re.add(Ts,na,ia);re.position.set(0,0,50);Jt.add(re);var Xe=new ke,ix=new jt({color:2831167,emissive:725016,emissiveIntensity:.12,flatShading:!0}),sx=new jt({color:2107443,emissive:527378,emissiveIntensity:.1,flatShading:!0}),Vh=new jt({color:13938797,emissive:4862482,emissiveIntensity:.16,flatShading:!0}),rc=new Ot(new rn(.52,1.62,7),ix);rc.position.y=.82;rc.castShadow=!0;var ac=new Ot(new rn(.32,.56,7),sx);ac.position.y=1.74;ac.castShadow=!0;var sa=new Ot(new xs(.32,.026,5,14),Vh);sa.rotation.x=Math.PI/2;sa.position.y=1.42;sa.castShadow=!0;var ra=new Ot(new Sn(.025,.035,1.7,6),Vh);ra.position.set(-.5,.86,.02);ra.rotation.z=-.12;ra.castShadow=!0;var oc=new Ot(new Di(.09,10,10),new jt({color:12048383,emissive:8304639,emissiveIntensity:1.2}));oc.position.set(-.6,1.68,.02);var kh=new Ot(new Pe(.18,.24,.18),new jt({color:15977346,emissive:15977346,emissiveIntensity:1.35}));kh.position.set(.52,.8,0);var Gh=new On(15778165,2.2,9,1.6);Gh.position.set(.52,.88,0);var Wh=new On(8304639,.9,5,1.8);Wh.position.copy(oc.position);Xe.add(rc,ac,sa,ra,oc,kh,Gh,Wh);(()=>{let i=Ie.getPoint(.13),t=Ie.getTangent(.13);Xe.position.set(i.x-t.z*3.1,0,i.z+t.x*3.1),Xe.rotation.y=Math.atan2(re.position.x-Xe.position.x,re.position.z-Xe.position.z)})();Jt.add(Xe);ea.push({x:Xe.position.x,z:Xe.position.z,r:1.05});var Xh=new Fr(13097198,3095085,.78);Jt.add(Xh);var qh=new zr(5992330,0);Jt.add(qh);var $e=new Br(16773852,1);$e.castShadow=!0;$e.shadow.mapSize.set(1024,1024);$e.shadow.camera.left=-40;$e.shadow.camera.right=40;$e.shadow.camera.top=40;$e.shadow.camera.bottom=-40;Jt.add($e);Jt.add($e.target);Jt.fog=new br(14210246,.007);var cc=new Ot(new Di(4.5,16,16),new vn({color:14476530,fog:!1,transparent:!0}));cc.position.set(55,72,-95);Jt.add(cc);var Yh=[];for(let i=0;i<420;i++){let t=Math.random()*6.283,e=Math.random()*.8+.12,n=185;Yh.push(Math.cos(t)*Math.cos(e)*n,Math.sin(e)*n,Math.sin(t)*Math.cos(e)*n)}var Jh=new ve;Jh.setAttribute("position",new Yt(Yh,3));var Zh=new Ar(Jh,new hs({color:14016240,size:.82,fog:!1,transparent:!0,opacity:0}));Jt.add(Zh);var qr={daySky:new Ft(14209728),nightSky:new Ft(2374500),dayFog:new Ft(14209728),nightFog:new Ft(4414850)},Bi="auto";qt("cycle").addEventListener("click",()=>{Bi=Bi==="auto"?"day":Bi==="day"?"night":"auto",qt("cycle").textContent={auto:"\u5B9E\u65F6",day:"\u767D\u663C",night:"\u591C"}[Bi]});function Kh(){if(Bi==="day")return 1;if(Bi==="night")return 0;let i=new Date,t=i.getHours()+i.getMinutes()/60;return Math.max(0,Math.min(1,Math.sin((t-6)/12*Math.PI)*1.4))}function jh(i){let t=qr.nightSky.clone().lerp(qr.daySky,i),e=qr.nightFog.clone().lerp(qr.dayFog,i);tn.setClearColor(t),Jt.fog.color.copy(e),Jt.fog.density=.0035+(1-i)*.0013,Xh.intensity=.76+i*.18,qh.intensity=Math.max(0,1-i*1.3)*.78,$e.intensity=.95+i*.32,$e.color.setHex(i>.5?16773852:12044783);let n=i*Math.PI*.7+.3;$e.position.set(Math.cos(n)*30,12+i*26,-20),Zh.material.opacity=Math.max(0,1-i*1.4),cc.material.opacity=Math.max(0,1-i*1.4),sc.intensity=Math.max(0,1-i*1.5)*.95;let s=Math.max(0,1-i*1.6);Hh.forEach(({head:r,light:a})=>{a.intensity=s*4.6,r.material.emissiveIntensity=s*1.6})}var Bn={};function Qh(i){let t=new Set;return i.code&&i.code.startsWith("Key")&&t.add(i.code.slice(3).toLowerCase()),i.key&&t.add(i.key.toLowerCase()),(i.code==="ArrowLeft"||i.key==="ArrowLeft")&&t.add("q"),(i.code==="ArrowRight"||i.key==="ArrowRight")&&t.add("turnRight"),(i.code==="KeyE"||i.key==="e"||i.key==="E")&&t.add("turnRight"),[...t]}addEventListener("keydown",i=>{let t=Qh(i);t.some(n=>["w","a","s","d","q","e","f","turnRight"].includes(n))&&i.preventDefault(),t.forEach(n=>Bn[n]=!0),t[0]==="f"&&(Hi?eu():Kr&&nu())});addEventListener("keyup",i=>Qh(i).forEach(t=>Bn[t]=!1));var zi=0,Qr=.32,$r={x:0,y:0},Jr=qt("stick"),$h=qt("knob"),As=null,Qo=null,_s=null,Zr=null;addEventListener("pointerdown",i=>{i.target.closest("#tomb,#david,#cycle,#find,.acts,#hint")||(Ph&&i.clientX<innerWidth*.45&&As===null?(As=i.pointerId,Qo={x:i.clientX,y:i.clientY},Jr.style.display="block",Jr.style.left=i.clientX-55+"px",Jr.style.top=i.clientY-55+"px"):_s===null&&(_s=i.pointerId,Zr={x:i.clientX,y:i.clientY}))});addEventListener("pointermove",i=>{if(i.pointerId===As){let t=i.clientX-Qo.x,e=i.clientY-Qo.y,n=Math.hypot(t,e),s=45;n>s&&(t*=s/n,e*=s/n),$h.style.transform=`translate(calc(-50% + ${t}px), calc(-50% + ${e}px))`,$r={x:t/s,y:e/s}}else i.pointerId===_s&&(zi-=(i.clientX-Zr.x)*.005,Qr=Math.max(.08,Math.min(.9,Qr+(i.clientY-Zr.y)*.003)),Zr={x:i.clientX,y:i.clientY})});function tu(i){i.pointerId===As&&(As=null,$r={x:0,y:0},Jr.style.display="none",$h.style.transform="translate(-50%,-50%)"),i.pointerId===_s&&(_s=null)}addEventListener("pointerup",tu);addEventListener("pointercancel",tu);var Kr=!1,Hi=!1,ei=!1,ni=!1,_h=!1,jr=["\u665A\u4E0A\u597D\u3002\u591C\u91CC\u6765\u7684\u4EBA\uFF0C\u811A\u6B65\u603B\u662F\u8F7B\u4E00\u4E9B\u3002","\u8FD9\u56ED\u5B50\u91CC\u7684\u6BCF\u4E00\u5757\u7891\u6211\u90FD\u8BFB\u8FC7\u3002\u4F60\u82E5\u846C\u4E86\u4EC0\u4E48\u5728\u8FD9\u91CC\uFF0C\u6211\u4F1A\u66FF\u4F60\u5B88\u7740\u3002","\u77F3\u5B50\u6211\u4ECE\u4E0D\u53BB\u52A8\u3002\u90A3\u662F\u8DEF\u8FC7\u7684\u4EBA\u653E\u4E0B\u7684\uFF0C\u4E0D\u5C5E\u4E8E\u6211\u3002","\u4E18\u9876\u90A3\u5757\u7891\u8FD8\u7A7A\u7740\u2014\u2014\u7B49\u56ED\u5B50\u771F\u6B63\u5F00\u95E8\u90A3\u5929\uFF0C\u7B2C\u4E00\u6BB5\u5BF9\u8BDD\u4F1A\u846C\u5728\u90A3\u91CC\u3002","\u53BB\u8D70\u8D70\u5427\u3002\u6709\u4E9B\u7891\uFF0C\u8981\u6162\u4E0B\u6765\u624D\u770B\u5F97\u89C1\u3002"],Ss=0;function eu(){ni=!0,Ss=0,qt("dline").textContent=jr[0],qt("dnext").textContent="\u542C\u4ED6\u8BF4\u4E0B\u53BB",qt("david").classList.add("show")}qt("dnext").addEventListener("click",()=>{if(Ss>=jr.length-1){ni=!1,qt("david").classList.remove("show");return}Ss+=1,qt("dline").textContent=jr[Ss],Ss>=jr.length-1&&(qt("dnext").textContent="\u53BB\u8D70\u8D70")});qt("dbye").addEventListener("click",()=>{ni=!1,qt("david").classList.remove("show")});function lc(i){let t=qt("toast");t.textContent=i,t.style.opacity=1,clearTimeout(t._t),t._t=setTimeout(()=>t.style.opacity=0,2200)}function nu(){ei=!0,qt("tomb").classList.add("show")}qt("hint").addEventListener("click",()=>{Hi?eu():nu()});qt("leave").addEventListener("click",()=>{ei=!1,qt("tomb").classList.remove("show")});qt("dig").addEventListener("click",()=>{let i=qt("fullText");i.classList.toggle("show"),qt("dig").textContent=i.classList.contains("show")?"\u8986\u4E0A\u571F":"\u5F80\u4E0B\u6316"});qt("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("https://bluefairy.example/tomb/demo")}catch{}lc("\u7891\u5740\u5DF2\u590D\u5236")});qt("find").addEventListener("click",()=>{let i=Me.position.clone(),t=new R(Math.sin(Me.rotation.y),0,Math.cos(Me.rotation.y)).multiplyScalar(5.6);re.position.set(i.x-t.x,0,i.z-t.z),zi=Math.atan2(i.x-re.position.x,i.z-re.position.z),Qr=.18,lc("\u5DF2\u5E26\u4F60\u5230\u8FD9\u5757\u7891\u524D")});var Rh=qt("pile"),rx=["#0D2A42","#12324E","#183A57","#1B4364"],ax=0;function iu(i){let t=ax++,e=document.createElementNS("http://www.w3.org/2000/svg","path"),n=Math.floor(t/7),r=110+(t%7-3)*22+n%2*11,a=33-n*8,o=8+t%3,c=4.8+t%2*.8,l=[];for(let h=0;h<8;h++){let u=h/8*Math.PI*2,d=.84+(t+h*5)%7/30;l.push([r+Math.cos(u)*o*d,a+Math.sin(u)*c*d])}e.setAttribute("d","M"+l.map(h=>h.map(u=>u.toFixed(1)).join(",")).join("L")+"Z"),e.setAttribute("fill",rx[t%4]),e.setAttribute("stroke","rgba(200,196,186,.12)"),e.setAttribute("stroke-width",".6"),i?(e.style.transform="translateY(-22px)",e.style.transition="transform .45s cubic-bezier(.4,1.6,.6,1)",Rh.appendChild(e),requestAnimationFrame(()=>requestAnimationFrame(()=>e.style.transform="translateY(0)"))):Rh.appendChild(e)}for(let i=0;i<7;i++)iu(!1);qt("drop").addEventListener("click",()=>{if(_h){lc("\u4F60\u5DF2\u5728\u7891\u524D\u653E\u8FC7\u4E00\u9897\u77F3\u5B50");return}_h=!0,iu(!0)});var Jo=new Hr,Zo=0,Ch=new Vr,ox=new R(0,-1,0);function cx(i,t){Ch.set(new R(i,16,t),ox);let e=Ch.intersectObject(ws,!1)[0];return e?e.point.y:0}function lx(i){i.x=Math.max(-150,Math.min(150,i.x)),i.z=Math.max(-150,Math.min(150,i.z));for(let t=0;t<3;t++)ea.forEach(e=>{let n=i.x-e.x,s=i.z-e.z,r=Math.hypot(n,s),a=e.r+.34;if(r>0&&r<a){let o=(a-r)/r;i.x+=n*o,i.z+=s*o}});i.y=cx(i.x,i.z),re.position.copy(i)}function su(i,t,e){let n=t*t*(3-2*t);if(e){let s=e.position,r=new R(Math.sin(e.rotation.y),0,Math.cos(e.rotation.y));bs.position.set(s.x+r.x*.28,1.05,s.z+r.z*.28),Vi.position.set(s.x+r.x*.26,.055,s.z+r.z*.26),Vi.rotation.set(-Math.PI/2,0,0),zn.position.set(s.x,.15,s.z),zn.rotation.y=e.rotation.y}bs.intensity=n*2.25,bs.distance=5+n*3,Oh.opacity=e===Me?n*.28:0,ic.scale.setScalar(1+Math.sin(i*2.1)*.025*n),Bh.opacity=n*.32,Vi.scale.setScalar(1+Math.sin(i*1.7)*.035*n),zn.visible=n>.02,zh.opacity=n*.72,zn.children.forEach(s=>{let r=s.userData,a=Math.sin(i*r.speed+r.seed)*.13;s.position.set(r.x+a,r.h+Math.sin(i*1.7+r.seed)*.14,r.z+Math.cos(i*.8+r.seed)*.12),s.scale.setScalar(r.s*(.65+n*.55)*(1+Math.sin(i*4.2+r.seed)*.18))})}function ru(){requestAnimationFrame(ru);let i=Math.min(Jo.getDelta(),.05),t=(Bn.d?1:0)-(Bn.a?1:0)+$r.x,e=(Bn.s?1:0)-(Bn.w?1:0)+$r.y,n=Math.hypot(t,e),s=Bn.q?1:0,r=Bn.turnRight?1:0;if(zi+=(s-r)*i*1.65,n>0&&!ei&&!ni){t/=Math.max(1,n),e/=Math.max(1,n);let y=new R(t,0,e).applyAxisAngle(new R(0,1,0),zi),m=re.position.clone().addScaledVector(y,i*4.8);lx(m);let S=Math.atan2(y.x,y.z)-re.rotation.y;for(;S>Math.PI;)S-=2*Math.PI;for(;S<-Math.PI;)S+=2*Math.PI;re.rotation.y+=S*Math.min(1,i*10),Zo+=i*9,re.children.forEach(x=>x.position.x=Math.sin(Zo)*.02),Ts.scale.y=1+Math.sin(Zo*2)*.03}else{let y=Math.sin(Jo.elapsedTime*1.55);Ts.scale.y=1+y*.018,na.position.y=1.06+y*.012,ia.position.y=.88+y*.008}let a=6.2,o=1.85+Qr*3.2,c=re.position.x+Math.sin(zi)*a,l=re.position.z+Math.cos(zi)*a;Es.position.lerp(new R(c,re.position.y+o,l),Math.min(1,i*4.2)),Es.lookAt(re.position.x,re.position.y+1.08,re.position.z);let h=re.position.distanceTo(Me.position);Kr=h<3.2;let u=Me,d=h;jo.forEach(y=>{let m=re.position.distanceTo(y.position);m<d&&(d=m,u=y)});let p=ei?1:Math.max(0,Math.min(1,(6.2-d)/3.4)),g=re.position.distanceTo(Xe.position);Hi=g<3.6,g<8&&(Xe.rotation.y=Math.atan2(re.position.x-Xe.position.x,re.position.z-Xe.position.z)),qt("hint").textContent=Hi?"\u4E0E\u5B88\u5893\u4EBA\u8BF4\u8BDD":"\u8BFB\u7891",qt("hint").classList.toggle("show",(Kr||Hi)&&!ei&&!ni),!Kr&&ei&&(ei=!1,qt("tomb").classList.remove("show")),!Hi&&ni&&(ni=!1,qt("david").classList.remove("show")),jh(Kh()),su(Jo.elapsedTime,p,u),tn.render(Jt,Es)}jh(Kh());su(0,0,Me);ru();addEventListener("resize",()=>{Es.aspect=innerWidth/innerHeight,Es.updateProjectionMatrix(),tn.setSize(innerWidth,innerHeight)});setTimeout(()=>qt("help").style.opacity=0,12e3);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
