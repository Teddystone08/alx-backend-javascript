import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
    // Use Promise.all to resolve both promises
    Promise
	.all([uploadPhoto(), createUser()])
        .then(([photo, user]) => {
            // Access the resolved values and log them
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => 
		{// Handle any error and log the fallback message
            console.log('Signup system offline');
        });
}
