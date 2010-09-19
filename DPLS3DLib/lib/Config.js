var DPLS3D =  DPLS3D || {};

DPLS3D.Config = function() {
    return{
        cameraRadius: 10,

        boxSize:1000,
        axisLineColor : 0x414141,
        axisLineWidth : 2,
        dotColor:0x414141,
        dotOpacity:0.5,
        dotColorHover:0xaaaaff,
        dotOpacityHover:1,

        setCameraRadius:function(r) {
            this.cameraRadius = r;
        }
    }
}();