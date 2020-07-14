const router = require('express').Router();
const apiCtrl = require('../controllers/api-requests')

router.get('/americas/:id', apiCtrl.americasTeamInfo);
router.get('/eu/:id', apiCtrl.euTeamInfo);


module.exports = router;