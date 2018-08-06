class Airplane  {


    //constructor doing validaion if conditon is good then insert in object otherwise no
    constructor(name,Occupancy,Speed) {
    
        if(name!=''){
            this.name=name;

        }
        else{
            console.log('n/a');
        }
        if(Occupancy<180 && Occupancy>0){
            this.Occupancy=Occupancy;
        }
        else
        {
            console.log('n/a');
        }
        if(Speed<900 && Speed>0){
            this.Speed=Speed;
        }
        else{
            console.log('n/a');
        }
    
    }
    //print method used to printing values
    status(){

        console.log('Airplane : '+this.name +' with ' +this.Occupancy+ ' occupancy, is moving at ' +this.Speed+ ' km/h ');
    }
    //adding speed by increasing the object's value
    increaseSpeed(value){
        this.Speed=this.Speed+value;
    }
     //reducing speed by increasing the object's value
    decreaseSpeed(value){
        this.Speed=this.Speed-value;
    }


}

let a=new Airplane('Boineg',170,10);
a.increaseSpeed(200);
a.status();
let b=new Airplane('Airbuse',160,300);
b.increaseSpeed(200);
b.status();
let c=new Airplane('GE',130,100);
c.increaseSpeed(200);
c.status();