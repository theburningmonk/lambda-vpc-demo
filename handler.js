module.exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hold door'
    }),
  };

  return response;
};