/**
 * Created by maartenschelven on 07/06/16.
 */
/**
 * Created by maartenschelven on 07/06/16.
 */


function Varken() {

    this.createVarken = function(scene) {
			// materials (colors)
			var green = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var red = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
			var blue = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
			var orange = new THREE.MeshBasicMaterial( { color: 0xff8000 } );
			var pink = new THREE.MeshBasicMaterial( { color: 0xff0080 } );
			var black = new THREE.MeshBasicMaterial( { color: 0x000000 } );		
		
			// body parts
			var romp 		= new THREE.Mesh(new THREE.SphereGeometry( 4.5, 16, 16 ),pink);
			var kop 		= new THREE.Mesh(new THREE.SphereGeometry( 2, 16, 16 ),green);
			var poot 		= new THREE.Mesh(new THREE.CylinderGeometry( .5, .5, 2, 64 ),blue);
			var hole	 = new THREE.Mesh(new THREE.BoxGeometry( 3, 1, 0.8 ), black);
			kop.position.set(4,1,0);
			hole.position.set(0,4,0);
			
			scene.add(romp);
			scene.add(kop);
			scene.add(hole);

			function createPoot(){
				return new THREE.Mesh(new THREE.CylinderGeometry( .5, .5, 2, 64 ),blue);
			}

			var poten = [createPoot(), createPoot(), createPoot(), createPoot()];
			
			for(var i in poten){
				var poot = poten[i];
				scene.add(poot);
			}
			
			poten[0].position.set(-1,-2,4);
			poten[1].position.set(-1,-2,-4);
			poten[2].position.set(1,-2,4);
    }

}