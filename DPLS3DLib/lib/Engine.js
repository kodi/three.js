var DPLS3D =  DPLS3D || {};



DPLS3D.Engine = function() {
    return{
        drawXAxis:function() {
            var geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 0, 0)));
            geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(DPLS3D.Config.boxSize, 0, 0)));
            //construct line
            var lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 1, DPLS3D.Config.axisLineWidth));
            DPLS3D.Scene.scene.add(lineX);

            this.drawXYGridLines();
        },
        drawYAxis:function() {
            var geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 0, 0)));
            geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, DPLS3D.Config.boxSize, 0)));
            //construct line
            var lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 1, DPLS3D.Config.axisLineWidth));
            DPLS3D.Scene.scene.add(lineX);
            this.drawYZGridLines();
        },
        drawZAxis:function() {
            var geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 0, 0)));
            geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 0, DPLS3D.Config.boxSize)));
            //construct line
            var lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 1, DPLS3D.Config.axisLineWidth));
            DPLS3D.Scene.scene.add(lineX);
            this.drawZXGridLines();
        },
        drawXYGridLines:function(){
            for(var i = 100; i < 1100; i+= 100){
                var geometry = new THREE.Geometry();
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(i, 0, 0)));
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(i, 1000, 0)));
                //construct line
                var lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 0.1, 1));
                DPLS3D.Scene.scene.add(lineX);
            }
            for(i = 100; i < 1100; i+= 100){
                geometry = new THREE.Geometry();
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, i, 0)));
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(1000, i, 0)));
                //construct line
                lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 0.1, 1));
                DPLS3D.Scene.scene.add(lineX);
            }
        },
        drawYZGridLines:function(){
            for(var i = 100; i < 1100; i+= 100){
                var geometry = new THREE.Geometry();
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, i, 0)));
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, i, 1000)));
                //construct line
                var lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 0.1, 1));
                DPLS3D.Scene.scene.add(lineX);
            }
            for(i = 100; i < 1100; i+= 100){
                geometry = new THREE.Geometry();
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 0, i)));
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 1000, i)));
                //construct line
                lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 0.1, 1));
                DPLS3D.Scene.scene.add(lineX);
            }
        },
        drawZXGridLines:function(){
            for(var i = 100; i < 1100; i+= 100){
                var geometry = new THREE.Geometry();
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(i, 0, 0)));
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(i, 0, 1000)));
                //construct line
                var lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 0.1, 1));
                DPLS3D.Scene.scene.add(lineX);
            }
            for(i = 100; i < 1100; i+= 100){
                geometry = new THREE.Geometry();
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(0, 0, i)));
                geometry.vertices.push(new THREE.Vertex(new THREE.Vector3(1000, 0, i)));
                //construct line
                lineX = new THREE.Line(geometry, new THREE.LineColorMaterial(DPLS3D.Config.axisLineColor, 0.1, 1));
                DPLS3D.Scene.scene.add(lineX);
            }
        }
    }
}();
