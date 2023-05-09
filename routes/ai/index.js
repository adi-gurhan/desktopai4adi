
const express = require('express');
const openai = require('../middlewares/openai');
const {
	initMiddleware,
	creditCheck,
	contentFilterCheck,
	sendResponse,
	creditPayment,
	saveToHistory,
} = require('./middleware');

let app = express.Router()

app.use('/', initMiddleware, creditCheck);

app.use('/', require('./summarize'));
app.use('/', require('./code/interpret'));
app.use('/', require('./writing/intro'));
app.use('/', require('./jobad'));
app.use('/', require('./dockingstation'));
app.use('/', require('./Kronos'));
app.use('/', require('./Oracle'));
app.use('/', require('./GlobalProtectVPN'));
app.use('/', require('./printer'));
app.use('/', require('./jabber'));
app.use('/', require('./Intune'));
app.use('/', require('./o365'));
app.use('/', require('./FileSharing'));
app.use('/', require('./softwwareinstalls'));
app.use('/', require('./ADAL'));
app.use('/', require('./Tier2'));
app.use('/', require('./Tier3'));
app.use('/', require('./Message'));
app.use('/', require('./syncing'));
app.use('/', require('./calabrio'));




app.use('/', contentFilterCheck);
app.use('/', creditPayment);
app.use('/', saveToHistory);

app.use('/', sendResponse);

module.exports = app