module.exports = {
    get:{
        tags:['decoderawtransaction'],
        description: "Get a Operation",
        operationId: "decoderawtransaction",
        parameters:[ 
            {
                name:"hash",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/hex"
                },
                required:true,
                description: "An number of a operation"
            }
        ],
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
                description: "decoderawtransaction is not found",
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