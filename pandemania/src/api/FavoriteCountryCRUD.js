import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../FirebaseConfig';

let db;

export const initialize = () => {
	const app = firebase.initializeApp(config);
	db = firebase.firestore(app);
	// firebase.firestore.setLogLevel('debug');
};

export const addFavoriteCountry = (userId, countryCode) => {
	db.collection('users')
		.doc(userId)
		.set({
			country: countryCode,
		})
		.then(() => {
			console.log(`Favorite country has been set to: ${countryCode}`);
		})
		.catch((error) => {
			console.error('Error writing document: ', error);
		});
};

export const getFavoriteCountry = (userId) => {
	const docRef = db.collection('users').doc(userId);

	return docRef
		.get()
		.then((doc) => {
			if (doc.exists) {
				return doc.data().country;
			}
			return '';
		})
		.catch((error) => {
			console.error('Error getting data for user:', error);
		});
};
