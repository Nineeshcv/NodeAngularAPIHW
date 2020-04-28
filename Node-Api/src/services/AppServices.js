var si = require("systeminformation");



/**
 * This class is used to Get System and HW informations
 */

 class AppServices{

    constructor(){}

    /**
     * To get the CPU details
     * 
     */

    getCPUDetails(){
        return si.cpu();
    }
    
    getBiosDetails(){
        return si.bios();
    }
   
    getBaseBoardDetails(){
        return si.baseboard();
    }

    getChassisDetails(){
        return si.chassis();
    }

    getSystemDetails(){
        return si.system();
    }
    getMemoryDetails(){
        return si.mem();
    }

    getBatteryDetails(){
       return si.battery();
    }

    getOsInfo(){
        return si.osInfo();
    }
}
module.exports= AppServices;