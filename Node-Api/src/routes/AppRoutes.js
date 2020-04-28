import express from "express";
import AppController from "../controller/AppController"

const router = express.Router();
var appController = new AppController();



router.get("/cpu",appController.getCpuDetails);
router.get("/bios",appController.getBiosDetails);
router.get("/baseboard",appController.getBaseBoardDetails);
router.get("/chassis",appController.getChassisDetails);
router.get("/system",appController.getSystemDetails);
router.get("/memory",appController.getMemoryDetails);
router.get("/battery",appController.getBatteryDetails);
router.get("/os",appController.getOsInfo);


module.exports = router;