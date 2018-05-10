const local_app = function () {}

const sgMail = require('@sendgrid/mail');

local_app.prototype.init = function (app) {
	sgMail.setApiKey('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');

	app.get('/submit_feedback', (req, res) => {
		const new_feedback = req.query
		const msg = {
			to: new_feedback.receiver,
			from: new_feedback.email,
			subject: 'Wiadomość ze strony internetowej od <' + new_feedback.email + '>.',
			text: new_feedback.message,
			html: '<p></p>',
		};
		sgMail.send(msg);
		enduro.api.flat.upsert('global/feedback', { feedback: [new_feedback] })
			.then(() => {
				res.send();
			})
	})
}

module.exports = new local_app()
