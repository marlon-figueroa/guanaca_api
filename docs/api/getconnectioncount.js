module.exports = {
    get:{
        tags:['API'],
        description: "Get a Operation",
        operationId: "getconnectioncount",
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
                description: "getconnectioncount is not found",
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