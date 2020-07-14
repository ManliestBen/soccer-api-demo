const router = require('express').Router();
const apiCtrl = require('../controllers/api-requests')

router.get('/americas/team/:id', apiCtrl.americasTeamInfo);
router.get('/eu/team/:id', apiCtrl.euTeamInfo);
router.get('/americas/player/:id', apiCtrl.americasPlayerInfo);
router.get('/eu/player/:id', apiCtrl.euPlayerInfo);



module.exports = router;