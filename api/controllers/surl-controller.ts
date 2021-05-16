import express from 'express';

import Surl from '../models/surl-model';

const listSurls = async (req: express.Request, res: express.Response) => {
	await Surl.find({}, (err, surls) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!surls.length) {
			return res.status(404).json({ success: false, error: `Surls not found` });
		}
		return res.status(200).json({ success: true, data: surls });
	}).catch((err: any) => console.log(err));
};

const createSurl = async (req: express.Request, res: express.Response) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a surl object'
		});
	}

	const surl = new Surl(body);

	if (!surl) {
		return res.status(400).json({ success: false, error: 'Surl object not read successfully' });
	}

	const findExisting = await Surl.find({
		$or: [ { fullUrl: surl.fullUrl }, { shortUrl: surl.shortUrl } ]
	});

	if (findExisting.length > 0) {
		return res.status(400).json({ success: false, error: 'Full or short url duplicated. Please try again.' });
	}

	surl
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: surl._id,
				message: 'Surl created'
			});
		})
		.catch((error: any) => {
			return res.status(400).json({
				error,
				message: 'Surl not created'
			});
		});
};

export { listSurls, createSurl };
