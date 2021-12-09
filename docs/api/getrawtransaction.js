module.exports = {
    get:{
        tags:['API'],
        description: "Get a Operation",
        operationId: "getrawtransaction",
        parameters:[ 
            {
                name:"hash",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "An id of a operation"
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
                description: "getrawtransaction is not found",
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