const activistFetcher = require('../../services/activistsFetcher');
const activistUpdater = require('../../services/activistUpdater');
const Authentication = require('../../services/authentication');
const excelExport = require('../../services/excelExport');

module.exports = (app) => {
	app.post('/api/selectActivists', (req, res) => {
		Authentication.hasRole(req, "isOrganizer").then(isUser=>{
			if(!isUser)
				return res.json({"error":"missing token"});
			return activistFetcher.queryActivists(req.body.query, req.body.sortBy, req.body.page, (result)=>{return res.json(result)})
		})
	});
	app.post('/api/queryToXLSX', (req, res) => {
		Authentication.hasRole(req, "isOrganizer").then(isUser=>{
			if(!isUser)
				return res.json({"error":"missing token"});
			res.setHeader('Content-Type', 'text/csv');
			res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'download-' + Date.now() + '.csv\"');
			activistFetcher.downloadActivistsByQuery(req.body.query, (result) => {
				return res.json({"csv":excelExport.getCSV(result.activists, ["firstName", "lastName", "city", "phone", "email",  "isCaller", "creationDate", "circle", "isMember", "isPaying", "isNewsletter"])});
			});
		})
	});
	app.get('/api/activists/:id', (req, res) => {
		Authentication.hasRole(req, "isOrganizer").then(isUser=>{
			if(!isUser)
				return res.json({"error":"missing token"});
			activistFetcher.getActivistsByIds([req.params.id]).then((activists)=>{
				return res.json(activists[0]);
			});
		})
	});
	app.post('/api/activists', (req, res) => {
		Authentication.hasRole(req, "isOrganizer").then(isUser=>{
			if(!isUser)
				return res.json({"error":"missing token"});
			activistUpdater.updateActivists(req.body.activists).then(() => {
				return res.json(true)
			});
		})
	});
	app.post('/api/activists/uploadTyped', (req, res) => {
		Authentication.hasRole(req, "isTyper").then(isUser=> {
			if (!isUser)
				return res.json({"error": "missing token"});
			activistUpdater.uploadTypedActivists(req.body.activists, req.body.scanId, req.body.markedDone).then((result)=>{
				return res.json(result);
			});
		});
	});
};

