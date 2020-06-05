const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '1013960',
    key: '39b000d159c2b2cf6812',
    secret: 'fce459b95b42645a6b41',
    cluster: 'us2',
    encrypted: true
  });



router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('my-channel', 'my-event', {
        'message': 'hello world'
      });
});

module.exports = router;