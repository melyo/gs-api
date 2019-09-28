'use strict';

const AWS = require('aws-sdk')

const lambda = new AWS.Lambda({
  apiVersion: '2015-03-31',
  region: 'us-east-1',
  endpoint: 'http://users:5001',
})

module.exports.hello = async event => {

  const lambdaInvokeParameters = {
    FunctionName: 'users-dev-hello',
    InvocationType: 'Event',
    LogType: 'None',
    Payload: JSON.stringify({ data: 'foo' }),
  }

  lambda.invoke(lambdaInvokeParameters, (err, res) => {
    if (err) {
      console.log('ERROR: ', err);
    } else {
      console.log('REQUEST: ', res);
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

};
