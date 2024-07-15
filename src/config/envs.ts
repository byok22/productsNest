import 'dotenv/config';
import *  as joi from 'joi';

interface EnvVars{
    PORT: number
}


// TODO: validar mediante un esquema
const envsSchema = joi.object({
    PORT: joi.number().required()

})
.unknown(true);

const {error, value} = envsSchema.validate ( process.env );

if( error ){
    throw new Error(`Config Validation error ${ error.message } `);
}


console.log({error});

const envVars: EnvVars = value;

console.log ({ envVars })

export const envs = {
    port: envVars.PORT,
}