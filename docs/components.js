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
                example: "998f169318eb1d8d2a4e53dce2712f5678c6f06e"
            },
            hash:{
                type:'string',
                description:"An string of a operation cipher",
                example: "998f169318eb1d8d2a4e53dce2712f5678c6f06e"
            },
            index:{
                type:'string',
                description:"An number of a operation",
                example: "1"
            },
            hex:{
                type:'string',
                description:"An hex of a operation",
                example: "1ac23af"
            },
            Todo:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Operation identification number",
                        example:"998f169318eb1d8d2a4e53dce2712f5678c6f06e"
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