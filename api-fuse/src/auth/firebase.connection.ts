// import { Injectable, Injectable, NestMiddleware } from "@nestjs/common";
import * as firebase from "firebase-admin";
import { cert } from "firebase-admin/app";
import * as serviceAccount from "../../secrets/firebaseServiceAccount.json";
import { Firestore } from "@google-cloud/firestore";

const firebaseParams = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientX509CertUrl: serviceAccount.client_x509_cert_url,
};

export class FirebaseConnection {
  static instance: FirebaseConnection;

  public db!: Firestore;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): FirebaseConnection {
    if (!FirebaseConnection.instance) {
      FirebaseConnection.instance = new FirebaseConnection();
    }
    return FirebaseConnection.instance;
  }

  static init() {
    if (!FirebaseConnection.instance) {
      FirebaseConnection.instance = new FirebaseConnection();
      FirebaseConnection.instance.db = firebaseConnection();
    } else {
      console.error("FATAL ERROR: You should only call init() once, because this is a singleton.");
    }
  }
}

function firebaseConnection(): Firestore {
  const firebaseApp = firebase.initializeApp({
    credential: cert(firebaseParams),
    // todo move this to ENV
    databaseURL: "https://firefuse-project.firebaseio.com",
  });

  return firebase.firestore(firebaseApp);
}
