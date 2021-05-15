import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_aFSOGA4ZE",
  ClientId: "22eilvarjuu40t6a17gcnoctal",
};

export default new CognitoUserPool(poolData);
