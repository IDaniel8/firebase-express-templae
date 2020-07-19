import * as functions from 'firebase-functions';
import app from './server';

exports.api = functions.runWith({ memory: '2GB', timeoutSeconds: 120 }).https.onRequest(app);
