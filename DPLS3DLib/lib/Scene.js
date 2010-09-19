var DPLS3D =  DPLS3D || {};


DPLS3D.Scene = function() {
    return{
        camera:'',
        scene:null,
        renderer:null,
        stats:null,
        objectRegistry : {},

        mainLoop:function() {
            var centerX = 100;
            var radius = DPLS3D.Config.cameraRadius;
            //this.camera.updateMatrix();
            //var x =

            var positionX = (centerX + radius * Math.sin(2 * Math.PI * (mouseX + 400) / radius));
            var positionY = (centerX + radius * Math.cos(Math.PI * mouseY / SCREEN_HEIGHT));
            var positionZ = (centerX + radius * Math.cos(2 * Math.PI * (mouseX + 400) / radius));

            this.camera.position.x = positionX;
            this.camera.position.y = positionY;
            this.camera.position.z = positionZ;

            this.renderer.render(this.scene, this.camera);
            this.stats.update();

        },

        addObject:function(object) {
            var objectId = object.id || new Date().getTime();

            this.objectRegistry[objectId] = object;

            this.scene.addObject(object);
        },

        getObjectFromRegistry :function(id) {
            return this.objectRegistry[id] || null;
        },

        removeObject:function(id) {
            var object = this.getObjectFromRegistry(id);
            this.scene.removeObject(object);
        },

        init:function() {

            DPLS3D.GUI.registerDotListListeners();

        }
    }
}();