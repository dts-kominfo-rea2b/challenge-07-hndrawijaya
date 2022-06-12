const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try{
    const [surveyIXX, surveyVGC] = await Promise.all([
      promiseTheaterIXX(),
      promiseTheaterVGC()
    ]);

    const surveyResult = [...surveyIXX, ...surveyVGC];
    return surveyResult?.filter((survey) => survey.hasil === emosi)?.length || 0;
  }catch (err){
    console.log('Error found, pls check ' + err);
  }
};

module.exports = {
  promiseOutput,
};
