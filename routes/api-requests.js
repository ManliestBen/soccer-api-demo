const router = require('express').Router();
const apiCtrl = require('../controllers/api-requests')

router.get('/americas/team/:id', apiCtrl.americasTeamInfo);
router.get('/eu/team/:id', apiCtrl.euTeamInfo);
router.get('/americas/player/:id', apiCtrl.americasPlayerInfo);
router.get('/eu/player/:id', apiCtrl.euPlayerInfo);

// Routes beneath this line will have access to req.user
router.use(require('../config/auth'));
router.get('/americas/player/add/:id', apiCtrl.americasAddPlayer);
router.get('/americas/dreamteam', apiCtrl.getDreamTeam);

module.exports = router;