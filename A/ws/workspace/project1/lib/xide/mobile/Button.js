define([
    "dojo/_base/declare",
    "dojox/mobile/Button",
    '../_ButtonMixin'
], function(declare, Button,_ButtonMixin){

    return declare("xide.mobile.Button", [Button,_ButtonMixin], {
        defaultImage:'nada'
        /*,
        _setDefaultImage:function(value){},
        _getDefaultImage:function(){ return this.defaultImage ;}
        */
    });
});
