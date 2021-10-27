import type { NextApiRequest, NextApiResponse } from "next"
import { createTransport } from "nodemailer"

function sendSubmissionEmail(req: NextApiRequest, res: NextApiResponse) {
	if (req.body.url) {
		res.status(400)
		res.send("error")
		return
	}

	const transporter = createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: process.env.SUBMISSION_EMAIL,
			pass: process.env.SUBMISSION_PASSWORD,
		},
		secure: true,
	})

	const mailData = {
		from: process.env.SUBMISSION_EMAIL,
		to: process.env.CONTACT_EMAIL,
		subject: `Advocate BLM: Submission from ${req.body.name}`,
		text: req.body.argument,
		html: `<pre>${JSON.stringify(req.body, null, 2)}</pre>`,
	}

	transporter.sendMail(mailData, function (err) {
		if (err) {
			res.status(500)
			res.send("error")
		} else {
			res.status(200)
			res.send("success")
		}
	})
}

export default sendSubmissionEmail
