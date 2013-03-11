/*  (c) Copyright IBM Corp. 2010 - Licensed under the Apache License, Version 2.0 */

if(!dojo._hasResource["extlib.codemirror.mode.xmlpure.xmlpure"]){dojo._hasResource["extlib.codemirror.mode.xmlpure.xmlpure"]=true;dojo.provide("extlib.codemirror.mode.xmlpure.xmlpure");dojo.require("extlib.codemirror.lib.codemirror");CodeMirror.defineMode("xmlpure",function(_1,_2){var _3="error";var _4="comment";var _5="comment";var _6="tag";var _7="attribute";var _8="string";var _9="atom";var _a="string";var _b="!instruction";var _c="!cdata";var _d="!comment";var _e="!text";var _f={"!cdata":true,"!comment":true,"!text":true,"!instruction":true};var _10=_1.indentUnit;function _11(_12,_13,_14){_13.tokenize=_14;return _14(_12,_13);};function _15(_16,_17,_18){return function(_19,_1a){while(!_19.eol()){if(_19.match(_17)){_1b(_1a);_1a.tokenize=_18;break;}_19.next();}return _16;};};function _1c(_1d,_1e){var _1f=_f.hasOwnProperty(_1e)||(_1d.context&&_1d.context.doIndent);var _20={tagName:_1e,prev:_1d.context,indent:_1d.context?_1d.context.indent+_10:0,lineNumber:_1d.lineNumber,indented:_1d.indented,noIndent:_1f};_1d.context=_20;};function _1b(_21){if(_21.context){var _22=_21.context;_21.context=_22.prev;return _22;}return null;};function _23(_24){return _24.sol()||_24.string.charAt(_24.start-1)==" "||_24.string.charAt(_24.start-1)=="\t";};function _25(_26,_27){if(_26.eat("<")){if(_26.eat("?")){_1c(_27,_b);_27.tokenize=_28;return _4;}else{if(_26.match("!--")){_1c(_27,_d);return _11(_26,_27,_15(_5,"-->",_25));}else{if(_26.eatSpace()||_26.eol()){_26.skipToEnd();return _3;}else{_27.tokenize=_29;return _6;}}}}_26.skipToEnd();return _3;};function _29(_2a,_2b){var _2c=_2a.pos;if(_2a.match(/^[a-zA-Z_:][-a-zA-Z0-9_:.]*/)){var _2d=_2a.string.substring(_2c,_2a.pos);_1c(_2b,_2d);_2b.tokenize=_2e;return _6;}else{if(_2a.match(/^\/[a-zA-Z_:][-a-zA-Z0-9_:.]*( )*>/)){var _2f=_2a.string.substring(_2c+1,_2a.pos-1).trim();var _30=_1b(_2b);_2b.tokenize=_2b.context==null?_25:_31;if(_30==null||_2f!=_30.tagName){return _3;}return _6;}else{_2b.tokenize=_2b.context==null?_25:_31;_2a.eatWhile(/[^>]/);_2a.eat(">");return _3;}}_2a.skipToEnd();return null;};function _2e(_32,_33){if(_32.match(/^\/>/)){_1b(_33);_33.tokenize=_33.context==null?_25:_31;return _6;}else{if(_32.eat(/^>/)){_33.tokenize=_31;return _6;}else{if(_23(_32)&&_32.match(/^[a-zA-Z_:][-a-zA-Z0-9_:.]*( )*=/)){_33.tokenize=_34;return _7;}}}_33.tokenize=_33.context==null?_25:_25;_32.eatWhile(/[^>]/);_32.eat(">");return _3;};function _34(_35,_36){var _37=_35.next();if(_37!="\""&&_37!="'"){_35.skipToEnd();_36.tokenize=_2e;return _3;}_36.tokParams.quote=_37;_36.tokenize=_38;return _8;};function _38(_39,_3a){var ch="";while(!_39.eol()){ch=_39.next();if(ch==_3a.tokParams.quote){_3a.tokenize=_2e;return _8;}else{if(ch=="<"){_39.skipToEnd();_3a.tokenize=_2e;return _3;}else{if(ch=="&"){ch=_39.next();if(ch==";"){_39.skipToEnd();_3a.tokenize=_2e;return _3;}while(!_39.eol()&&ch!=";"){if(ch=="<"){_39.skipToEnd();_3a.tokenize=_2e;return _3;}ch=_39.next();}if(_39.eol()&&ch!=";"){_39.skipToEnd();_3a.tokenize=_2e;return _3;}}}}}return _8;};function _31(_3b,_3c){if(_3b.eat("<")){if(_3b.match("?")){_1c(_3c,_b);_3c.tokenize=_28;return _4;}else{if(_3b.match("!--")){_1c(_3c,_d);return _11(_3b,_3c,_15(_5,"-->",_3c.context==null?_25:_31));}else{if(_3b.match("![CDATA[")){_1c(_3c,_c);return _11(_3b,_3c,_15(_9,"]]>",_3c.context==null?_25:_31));}else{if(_3b.eatSpace()||_3b.eol()){_3b.skipToEnd();return _3;}else{_3c.tokenize=_29;return _6;}}}}}else{if(_3b.eat("&")){_3b.eatWhile(/[^;]/);_3b.eat(";");return _a;}else{_1c(_3c,_e);_3c.tokenize=_3d;return null;}}_3c.tokenize=_3c.context==null?_25:_31;_3b.skipToEnd();return null;};function _3d(_3e,_3f){_3e.eatWhile(/[^<]/);if(!_3e.eol()){_1b(_3f);_3f.tokenize=_31;}return _9;};function _28(_40,_41){if(_40.match("xml",true,true)){if(_41.lineNumber>1||_40.pos>5){_41.tokenize=_25;_40.skipToEnd();return _3;}else{_41.tokenize=_42;return _4;}}if(_23(_40)||_40.match("?>")){_41.tokenize=_25;_40.skipToEnd();return _3;}_41.tokenize=_43;return _4;};function _43(_44,_45){_44.eatWhile(/[^?]/);if(_44.eat("?")){if(_44.eat(">")){_1b(_45);_45.tokenize=_45.context==null?_25:_31;}}return _4;};function _42(_46,_47){_47.tokenize=_48;if(_23(_46)&&_46.match(/^version( )*=( )*"([a-zA-Z0-9_.:]|\-)+"/)){return _4;}_46.skipToEnd();return _3;};function _48(_49,_4a){_4a.tokenize=_4b;if(_23(_49)&&_49.match(/^encoding( )*=( )*"[A-Za-z]([A-Za-z0-9._]|\-)*"/)){return _4;}return null;};function _4b(_4c,_4d){_4d.tokenize=_4e;if(_23(_4c)&&_4c.match(/^standalone( )*=( )*"(yes|no)"/)){return _4;}return null;};function _4e(_4f,_50){_50.tokenize=_25;if(_4f.match("?>")&&_4f.eol()){_1b(_50);return _4;}_4f.skipToEnd();return _3;};return {electricChars:"/[",startState:function(){return {tokenize:_25,tokParams:{},lineNumber:0,lineError:false,context:null,indented:0};},token:function(_51,_52){if(_51.sol()){_52.lineNumber++;_52.lineError=false;_52.indented=_51.indentation();}if(_51.eatSpace()){return null;}var _53=_52.tokenize(_51,_52);_52.lineError=(_52.lineError||_53=="error");return _53;},blankLine:function(_54){_54.lineNumber++;_54.lineError=false;},indent:function(_55,_56){if(_55.context){if(_55.context.noIndent==true){return;}if(_56.match(/^<\/.*/)){return _55.context.indent;}if(_56.match(/^<!\[CDATA\[/)){return 0;}return _55.context.indent+_10;}return 0;},compareStates:function(a,b){if(a.indented!=b.indented){return false;}for(var ca=a.context,cb=b.context;;ca=ca.prev,cb=cb.prev){if(!ca||!cb){return ca==cb;}if(ca.tagName!=cb.tagName){return false;}}}};});CodeMirror.defineMIME("application/xml","purexml");CodeMirror.defineMIME("text/xml","purexml");}