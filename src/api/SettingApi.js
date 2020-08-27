import { setting } from '../db';

async function getSetting(key) {
  const doc = await setting.findOne({ key });
  return doc ? doc.value : null;
}

async function setSetting(key, value) {
  const exist = await getSetting(key);

  if (exist) {
    return setting.update({ key }, { $set: { value } });
  }
  return setting.insert({ key }, { key, value });
}

export { getSetting, setSetting };
export default {
  getSetting,
  setSetting,
};
