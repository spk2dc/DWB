importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-database.js');
importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-messaging.js');
importScripts('"https://www.gstatic.com/firebasejs/5.3.0/firebase-functions.js');

firebase.initializeApp({
    apiKey: 'AIzaSyBoZgIki3tEgCtgSVVWDdastZCqW9WWGKE',
    authDomain: 'airy-office-413.firebaseapp.com',
    databaseURL: 'https://airy-office-413.firebaseio.com',
    projectId: 'airy-office-413',
    storageBucket: 'airy-office-413.appspot.com',
    messagingSenderId: '857761645811',
});

firebase.initializeApp(config);

const serviceAccount = require("/serviceAccountKey.json");
const pushBtn = document.getElementById('push-button');
const userToken = null;
const isSubscribed = false;

const gcmServerKey = 'AIzaSyC5itnz9jHmpvQRhq8sJUCFUy2SYUPanGs';
webpush.setGCMAPIKey(gcmServerKey);

const vapidKeys = {
  publicKey: 'BOew5Tx7fTX51GzJ7tpF3dDLNS54OvUST_dGGqzJEy54jqW2qghIRTiK7BfOpCPp8xNfMH7Mtprl3hp_WGjgslU',
  privateKey: 'ymblNrJSzlXdRMhFYdXh1Hda8HkIO76aVs85X93wAjc'
};

webpush.setVapidDetails(
  'mailto:donaldboulton@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                messaging.useServiceWorker(registration);

                initializePush();
            })
            .catch(err => console.log('Service Worker Error', err));
    } else {
        pushBtn.textContent = 'Push not supported.';
    }
});

function initializePush() {
    userToken = localStorage.getItem('pushToken');

    isSubscribed = userToken !== null;
    updateBtn();

    pushBtn.addEventListener('click', () => {
        pushBtn.disabled = true;

        if (isSubscribed) return unsubscribeUser();

        return subscribeUser();
    });
}

function updateBtn() {
    if (Notification.permission === 'denied') {
        pushBtn.textContent = 'Subscription blocked';
        return;
    }

    pushBtn.textContent = isSubscribed ? 'Unsubscribe' : 'Subscribe';
    pushBtn.disabled = false;
}

function updateSubscriptionOnServer(token) {
    if (isSubscribed) {
        return database.ref('device_ids')
            .equalTo(token)
            .on('child_added', snapshot => snapshot.ref.remove());
    }

    database.ref('device_ids').once('value')
        .then((snapshots) => {
            let deviceExists = false;

            snapshots.forEach((childSnapshot) => {
                if (childSnapshot.val() === token) {
                    deviceExists = true;
                    return console.log('Device already registered.');
                }
            });

            if (!deviceExists) {
                console.log('Device subscribed');
                return database.ref('device_ids').push(token);
            }
        });
}

function unsubscribeUser() {
    messaging.deleteToken(userToken)
        .then(() => {
            updateSubscriptionOnServer(userToken);
            isSubscribed = false;
            userToken = null;
            localStorage.removeItem('pushToken');
            updateBtn();
        })
        .catch(err => console.log('Error unsubscribing', err));
}

messaging.requestPermission()
    .then(function() {
        return messaging.getToken();
    })
    .then(function(token) {
        // send rest call to add to database
        $.ajax('https://airy-office-413.firebaseio.com/pushtokens/'+token+'.json', {
            method: 'PUT',
            data: 'true',
            error: function(err) {
            }
        });
    })
    .catch(function(err) {
        console.log('Permission denied');
});