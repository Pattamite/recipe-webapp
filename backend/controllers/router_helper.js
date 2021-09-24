const defaultPageNumber = 1;
const defaultItemPerpage = 1000;

/** Get pagination object from model
 * @param {mongoose.Model} model - mongoose model
 * @param {Int} page - page number
 * @param {Int} itemsPerpage - item count per page
 * @param {Object} sort - sorting spec
 * @return {Object} pagination object
*/
async function getPaginationFromModel(
  model, page, itemsPerpage = 100, sort = { _id: 'asc' }) {
  const parsedPage = tryParseInt(page, defaultPageNumber);
  const parsedItemsPerpage = tryParseInt(itemsPerpage, defaultItemPerpage);
  const itemCount = await model.count();
  const finalPage = Math.floor((itemCount - 1) / parsedItemsPerpage) + 1;
  const targetPage = Math.min(Math.max(parsedPage, 1), finalPage);
  const skipCount = (targetPage - 1) * parsedItemsPerpage;

  const itemList = await model
    .find()
    .limit(parsedItemsPerpage)
    .skip(skipCount)
    .sort(sort);

  const resultList = itemList.map( (item) => {
    return item.toJSON();
  });

  return {
    pagination: {
      page: targetPage,
      pageNext: targetPage === finalPage ? null : targetPage + 1,
      pagePrev: targetPage === 1 ? null : targetPage - 1,
      pageTotal: finalPage,
      resultsCount: resultList.length,
      resultsPerpage: parsedItemsPerpage,
      resultsTotal: itemCount,
    },
    results: resultList,
  };
}

/** Try parsing string to int, return defaultValue if failed
 * @param {String} string - string to parse
 * @param {Int} defaultValue - default value if parsing failed
 * @return {Int} pagination object
*/
function tryParseInt(string, defaultValue) {
  let parsedValue = parseInt(string);
  if (isNaN(parsedValue)) {
    parsedValue = defaultValue;
  }

  return parsedValue;
}

helper = {
  getPaginationFromModel,
};

module.exports = helper;
