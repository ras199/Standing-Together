const mongoose = require('mongoose');

const contactScanSchema = new mongoose.Schema({
	metadata: {
		//timestamp for when the event was first saved
		creationDate: {
			type:Date,
			required: true,
		},
		//timestamp for when the scan details were last saved
		lastUpdate: {
			type:Date,
			required: true,
		},
		//_id of the activist (user) who created the event
		creatorId: {
			type: String,
			required: true,
		}
	},
	scanUrl: {
		type: String,
		required: true,
	},
	activists: {
		type: [{
			activistId: {type: String},
			pos: {type: Number},
			new: {type: Boolean},
			comments: {type: String}
		}],
		required: true,
		default: []
	},
	complete: {type: Boolean, default:false},
	//if null - means that the activist never showed up on anyone's to-type-list. Otherwise, contains the date of the last ping from a typers client which displayed this activist.
	//as long as the las ping wasn't too long ago, the activist won't show up on any other to-type lists.
	lastPing: {type: Date},
	//_id of the activist who was last tasked with typing down this entry
	typerId: {type: String},
	eventId: {type: String, required: true},
});

module.exports = mongoose.model('contactScan',contactScanSchema);
