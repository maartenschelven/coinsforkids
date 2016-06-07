/**
 * Created by maartenschelven on 07/06/16.
 */
/**
 * Created by maartenschelven on 07/06/16.
 */


function Balk() {

    this.createBalk = function(scene) {

        //BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)

        var x = 0;
        var y = 2;

        var texture = new THREE.TextureLoader().load("images/wood.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 1, 1 );


        var material = new THREE.MeshBasicMaterial( {map: texture, transparent: true, opacity: 0.9} );

        var frontGeometry = new THREE.BoxGeometry(12, 1, 0.25 );
        var frontBalk = new THREE.Mesh( frontGeometry, material );
        frontBalk.position.x = x;
        frontBalk.position.y = y + 1;

        frontBalk.rotation.x = 0.2;
        frontBalk.rotation.y = -0.2;
        frontBalk.rotation.z = -0.2;

        var materialNotTransparent = new THREE.MeshBasicMaterial( {map: texture} );

        var backGeometry = new THREE.BoxGeometry(12, 1.8, 0.25 );
        var backBalk = new THREE.Mesh( backGeometry, materialNotTransparent );
        backBalk.position.x = x + 0.27;
        backBalk.position.y = y + 1.6;
        backBalk.position.z = -1;

        backBalk.rotation.x = 0.2;
        backBalk.rotation.y = -0.2;
        backBalk.rotation.z = -0.2;

        var bottomGeometry = new THREE.BoxGeometry(12, 0.5, 1.5 );
        var bottomBalk = new THREE.Mesh( bottomGeometry, materialNotTransparent );
        bottomBalk.position.x = x;
        bottomBalk.position.y = y + 0.8;
        bottomBalk.position.z = -0.5;

        bottomBalk.rotation.x = 0.2;
        bottomBalk.rotation.y = -0.2;
        bottomBalk.rotation.z = -0.2;

        scene.add(frontBalk);
        scene.add(backBalk);
        scene.add(bottomBalk);
    }

}