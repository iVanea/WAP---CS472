/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    "use strict";
    var init = function () {
        document.getElementById("startBtn").onclick = start;
        document.getElementById("startBtn2").onclick = another;
    }

    var bicyclePrototype, mountainBikePrototype;
    var createBicyclePrototype = function () {
        return {
            speed: 0,
            applyBrake: function (decrement) {
                this.speed -= decrement;
            },
            speedUp: function (increment) {
                this.speed += increment;
            }

        };
    };

    var createMountainBikePrototype = function (proto) {
        var obj = Object.create(proto);

        obj.gear = 1;
        obj.productivity = 2.0;
        obj.name = "unknown";
        obj.setGear = function (newValue) {
            this.gear = newValue;
        };
        obj.setName = function(name){
            this.name = name;
        }
        obj.setProductivity = function(p){
            this.productivity = p;
        }
        return obj;
    };

    var start = function () {
        bicyclePrototype = createBicyclePrototype();
        mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);
        var bicycle = Object.create(bicyclePrototype);
        bicycle.speed = 15;
        console.log("simple bike initial speed : "+ bicycle.speed+"km/h");
        bicycle.speedUp(10);
        console.log("after speed up with ten km/h: "+bicycle.speed+"km/h");

        var mountainBike = Object.create(mountainBikePrototype);
        mountainBike.setName("Shimano Off-Road");
        console.log("Our model: "+mountainBike.name);
        mountainBike.setGear(4);
        console.log(mountainBike.gear);
        mountainBike.speed = 5;
        console.log(mountainBike.speed);
    };




//Exercise 7 use NEW consturctor.
    function Bike(speed) {
        this.speed = speed;
    }
    Bike.prototype.applyBrake = function (decrement) {
        return this.speed -= decrement;
    };
    Bike.prototype.speedUp = function (increment) {
        return this.speed += increment;
    };
    
    function MountainBike(gear) {
        Bike.call(this);
        this.speed = 10;
        this.gear = gear;
        //add a object of bike, add prototype for MountainBike only.
    }
    MountainBike.prototype.setGear = function(gear){
        this.gear = gear;
    };
    
    
    var another = function(){
        var bike = new Bike(15); 
        console.log(bike.speed);
        bike.applyBrake(5);
        console.log("After Brake 5: "+bike.speed);
        bike.speedUp(7);
        console.log("After speed up 7: "+bike.speed);
        
        var mBike = new MountainBike(3);
        console.log("Mountain bike speed: "+mBike.speed + "  in gear:" + mBike.gear);
        mBike.setGear(5);
        console.log("new Gear: "+mBike.gear);
          
    };
    
    
    
    window.onload = init;

})();