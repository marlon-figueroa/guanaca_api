/**
 * @author Marlon E. Figueroa
 * @since 22/11/2021
 * 
 */



 module.exports = {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a operation",
                example: "12225588777"
            },
            Todo:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Operation identification number",
                        example:"12225588777"
                    },
                    title:{
                        type:'string',
                        description:"Operation's title",
                        example:"Coding in JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the Operation",
                        example:false
                    }
                }
            },
            TodoInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Operation's title",
                        example:"Coding in JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the Operation",
                        example:false
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}