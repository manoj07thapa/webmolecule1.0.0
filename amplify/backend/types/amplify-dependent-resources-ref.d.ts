export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "studentGroupRole": "string",
            "teacherGroupRole": "string",
            "adminGroupRole": "string"
        },
        "webmolecule10048e3195b48e3195b": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "AdminQueries6eb1b594": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "webmolecule10048e3195b48e3195bPostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "api": {
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "webmolecule100": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "webmolecule": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}