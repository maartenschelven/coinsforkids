/**
 * Created by maartenschelven on 07/06/16.
 */
/**
 * Created by maartenschelven on 07/06/16.
 */


function Varken() {

    this.createVarken = function (scene) {

        var varken = new THREE.Object3D();//create an empty container


        // materials (colors)
        var green = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var red = new THREE.MeshBasicMaterial({color: 0xff0000});
        var blue = new THREE.MeshBasicMaterial({color: 0x0000ff});
        var orange = new THREE.MeshBasicMaterial({color: 0xff8000});
        var pink = new THREE.MeshBasicMaterial({color: 0xff0080});
        var white = new THREE.MeshBasicMaterial({color: 0xffffff});

        var pinkTexture = new THREE.TextureLoader().load("images/pinkPattern.jpeg");
        var pinkPattern = new THREE.MeshBasicMaterial({map: pinkTexture});

        var black = new THREE.MeshBasicMaterial({color: 0x000000});
        var blackTransparent = new THREE.MeshBasicMaterial({color: 0x000000,transparent: true, opacity: 0.8});

        // body parts
        var romp = new THREE.Mesh(new THREE.SphereGeometry(2.25, 16, 16), pinkPattern);
        var kop = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1,32), pink);
        var hole = new THREE.Mesh(new THREE.BoxGeometry(1, 4.5, 2.5, 0.8), blackTransparent);
        var noseHoleLeft = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, 1,32), orange);
        var noseHoleRight = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, 1,32), orange);
        var eyeLeft = new THREE.Mesh(new THREE.CylinderGeometry(.15, .15, 1,32), white);
        var eyeRight = new THREE.Mesh(new THREE.CylinderGeometry(.15, .15, 1,32), white);
        var pupilLeft = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, 1,32), black);
        var pupilRight = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, 1,32), black);


        kop.rotation.z = 2;
        kop.position.set(2, .5, 0);

        varken.add(romp);
        varken.add(kop);
        varken.add(hole);
        varken.add(eyeLeft);
        varken.add(eyeRight);
        varken.add(noseHoleLeft);
        varken.add(noseHoleRight);
        varken.add(pupilLeft);
        varken.add(pupilRight);

        noseHoleLeft.rotation.z = 2;
        noseHoleLeft.position.set(2.1, .3,-.2);
        noseHoleRight.rotation.z = 2;
        noseHoleRight.position.set(2.1 , .3,.2);
        eyeLeft.rotation.z = 2;
        eyeLeft.position.set(2.1, 1,-.4);
        eyeRight.rotation.z = 2;
        eyeRight.position.set(2.1 , 1,.4);
        pupilLeft.rotation.z = 2;
        pupilLeft.position.set(2.2, 1,-.4);
        pupilRight.rotation.z = 2;
        pupilRight.position.set(2.2 , 1,.4);

        function createPoot() {
            return new THREE.Mesh(new THREE.CylinderGeometry(.25, .25, 1, 32), pink);
        }

        var poten = [createPoot(), createPoot(), createPoot(), createPoot()];

        for (var i in poten) {
            var poot = poten[i];
            varken.add(poot);
        }

        poten[0].position.set(0.8, -2,1.2); // Rechts voor // (x,y,z)
        poten[1].position.set(-1, -2, 1.2); // Rechts achter
        poten[2].position.set(0.8, -2, -1); // Links voor
        poten[3].position.set(-1, -2, -1);    // Rechts achter


        varken.position.z = -0.3;
        varken.position.x = 7;
        varken.position.y = -5;
        varken.rotation.y = -2;

        scene.add(varken);

        return { "varken": varken,
            "pupilLeft": pupilLeft, "pupilRight": pupilRight};
    }

}