import AppServices  from "../services/AppServices"

var appServices = new AppServices();
/**
 * This is Controller for Properties Handler
 */
class AppController{
    constructor(){
        
    }

    

    /**
     * This method is used to get all properties
     * @param {*} req 
     * @param {*} res 
     */
    getCpuDetails(req,res){
        var promise = appServices.getCPUDetails(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    getBiosDetails(req,res){
        var promise = appServices.getBiosDetails(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    getBaseBoardDetails(req,res){
        var promise = appServices.getBaseBoardDetails(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    getChassisDetails(req,res){
        var promise = appServices.getChassisDetails(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    getSystemDetails(req,res){
        var promise = appServices.getSystemDetails(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    getMemoryDetails(req,res){
        var promise = appServices.getMemoryDetails(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    getBatteryDetails(req,res){
        var promise = appServices.getBatteryDetails(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    getOsInfo(req,res){
        var promise = appServices.getOsInfo(); 
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }
    
}
module.exports=AppController;