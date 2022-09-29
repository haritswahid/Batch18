import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.JhsCtrl.findAll)
// router.get('/:id',indexCtrl.JhsCtrl.findOne)
router.post('/',indexCtrl.JhsCtrl.create)
// router.put('/:id',indexCtrl.JhsCtrl.update)
// router.delete('/:id',indexCtrl.JhsCtrl.deleted)
// router.get ('/sql/:id',indexCtrl.JhsCtrl.querySQL)
export default router