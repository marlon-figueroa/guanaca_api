module.exports = {
    get:{
        tags:['getblock'],
        description: "Get a Operation",
        operationId: "getblock",
        parameters:[ 
            {
                name:"hash",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/hash"
                },
                required:true,
                description: "An string of a operation cipher"
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
                description: "getblock is not found",
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