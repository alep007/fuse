import { read } from "fs";
import readXlsxFile from "read-excel-file/node";

const compositionMap = {
  id: "id",
  name: "name",
  description: "description",
  category: "category",
  unit_meausure: "unit_measure",
  quantity: "quantity",
  price: "price",
  cost: "cost",
  utility: "utility",
  tax: "tax",
  total: "total",
  items: "items",
};

const detailsMap = {
  id: "id",
  name: "name",
  item_id: "item_id",
  unit_meausure: "unit_measure",
  quantity: "quantity",
  unit_price: "unit_price",
  subtotal: "subtotal",
};

export async function reader(path) {
  const result = [];

  const detailSpreedSheet = await readXlsxFile(path, {
    map: detailsMap,
    sheet: 3,
  }).then(({ rows }) => {
    return rows;
  });

  const promises = [];
  promises.push(
    await readXlsxFile(path, { map: compositionMap, sheet: 2 })
      .then(async ({ rows }) => {
        for (let index = 0; index < rows.length; index++) {
          const currentRow = rows[index];

          const rowDetails = await getRowDetails(
            currentRow.id,
            detailSpreedSheet
          );

          currentRow.items = rowDetails;
          result.push(currentRow);
        }
      })
      .catch((err) => {
        console.error(err);
      })
  );

  await Promise.all(promises);
  return result;
}

async function getRowDetails(currentId, detailsList) {
  const result = detailsList.filter((detail) => {
    if (detail.id === currentId) return detail;
  });
  return result;
}
