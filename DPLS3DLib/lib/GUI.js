var DPLS3D =  DPLS3D || {};


DPLS3D.GUI = function() {
    var DOT_LIST_CLASS = 'li.dotNameLi';
    return{
        registerDotListListeners:function() {

            var self = this;

            $$(DOT_LIST_CLASS).each(function(node) {
                $(node).observe('mouseover', function(e) {
                    var element = Event.element(e);
                    var id = element.id;
                    self.highlightObject(id);
                });

                $(node).observe('mouseout', function(e) {
                    var element = Event.element(e);
                    var id = element.id;
                    self.unHighlightObject(id);
                });
            })
        },

        highlightObject:function(id) {

            var object = DPLS3D.Scene.getObjectFromRegistry(id);

            object.material[0] = new THREE.ParticleCircleMaterial(DPLS3D.Config.dotColorHover, DPLS3D.Config.dotOpacityHover);

            DPLS3D.Scene.removeObject(id);
            DPLS3D.Scene.addObject(object);
        },

        unHighlightObject:function(id) {

            var object = DPLS3D.Scene.getObjectFromRegistry(id);

            object.material[0] = new THREE.ParticleCircleMaterial(DPLS3D.Config.dotColor, DPLS3D.Config.dotOpacity);

            DPLS3D.Scene.removeObject(id);

            DPLS3D.Scene.addObject(object);
        }
    }
}();