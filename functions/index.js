'use strict'
const functions = require('firebase-functions')
const BitlyClient = require('bitly')
const admin = require('firebase-admin')
admin.initializeApp()

// 토큰 정보 가져오기
const bitly = BitlyClient(functions.config().bitly.access_token)

exports.addUrl = functions.https.onRequest((req, res) => {
  const originalUrl = req.query.url

  return admin.database().ref('/links').push({original: originalUrl}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    return res.redirect(303, snapshot.ref.toString());
  });
})

exports.shortenUrl = functions.database.ref('/links/{linkID}').onCreate(async (snap) => {
  const originalUrl = snap.val()
  //const response = await bitly.shorten(originalUrl)
  return snap.ref.set({
    original: originalUrl,
    short: originalUrl,
    //short: response.data.url,
  })
})

