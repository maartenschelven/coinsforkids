/**
 * Created by maartenschelven on 07/06/16.
 */


function Coin(name, value) {
    this.coinCylinder;
    this.name = name;
    this.value = value;
    this.bounce = 0;

    this.getCoinCylinder = function() {
        if (this.coinCylinder == null) {
            this.createCoinCylinder();
        }
        return this.coinCylinder;
    }

    this.imagePath = function() {
        return "images/" + this.name + " cent.png";
    }

    this.createCoinCylinder = function() {
        var coinTexture = new THREE.TextureLoader().load(this.imagePath());
        coinTexture.wrapS = THREE.RepeatWrapping;
        coinTexture.wrapT = THREE.RepeatWrapping;
        coinTexture.repeat.set( 1, 1 );
        var coinOneGeometry = new THREE.CylinderGeometry(1,1,0.2,32,1,false);
        var coinOneMaterial = new THREE.MeshBasicMaterial( {map: coinTexture} );
        this.coinCylinder = new THREE.Mesh( coinOneGeometry, coinOneMaterial );
        this.coinCylinder.position.z = 0; // Depth
        this.coinCylinder.position.y = 0; // Vertical
        this.coinCylinder.position.x = 0; // Horizontal
        this.coinCylinder.rotation.x = 1.5;
        this.coinCylinder.rotation.y = 1.6;
    }

    this.startDropAnimation = function() {
        if (this.bounce < 10) {
            this.bounce += 0.1;
            this.coinCylinder.position.y = Math.abs(Math.sin(this.bounce)) / this.bounce;
        }
    }
}