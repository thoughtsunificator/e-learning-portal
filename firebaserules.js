/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  
    // Allow read/write access only to the Admin SDK
    match /{document=**} {
      allow read, write: if request.auth != null &&
                           request.auth.token.firebase.sign_in_provider == 'admin';
    }
  }
}
*/