/**
 * Created by maartenschelven on 07/06/16.
 */


function Coin(placeInRow, name, type, value, position) {
    this.coinCylinder;
    this.placeInRow = placeInRow
    this.name = name;
    this.type = type
    this.value = value;
    this.position = position;
    this.startPostion = 0;
    this.numberOfBounces = 0;
    this.correctionHeight = position.x * -0.285;


    this.getCoinCylinder = function() {
        if (this.coinCylinder == null) {
            this.createCoinCylinder();
        }
        return this.coinCylinder;
    }

    this.imagePath = function() {
        return "images/" + this.name + " " +this.type + ".png";
    }

    this.createCoinCylinder = function() {
        var coinTexture = new THREE.TextureLoader().load(this.imagePath());
        coinTexture.wrapS = THREE.RepeatWrapping;
        coinTexture.wrapT = THREE.RepeatWrapping;
        coinTexture.repeat.set( 1, 1 );
        var coinOneGeometry = new THREE.CylinderGeometry(0.6,0.6,0.1,32,1,false);
        var coinOneMaterial = new THREE.MeshBasicMaterial( {map: coinTexture} );
        this.coinCylinder = new THREE.Mesh( coinOneGeometry, coinOneMaterial );

        this.coinCylinder.position.x = this.position.x // Horizontal
        this.coinCylinder.position.y = this.position.y // Vertical
        this.coinCylinder.position.z = -0.4; // Depth

        this.coinCylinder.rotation.x = 1.6;
        this.coinCylinder.rotation.y = 1.6;

    }

    this.startDropSelectAnimation = function() {

        var done = false;
        if (this.numberOfBounces == 3) {
            done = true;
        } else {
            // if y is 0 three times (three times bounce is done
            if (this.numberOfBounces <= 3) {
                this.startPostion += 0.1;
                this.coinCylinder.position.y = ((Math.abs(Math.sin(this.startPostion * 0.5)) / this.startPostion) * 6.15) + this.correctionHeight;
                if (this.coinCylinder.position.y < this.correctionHeight + 0.01) {
                    this.numberOfBounces++
                }
            }

            if (this.numberOfBounces == 1) {
                this.coinCylinder.rotation.y = this.coinCylinder.rotation.y - 0.1;
                this.coinCylinder.position.x = this.coinCylinder.position.x + 0.01;
                this.correctionHeight = this.correctionHeight - 0.00019;
            }
            if (this.numberOfBounces > 1) {
                this.coinCylinder.rotation.y = this.coinCylinder.rotation.y - 0.1;
                this.coinCylinder.position.x = this.coinCylinder.position.x + 0.03;
                this.correctionHeight = this.correctionHeight - 0.006;

            }
        }

        return done;
    }

    this.rollThroughBalk = function() {

        if (this.coinCylinder.position.x < 7) {
            this.coinCylinder.rotation.y = this.coinCylinder.rotation.y - 0.4;
            this.coinCylinder.position.x = this.coinCylinder.position.x + 0.1;
            this.coinCylinder.position.y = this.coinCylinder.position.y - 0.020;
            return false;
        } else {
            return true;
        }
    }

    this.startDropToPiggyBank = function () {
        if (this.coinCylinder.position.y > -7) {
            this.coinCylinder.rotation.y = this.coinCylinder.rotation.y - 0.2;
            this.coinCylinder.rotation.x = this.coinCylinder.rotation.x - 0.04;
            this.coinCylinder.rotation.z = this.coinCylinder.rotation.z - 0.02;

            this.coinCylinder.position.y = this.coinCylinder.position.y - 0.05;
            return false;
        } else {
            return true;
        }
    }

}