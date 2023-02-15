import { Injectable } from "@nestjs/common";
import { FirebaseConnection } from "./auth/firebase.connection";

// Create a new client

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const server = FirebaseConnection.getInstance().db;

    const collection = server.collection("/compositions");

    const data = {
      id: "C1",
      name: "Muro de ladrillo adobito 15cm",
      description: "Ladrillo adobito 15cm",
      category: "Mampostería",
      unit_measure: "M2",
      quantity: 0,
      price: 95.265,
      cost: 5,
      utility: 15,
      tax: 13,
      total: 0,
      items: [
        {
          id: "C1",
          name: "Cemento IP-30",
          item_id: "A1",
          unit_measure: "kg",
          quantity: 10,
          unit_price: 1.2,
          subtotal: 12,
        },
        {
          id: "C1",
          name: "Arena fina",
          item_id: "A2",
          unit_measure: "m3",
          quantity: 0.08,
          unit_price: 70,
          subtotal: 5.6000000000000005,
        },
        {
          id: "C1",
          name: "Ladrillo adobito",
          item_id: "A3",
          unit_measure: "pza",
          quantity: 65,
          unit_price: 0.65,
          subtotal: 42.25,
        },
        {
          id: "C1",
          name: "Clavos de 3 pulg",
          item_id: "A4",
          unit_measure: "kg",
          quantity: 0.02,
          unit_price: 13,
          subtotal: 0.26,
        },
        {
          id: "C1",
          name: "Madera para andamio",
          item_id: "A5",
          unit_measure: "p2",
          quantity: 0.3,
          unit_price: 10,
          subtotal: 3,
        },
        {
          id: "C1",
          name: "Alambre de amarre",
          item_id: "A6",
          unit_measure: "kg",
          quantity: 0.03,
          unit_price: 11,
          subtotal: 0.32999999999999996,
        },
        {
          id: "C1",
          name: "Agua",
          item_id: "A7",
          unit_measure: "lt",
          quantity: 20,
          unit_price: 0.06,
          subtotal: 1.2,
        },
        {
          id: "C1",
          name: "Ayudante",
          item_id: "A8",
          unit_measure: "hr",
          quantity: 0.8,
          unit_price: 12.5,
          subtotal: 10,
        },
        {
          id: "C1",
          name: "Maestro albañil",
          item_id: "A9",
          unit_measure: "hr",
          quantity: 1.1,
          unit_price: 18.75,
          subtotal: 20.625,
        },
      ],
    };

    // await collection.add(data);

    // const snapshot = await collection.get();

    // snapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
    return "Hello World!";
  }
}
