/** Get pagination object from model
 * @param {mongoose.Model} model - mongoose model
 * @param {Int} page - page number
 * @param {Int} itemPerpage - item count per page
 * @param {Object} sort - sorting spec
 * @return {Object} pagination object
*/
async function getPaginationFromModel(
  model, page, itemPerpage = 100, sort = { _id: 'asc' }) {
  let parsedPage = parseInt(page);
  if (isNaN(parsedPage)) {
    parsedPage = 1;
  }
  const itemCount = await model.count();
  const finalPage = Math.floor((itemCount - 1) / itemPerpage) + 1;
  const targetPage = Math.min(Math.max(parsedPage, 1), finalPage);
  const skipCount = (targetPage - 1) * itemPerpage;

  const itemList = await model
    .find()
    .limit(itemPerpage)
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
      resultsPerpage: itemPerpage,
      resultsTotal: itemCount,
    },
    results: resultList,
  };
}

helper = {
  getPaginationFromModel,
};

module.exports = helper;
