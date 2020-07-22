import 'module-alias/register';
import * as functions from 'firebase-functions';
import server from './server';

exports.api = functions.runWith({ memory: '2GB', timeoutSeconds: 120 }).https.onRequest(server);
