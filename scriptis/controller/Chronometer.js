class Chronometer{

    constructor(){

        this._hours = document.querySelector("#Hours");
        this._minutes = document.querySelector("#Minutes");
        this._seconds = document.querySelector("#Seconds");
        this._start = document.querySelector("#btn-start");
        this._reset = document.querySelector("#btn-reset");
        this._stop = document.querySelector("#btn-stop");
        this.addSeconds = 0;
        this.addMinutes = 0;
        this.addHoures = 0;
        this._interval;
        this.start();
        this.stop();
        this.reset();
        
    }
    
    chrono(){
        
         
        this._interval = setInterval(()=>{ /*recebe dois argumentos(primeiro a função que será executada a cada segundo,
                         o segundo se refere ao tempo que demorará para cada execução da função.)*/

            this.addSeconds++;
            this._seconds.innerHTML = this.addSeconds;

            if(this.addSeconds < 10){this._seconds.innerHTML = `0${this.addSeconds}`;}

            if(this.addSeconds == 60){
                this.addSeconds = "00";
                this._seconds.innerHTML = this.addSeconds;

                if(this.addSeconds == "00"){
            
                    this.addSeconds = 0; //para começar a contar
                    this.addMinutes++;
                    this._minutes.innerHTML = `${this.addMinutes}:`;
                }
         
                if(this.addMinutes < 10){this._minutes.innerHTML = `0${this.addMinutes}:`}
            
                if(this.addMinutes == 60){
                    this.addMinutes = "00";
                    this._minutes.innerHTML = `${this.addMinutes}:`;

                    if(this.addMinutes == "00"){
                
                        this.addMinutes = 0;
                        this.addHoures++;
                        this._hours.innerHTML = `${this.addHoures}:`;
                    }
                    if(this.addHoures < 10){this._hours.innerHTML = `0${this.addHoures}:`}

                }
            }   
        
        },1000);
        
    }
    
start(){
    this._start.addEventListener('click', event=>{
        
        this.chrono();
        
});
    }

stop(){
    
    this._stop.addEventListener('click', event=>{

        clearInterval(this._interval);

        });
    }

reset(){

    this._reset.addEventListener('click', event=>{

        clearInterval(this._interval);
        this._seconds.innerHTML = "00";
        this._minutes.innerHTML = "00:";
        this._hours.innerHTML = "00:";
        this.addSeconds = 0;
        this.addMinutes = 0;
        this.addHoures = 0;
        
        });
}
}