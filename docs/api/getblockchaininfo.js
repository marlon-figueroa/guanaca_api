module.exports = {
    get:{
        tags:['getblockchaininfo'],
        description: "Get a Operation",
        operationId: "getblockchaininfo",
        parameters:[ ],
        responses:{
            '200':{
                description:"Operation is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Todo"
                        }
                    }
                }
            },
            '404':{
                description: "getblockchaininfo is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the operaction",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}